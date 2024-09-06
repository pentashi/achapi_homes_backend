const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Achapi Homes API');
});

// Connect to MongoDB (local for now)
mongoose.connect('mongodb://localhost/achapi_homes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
