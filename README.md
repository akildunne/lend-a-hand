# LEND A HAND

## Overview

**Lend A Hand** is and app for everyone. With the current political climate, it's easy to feel overwhelmed with wanting to be involved and show support and love to others. Lend A Hand is here to help! This is a one-stop-shop for all of the causes that YOU specificly care about. On this app you can save as many or as few resources to your profile and you can check in daily on what's going on in your community. 

<br>
## MVP/Post MVP

## MVP

- Create and use external api.
- Create clickable buttons for user to choose causes they would like to know more about.
- Render data on dashboard page.
- Allow user to create events and share relavent resources.
- Allow user to update listed events and delete past events.

## Post MVP

- Provide more options and resources for causes.
- Add a connection option so people can connect with other people that support similar causes.
- Add a calendar tracker so the user can keep track of events with a quick overview.


### Goals

- I'd really like to use modals for this app if I have enough time.
- 
- 
- 
- 


### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | I will be using React for my app. This will house all of my components for my app.|
|   React Router   | React Router will be used to switch from component to component. |
| Ruby on Rails | I will be using Ruby on Rails for my backend. This  |
|  Fontawesome  | I will use Fontawesome for all of my icons. |

<br>

### Client (Front End)

### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

### Component Tree


			  App.js
			/       \
		   App.css   Components
			      /  | | | |  \
			 Home	   | | | |	Services
			    Layout | | Create
				     | Edit
				Dashboard

### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ icons
|__ components/
      |__ Layout
            |__ Layout.jsx
            |__ Header.jsx
            |__ Footer.jsx
      |__ Screens
            |__ Home.jsx
            |__ CausesDashboard.jsx
            |__ EventCard.jsx
            |__ Create.jsx
            |__ Edit.jsx
      |__ Shared
            |__ BackButton.jsx
|__ services/
      |__ ApiConfig.js
      |__ Causes.js

```

### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | The header will contain the navigation and logo.              |
|  Navigation  | functional |   n   |   n   | The navigation will provide a link to each of the pages.      |
|  Home        | functional |   n   |   n   | The home page will provide user login or access straight  to events. |
|   Dashboard    |   class    |   y   |   n   | The dashboard will render current events using cards in flexbox.      |
| Event Card | functional |   n   |   y   | The event card will render the post info via props.                 |
| Create   | functional   |   n   |   n   | The create page will create a new volunteer event to add to the dashboard page. |
| Edit    | functional   |  y    |   y   | The edit page will update an event via props. |
|    Footer    | functional |   n   |   n   | The footer will only have a home button for access as there isn't a lot of specific info needed. |

### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Backend       |    H     |     15 hrs     |       hrs     |      hrs    |
| Create App & Components | H    |     10 hrs     |       hrs     |      hrs    |
| Connect Frontend & Backend | H |     8 hrs      |       hrs     |      hrs    |
| CRUD Actions        |    H     |     10 hrs     |       hrs     |      hrs    |
| CSS & Flexbox       |    H     |     15 hrs     |       hrs     |      hrs    | 
| Media Queries       |    H     |     10 hrs     |       hrs     |      hrs    |
| TOTAL               |          |     68 hrs     |       hrs     |     hrs     |


<br>

### Server (Back End)

### ERD Model

https://drive.google.com/file/d/1tEias1zkav-h7VHlS920B6Y046IgH-p5/view?usp=sharing


## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!


## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
