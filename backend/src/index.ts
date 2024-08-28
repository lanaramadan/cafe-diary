import express from 'express';

require('dotenv').config();

const { db } = require('../db.ts');
const app = express();
const port = process.env.PORT || 3000;

app.get('/cafes', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM cafes');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/visits', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM visits');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
