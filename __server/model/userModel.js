import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User username required "],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email required"],
    },

    password: {
      type: String,
      required: [true, "User password  required "],
    },
    address: {
      type: String,
      required: [true, "User   required address"],
    },
    phonenumber: {
      type: String,
      required: [true, "User phone number required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    notification: {
      type: Array,
      default: [],
    },
    seenNotification: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

const userModel = mongoose.model("user", userSchema)
export default userModel
