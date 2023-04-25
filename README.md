# Library Information System Documentation

## Overview
The library information system is a web application that helps manage the inventory and lending of books in a library. The application is built using MERN (MongoDB, Express.js, React, and Node.js) stack. It provides a user-friendly interface for librarians to manage books, patrons, and loans.

## Features
- Admin dashboard to manage books, patrons, and loans
- Search and filter books by title, author, genre, and availability
- Add new books to the inventory
- Edit book information such as title, author, description, and image
- Manage book copies and their availability
- View loan history of patrons
- Create new patrons and issue loans to them
- Email notifications to patrons about their loan status
- Renew and return books on behalf of patrons
- Fine calculation for overdue books

## Architecture
The library information system is built using the MERN stack, with the following components:
- MongoDB: Database to store books, patrons, and loans information
- Express.js: Server-side framework to handle HTTP requests and responses
- React: Client-side framework to build a user interface
- Node.js: Server-side JavaScript runtime environment to execute JavaScript code

The client-side and server-side are completely decoupled, with the server-side providing REST APIs for the client-side to consume.

## Installation
To install and run the library information system locally, follow the steps below:

1. Clone the repository from GitHub.
2. Install Node.js and MongoDB on your system.
3. Open a terminal and navigate to the project root folder.
4. Install the dependencies using the following command: `npm install`
5. Start the server using the following command: `npm start`
6. Open another terminal and navigate to the client folder.
7. Install the dependencies using the following command: `npm install`
8. Start the client using the following command: `npm start`

The application will be available at `http://localhost:3000`.

## Usage
To use the library information system, follow the steps below:

1. Open the application in a web browser.
2. Log in using the admin credentials.
3. Navigate to the Books page and add new books to the inventory.
4. Edit book information such as title, author, description, and image.
5. Manage book copies and their availability.
6. Create new patrons and issue loans to them.
7. View loan history of patrons.
8. Renew and return books on behalf of patrons.

## Conclusion
The library information system is a user-friendly and efficient tool for librarians to manage the inventory and lending of books. It is built using the MERN stack and provides a comprehensive set of features.
