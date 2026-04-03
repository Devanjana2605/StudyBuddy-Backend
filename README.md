

## Backend README

StudyBuddy AI Backend is the server-side component of the StudyBuddy AI Chrome extension. It handles requests from the frontend, sends prompts to the AI API, and returns processed responses such as summaries, explanations, and quiz questions.

## Project Overview

The backend is built using Node.js and Express. It acts as an API layer between the Chrome extension and the AI service. This setup keeps the API key secure and allows the frontend to request AI-generated study assistance safely.

## Features

- Receive text and instructions from the Chrome extension
- Connect with AI API for content generation
- Return summaries, explanations, and quiz questions
- Secure API key handling using environment variables
- Deployable on Render

## Technologies Used

- Node.js
- Express.js
- CORS
- Dotenv
- AI API
- Render

## Folder Structure

```text
StudyBuddy-backend/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── .env
```
## API Endpoint
```
POST /ai
```
This endpoint receives a prompt from the frontend and returns the AI-generated response.

Request Body
```
{
  "prompt": "Summarize this text in simple words..."
}
```
Response
```
{
  "result": "Generated response from AI"
}
```
## How It Works
The frontend sends selected text and instruction to the backend.
The backend receives the request through the /ai endpoint.
The backend forwards the prompt to the AI API.
The AI API returns the generated response.
The backend sends the result back to the frontend.
Installation Steps
Download or clone this repository.
Open terminal inside the backend folder.
Install dependencies:
```
npm install
```
Create a .env file and add your API key:
```
GEMINI_API_KEY=your_api_key_here
```

Start the server:
```
npm start
```
## Deployment

The backend can be deployed on Render.

## Deployment Steps
Push the backend code to GitHub.
Create a new Web Service on Render.
Connect your GitHub backend repository.
Set the build command:
```
npm install
```
Set the start command:
```
npm start
```
Add the required environment variable in Render.
Deploy the service.

## Environment Variables

Depending on the AI service used, add one of the following:

GEMINI_API_KEY=your_api_key_here

## Future Enhancements
User authentication
Request logging
Rate limiting
Multiple AI modes
Study planner API
Notes synchronization
## Author

Devanjana A
