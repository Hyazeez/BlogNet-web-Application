# 📝 Fullstack Blog Website  

A full-stack **blog application** built with **Angular 19(Frontend)**, **Spring Boot (Backend)**, and **MySQL (Database)**.  This platform allows users to create, read, update, and delete blog posts with a secure authentication system.  

---

## 💡 Features

### Frontend (Angular)
- 🚀 Modern UI built with **Angular 19**
- 📱 Fully responsive design
- 🔄 Reactive forms for blog post creation/editing
- 📄 Markdown support for rich text blogging

### Backend (Spring Boot)
- 🔒 Secure REST API with Spring Security
- 📡 RESTful endpoints for CRUD operations
- 📊 Pagination and sorting support

### Database (MySQL)
- 🏗️ Relational data structure
- 🔗 Entity relationships (Users ↔ Posts ↔ Comments)
- 🚀 Optimized queries for performance
- 🧹 Data validation at DB level

---

## 🛠 Tech Stack  

### Frontend
- **Framework:** [Angular](https://angular.io/)  
- **UI Components:** Angular Material  
- **State Management:** RxJS  
- **HTTP Client:** Angular HttpClient  

### Backend
- **Framework:** [Spring Boot](https://spring.io/projects/spring-boot)  
- **Security:** Spring Security + JWT  
- **Persistence:** Spring Data JPA  
- **Validation:** Hibernate Validator  

### Database
- **RDBMS:** MySQL
- **ORM:** Hibernate  
- **Migration:** Flyway (optional)  
---

## 📁 Project Structure

blog_website/
├── frontend/ # Angular project

│ ├── src/

│ │ ├── app/ # Components, services

│ │ ├── assets/ # Static files

│ │ └── environments/ # Configuration

│ ├── angular.json # Angular config

│ └── package.json # Frontend dependencies

│

├── backend/ # Spring Boot project

│ ├── src/main/java/

│ │ ├── config/ # Security config

│ │ ├── controller/ # REST controllers

│ │ ├── model/ # Entities/DTOs

│ │ ├── repository/ # JPA repositories

│ │ ├── service/ # Business logic

│ │ └── BlogApplication.java # Main class

│ ├── src/main/resources/

│ │ ├── application.properties # DB config

│ │ └── static/ # Optional static content

│ └── pom.xml # Backend dependencies

│

├── database/ # MySQL files

│ ├── schema.sql # DB schema

│ └── data.sql # Sample data (optional)

│

├── .gitignore

├── README.md

└── LICENSE

