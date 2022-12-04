import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Room name can not be empty."],
    trim: true,
    maxLength: [100, "Room name can not be more than 100 characters."],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Room price can not be empty."],
    default: 10.0,
  },
  description: {
    type: String,
    required: [true, "Room description can not be empty."],
  },
  address: {
    type: String,
    required: [true, "Room address can not be empty."],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Room guest capacity can not be empty."],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Room bed number can not be empty."],
  },
  category: {
    type: String,
    required: [true, "Room category can not be empty."],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category.",
    },
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakFast: {
    type: Boolean,
    default: false,
  },
  airConditionar: {
    type: Boolean,
    default: false,
  },
  petAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;
