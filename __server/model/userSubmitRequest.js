import mongoose from "mongoose"

const userSubmitSchema = new mongoose.Schema(
  {
    websiteurl: {
      type: String,
      required: [true, "websiteurl is required "],
    },
    carturl: {
      type: String,
      required: [true, "carturl is  required "],
    },
    staus: {
      type: String,
      enum: ["pending", "working", "completed"],
      default: "pending",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
)

const userRequestModel = mongoose.model("userRequest", userSubmitSchema)
export default userRequestModel
