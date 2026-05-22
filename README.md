# Full Stack Task Tracker Application

A Full Stack Task Tracker application developed using **Angular 21** for the frontend and **Django REST Framework (DRF)** for the backend.

This project demonstrates:
- REST API Development
- Frontend and Backend Integration
- Authentication APIs
- Angular Reactive Forms
- CRUD Operations
- State Management using RxJS
- Route Protection using Angular Guards
- CORS Configuration
- Standalone Angular Components

---

# Tech Stack

## Frontend
- Angular 21
- TypeScript
- RxJS
- Angular Router
- Reactive Forms
- HttpClient

## Backend
- Django
- Django REST Framework
- django-cors-headers

---

# Features

## Authentication
- User Signup
- User Login
- Mock Token Authentication
- Route Protection using Auth Guard

## Task Management
- Create Tasks
- View Tasks
- Delete Tasks
- Filter Tasks by Status

## Task Status Types
- OPEN
- IN_PROGRESS
- COMPLETED

---

# Project Structure

## Frontend Structure

frontend/
│
├── src/
│ ├── app/
│ │ ├── dashboard/
│ │ ├── login/
│ │ ├── signup/
│ │ ├── task-form/
│ │ ├── services/
│ │ ├── app.routes.ts
│ │ ├── app.config.ts
│ │ └── auth-guard.ts
│
├── angular.json
├── package.json
└── tsconfig.json

---

## Backend Structure

tasktracker/
│
├── tasktracker/
│ │ ├── settings.py
│ │ ├── urls.py
│
├── tasks/
│ │ ├── views.py
│ │ ├── authviews.py
│ │ ├── urls.py
│ │ ├── serializers.py
│ │ └── models.py
│
├── manage.py
└── requirements.txt

---

# How To Start The Application

## Step 1: Clone Repository

```bash
git clone <repository-url>

cd tasktracker
py -m venv venv
venv\Scripts\activate
pip install django
pip install djangorestframework
pip install django-cors-headers

py manage.py runserver

# Frontend Setup
Open New Terminal

cd frontend
npm install
npm install -g @angular/cli
ng serve
