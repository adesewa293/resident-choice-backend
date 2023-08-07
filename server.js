const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { google } = require("googleapis");
const axios = require("axios");
const mongoose = require("mongoose");
const bp = require("body-parser");
const Menu = require("./models/menu");
mongoose.connect(process.env.DATABASE_URL);

const port = process.env.PORT || 8086;

const app = express();
app.use(cors());
app.use(bp.json());

const key = require("./credentials.json");

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/calendar"],
  null
);

jwtClient.authorize(function (err) {
  if (!err) {
    console.log("Authorisation worked!");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the CareHome Web App!");
});

// Set up the Google Calendar API client
const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];
const calendar = google.calendar({
  version: "v3",
  auth: jwtClient,
});

// API endpoint to show the week's events
app.get("/get-week-events", async (req, res) => {
  try {
    // Get the current week
    const now = new Date();
    const startOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - now.getDay() + 1
    );
    const endOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 6 - now.getDay()
    );

    // Get the events for the current week
    const events = await calendar.events.list({
      calendarId: process.env.CALENDAR_ID,
      timeMin: startOfWeek.toISOString(),
      timeMax: endOfWeek.toISOString(),
    });

    // Return the events
    res.json(events.data);
  } catch (err) {
    console.error("Error getting week events:", err);
    res.status(500).json({ error: "Failed to get week events" });
  }
});

// API endpoint to add an event to the calendar
app.post("/add-event", async (req, res) => {
  try {
    const { summary, description, startDateTime, endDateTime } = req.body;

    // Create the event object
    const event = {
      summary,
      description,
      start: {
        dateTime: startDateTime,
        timeZone: "Europe/London",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Europe/London",
      },
    };

    // Insert the event into the calendar
    const insertedEvent = await calendar.events.insert({
      calendarId: process.env.CALENDAR_ID,
      resource: event,
    });

    res.json(insertedEvent.data);
  } catch (err) {
    console.error("Error adding event:", err);
    res.status(500).json({ error: "Failed to add event" });
  }
});

// API endpoint to edit an event
app.put("/edit-event", async (req, res) => {
  try {
    const { eventId, summary, description, startDateTime, endDateTime } =
      req.body;

    // Create the event object
    const event = {
      id: eventId,
      summary,
      description,
      start: {
        dateTime: startDateTime,
        timeZone: "Europe/London",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Europe/London",
      },
    };

    // Update the event in the calendar
    const updatedEvent = await calendar.events.update({
      calendarId: process.env.CALENDAR_ID,
      eventId,
      resource: event,
    });

    res.json(updatedEvent.data);
  } catch (err) {
    console.error("Error editing event:", err);
    res.status(500).json({ error: "Failed to edit event" });
  }
});

// API endpoint to delete an event
app.delete("/delete-event", async (req, res) => {
  try {
    const eventId = req.body.eventId;

    // Delete the event from the calendar
    const deletedEvent = await calendar.events.delete({
      calendarId: process.env.CALENDAR_ID,
      eventId,
    });

    res.json(deletedEvent.data);
  } catch (err) {
    console.error("Error deleting event:", err);
    res.status(500).json({ error: "Failed to delete event" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
