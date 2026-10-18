# Prescripto — Healthcare Appointment Booking

Prescripto is a full-stack healthcare appointment booking platform that helps patients discover doctors, schedule appointments, manage their profiles, and make payments online. It includes separate interfaces for patients, doctors, and administrators.

## Live Demo

- **Patient website:** https://prescripto-frontend-kappa-six.vercel.app
- **Admin and doctor panel:** https://prescripto-admin-beta-nine.vercel.app
- **Backend API:** https://prescripto-backend-v6uc.onrender.com

> Demo availability may depend on the hosting services and configured environment variables.

## Features

### Patient website
- Browse doctors and filter them by speciality.
- Register and log in securely.
- View and update profile information.
- Select an available appointment slot and book appointments.
- View upcoming appointments and cancel bookings.
- Pay appointment fees through Razorpay.
- Upload profile images using Cloudinary.

### Admin dashboard
- View summary statistics for doctors, patients, and appointments.
- Add doctors and manage the doctor list.
- Change doctor availability.
- Review and cancel appointments.

### Doctor dashboard
- Sign in through the doctor interface.
- View appointment schedules and dashboard statistics.
- Mark appointments as completed or cancel them.
- View and update doctor profile information.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Patient and dashboard interfaces | React, Vite, React Router |
| Styling | Tailwind CSS |
| API requests and notifications | Axios, React Toastify |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| Image storage | Cloudinary |
| Payments | Razorpay |
| Deployment | Vercel (frontends), Render (API) |

## Project Structure

~~~text
Prescripto/
├── frontend/      # Patient-facing React application
├── admin/         # Admin and doctor dashboard
├── backend/       # Express API, authentication, and database models
├── .gitignore
└── README.md
~~~

The backend exposes three main route groups:

- **/api/user** — registration, login, profile, appointments, and payments
- **/api/doctor** — doctor login, profile, appointments, and dashboard
- **/api/admin** — admin login, doctor management, appointments, and dashboard

## Run Locally

### 1. Requirements

Install Node.js (with npm) and make sure you have accounts or credentials for MongoDB, Cloudinary, and Razorpay. Use Razorpay test credentials for local development.

### 2. Clone the repository

~~~bash
git clone https://github.com/Lakshay110906/Prescripto.git
cd Prescripto
~~~

### 3. Configure the backend

Create a **.env** file inside the **backend/** directory:

~~~env
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net
JWT_SECRET=replace_with_a_long_random_secret

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=replace_with_a_strong_password

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
~~~

The backend connects to the **prescripto** database. Ensure your MongoDB user has access to it and your network/IP settings allow the connection.

Install dependencies and start the API:

~~~bash
cd backend
npm install
npm run server
~~~

The API runs on **http://localhost:4000** by default. You can also use **npm start** to start it with Node.js.

### 4. Configure and start the patient website

Create **frontend/.env**:

~~~env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
~~~

Then run:

~~~bash
cd frontend
npm install
npm run dev
~~~

Vite prints the local URL in the terminal, usually **http://localhost:5173**.

### 5. Configure and start the admin/doctor dashboard

Create **admin/.env**:

~~~env
VITE_BACKEND_URL=http://localhost:4000
~~~

Then run in a separate terminal:

~~~bash
cd admin
npm install
npm run dev
~~~

Vite will print the dashboard URL. If the default port is already in use, it may select another available port.

> Restart the relevant Vite development server whenever you change a .env file.

## Environment Variables

| Variable | Used by | Purpose |
| --- | --- | --- |
| MONGODB_URI | Backend | MongoDB connection string; the app appends /prescripto |
| JWT_SECRET | Backend | Secret used to sign authentication tokens |
| CLOUDINARY_NAME | Backend | Cloudinary cloud name |
| CLOUDINARY_API_KEY | Backend | Cloudinary API key |
| CLOUDINARY_SECRET_KEY | Backend | Cloudinary API secret |
| ADMIN_EMAIL | Backend | Admin login email |
| ADMIN_PASSWORD | Backend | Admin login password |
| RAZORPAY_KEY_ID | Backend | Razorpay API key ID |
| RAZORPAY_KEY_SECRET | Backend | Razorpay API secret |
| CURRENCY | Backend | Currency configured for payment orders |
| VITE_BACKEND_URL | Frontend and admin | Base URL of the backend API |
| VITE_RAZORPAY_KEY_ID | Frontend | Razorpay key ID used by the checkout interface |

Never commit real API keys, passwords, database credentials, or production secrets. Configure them through local environment files and your hosting provider's environment settings.

## Security Notes

- Passwords are hashed with bcrypt before being stored.
- JWT-based middleware protects authenticated API routes.
- Keep Razorpay secret keys, Cloudinary secrets, and the JWT secret on the backend only.
- Use test payment credentials during development and configure production credentials only in your deployment environment.

## Development Commands

Run these commands from the relevant application directory:

| Directory | Command | Purpose |
| --- | --- | --- |
| frontend/ | npm run dev | Start patient website locally |
| frontend/ | npm run build | Build patient website for production |
| frontend/ | npm run lint | Run ESLint |
| admin/ | npm run dev | Start admin/doctor dashboard locally |
| admin/ | npm run build | Build dashboard for production |
| admin/ | npm run lint | Run ESLint |
| backend/ | npm run server | Start API with Nodemon |
| backend/ | npm start | Start API with Node.js |

## Future Improvements

- Automated tests for API routes and key user flows.
- More robust validation, error handling, and rate limiting.
- Appointment reminders and improved scheduling workflows.
- Better observability and audit logs for administrative actions.

## Author

**Lakshay Sharma**

- GitHub: [@Lakshay110906](https://github.com/Lakshay110906)

---

Built as a full-stack project to make doctor discovery and appointment management more convenient.
