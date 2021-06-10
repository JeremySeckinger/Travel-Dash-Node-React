---


<p align="center">
  <img src="https://i.imgur.com/cmARMWK.png">
</p>

---

# Travel Dash 

:construction:  Under Construction  :construction:  Current site progress (MVP) can be [viewed here](https://traveldashboard.herokuapp.com/) 


## Description

A full featured social travel dashboard linking travelers with the tools and community they need to plan and execute a lifetime of adventures. This application is being built to combine my passion for travel, with the desire to create a SaaS style dashboard full of useful components and tools for travelers.

<!-- <div align="center">
<img src="">
</div> -->

## Vision

As an avid budget-traveler I'm part of a generation that values experiences over things. Globalization has paved the way for our new generation of travelers, and as technology allows us to become increasingly nomadic while we make a living, we change how we operate. Instead of saving for a down payment on a house we can't afford--we save to see the world.  Instead of settling down to have kids we invest in our own experiences because we are a generation that understands what we have today could very well be gone tomorrow, and we want to live a great story. 

Travel Dash is inspired by this new generation. The aim is to capture the utility of technology to create curated spaces--expanding travel potential by contributing to an ecosystem founded on a culture of sharing, preservation, and mindfulness. 

## Technologies used

Current stack for MVP: Node with Express, Handlebars, MongoDB, Google OAuth 2.0, Materialize, deployed with Heroku

I will be adding a lot to this project in the coming days, and will soon be using the updated stack below:

Full stack: Node with Express, React, MongoDB, Google OAuth 2.0, deployed with Heroku, and serving images using Cloudinary


## Packages/Dependencies

    "dependencies": 
        "connect-mongo": "^4.4.1",
        "dotenv": "^10.0.0",
        "express": "^4.17.1",
        "express-handlebars": "^5.3.2",
        "express-session": "^1.17.2",
        "method-override": "^3.0.0",
        "moment": "^2.29.1",
        "mongoose": "^5.12.11",
        "morgan": "^1.10.0",
        "passport": "^0.4.1",
        "passport-google-oauth20": "^2.0.0"
    
    "devDependencies": 
        "cross-env": "^7.0.3",
        "nodemon": "^2.0.7"


## Current features and future additions

Right now this project's functionality allows user's to:
- Login via Google OAuth2.0 
- View a dashboard of their travels or "trips" 
- Create trips to add to their dashboard to keep track of travels 
    - Allows users to document all the details they want about their trip in a blog style format with styling provided by CKEditor
- View individual trips
- Edit trips
- Make their trips public to other logged in users
- View all public trips a user has made and view individual trips from the user

---

## Tasks
    
   - [ ] Create an alert partial that triggers when deleting trips
   - [ ] Divide trips into "upcoming" and "past" trips 
        - [ ] For "upcoming" add inputs for flight details, schedule/agenda, places to visit/must do's,
        - [ ] For "past" add inputs for trips including dates traveled, locations visited, trip highlights, connections made, what went right, what went wrong, 
   - [ ] Add photo upload feature for trips 

   - [ ] Component-ize features with react to create one centralized dashboard with all the tools listed in "Features to be added:" (see below)
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


## Features to be added (dashboard tools)
   - [ ] Mapping to plot trips, and view where other users have been
   - [ ] Budgeting tool 
   - [ ] Resources section to save research 
   - [ ] auto-populated location based suggestions for what to do/see 
   - [ ] Photos: create expandable gallery with minified slideshow
   - [ ] Flights and tickets stored in app, and easily accessibly via mobile
   - [ ] Day planner
   - [ ] Calendar (individual and shared)
   - [ ] Accomodation search that integrates bookings with dashboard




