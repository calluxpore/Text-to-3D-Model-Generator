# Text to 3D Model Generator

A web application that generates 3D models from text descriptions using Meshy.ai API.

![alt text](<WhatsApp Image 2025-01-11 at 13.59.46_8e2bf055.jpg>)

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A Meshy.ai API key (Get it from https://app.meshy.ai/settings/api-keys)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the server using either:
```bash
npm start
```
or
```bash
node server.js
```
Both commands do the same thing, with `npm start` being the standard Node.js way.

2. Open your web browser and go to:
```
http://localhost:3000
```

3. Enter your Meshy API key in the input field
4. Enter your text prompt and click "Generate Model"

## Features

- Generate 3D models from text descriptions
- Real-time preview of the 3D model
- Download models in GLB format
- Automatic prompt logging
- Dynamic file naming based on prompts
- Secure API key input (not stored in code)

## File Structure

- `index.html` - Main web interface
- `server.js` - Node.js server for handling CORS and file operations
- `package.json` - Project dependencies and scripts
- `prompts.txt` - Log of all generated prompts (created automatically)

## Security Notes

- Your API key is never stored in the code or on disk
- API key is transmitted securely with each request
- Use HTTPS if deploying to production

## Notes

- Generated models are saved with filenames based on the first two words of your prompt
- All prompts are logged in `prompts.txt` with timestamps
- The application requires an active internet connection to communicate with Meshy.ai API

## Troubleshooting

If you encounter CORS issues or model loading problems:
1. Make sure the Node.js server is running
2. Check that your API key is valid and properly entered
3. Ensure you're using a modern browser (Chrome recommended)
4. Check the browser console for specific error messages 