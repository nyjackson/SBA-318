# Skill-Based Assessment for Module 318 #

## Purpose ##
This Express server application provides a RESTful API for Good Omens universe data, including characters, locations, and books. Users can view, create, update, and delete location data through both API endpoints and a web form interface for adding locations.

## Pre-Requisite ##
- Node.js
- npm

## Installation/Access ##
1. Clone this repo
2. Install dependencies: `npm install`
3. Type in your terminal, within the repo folder: `nodemon`
4. Open a browser and go to : http://localhost:4000


## Resource Links ##
[Good Omens Wiki](https://goodomens.fandom.com/)

## Folders & Files ##

### /data ###
Contains the corresponding data objects used
- books.js 
- characters.js
- locations.js

### /routes ###
Contains the corresponding routes to interact with the data 
- bookRoute.js 
- characterRoute.js
- locationsRoute.js

### /views ###
Contains all ejs files used to render views.
- home.ejs
- submit_data.ejs

### /public/css ###
Contains the static styles.css used

### index.js ###
Main js file that handles routing and adds middleware. 

## Available Endpoints ##
- Home: http://localhost:4000/
- Form: http://localhost:4000/form
- Locations API: http://localhost:4000/locations
- Books API: http://localhost:4000/books

### API Endpoints

#### Locations
- `GET /locations` - Retrieve all locations
- `POST /locations` - Add a new location
- `PUT /locations/:name` - Update an existing location by name
- `DELETE /locations/:name`- Remove a location by name
- `GET /locations/:name` - Get location by name

#### Characters
- `GET /characters` - Retrieve all characters
- `GET /characters?alias=<name>` - Search by character alias
- `GET /characters/:name` - Get character by name
- `GET /characters/angels` - Get all angels
- `GET /characters/demons` - Get all demons
- `GET /characters/humans` - Get all humans
- `GET /characters/horseperson` - Get all horsepersons

#### Books
- `GET /books` - Retrieve all books
- `GET /books?type=<type>` - Filter books by type (Novel, Graphic Novel)
- `GET /books/:title` - Search books by title
