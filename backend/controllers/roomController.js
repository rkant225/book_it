import Room from "../models/room";
import ApiFeature from "../utils/apiFeature";
import ErrorHandler from "../utils/errorHandler";

// Get All Rooms
export const getAllRooms = async (req, res, next) => {
  const recordsPerPage = Number(req?.query?.recordsPerPage) || 4;
  const totalRecords = await Room.countDocuments();
  const currentPage = Number(req?.query?.page) || 1;
  const apiFeatures = new ApiFeature(Room, req.query)
    .search()
    .filter()
    .paginate(recordsPerPage, currentPage);

  const rooms = await apiFeatures?.query;

  res.status(200).json({
    success: true,
    totalRecords: totalRecords || 0,
    recordsPerPage: recordsPerPage,
    page: currentPage,
    count: rooms?.length || 0,
    rooms: rooms || [],
  });
};

// Get single Room
export const getSingleRoom = async (req, res, next) => {
  const roomId = req.query.roomId;
  const room = await Room.findById(roomId);
  if (room) {
    res.status(200).json({
      success: true,
      room: room,
    });
  } else {
    next(new ErrorHandler("Room not found with this ID", 404));
  }
};

// Create new Room
export const cerateNewRoom = async (req, res, next) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room: room,
  });
};

// Update Room
export const updateRoom = async (req, res, next) => {
  const roomId = req.query.roomId;
  const room = await Room.findById(roomId);
  if (room) {
    const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      room: updatedRoom,
    });
  } else {
    next(new ErrorHandler("Room not found with this ID", 404));
  }
};

// Delete the Room
export const deleteRoom = async (req, res, next) => {
  const roomId = req.query.roomId;
  const room = await Room.findById(roomId);
  if (room) {
    await room.remove();

    res.status(200).json({
      success: true,
    });
  } else {
    next(new ErrorHandler("Room not found with this ID", 404));
  }
};
