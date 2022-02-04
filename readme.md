# Project

<p align="center">
  <img src="https://i.imgur.com/NnwcESE.png">
</p>

## Travel Dash

:construction:
This project is an ongoing work in progress with a lot of polishing to be done.
:construction: 

Social travel dashboard linking travelers with the tools and community they need to plan and execute a lifetime of adventures. This application is being built to combine my passion for travel, with the desire to create a SaaS style dashboard full of useful components and tools. For the time being, I'm using this project to practice and apply what I've learned and what I want to learn as a software engineer. If I could I would spend every day working on this project--developing it has been something I have truly enjoyed. With that said, its features and scope are limited. Take a look at the [project board](https://github.com/JeremySeckinger/Travel-Dash-Node-React/projects/1) I've been using to see what's been done and what's in the pipeline.

## Technologies Used

Full stack: Node, Express, React, Redux, Bootstrap 5, MongoDB, Google OAuth 2.0, deployed with Heroku (back end) and Netlify (front end)

The front end uses Themesburg's Volt free and open source Bootstrap 5 Admin Dashboard. It serves as the base template for the react app--allowing Travel Dash to use a modern UI/UX focused design. The components will be heavily customized to adapt to the focus of Travel Dash, with plenty of original components and additional features added on to its base. 

The tech stack is evolving as the project grows, with the most current addition being Redux for help with state management on the front end. 

## Use and Installation

To run this project, fork the repo and clone it to your local machine.

### Install

`yarn install`

### Things to add

- Create a `.env` file and add the following (front end)
  - REACT_APP_GOOGLE_CLIENT_ID = `generate your own google client id and use here`

- Create a `.env` file and add the following (back end)
  - MONGO_URI = 
  - GOOGLE_CLIENT_ID = 
  - GOOGLE_CLIENT_SECRET = 

- Change the baseURL on the client src/api/index.js to what port you will be using locally

#### Note: you will need to setup a cluster on MongoDB

### Run

Front end:

`yarn start`

Back end:

`yarn start`
or 
`yarn run dev`

---

## Packages/Dependencies

Front end:

    "dependencies": {
      "@ckeditor/ckeditor5-build-classic": "^31.1.0",
      "@ckeditor/ckeditor5-react": "^3.0.3",
      "@fortawesome/fontawesome-free": "^5.15.1",
      "@fortawesome/fontawesome-svg-core": "^1.2.30",
      "@fortawesome/free-brands-svg-icons": "^5.14.0",
      "@fortawesome/free-regular-svg-icons": "^5.14.0",
      "@fortawesome/free-solid-svg-icons": "^5.14.0",
      "@fortawesome/react-fontawesome": "^0.1.11",
      "@testing-library/jest-dom": "^4.2.4",
      "@testing-library/react": "^9.3.2",
      "@testing-library/user-event": "^7.1.2",
      "@themesberg/react-bootstrap": "^1.4.1",
      "axios": "^0.21.1",
      "bootstrap": "5.0.0-beta1",
      "chartist": "^0.11.4",
      "chartist-plugin-tooltips-updated": "^0.1.4",
      "dompurify": "^2.3.4",
      "immutable": "^4.0.0",
      "jwt-decode": "^3.1.2",
      "moment-timezone": "^0.5.31",
      "node-sass": "^4.14.1",
      "react": "^16.13.1",
      "react-avatar": "^3.10.0",
      "react-chartist": "^0.14.3",
      "react-copy-to-clipboard": "^5.0.3",
      "react-datetime": "^3.0.4",
      "react-dom": "^16.13.1",
      "react-github-btn": "^1.2.0",
      "react-google-login": "^5.2.2",
      "react-live": "^2.2.3",
      "react-redux": "^7.2.4",
      "react-router-dom": "^5.2.0",
      "react-router-hash-link": "^2.3.1",
      "react-scripts": "3.4.3",
      "react-transition-group": "^4.4.1",
      "redux-thunk": "^2.3.0",
      "simplebar-react": "^2.3.0"
    }
  
Back end:

      "dependencies": {
        "bcryptjs": "^2.4.3",
        "cors": "^2.8.5",
        "dotenv": "^10.0.0",
        "express": "^4.17.1",
        "jsonwebtoken": "^8.5.1",
        "moment": "^2.29.1",
        "mongoose": "^5.12.11",
        "morgan": "^1.10.0"
      },
      "devDependencies": {
        "cross-env": "^7.0.3",
        "nodemon": "^2.0.7"
      }

## Current features and future additions

Right now this project's functionality allows user's to:
- Login via Google OAuth2.0 or create an account and use local authentication
- Create trips to add to their dashboard to keep track of travels 
    - Allows users to document all the details they want about their trip in a blog style format with styling provided by CKEditor
- Edit trips
- Delete trips
- Make their trips public to other logged in users

Next up:
- [ ] View all public trips a user has made and view individual trips from the user
- [ ] View individual trips


## Wishlist of tasks and feature adds ([project board](https://github.com/JeremySeckinger/Travel-Dash-Node-React/projects/1)):
    
   - [ ] Divide trips into "upcoming" and "past" trips 
        - [ ] For "upcoming" add inputs for flight details, schedule/agenda, places to visit/must do's,
        - [ ] For "past" add inputs for trips including dates traveled, locations visited, trip highlights, connections made, what went right, what went wrong, 
   - [ ] Add photo upload feature for trips 

   - [ ] Make dashboard customizable by user to pick what tools/features they want to see on their dashboard
   - [ ] Allow for multiple dashboards to be created (ex. all upcoming trips, individual trip dashboard, past trips)
   - [ ] Automatically add custom created dashboards to nav 

   - [ ] Allow shareable url that updates friends/family with trip status 
        - [ ] Allow sms signups to alert those with link about updates for safety/checkins
   - [ ] Allow users of Travel Dash to add each other by QR code to keep updated on their travels

   - [ ] Create groups feature 
        - [ ] for users to crowdsource information 
        - [ ] for users to plan trips together
        - [ ] for users to plan meetups along their routes
   - [ ] Add individual/group messaging that integrates with dashboard features
   - [ ] public section of profile with upcoming trips that allows comments for tips and recommendations from others

   - [ ] Develop mobile app
        - [ ] Prioritize the social features for group plans/meetups
        - [ ] Prioritize the update friends/family feature


## Potential Features to be added (dashboard tools)
   - [ ] Mapping to plot trips, and view where other users have been
   - [ ] Budgeting tool 
   - [ ] Resources section to save research 
   - [ ] auto-populated location based suggestions for what to do/see 
   - [ ] Photos: create expandable gallery with minified slideshow
   - [ ] Flights and tickets stored in app, and easily accessibly via mobile
   - [ ] Day planner
   - [ ] Calendar (individual and shared)
   - [ ] Accomodation search that integrates bookings with dashboard


