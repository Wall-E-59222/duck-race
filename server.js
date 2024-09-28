const express = require('express');
const app = express();

app.use(express.static('.'));
app.use('/duck-race', express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'main.html'));
    // Depending on your file structure, you might not need 'files' in the path
});

// Serve source.html when the route is '/source'
app.get('/source', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'source.html'));
    // Depending on your file structure, you might not need 'files' in the path
});

app.listen(3000, () => console.log('server started at 3000'));