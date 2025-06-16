
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


const MONGO_URI = 'mongodb://localhost:27017/students';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // email should be unique
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String, // use String if phone numbers may have +, -, etc.
        required: true,
    }
}, {
    timestamps: true // adds createdAt and updatedAt
});
app.get('/', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.send('Connected to MongoDB');
    } else {
        res.status(500).send('Not connected to MongoDB');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
