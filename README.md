# Tables
#This is an application made using MERN stack

I imported the given data (sample_data.json) to MongoDB
I connect the backend (MongoDB) to my application using a Connection URL
The backend of the application is connected to the frontend with the help of a API
The frontend uses yarn while the backend uses npm
Inorder to get the all the users, an fetchAllUsers request is sent to the backend with the help of an API
The response from the backend of the application is sent in the form of json
The response received in the for of json conatins an array with all the users details in it

With the help of a reducer the data in the form of json is converted into an array which could be used just like any other array
Various files like UserIncome, UserPhone etc. are created and connected to Table.jsx with a react hook
Each one of these files is for one of the given 5 tasks
With the given conditions the main array(users) is altered and displayed in the form of a table
