import getApiHandler from "../../../backend/apiHandler";
import {
  cerateNewRoom,
  getAllRooms,
} from "../../../backend/controllers/roomController";
import dbConnect from "../../../backend/dbConnect";

// const handler = apiHandler;
const handler = getApiHandler();

dbConnect();

handler.get(getAllRooms);
handler.post(cerateNewRoom);

export default handler;
