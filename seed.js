const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Menu = require("./models/menu");

async function seed() {
  await Menu.create({
    week: "1",
    day: "Thursday",
    meal_time: "Lunch",
    imageUrl: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg",
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZLeADreqYSmzVXIwf9_vgqtM8aDH-Z4z4A&usqp=CAU",
    ],
    main_1: "Battered Cod",
    main_2: "Poached Fish In Parsley Sauce",
    side_1: "Chips",
    side_2: "Cauliflower and Swede",
    desert_1: "Fresh Fruit Salad",
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "Tuesday",
    meal_time: "Lunch",
    imageUrl: [
      "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
      "https://cms.upsidefoods.com/wp-content/uploads/2023/01/FooterBowl_Small.png",
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
    ],
    main_1: "Battered Cod",
    main_2: "Poached Fish In Parsley Sauce",
    side_1: "Chips",
    side_2: "Cauliflower and Swede",
    desert_1: "Fresh Fruit Salad",
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "2",
    day: "Monday",
    meal_time: "Tea",
    imageUrl: [
      "https://recipes.net/wp-content/uploads/2021/01/beef-tomato-and-acini-di-pepe-soup-instant-pot-slow-cooker-stove-top-recipe.jpg",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-983459_11-c8d72b8.jpg",
      "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2020/09/Eve_Pudding_video-11_8.jpg",
    ],
    main_1: "Beef and Tomato Soup",
    main_2: "Salmon Fish Cakes and Salad",
    side_1: "",
    side_2: "",
    desert_1: "Apple Sponge and Custard",
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "Tuesday",
    meal_time: "Lunch",
    imageUrl: [
      "https://hungryhealthyhappy.com/wp-content/uploads/2020/04/Slow-Cooker-Sausage-Casserole-featured-b.jpg",
      "https://realfood.tesco.com/media/images/RFO-1400x919-Miso-cauliflower-cheese-16929f6c-8469-4499-b820-9ecbacf9b2cc-0-1400x919.jpg",
      "https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/spiced-chocolate-mousse-image_s900x0_c2262x1320_l0x1054.jpg",
    ],
    main_1: "Sausage Casserole",
    main_2: "Cauliflower Cheese",
    side_1: "Green Beans and Swede",
    side_2: "Creamy Mashed Potatoes",
    desert_1: "Mousse and Shortbread",
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "Monday",
    imageUrl: [
      "https://recipes.net/wp-content/uploads/2021/01/beef-tomato-and-acini-di-pepe-soup-instant-pot-slow-cooker-stove-top-recipe.jpg",
    ],
    main_1: "broccolli",
    main_2: "soup",
    side_1: "cabbage",
    side_2: "onion",
    desert_1: "cake",
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "monday",
    imageUrl: [
      "https://recipes.net/wp-content/uploads/2021/01/beef-tomato-and-acini-di-pepe-soup-instant-pot-slow-cooker-stove-top-recipe.jpg",
    ],
    main_1: "broccolli",
    main_2: "soup",
    side_1: "cabbage",
    side_2: "onion",
    desert_1: "cake",
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "monday",
    imageUrl: [
      "https://recipes.net/wp-content/uploads/2021/01/beef-tomato-and-acini-di-pepe-soup-instant-pot-slow-cooker-stove-top-recipe.jpg",
    ],
    main_1: "broccolli",
    main_2: "soup",
    side_1: "cabbage",
    side_2: "onion",
    desert_1: "cake",
    voteup: 0,
    votedown: 0,
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "monday",
    imageUrl: [
      "https://recipes.net/wp-content/uploads/2021/01/beef-tomato-and-acini-di-pepe-soup-instant-pot-slow-cooker-stove-top-recipe.jpg",
    ],
    main_1: "broccolli",
    main_2: "soup",
    side_1: "cabbage",
    side_2: "onion",
    desert_1: "cake",
    voteup: 0,
    votedown: 0,
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "monday",
    imageUrl: [
      "https://recipes.net/wp-content/uploads/2021/01/beef-tomato-and-acini-di-pepe-soup-instant-pot-slow-cooker-stove-top-recipe.jpg",
    ],
    main_1: "broccolli",
    main_2: "soup",
    side_1: "cabbage",
    side_2: "onion",
    desert_1: "cake",
    voteup: 0,
    votedown: 0,
    voteup: 0,
    votedown: 0,
  });

  await Menu.create({
    week: "1",
    day: "monday",
    imageUrl: [
      "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    ],
    main_1: "rice",
    main_2: "soup",
    side_1: "cabbage",
    side_2: "broccolli",
    desert_1: "cake",
    voteup: 0,
    votedown: 0,
  });

  console.log("Ummm Food");
  mongoose.disconnect();
}

seed();
