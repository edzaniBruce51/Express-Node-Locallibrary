# Express Node Local Library

A local library management system built with Express.js and Node.js.

## Description

This project is a web application that allows users to manage a local library's collection. It provides functionality for cataloging books, managing authors, genres, and book instances.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Express-Node-Locallibrary
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your configuration:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

## Usage

To start the application in development mode:
```
npm run serverstart
```

To start the application in production mode:
```
npm start
```

The application will be available at `http://localhost:3000` (or the port you specified in your environment variables).

## Features

- Book catalog management
- Author information management
- Genre categorization
- Book instance tracking
- User authentication and authorization

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Pug templating engine
- Bootstrap for styling

## Project Structure

- `/controllers` - Route controllers
- `/models` - Database models
- `/routes` - Application routes
- `/views` - Pug templates
- `/public` - Static files (CSS, JavaScript, images)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.