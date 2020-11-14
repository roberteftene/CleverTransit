# CleverTransit

### Introduction
Our product aims to deliver an easier way to review public transportation. The main userbase consists of day to day commuters that value their time and the way they use public transportation. The application may also be of use to tourists who are unfamiliar with the city and want to find the most reliable transportation methods. Some similar applications available on the market include moovit, Google Maps, CityMapper and Transit: Bus and Subway Times. Our goal is to combine all of these applications’ strengths and create a universal web application for sharing experiences regarding public transportation. The users are able to review transportation methods by choosing a certain transit line that they have used. They are able to select the starting and end points of their route, the hour at which they traveled, the duration of the trip, how busy that transportation line is, other linked lines and the level of satisfaction. The reviews can be liked or disliked by other users.

### User interfaces

![main-page-1](https://github.com/roberteftene/CleverTransit/blob/main/frontend/Documentation_Images/CleverTransit-1.jpg)
![main-page-2](https://github.com/roberteftene/CleverTransit/blob/main/frontend/Documentation_Images/CleverTransit-2.jpg)
![main-page-3](https://github.com/roberteftene/CleverTransit/blob/main/frontend/Documentation_Images/CleverTransit-3.jpg)

### API REST

POST - /signup (user register)
POST - /login (user login)
GET - /news (getting the statistics/news in home page)
GET - /transport-methods (all transportation methods: bus, train, subway)
GET - /transport-methods/:id/transport-lines (all LINES for a specific transportation method: bus, tram etc.)
GET - /transport-lines/:id/reviews (all reviews for a specific transportation line)
GET - /users/:id/reviews (all of a user’s reviews)
POST - /reviews (adding a new review)
DELETE - /reviews/:id (deleting a review)
PUT - /reviews/:id (editing a review)

### Database Mockup

![database-mockup](https://github.com/roberteftene/CleverTransit/blob/main/frontend/Documentation_Images/CleverTransit-4.jpg)

### Team Roles
PRODUCT OWNER: Crisan Monica Diana
PROCESS COORDINATOR: Eftene Robert Petrut
FULL-STACK DEVELOPERS: Avram Nicolae Mihai, Ciuc Ciprian Ionut, Crisan Monica Diana, Eftene Robert Petrut
TESTERS: Avram Nicolae Mihai, Ciuc Ciprian Ionut, Crisan Monica Diana, Eftene Robert Petrut


### Start the app  
*For starting the back-end*

For installing the latest dependecies, change to the `backend/` directory: ```cd backend/```    
Than, use: ```npm install``` 
After that start the application using: ```npm start```

*For starting the front-end*
For installing the latest dependecies, change to the `frontend/` directory: ```cd frontend/```    
Than, use: ```npm install``` 
After that start the application using: ```npm start```
 
### Git CheatSheet

In order to "download" the code from the repo use:
```git clone https://github.com/roberteftene/CleverTransit.git```  
For checking for changes in your local cloned repo, use: ```git status```  
In order to add the things that you have changes: ```git add . ```  
After adding, commit the files + give a message: ```git commit -m "My message"```  
In order to push to the remote (origin): ```git push```

*For using branches*
- In order to see in what branch you are: ```git branch```
- For creating a **local** branch: ```git checkout -b branch-name``` - this will automatically change from the branch you were to the new one
- For switching to master/other branch: ```git checkout branch-name```
- For getting a branch from remote use: ```git checkout -b branch-name origin/branch-name```

 

