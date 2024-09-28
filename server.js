const express = require('express');
const path = require('path');   // Import the path module
const app = express();

app.use(express.static('.'));   // Serve static files from the current directory

// Serve main.html when the route is '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'main.html'));
});

// Serve source.html when the route is '/source'
app.get('/source', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'source.html'));
});

app.listen(3000, () => console.log('server started at 3000'));