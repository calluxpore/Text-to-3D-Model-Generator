const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.static('.')); // Serve static files from current directory
app.use(express.json()); // For parsing application/json

// Save prompt endpoint
app.post('/save-prompt', (req, res) => {
    const { prompt } = req.body;
    const timestamp = new Date().toISOString();
    const promptLine = `${timestamp}: ${prompt}\n`;
    
    fs.appendFile('prompts.txt', promptLine, (err) => {
        if (err) {
            console.error('Error saving prompt:', err);
            res.status(500).json({ error: 'Failed to save prompt' });
            return;
        }
        res.json({ success: true });
    });
});

// Proxy endpoint for model files
app.get('/proxy-model', async (req, res) => {
    try {
        const modelUrl = req.query.url;
        const apiKey = req.headers.authorization;

        const response = await fetch(modelUrl, {
            headers: {
                'Authorization': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Forward the response headers
        response.headers.forEach((value, name) => {
            res.setHeader(name, value);
        });

        // Pipe the response directly to our response
        response.body.pipe(res);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 