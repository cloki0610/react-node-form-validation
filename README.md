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
