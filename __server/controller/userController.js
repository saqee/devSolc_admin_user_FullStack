import userModel from "../model/userModel.js"
import Jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import userRequestModel from "../model/userSubmitRequest.js"
import userFeedbackModel from "../model/userFeedback.js"

export const userRegisterCtr = async (req, res) => {
  try {
    const existingEmail = await userModel.findOne({ email: req.body.email })
    if (existingEmail) {
      return res.status(400).send({
        success: false,
        message: `email is already exits`,
      })
    } else {
      const password = req.body.password
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)
      req.body.password = hashPassword
      const newUser = new userModel(req.body)
      console.log(req.body)
      await newUser.save()
      return res.status(200).send({
        success: true,
        message: `registration successfully complete`,
      })
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const userLoginCtr = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email })

    if (!existingUser) {
      return res.status(400).send({
        success: false,
        message: `user not found`,
      })
    } else {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        existingUser.password
      )
      if (!checkPassword) {
        return res.status(400).send({
          success: false,
          message: `user email or password does not match`,
        })
      } else {
        const token = Jwt.sign({ id: existingUser._id }, process.env.SECRET, {
          expiresIn: "7d",
        })
        existingUser.password = undefined
        return res.status(200).send({
          success: true,
          message: `login successfull`,
          data: existingUser,
          token: token,
        })
      }
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const userProfileCtr = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId)
    user.password = undefined
    return res.status(200).send({
      success: true,
      message: `profile of ${user.username}`,
      data: user,
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const userProfileUpdateCtr = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: req.body.userId },
      req.body
    )

    return res.status(200).send({
      success: true,
      message: `profile of ${user.username}`,
      data: user,
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const userSubmitRequestCtr = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.userId })

    const result = await userRequestModel.create({
      ...req.body,
      userId: req.userId,
    })
    return res.status(200).send({
      success: true,
      message: `${user.username} your request is being sent successfully to our system`,
      data: result,
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const userFeedbackCtr = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.userId })

    const result = await userFeedbackModel.create({
      ...req.body,
      userId: req.userId,
    })
    return res.status(200).send({
      success: true,
      message: `${user.username} your feedback is being sent successfully to our system`,
      data: result,
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const getAllUserRequestCtr = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.userId })
    if (user.isAdmin) {
      const result = await userRequestModel.find({})
      return res.status(200).send({
        success: true,
        message: `all submission of users request`,
        data: result,
      })
    } else {
      return res.status(400).send({
        success: false,
        message: `something went wrong`,
      })
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}

export const getAllUserFeedbackCtr = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.userId })
    if (user.isAdmin) {
      const result = await userFeedbackModel.find({})
      return res.status(200).send({
        success: true,
        message: `all submission of users request`,
        data: result,
      })
    } else {
      return res.status(400).send({
        success: false,
        message: `something went wrong`,
      })
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: `something went wrong`,
    })
  }
}
