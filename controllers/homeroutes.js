const express = require("express");
const router = require("express").Router();
const path = require("path");
const { Shoe, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../Project2/index.html"));
  } catch (error) {
    console.error("Error serving index.html:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/login", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../Project2/login.html"));
  } catch (error) {
    console.error("Error serving login.html", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../Project2/signup.html"));
  } catch (error) {
    console.error("Error serving signup.html", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
