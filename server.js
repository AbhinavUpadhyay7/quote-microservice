const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample quotes database
const quotes = [
    { quote: "Believe in yourself", author: "Unknown" },
    { quote: "Dream big, work hard", author: "Anonymous" },
    { quote: "Stay hungry stay foolish", author: "Steve Jobs" },
    { quote: "Never give up", author: "Winston Churchill" },
    { quote: "Success is not final", author: "Winston Churchill" }
];

// Root route
app.get('/', (req, res) => {
    res.send("Quote Microservice is running 🚀");
});

// API route
app.get('/quote', (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(random);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});