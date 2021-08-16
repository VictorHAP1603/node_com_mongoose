import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const db_connect = async () => {
  try {
    await connect(process.env.MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Erro: ", error);
  }
};
