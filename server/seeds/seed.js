const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("../models/User");
const Shoe = require("../models/shoe");

const seed = async () => {
  try {
    // Create users
    const user1 = await User.create({
      email: "johndoe@example.com",
      password: "password123",
    });

    const user2 = await User.create({
      email: "janesmith@example.com",
      password: "password456",
    });

    // Create shoes
    await Shoe.create({
      name: "Nike Air Max",
      description: "Classic sneakers with excellent cushioning.",
      size: "US 10",
      price: 129.99,
      user_id: user1.id,
    });

    await Shoe.create({
      name: "Adidas Ultraboost",
      description: "Comfortable and stylish running shoes.",
      size: "US 9.5",
      price: 159.99,
      user_id: user1.id,
    });

    await Shoe.create({
      name: "Puma Suede",
      description: "Iconic sneakers with a retro vibe.",
      size: "US 8",
      price: 79.99,
      user_id: user2.id,
    });

    console.log("Seed data successfully created!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seed();