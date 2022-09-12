# Project description

## Front-end
This project is two page application create by react and style by styled component library.
The fist page("/") is an input form gather 3 parts of information and send all input data into back-end endpoint.
The second page("/all-data") will display all user input store in back-end sqlite in-memory data base.
The front-end component include basic input validation and show the error message if input is invalid.

## Back-end
This back-end service provide two endpoint to accept user input and response with all user input store in sqlite database.
The first endpoint ("/") will accept a GET request and return all data store in the database.
The second endpoint ("/new-data") will accept a POST request and return a message with status code as response.

# Running locally

1. Download all the files
2. open the terminal and access the backend folder
3. use "tsc" command to complie and use "npm start" to run the backend application
4. access the frontend folder
5. use "npm start" command to run the React application

# Deploy

1. Complile the backend files to javascript
2. Deploy the backend application to your host
3. Get the API url
4. Replace the url with "/new-data" as endpoint in /src/components/NewUserData/NewUserData.tsx, line 141
5. Replace the url in /src/components/AllUserData/AllUserData.tsx, line 13
6. build and deploy the React application
