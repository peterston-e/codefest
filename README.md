 <img style="width:50%; margin-bottom: 20px" alt="ResourceAdmin" src="./public/images/logo/logo.svg">

# ResourceAdmin

ResourceAdmin is your centralized dashboard for seamlessly managing and organizing both school-endorsed and personal resources in one efficient platform. Streamline your workflow, enhance productivity, and keep all your valuable resources at your fingertips with ease.

### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Future Steps / What's next](#future-steps--whats-next)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)


## Introduction

In today’s digital age, we have an abundance of resources available at our fingertips, from educational materials and insightful articles to engaging videos and tutorials. But with so many options available, it can be difficult to determine which resources are genuinely valuable. And keeping track of the ones that are most meaningful to us can be challenging. Have you ever encountered a resource you loved—perhaps a particularly insightful article or a useful video—and saved it, only to find later that you can’t locate it when you need it? Our project addresses this issue by providing a comprehensive web app designed to help you manage and organize both school-endorsed and personal resources efficiently. ResourceAdmin not only pre-loads resources recommended by your educational provider but also allows you to add and track your favourite resources, ensuring you never lose sight of what matters to you.

## Features
- Centralized dashboard for managing both school-endorsed and personal resources.
- Intuitive organisation and categorisation of resources.
- User-friendly interface designed for efficiency and ease of use.


## Installation
To run ResourceAdmin locally, follow these steps:

1. Clone the repository
```bash
git clone https://github.com/peterston-e/codefest.git
```


2. Navigate to the project directory
```bash
cd codefest
```


3. Install dependencies

```
npm install
```
or

```
yarn install
```

4. Start the developement server

```
npm run dev
```

or 

```
yarn dev
```
Your app should now be running on [localhost:3000](http://localhost:3000/).


## Tech Stack

Due to time constraints, we utilized a boilerplate to expedite development. This allowed us to concentrate on incorporating as much functionality as possible within the project's scope. We have used the following technology:

**Next.js:** For it's efficient routing.  
**TypeScript:** For static typing for enhanced code quality.  
**TailwindCSS:** For responsive design.  

**Proof of Concept**  
Initially, we are using a JSON file to manage data as a proof of concept. Our future plans include integrating a database to improve data management and scalability.

## Future Steps / What’s Next
We have several exciting features planned for future updates:

 - Edit added/custom resources, including changing weeks or deleting entries.
 - Implement "Collapse All" and "Open All" functionality.
 - Enable file uploads for personal media such as pictures, screenshots, and notes. Currently, this feature is present as a placeholder in the 'Add Resource' form but is not yet functional. It will be activated once we integrate with a database.
 - Allow educational providers to add resources.
 - Create a system for bookmarking favourite resources.
 - Develop a custom tagging system.
 - Add search functionality with predefined keywords and free-text search to enhance resource discovery.

Stay tuned for these enhancements as we continue to improve the platform!

## Authors

This CodeFest 2024 hackathon project was built by the **Crimson Bats**:

<img src="https://ca.slack-edge.com/T06AVG5BD1A-U06CNMYEW00-66de8db70824-512" alt="Nadia img" height="25" /> [@nashetty](https://github.com/nashetty)  
<img src="https://ca.slack-edge.com/T06AVG5BD1A-U06D3DSQFSM-6c54a080d935-512" alt="Pete img" height="25" /> [@peterston-e](https://github.com/peterston-e)  
<img src="https://ca.slack-edge.com/T06AVG5BD1A-U06G348TECW-5fe64de8437b-512" alt="Ayo img" height="25" /> [@Ayodimeji-stacks ](https://github.com/Ayodimeji-stacks)  

## Acknowledgements

The ResourceAdmin was built on a Next.js TailAdmin [boilerplate](https://github.com/TailAdmin/free-nextjs-admin-dashboard).