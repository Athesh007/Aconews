﻿# AcoNews

## Project Description

[AcoNews](https://aconews-11d0b.web.app/), built with React, serves as a news aggregator utilizing the GNews API. It provides users with a convenient platform to access and explore trending news from various sources across the globe.

Try it [here](https://aconews-11d0b.web.app)

## Features

### Backend (Node.js with Express)

- Set up a RESTful API with the following endpoints:
  - `GET /api/news`: Get news based on preferences
- Implement basic error handling and input validation.

### Frontend (React)

- Responsive layout with proper component Seperation.
- Ability to filter news based on preferences.
- Full stack integration connecting the frontend to backend. 
- Proper error handling and loading states on the frontend.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React

## Installation
Clone the repository:

   ```bash
   git clone https://github.com/Athesh007/Aconews.git

   ```
### Backend

1. Install dependencies

   ```bash
   cd backend
   npm Install

   ```

2. create .env file

   ```bash
   GNEWS_API_KEY= *****
   PORT=3000

   ```

3. Run Backend
   ```bash
   node index.js
   ```

### Frontend

1. Install dependencies

   ```bash
   cd frontend
   npm Install

   ```

4. Run Frontend
   ```bash
   npm run dev
   ```
