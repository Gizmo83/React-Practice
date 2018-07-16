# React Homework - Alternate

### Overview

This is an alternate, more challenging assignment to the "Clicky Game" homework in Unit 20. There are some helpful setup tips in the original instructions that you should read over, but to get credit for this assignment, you _must_ attempt the app outlined below.

Don't worry, it's still similar in design to the [Clicky Game](https://clicky-game.netlify.com/), so you can continue to reference it for architectural help, but we're going to build something a little more complicated that leverages client-side storage.

### Phase One

We want to make an app that shows a list of random people to the user and allows them to filter and sort these people in real-time via React. You can use the [Random User API](https://randomuser.me/) for data. When the page loads, call this API to get **50** random people and display them on the page with the following information each:

  * profile picture
  * full name
  * birthday (in a human-readable format)
  * gender
  * location

The UI will have a couple of buttons that will re-render this list when clicked. At a minimum, these buttons should have the ability to:

  * sort by name
  * sort by location
  * filter by gender (male or female)
  * filter by age (older than 50 or younger than)

There should also be one final button on the UI that calls the API again to get a new list of 50 people, thereby overwriting the list the user was just looking at.

### Phase Two

Once that's working, the next step is to add the ability to "favorite" people. For each person, render a heart button that, when clicked, will save this person's information in localStorage.

Add a link somewhere on the page (preferably in the navbar) called "View Favorites." When this link is clicked, a modal/overlay should appear that shows the user all of the people they have favorited (i.e. everyone who is saved in localStorage).

This modal should be its own component. _Build the modal component yourself. Don't try to use a Bootstrap or Materialize modal!_

### Minimum Requirements

A working version of this app must be deployed to GitHub Pages. Broken deployments won't receive a grade, nor will falling back on the easier homework assignment. And you _must_ use React, no jQuery or vanilla DOM manipulation. Good luck!