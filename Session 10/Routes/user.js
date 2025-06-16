const express = require("express");
const router = express.Router();
const User = require("../Schema/User");

router.post("/create", async (req, res) => {
    const { name, email, password, phone } = res.body;

    try {
        const newUser = new User({ name, email, password, phone });
        await newUser.save(201).json();
        res.status
    }
})
