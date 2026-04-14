# 🚀 Build a Public File Sharing Website with MERN Stack | Upload, Download & Delete Files (2026)

## Overview
Build a fully functional **public file sharing web application** from scratch using the MERN Stack (MongoDB, Express, React, Node.js) with Cloudinary for cloud file storage. Learn how to structure a professional full stack file hosting platform — where anyone can upload and download files, and a unique **4-digit delete code** protects file deletion.

---

## ✨ Key Features

### 📁 File Upload & Storage
- **Cloudinary Integration** — Files are uploaded and stored securely on Cloudinary
- **Multi-Type Support** — Upload images (JPG, PNG, JPEG), PDFs, and other common file types
- **File Size Limit** — Maximum 10MB per file upload enforced on both frontend and backend
- **Multer Middleware** — Handles multipart/form-data file parsing before Cloudinary upload
- **Instant Public Access** — Uploaded files are immediately visible to all users, no login required

### 🌐 Public File Access (Main Feature)
- **Zero Authentication** — Anyone can view, browse, and download files without an account
- **Row Card Layout** — Files displayed in a clean, responsive card-based row layout
- **File Metadata Display** — Each card shows file name, file size, and upload date
- **Real-Time File List** — Fetches and renders all uploaded files from MongoDB on load

### ⬇️ Download Feature
- **One-Click Download** — Each file card has a dedicated download button
- **Direct Cloudinary Download** — Files are served and downloaded directly from Cloudinary CDN

### 🔐 4-Digit Delete Code System (Unique Feature)
- **Global Delete Code** — A single shared 4-digit code protects all file deletions
- **Modal-Based Verification** — Clicking delete opens a popup asking for the code
- **Dual Deletion** — On correct code, file is removed from both Cloudinary and MongoDB
- **Error Feedback** — Incorrect code displays a clear error message inside the modal
- **No Accidental Deletes** — Code gate prevents unintentional or unauthorized file removal

### 🏗 Architecture & Code Quality
- **Clean Folder Structure** — Separated models, controllers, routes, config, and middleware
- **MVC Pattern** — Models handle data, controllers handle logic, routes handle traffic
- **Consistent API Response** — Every response follows `{ success, message, data }` pattern
- **Centralized Error Handling** — Global error middleware keeps controllers clean
- **Environment Variables** — Sensitive Cloudinary and MongoDB config isolated in `.env`

### 🎨 Frontend & UX
- **React Hooks** — Functional components with `useState`, `useEffect` throughout
- **Axios API Calls** — Clean, centralized HTTP requests to the backend
- **Upload Component** — Large centered "Select File" button for an intuitive upload experience
- **Delete Modal Popup** — Clean overlay modal for 4-digit code verification
- **Loading & Error States** — Every async action handled with loading → success → error flow
- **Responsive Design** — Works seamlessly across desktop, tablet, and mobile
- **Modern UI** — Clean design inspired by Google Drive and Dropbox

---

## 🛠 Technologies Used

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | REST API framework and routing |
| **MongoDB** | NoSQL database for file metadata storage |
| **Mongoose** | MongoDB object modeling and schema definition |
| **Cloudinary** | Cloud storage for file upload, hosting, and deletion |
| **Multer** | Multipart form-data parsing for file uploads |
| **dotenv** | Environment variable management |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React JS** | Component-based UI architecture |
| **React Hooks** | State and lifecycle management |
| **Axios** | HTTP requests to the backend REST API |
| **Tailwind CSS** | Utility-first responsive styling |
| **React Icons** | Icon library for file type and action icons |
| **Vite** | Fast development server and build tool |

---

## 📁 Folder Structure

```
📦 Project Root
│
├── 🗂 backend/
│   ├── config/
│   │   ├── db.js                  # MongoDB connection
│   │   └── cloudinary.js          # Cloudinary configuration
│   ├── controllers/
│   │   └── fileController.js      # Upload, fetch, delete logic
│   ├── middleware/
│   │   ├── uploadMiddleware.js    # Multer file parsing
│   │   └── errorMiddleware.js     # Global error handler
│   ├── models/
│   │   └── File.js                # Mongoose file schema
│   ├── routes/
│   │   └── fileRoutes.js          # /api file endpoints
│   ├── .env                       # Environment variables
│   └── server.js                  # App entry point
│
└── 🗂 frontend/
    └── src/
        ├── pages/
        │   └── Home.jsx           # Main file listing page
        ├── components/
        │   ├── FileUpload.jsx     # Upload button component
        │   ├── FileCard.jsx       # Individual file display card
        │   └── DeleteModal.jsx    # 4-digit code modal popup
        ├── services/
        │   └── api.js             # Centralized Axios API config
        ├── App.jsx                # Root component + routes
        └── main.jsx               # React entry point
```

---

## 🗄 MongoDB Schema

```js
const fileSchema = new mongoose.Schema({
  fileName:   { type: String, required: true },
  fileUrl:    { type: String, required: true },   // Cloudinary URL
  publicId:   { type: String, required: true },   // Cloudinary public ID for deletion
  fileType:   { type: String, required: true },
  fileSize:   { type: Number, required: true },
  deleteCode: { type: String, required: true },   // 4-digit shared delete code
  createdAt:  { type: Date, default: Date.now }
});
```

---

## 📡 API Reference

### File Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/api/files/upload` | Upload a file to Cloudinary + save metadata | Public |
| `GET` | `/api/files` | Fetch all uploaded files from MongoDB | Public |
| `DELETE` | `/api/files/:id` | Delete file from Cloudinary + MongoDB (requires delete code) | Public (code-gated) |

### Response Pattern
```json
✅ Success
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "fileName": "document.pdf",
    "fileUrl": "https://res.cloudinary.com/...",
    "fileSize": 204800,
    "fileType": "application/pdf",
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
}

❌ Error
{
  "success": false,
  "message": "Invalid delete code"
}
```

---

## 🎯 Learning Outcomes

### 📦 File Handling & Cloud Storage
- Integrate Cloudinary for file upload, hosting, and programmatic deletion
- Use Multer to parse multipart form-data on the Express server
- Store and retrieve file metadata (URL, public ID, size, type) in MongoDB
- Enforce file size limits at the middleware level

### 🏗 Backend Architecture
- Structure a professional MVC Node.js/Express project from scratch
- Separate concerns across models, controllers, routes, and middleware
- Write consistent API responses with proper HTTP status codes
- Handle errors globally with dedicated error middleware
- Connect and configure MongoDB with Mongoose

### ⚛️ Frontend Development
- Build a file upload UI component with drag-and-drop and button support
- Fetch and render a dynamic file list from a REST API using Axios
- Build a modal component for user input (delete code verification)
- Handle loading, success, and error states on every async action
- Display file metadata (name, size, date) cleanly in card components

### 🧠 Real-World Patterns
- Design a public-access platform with no authentication requirement
- Implement a lightweight code-based access control system (delete code)
- Apply clean, scalable folder structure used in production apps
- Understand the full lifecycle: upload → store → display → download → delete

---

## 📽 Watch the Tutorial
🎥 **YouTube:** [https://youtu.be/Zp6GpFoiF7w]

---

## 👨‍💻 Author

**Frontend Mastery**
GitHub: [frontend-mastery12](https://github.com/frontend-mastery12)

---

> ⭐ If this project helped you, please consider giving it a star — it helps others find it too!
