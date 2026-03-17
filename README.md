# 📚 LMS Full Stack - Learning Management System

<div align="center">

![LMS](https://img.shields.io/badge/LMS-Learning%20Management%20System-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-13AA52?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwind-css)

A modern, full-stack Learning Management System built with React, Node.js, Express, and MongoDB. Enable educators to create and manage courses while students can enroll, learn, and track their progress.

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Project Structure](#project-structure) • [Contributing](#contributing)

</div>

---

## 🎯 Overview

**LMS Full Stack** is a comprehensive online learning platform that connects educators and students. Educators can create, manage, and monetize their courses, while students enjoy an interactive learning experience with video content, progress tracking, and course ratings.

### 🎓 For Educators:

- Create and manage courses with rich media content
- Track student enrollments and progress
- Receive payments for course sales
- Access student performance analytics

### 👨‍🎓 For Students:

- Browse and enroll in courses
- Watch video lessons with progress tracking
- Rate and review courses
- Track learning progress
- Secure payment processing

---

## ✨ Features

### 🎬 **Course Management**

- Rich course creation with text editors (Quill)
- Video content embedding (YouTube integration)
- Course categorization and search functionality
- Course thumbnail and media uploads (Cloudinary)

### 🔐 **Authentication & Authorization**

- Secure user authentication with Clerk
- Role-based access (Educator/Student)
- JWT token-based authorization
- Password encryption with bcrypt

### 💳 **Payment Integration**

- Stripe payment gateway integration
- Secure transaction processing
- Purchase history and receipts
- Subscription webhook handling

### 📊 **Progress Tracking**

- Student progress monitoring
- Course completion tracking
- Visual progress indicators
- Learning analytics

### ⭐ **User Engagement**

- Course rating and review system
- Student testimonials
- Interactive course listings
- Search and filter functionality

### 🎨 **User Interface**

- Responsive design (mobile, tablet, desktop)
- Tailwind CSS styling
- Modern component architecture
- Smooth animations and transitions

---

## 🛠️ Tech Stack

### **Frontend - Client**

```
Framework:        React 18.3.1
Build Tool:       Vite 5.4.10
Styling:          Tailwind CSS 3.4.15
Routing:          React Router DOM 7.0.1
Authentication:   Clerk React 5.17.1
HTTP Client:      Axios 1.7.8
Rich Text:        Quill 2.0.3
Video Player:     React YouTube 10.1.0
Notifications:    React Toastify 10.0.6
Ratings:          React Simple Star Rating 5.1.7
Progress Bar:     RC Progress 4.0.0
Utilities:        Humanize Duration, UniqID
```

### **Backend - Server**

```
Runtime:          Node.js
Framework:        Express 4.21.2
Database:         MongoDB with Mongoose 8.8.4
Authentication:   Clerk Express, JWT
Payment:          Stripe 17.5.0
File Upload:      Multer 1.4.5
Cloud Storage:    Cloudinary 2.5.1
Password Hash:    Bcrypt 5.1.1
Webhooks:         Svix 1.42.0
Environment:      Dotenv 16.4.7
Dev Server:       Nodemon 3.1.7
CORS:             CORS 2.8.5
```

---

## 📁 Project Structure

```
lms-full-stack/
│
├── 📂 client/                          # Frontend React Application
│   ├── 📄 package.json                 # Client dependencies
│   ├── 📄 vite.config.js               # Vite configuration
│   ├── 📄 tailwind.config.js           # Tailwind CSS configuration
│   ├── 📄 postcss.config.js            # PostCSS configuration
│   ├── 📄 eslint.config.js             # ESLint configuration
│   ├── 📄 vercel.json                  # Vercel deployment config
│   ├── 📄 index.html                   # HTML entry point
│   │
│   └── src/                            # Source code
│       ├── 📄 main.jsx                 # React entry point
│       ├── 📄 App.jsx                  # Main App component
│       ├── 📄 index.css                # Global styles
│       │
│       ├── 📂 assets/                  # Static assets
│       │   └── assets.js               # Asset imports/constants
│       │
│       ├── 📂 components/              # Reusable components
│       │   ├── educator/               # Educator components
│       │   │   ├── Navbar.jsx          # Educator navigation
│       │   │   ├── SideBar.jsx         # Educator sidebar menu
│       │   │   └── Footer.jsx          # Educator footer
│       │   │
│       │   └── student/                # Student components
│       │       ├── Navbar.jsx          # Student navigation
│       │       ├── Footer.jsx          # Student footer
│       │       ├── Hero.jsx            # Landing page hero
│       │       ├── SearchBar.jsx       # Course search
│       │       ├── CourseCard.jsx      # Course card component
│       │       ├── CoursesSection.jsx  # Courses grid view
│       │       ├── CallToAction.jsx    # CTA component
│       │       ├── Companies.jsx       # Partner companies
│       │       ├── Rating.jsx          # Star rating component
│       │       ├── TestimonialsSection.jsx  # User testimonials
│       │       └── Loading.jsx         # Loading spinner
│       │
│       ├── 📂 context/                 # React Context
│       │   └── AppContext.jsx          # Global app state
│       │
│       └── 📂 pages/                   # Page components
│           ├── educator/               # Educator pages
│           │   ├── Educator.jsx        # Educator dashboard
│           │   ├── Dashboard.jsx       # Main dashboard
│           │   ├── AddCourse.jsx       # Create course form
│           │   ├── MyCourses.jsx       # Educator's courses list
│           │   └── StudentsEnrolled.jsx # Enrolled students view
│           │
│           └── student/                # Student pages
│               ├── Home.jsx            # Landing page
│               ├── CoursesList.jsx     # All courses listing
│               ├── CourseDetails.jsx   # Detailed course view
│               ├── MyEnrollments.jsx   # Enrolled courses
│               └── Player.jsx          # Video player page
│
├── 📂 server/                          # Backend Express Application
│   ├── 📄 package.json                 # Server dependencies
│   ├── 📄 server.js                    # Express server entry point
│   ├── 📄 vercel.json                  # Vercel deployment config
│   │
│   ├── 📂 configs/                     # Configuration files
│   │   ├── mongodb.js                  # MongoDB connection
│   │   ├── cloudinary.js               # Cloudinary setup
│   │   └── multer.js                   # File upload configuration
│   │
│   ├── 📂 models/                      # Database schemas
│   │   ├── User.js                     # User model
│   │   ├── Course.js                   # Course model
│   │   ├── CourseProgress.js           # Student progress tracking
│   │   └── Purchase.js                 # Transaction records
│   │
│   ├── 📂 controllers/                 # Business logic
│   │   ├── userController.js           # User operations
│   │   ├── courseController.js         # Course operations
│   │   ├── educatorController.js       # Educator operations
│   │   └── webhooks.js                 # Clerk & Stripe webhooks
│   │
│   ├── 📂 routes/                      # API endpoints
│   │   ├── userRoutes.js               # User routes
│   │   ├── courseRoute.js              # Course routes
│   │   └── educatorRoutes.js           # Educator routes
│   │
│   └── 📂 middlewares/                 # Custom middlewares
│       └── authMiddleware.js           # Authentication middleware

```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (Local or Atlas cloud)
- **Git**

### Environment Variables

#### Server (.env)

Create a `.env` file in the `server/` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/lms_db

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Cloudinary (Media Storage)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Stripe (Payment)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# JWT
JWT_SECRET=your_jwt_secret_key

# Server
PORT=4000
NODE_ENV=development
```

#### Client (.env.local)

Create a `.env.local` file in the `client/` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:4000/api
```

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd lms-full-stack
```

### Step 2: Setup Backend

```bash
cd server

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run server

# Or start production server
npm start
```

The server will run on `http://localhost:4000`

### Step 3: Setup Frontend

```bash
cd client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

The client will run on `http://localhost:5175`

### Step 4: Access the Application

- **Frontend**: [http://localhost:5175(http://localhost:5175)
- **Backend API**: [http://localhost:4000](http://localhost:4000)

---

## 📡 API Endpoints

### **User Routes** (`/api/user`)

- `GET /profile` - Get current user profile
- `POST /update` - Update user information
- `GET /enrollments` - Get student enrollments
- `POST /enroll` - Enroll in a course

### **Course Routes** (`/api/course`)

- `GET /` - Get all courses
- `GET /:id` - Get course details
- `GET /search` - Search courses
- `POST /rate` - Rate a course
- `GET /:id/progress` - Get course progress

### **Educator Routes** (`/api/educator`)

- `POST /create-course` - Create new course
- `GET /my-courses` - Get educator's courses
- `PUT /course/:id` - Update course
- `DELETE /course/:id` - Delete course
- `GET /enrolled-students` - View enrolled students
- `POST /course/:id/publish` - Publish course

### **Webhooks**

- `POST /clerk` - Clerk authentication webhook
- `POST /stripe` - Stripe payment webhook

---

## 🔐 Authentication Flow

1. **User Registration/Login** → Clerk handles authentication
2. **Clerk to Application DB** → User data synced via webhooks
3. **JWT Token Generation** → Secure API communication
4. **Protected Routes** → Middleware validates authentication
5. **Role-Based Access** → Different UI/routes for Educator vs Student

---

## 💳 Payment Integration

### Stripe Flow

1. Student initiates course purchase
2. Stripe payment modal displays
3. Payment processing via Stripe
4. Webhook confirms transaction
5. Course access granted upon payment success
6. Purchase record stored in Database

---

## 🗄️ Database Schema Overview

### User Model

```
{
  clerkId: String (unique),
  email: String,
  name: String,
  role: 'student' | 'educator',
  profileImage: String,
  createdAt: Date
}
```

### Course Model

```
{
  title: String,
  description: String,
  educatorId: ObjectId → User,
  price: Number,
  thumbnail: String,
  duration: Number,
  content: [{ video, title, description }],
  rating: Number,
  studentsEnrolled: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### CourseProgress Model

```
{
  studentId: ObjectId → User,
  courseId: ObjectId → Course,
  videosWatched: [VideoId],
  progressPercent: Number,
  completedAt: Date
}
```

### Purchase Model

```
{
  studentId: ObjectId → User,
  courseId: ObjectId → Course,
  amount: Number,
  stripeTransactionId: String,
  status: 'pending' | 'completed' | 'failed',
  purchasedAt: Date
}
```

---

## 🎨 Styling Architecture

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation and optimization
- **Responsive Design** - Mobile-first approach
- **Component Modularity** - Isolated, reusable styles

### Custom Tailwind Configuration

Located in `client/tailwind.config.js` for theme customization.

---

## 🔒 Security Features

✅ **Password Encryption** - Bcrypt hashing
✅ **JWT Authentication** - Secure token-based auth
✅ **Clerk Integration** - Enterprise-grade auth
✅ **CORS Enabled** - Cross-origin request handling
✅ **Webhook Verification** - Svix for secure webhooks
✅ **Environment Variables** - Sensitive data protection
✅ **Role-Based Access** - Educator/Student separation

---

## 📊 Key Dependencies

| Package      | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| React        | 18.3.1  | UI Framework            |
| Vite         | 5.4.10  | Build tool & dev server |
| Express      | 4.21.2  | Backend framework       |
| MongoDB      | 8.8.4   | Database                |
| Tailwind     | 3.4.15  | Styling                 |
| Clerk        | 5.17.1  | Authentication          |
| Stripe       | 17.5.0  | Payments                |
| Cloudinary   | 2.5.1   | Media storage           |
| Axios        | 1.7.8   | HTTP client             |
| React Router | 7.0.1   | Client-side routing     |

---

## 🚀 Deployment

### Vercel Deployment

Both client and server include `vercel.json` configuration files for easy deployment:

**Frontend:**

```bash
cd client
vercel deploy
```

**Backend:**

```bash
cd server
vercel deploy
```

### Environment Variables for Production

Ensure all `.env` variables are configured in your hosting platform's configuration panel.

---

## 🐛 Troubleshooting

### MongoDB Connection Error

- Verify MongoDB is running
- Check `MONGODB_URI` in `.env`
- Ensure network access is allowed (for Atlas)

### Clerk Authentication Not Working

- Verify Clerk keys in `.env` files
- Check webhook endpoint configuration in Clerk dashboard
- Clear browser cache and cookies

### Video Embedded Not Loading

- Verify YouTube video IDs are correct
- Check for CORS issues
- Ensure React YouTube is properly installed

### File Upload Issues

- Check Cloudinary credentials
- Verify file size limits
- Ensure Multer configuration is correct

---

## 📈 Performance Optimization

✅ **Code Splitting** - Lazy loading with React Router
✅ **Image Optimization** - Cloudinary transformation
✅ **Caching** - Browser and server-side caching
✅ **Database Indexing** - MongoDB indexes on frequent queries
✅ **CDN** - Vercel/Static asset delivery

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow existing code style
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📞 Support & Contact

For bugs, features, or questions:

- 📧 Email: [malikjalihal123@gmail.com]
- 🐛 Issues: [GitHub Issues](#)
- 💬 Discussions: [GitHub Discussions](#)

---

## 🙏 Acknowledgments

- **Clerk** - Modern authentication
- **Stripe** - Payment processing
- **Cloudinary** - Media management
- **MongoDB** - Database solution
- **React** - UI framework
- **Tailwind CSS** - Styling framework

---

<div align="center">

**Built with ❤️ for educators and students**

[⬆ back to top](#-lms-full-stack---learning-management-system)

</div>
