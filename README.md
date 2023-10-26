# README: Job Atlas

## 1 Introduction

Job Atlas is a job search website that allows candidates to respond to job listings as well as employers to apply for postings. With a focus on simplicity and efficiency, we designed this platform to meet the needs of all stakeholders in the job market.

## 2 Features 

### - Employers:
Employers will find in Job Atlas a dedicated space to showcase their company and their offers. In a few simple steps, they can create an account and post job listings with all the necessary details. A space to create listings is available at: [Advertisements Create](http://localhost:3333/advertisements/create)

### - Candidates:
For candidates, job searching is very straightforward. They can browse a variety of offers and apply for positions that match their skills and aspirations: [Advertisements](http://localhost:3333/advertisements)

### - Partner Companies Area:
Our platform highlights our partner companies, those who trust Job Atlas for their recruitment needs. This section provides an overview of the active companies on the site and the opportunities they offer: [Companies](http://localhost:3333/companies)

### - Administrators:
Administrators can easily manage the platform. Whether it's adding, modifying, creating, or even deleting listings, applications, users, or partner companies: [View Admin](http://localhost:3333/viewAdmin)

## 3 Technology and Installation 

Technically speaking, Job Atlas relies on various tools and technologies. For a more dynamic display, we use PUG and for visuals, we use CSS and Bootstrap 5. The core of the site, the back-end, is powered by Node Express. Our choice for data management is MySQL, managed via PhpMyAdmin for the creation of a database named job_board. The data is organized into four main tables: Users, Advertisements, Job Application, and Companies.

## 4 Navigation 

Navigation on Job Atlas is designed to be user-friendly. By accessing [localhost:3333/](http://localhost:3333/) (where 3333 is the used port), you are immediately immersed in the job offers universe. From there, registration, login, and navigation options are easily accessible. 

Steps to start the server:
1. Import the database located at the root of the project into your MySQL.
2. Adjust the `config.json` file to make it work from your computer.
3. Run `npm i` to install the necessary dependencies.
4. Start the server with `npm run start`.
5. Visit the URL "[localhost:3333/users/register](http://localhost:3333/users/register)" for testing.
6. To access the admin section, use the login: `elise.samsa@actemium.com` and password: `123456`.

## 5 Development and Collaboration 

Job Atlas started with a detailed mock-up on Figma, allowing us to visualize the final product. The MVC model guided us in structuring the project, ensuring a clear and efficient organization. Lastly, an Excel spreadsheet helped our team coordinate work, with Elise in charge of the back-end and Marine focusing on the front-end. We regularly pulled and pushed in an organized manner to avoid conflicts, using `git pull` and `git push` commands.
