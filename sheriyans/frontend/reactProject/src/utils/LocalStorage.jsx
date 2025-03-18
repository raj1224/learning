import { useState } from "react"


const employees=[
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Homepage",
          "taskDescription": "Create a wireframe and design for the homepage.",
          "taskDate": "2025-03-20",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve the responsiveness issue in the navbar.",
          "taskDate": "2025-03-21",
          "category": "Development",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write API Documentation",
          "taskDescription": "Complete the API documentation for authentication.",
          "taskDate": "2025-03-22",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Optimize Database Queries",
          "taskDescription": "Improve the performance of SQL queries.",
          "taskDate": "2025-03-23",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Create Login UI",
          "taskDescription": "Design and develop the login screen.",
          "taskDate": "2025-03-24",
          "category": "UI/UX",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Set Up CI/CD Pipeline",
          "taskDescription": "Automate deployments with GitHub Actions.",
          "taskDate": "2025-03-25",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Improve Accessibility",
          "taskDescription": "Enhance accessibility features on the website.",
          "taskDate": "2025-03-26",
          "category": "Development",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Create Testing Suite",
          "taskDescription": "Implement unit tests for the project.",
          "taskDate": "2025-03-27",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Refactor Codebase",
          "taskDescription": "Improve the maintainability of the project codebase.",
          "taskDate": "2025-03-28",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Login Issue",
          "taskDescription": "Resolve login authentication bugs.",
          "taskDate": "2025-03-29",
          "category": "Bug Fixing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    
  ]
  

  const admin = [{
    "id": 6,
    "email": "admin@example.com",
    "password": "123",
    "role": "admin"
  },
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    // console.log(employees,admin);
    return {employees,admin}
    

}