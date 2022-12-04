import getApiHandler from "../../../backend/apiHandler";
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../backend/controllers/roomController";
import dbConnect from "../../../backend/dbConnect";

// const handler = apiHandler;
const handler = getApiHandler();

dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
