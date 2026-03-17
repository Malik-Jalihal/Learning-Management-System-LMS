import express from "express";
import {
  addUserRating,
  getUserCourseProgress,
  getUserData,
  purchaseCourse,
  updateUserCourseProgress,
  userEnrolledCourses,
} from "../controllers/userController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

// Get User Data (Protected)
userRouter.get("/data", protectRoute, getUserData);

// Purchase Course
userRouter.post("/purchase", protectRoute, purchaseCourse);

// Get Enrolled Courses
userRouter.get("/enrolled-courses", protectRoute, userEnrolledCourses);

// Update Course Progress
userRouter.post("/update-course-progress", protectRoute, updateUserCourseProgress);

// Get Course Progress
userRouter.post("/get-course-progress", protectRoute, getUserCourseProgress);

// Add Rating
userRouter.post("/add-rating", protectRoute, addUserRating);

export default userRouter;