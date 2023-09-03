## Project Title

# [Contact Management App](https://contact-management2.vercel.app/)

## Project Description

This is a ReactJS-based Contact Management App that allows users to manage their contacts and view COVID-19 statistics on a simple dashboard with charts and maps. The app features contact management functionalities like adding, editing, and deleting contacts. It also provides COVID-19 data visualization using charts and maps.

## Getting Started

#### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

-    Node.js and npm
-    Git

#### Installation

Follow these steps to run the app locally:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sumon-chandra/contact-management-app.git
```

2. Navigate to the project directory:

```bash
cd contact-management-app
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit http://localhost:3000 to access the app.

## App Features

-    **Contacts Page:** Allows you to manage your contacts, including adding, viewing, editing, and deleting contacts. Contact data is stored using Redux.
-    **Charts and Maps Page:** Provides a dashboard with COVID-19 statistics, including a line graph displaying case fluctuations and a map with markers indicating COVID-19 data for different countries.

## APIs Used

-    **Worldwide COVID-19 Data: https://disease.sh/v3/covid-19/all**
-    **Country-Specific COVID-19 Data: https://disease.sh/v3/covid-19/countries**
-    **Graph Data for Cases with Date: https://disease.sh/v3/covid-19/historical/all?lastdays=all**

## Technologies Used

-    **ReactJS**
-    **TypeScript**
-    **React Query (TanstackQuery)**
-    **TailwindCSS**
-    **React Router v6**
-    **Redux (for contact data storage)**
-    **Leaflet (for the map component)**

## Usage

1. #### Contacts Page

-    Click on "Add Contact" to add a new contact.
-    Click on a contact card to view contact details.
-    Use the edit and delete buttons to edit or delete contacts.

2. #### Dashboard Page

-    View a line graph showing COVID-19 cases fluctuations.
-    Interact with the React Leaflet map to view COVID-19 statistics for different countries.

## Deployment

The app is deployed using **[Vercel](https://vercel.com/)** and can be accessed at **[https://contact-management2.vercel.app/](https://contact-management2.vercel.app/)**.

## Additional Information

This app is responsive and designed to work well on both desktop and mobile devices.
