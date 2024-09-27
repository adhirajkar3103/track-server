# Track API Server

## Overview

The **Track API Server** is designed to track the live location of users and store the path they travel over time. The system works in conjunction with a mobile application (**currently under development**) that sends location data to the API. This server receives the GPS coordinates in real time and maintains a history of the user's route, allowing for further analysis or playback.

## Features

- **Live Location Tracking** (Mobile App): Receive and store the user's current location at regular intervals.
- **Path Storage**: Persist the user's traveled path in a database.
- **RESTful API**: Exposes endpoints for managing location data and retrieving historical paths.
- **Scalable**: Built to handle multiple users tracking their locations simultaneously.

## Tech Stack

- **Mobile App** (under development): React Native
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for user authentication
- **Other Dependencies**: 
  - `mongoose` (for MongoDB interaction)
  - `jsonwebtoken` (for token-based authentication)
