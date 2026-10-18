<div align="center">

# 🩺 Prescripto

### A full-stack healthcare platform to find doctors, book appointments, and manage prescriptions.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-success?style=for-the-badge)](https://prescripto-frontend-kappa-six.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/Admin%20%26%20Doctor-Dashboard-blue?style=for-the-badge)](https://prescripto-admin-beta-nine.vercel.app/)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## 📖 About The Project

**Prescripto** makes it easy for patients to see a doctor without long waiting lines or phone calls. Patients can browse doctors, pick a time that suits them, book an appointment, and pay the consultation fee online. Doctors and admins get their own dashboards to manage everything from one place.

The project is built with the **MERN stack** and has three separate apps:

| App | Who uses it | What it does |
| --- | --- | --- |
| **Frontend** | Patients | Browse doctors, book and pay for appointments |
| **Admin Panel** | Admins and Doctors | Manage doctors, appointments, and prescriptions |
| **Backend** | All apps | REST API, database, authentication, and payments |

## 🔗 Live Links

| App | Link |
| --- | --- |
| 🌐 **Patient Website** | [prescripto-frontend-kappa-six.vercel.app](https://prescripto-frontend-kappa-six.vercel.app/) |
| 🛠️ **Admin and Doctor Dashboard** | [prescripto-admin-beta-nine.vercel.app](https://prescripto-admin-beta-nine.vercel.app/) |

> The Admin and Doctor dashboard is one app. On its login page, choose **Admin** or **Doctor** to sign in with that role.

---

## ✨ Features

### 👤 For Patients
- Browse the list of doctors and filter them by speciality
- View a doctor's profile, fees, and availability
- Book an appointment and pay the fee securely online
- See and manage all your appointments in one place
- Access and manage your prescriptions

### 🧑‍⚕️ For Doctors
- Log in to a separate dashboard
- View and manage upcoming appointments
- Manage prescriptions for patients

### 🛠️ For Admins
- Add and manage doctors on the platform
- Monitor all appointments
- Control the platform from a single admin panel

### 🔐 Security and Integrations
- **Role-based login** for Admins, Doctors, and Patients
- **JWT** (JSON Web Tokens) for safe user sessions
- **bcrypt** for hashing passwords, so they are never stored as plain text
- **Razorpay** for secure online fee payments
- **Cloudinary** for uploading and storing images (like doctor photos)
- Fully **responsive design** that works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

**Frontend and Admin Panel**
- React.js
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication and Security**
- JSON Web Tokens (JWT)
- bcrypt

**Third-party Services**
- Razorpay (payments)
- Cloudinary (media storage)

**Deployment**
- Vercel (frontend)

---

## 📁 Project Structure

```
Prescripto/
├── frontend/     # Patient-facing website (React + Tailwind CSS)
├── admin/        # Admin and Doctor dashboard (React + Tailwind CSS)
├── backend/      # Node.js + Express REST API with MongoDB
├── .vscode/
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run Prescripto on your own computer.

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- A [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)
- A [Cloudinary](https://cloudinary.com/) account
- A [Razorpay](https://razorpay.com/) account (test mode is fine)

### 1. Clone the repository

```bash
git clone https://github.com/Lakshay110906/Prescripto.git
cd Prescripto
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# Admin login
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CURRENCY=INR
```

Start the server:

```bash
npm run server
```

### 3. Set up the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_key_id
```

Start the app:

```bash
npm run dev
```

### 4. Set up the Admin Panel

```bash
cd admin
npm install
```

Create a `.env` file inside the `admin` folder:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the app:

```bash
npm run dev
```

> 💡 Run the backend, frontend, and admin panel in three separate terminals at the same time.

---

## 🔄 How It Works

1. A **patient** signs up, logs in, and browses doctors.
2. The patient picks a doctor and a time slot, then books an appointment.
3. The fee is paid securely through **Razorpay**.
4. The **doctor** sees the new appointment in their dashboard.
5. The **admin** keeps an eye on doctors and appointments across the whole platform.

---

## 📸 Screenshots

> Add screenshots of your project here. Create a `screenshots` folder and link the images like this:

```md
![Home Page](./screenshots/home.png)
![Doctors List](./screenshots/doctors.png)
![Admin Dashboard](./screenshots/admin.png)
```

---

## 🔮 Future Improvements

- Email or SMS reminders for upcoming appointments
- Video consultations
- Doctor reviews and ratings
- Downloadable prescription PDFs

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Lakshay**
B.Tech Computer Science and Engineering, MSIT Delhi

- GitHub: [@Lakshay110906](https://github.com/Lakshay110906)

---

<div align="center">

⭐ If you like this project, please give it a star!

</div>
