import express from "express"
import {
  userRegisterCtr,
  userLoginCtr,
  userProfileCtr,
  userProfileUpdateCtr,
  userSubmitRequestCtr,
  userFeedbackCtr,
  getAllUserRequestCtr,
  getAllUserFeedbackCtr,
} from "../controller/userController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
const router = express.Router()
router.post("/register", userRegisterCtr)
router.post("/login", userLoginCtr)
router.post("/profile", authMiddleware, userProfileCtr)
router.post("/updateProfile", authMiddleware, userProfileUpdateCtr)
router.post("/submit-request", authMiddleware, userSubmitRequestCtr)
router.post("/submit-feedback", authMiddleware, userFeedbackCtr)

router.get("/user-all-request", authMiddleware, getAllUserRequestCtr)
router.get("/user-all-feedback", authMiddleware, getAllUserFeedbackCtr)
export default router
