# Angular_Keycloack_Docker

# Overview

This project is an Angular application secured with Keycloak, running inside Docker containers.
It features centralized authentication and role-based access control using Keycloak.

## Features

- Authentication: Secure user management via Keycloak
- Route protection: Angular guards based on user authentication status
- Persistent storage: PostgreSQL database for Keycloak data
- Easy deployment: Single-command startup with Docker Compose

## The stack includes:

- Keycloak with a PostgreSQL database
- Angular frontend configured for authentication with Keycloak (+ Bootstrap for UI)
- Fully containerized using Docker Compose for portability and easy setup
 
## Technologies Used

- **Frontend**: Angular 20, Bootstrap
- **Auth**: Keycloak  
- **Cloud**: Docker & Docker Compose 

---

## Folder Structure

```txt
src/
├── app/
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core/
│   │   ├── guards/
│   │   ├── keycloak/
│   ├── feature/
│   │   ├── about/
│   │   ├── dashboard/
│   │   ├── home/
│   │   └── pagenotfound/
│   └── shared/
│       └── components/

```

---

## Setup Instructions

## 1. Clone the repository

git clone https://github.com/Sandirane/Angular_Keycloack_Docker.git

cd Angular_Keycloack_Docker

## 2. Create the .env file & configure Keycloak

Create a .env file in the project root with your Keycloak and DB settings.

After launching Keycloak, configure it (manually or via JSON import):

- Create a realm (e.g., myrealm)
- Create a client (e.g., angular-client) with:
    - Access Type: public or confidential
    - Redirect URIs: http://localhost:4200/*
    - Create a user (e.g., user1) with a password
    - Assign required roles to the user

This setup allows Angular to authenticate with Keycloak.

## 3. Launch the Docker containers

docker-compose up --build

## 4. Launch the Angular frontend

cd frontend

npm install

ng serve

## 5. Access the application

- Angular app: http://localhost:4200
- Keycloak Admin Console: http://localhost:8080
- Login: admin / admin (or per your .env file)
 
## Author 

Created by **Sandirane**  
[GitHub Profile](https://github.com/Sandirane)