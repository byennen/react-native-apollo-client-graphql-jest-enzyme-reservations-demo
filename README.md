# Hilton Code Demo

Create typescript add from template and add Jest and Enzyme:
https://medium.com/@jan.hesters/using-typescript-with-react-native-946aa4b4ae6f

Use TSLint even thought Typescript is moving to ESLint

Add Apollo
https://www.apollographql.com/docs/react/essentials/get-started.html

Use Apollo Boost to keep the code DRY for the demo

Setup React-Navigation
https://reactnavigation.org

Setup Routes and initial tests

Setup GrapQL Queries & basic tests. I didn't over do the tests and test every scenario like I wanted.

I ran out of time for this code sample. react-dom is complaining when running jest tests. I left that because its an issue with ts-jest. I did not add validation for a date or a datepicker with a little more time I would have. I also did not add a success message after adding a reservation. I redirect the user back to all reservations. With a little more time I would have added a message. I ran out of time to do my own code review. I'm going to come back to this and create a blog post out of this demo, thanks!

---

# Hilton React-Native / GraphQL Reservation Demo

## Goal/Requirements

Create a React Native reservation app using ES6 and pure components. Create at least 2 screens:

1 for listing the existing reservations and 1 for adding a new reservation.

## Tech Stack

Please utilize the following technology stack for developing your application.

- React-Native

- Apollo-Client

- Jest/Enzyme

- Typescript or Flow

## Back End

We have provided a GraphQL back end for you: https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev

Use the following queries from the back end to complete the test.
query: reservations, reservation
mutation: createReservation

## Limitations

Please DO NOT use the following items.

- create-react-native-app, or any other generator (use react-native init to start the project)

- redux (use another method for local state management)

- A non git service for hosting (github/gitlab/etc are ok)

## What We Are Looking For

The following list outlines areas we will be focusing on while evaluating your submission.

Code organization (even though this is two features, organize the files as if it were a larger enterprise application)

- Style organization

- Data/Graph Organization

- Component Organization

- Folder Structure

- Type checking

- A clean method for managing local state with GraphQL queries

- Unit test methodology/readability

- Code readability (i.e. ability for future developers to pick up where you left off)

- A communicative README.md explaining the architecture choices

## Submission

Please provide a git link to the source code.

---
