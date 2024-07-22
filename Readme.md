# English News Application

This is a full-stack web application for viewing news articles. The application consists of a client-side (frontend) built with Nextjs and a server-side (backend) built with Node.js and Express.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Client (Frontend)](#client-frontend)
  - [Server (Backend)](#server-backend)
- [Database Setup](#database-setup)
  - [Importing Sample Data](#importing-sample-data)

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher)
- MongoDB Compass (for importing sample data)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ShabiGardezi/english-news-app.git
   cd english-news-app```

### Install client dependencies
   
   cd client
   npm install

### Install server dependencies

   cd server
   npm install

 Running the Application
## Client (Frontend)
1.  Open a terminal in the client folder:

    cd client
    npm run dev

The client application will run on http://localhost:3031.

## Server (Backend)
1.  Open a terminal in the server folder:
   cd server
   node index

The server application will run on http://localhost:3000.

# Database Setup
1.  Ensure MongoDB is running on your local machine.
2.  Create a database named english-news.
3.  Create an environment file (.env) in the server folder. Refer to .example.env for the required environment variables. Your .env file should look something like this:

  MONGO_URI=mongodb://localhost:27017/english-news

# Importing Sample Data
1.  Open MongoDB Compass and connect to your local MongoDB instance.
2.  Select the english-news database.
3.  Click on the import data button and select the JSON files located in the data folder of this project.
4.  Import the data for the news collection.

# Sample Data
The sample data for the news articles is provided in the data folder as JSON files. Use these files to import the data into your MongoDB database using MongoDB Compass.