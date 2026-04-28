# 🏥 Cure Wave — Client Side
> **"Your health, our priority — anytime, anywhere."**

Cure Wave is a full-stack medical care platform that connects patients, doctors, and administrators on a unified system. It features role-based dashboards, AI-powered doctor search, Stripe payment integration, a 30-minute appointment expiry system, and a fully functional prescription management workflow.

🌐 **Live Site:** [https://curewave.vercel.app](https://curewave.vercel.app)  
🔗 **Backend Repo:** [https://github.com/ShafinRME/Cure-Wave-Server](https://github.com/ShafinRME/Cure-Wave-Server)  
⚙️ **Frontend Repo:** [https://github.com/ShafinRME/Cure-Wave-Frontend](https://github.com/ShafinRME/Cure-Wave-Frontend)

---



## 🚀 Features

### 🧑‍💼 Patient
- Register with name, email, and password or sign in via **Google OAuth**
- Discover preferred doctors using an **AI-powered search interface**
- Book appointments by selecting from a doctor's available time slots
- Pay instantly via **Stripe** after booking, or choose to **pay later** — appointments are automatically cancelled if payment is not completed within **30 minutes**
- Cancel any appointment at any time before the scheduled date
- Submit a review for a doctor once the appointment is completed — **limited to one review per appointment**
- View doctor-issued **prescriptions** and upcoming follow-up dates directly from the dashboard
- Manage profile information and change passwords at any time from the Patient Dashboard
- Track full appointment history and all submitted doctor reviews in one place

### 🩺 Doctor
- Doctor accounts are created **exclusively by an Admin** — doctors receive their credentials and must **change their initial password upon first login** (platform access is restricted until this step is completed)
- View key metrics from the Doctor Dashboard: total patients, appointments, reviews, and revenue
- Manage available appointment slots from the **Schedule** section — slots are defined by the Admin, and doctors activate them for patient bookings
- View the full appointment list with patient details, payment status, and current status — with the ability to update as needed
- Issue **prescriptions** to patients upon appointment completion, including next follow-up dates — **limited to one prescription per appointment**
- Review all issued prescriptions with patient name, email, follow-up date, and full prescription details
- Update profile information and change passwords at any time

### 🛠️ Admin
- Monitor platform-wide metrics from the Admin Dashboard: total appointments, patients, doctors, payments, and revenue
- Create and manage **Admin accounts** with image upload — edit name and contact details, or remove admins as needed
- Create and manage **Doctor profiles** with full data and image upload — edit all doctor details (except email) or delete a doctor at any time
- View and manage all **registered patients** — edit patient data or remove accounts when necessary
- Monitor **all appointments** across the platform with full details and the ability to update appointment status
- Create **appointment schedules** by defining a date range along with start and end times
- Manage **medical specialities** — add new specialities with a name and relevant icon, view the full list, and delete any speciality as needed
- Update personal profile data from the Admin profile section

### 🌐 General
- Role-based protected routing (Patient / Doctor / Admin panels)
- AI-powered doctor discovery for smarter search experience
- Automatic appointment expiry via server-side **cron job** (30-minute pay window)
- Fully responsive design across all screen sizes

---

## 🧰 Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework with SSR & file-based routing |
| [React 19](https://react.dev) | UI library |
| [TypeScript](https://typescriptlang.org) | Type-safe development |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible component library |
| [Radix UI](https://radix-ui.com) | Headless UI primitives |
| [Recharts](https://recharts.org) | Analytics charts and graphs |
| [Lucide React](https://lucide.dev) | Icon library |
| [Zod](https://zod.dev) | Schema validation |
| [date-fns](https://date-fns.org) | Date utility library |
| [Sonner](https://sonner.emilkowal.ski) | Toast notifications |

### Others

| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com) | Frontend deployment |
| [Stripe](https://stripe.com) | International payment gateway |
| [Google OAuth 2.0](https://developers.google.com) | Social authentication |
| [Cloudinary](https://cloudinary.com) | Image upload and storage |

---

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/ShafinRME/Cure-Wave-Frontend.git
cd Cure-Wave-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_API_URL=https://sh-care-server-test.onrender.com/api/v1
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret
RESET_PASS_TOKEN=your_reset_pass_token
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### 4. Start the development server

```bash
npm run dev
```

The app will run at `http://localhost:3000`

---

## 🧩 Notable Implementations

- **Stripe payment integration** with a pay-later option and automatic **30-minute appointment expiry** enforced via server-side cron job scheduling
- **Admin-controlled doctor onboarding** with mandatory first-login password change — no unauthorized access before credential setup
- **AI-powered doctor search** to help patients find the right specialist quickly
- Fully functional **prescription system** with follow-up date tracking — scoped to one prescription per completed appointment
- **Patient review system** restricted to post-appointment submissions with a one-review-per-appointment policy
- **Cloudinary-based image upload** for doctor profiles, admin accounts, and medical specialities
- Complete **pagination** implemented across all major data tables
- **Role-based access control** across Patient, Doctor, and Admin panels with protected routes

---

## 🔮 Future Improvements

- Fix and standardize remaining inconsistent pagination across all sections
- Add downloadable **PDF prescription generation** for patients
- Implement **OTP-based user verification** for enhanced account security
- Build a real-time **notification system** for appointment updates and reminders
- Integrate **video consultation** functionality for remote doctor-patient sessions
- Build out **Health Records, Medicines, Diagnostics, Health Plans, and NGO** sections as fully dynamic modules

---

## 👨‍💻 Author

**Md. Shafin Ahmed**

- GitHub: [@ShafinRME](https://github.com/ShafinRME)
- Live Project: [https://curewave.vercel.app](https://curewave.vercel.app)
