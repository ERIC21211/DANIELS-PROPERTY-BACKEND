# Property App Backend

## Introduction
This repository contains the backend codebase for the Property App. The backend is responsible for managing property data and providing APIs for the frontend to consume.

## Implementation Details
The creation of the property files for the backend has been successfully implemented. Below is an overview of the necessary files that have been created:

1. **Interfaces**: Define contracts for interacting with different components of the system.
2. **Controllers**: Handle incoming HTTP requests, process them, and return appropriate responses.
3. **Services**: Implement app logic and interact with data storage (e.g., Cloud databases) to perform CRUD operations on properties.
4. **Server**: Set up the HTTP server and configure routing to map incoming requests to appropriate controllers.

## Usage
To use the backend of the Property App:

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install dependencies by running `npm install`.
4. Start the server using `npm start`.


## Pre Instruction
The below instructions consists of pre steps required to develop the backend.


# Weather API

This Weather API is built using Node.js and Express, and it's designed to fetch weather data for a specified city. It's a simple demonstration of creating and deploying RESTful APIs with a service layer architecture, using TypeScript for improved code reliability.

## Features

- Fetch weather data for any city.
- Implemented using Node.js, Express, and TypeScript.
- API documentation using Swagger (OpenAPI Specification).
- Test API endpoints with Postman.

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
  git clone https://github.com/your-username/weather-api.git
  cd weather-api
```

Now install the dependencies.

```bash
    npm install
```

## Run in Development

To run the Weather API in a development environment, follow these steps:

Start the TypeScript Compiler in Watch Mode:

- Open a terminal in the project root directory.
- Run the TypeScript compiler in watch mode, which will compile the TypeScript files to JavaScript in real-time as you make changes.

```bash
npm run build:watch
```

Start the Development Server:

- Open another terminal while the first one is still running.
- Run the development server, which will use the compiled JavaScript files.

```bash
npm run dev
```

This setup allows you to actively develop and test your application with live updates as you save your TypeScript files.

## Run Locally

For local running of the Weather API, especially in a production-like environment, follow these steps:

Compile the TypeScript files to JavaScript.

```bash
  npm run build

```

Start the server

```bash
  npm run start
```
