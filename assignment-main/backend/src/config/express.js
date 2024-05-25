const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json());

const authRoutes = require('../routes/authRoutes');
const taskRoutes = require('../routes/taskRoutes');
const adminRoutes = require('../routes/adminRoutes');

app.get('/', (req, res) => {
    res.send('working fine');
});

app.use('/api/V0', authRoutes);
app.use('/api/V0', taskRoutes);
app.use('/api/V1', adminRoutes);

module.exports = app;
