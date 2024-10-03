const express = require("express");
const app = express();

const generateContent = require("./gemini.js");
const cors = require("cors");
app.use(cors());

app.use(express.json()); // To handle JSON data

app.get("/", (req, res) => {
    res.send("Server is running.");
});

// Define a route to communicate with Google Gemini
app.post("/gemini", generateContent);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});