import { Schema, model, connection } from "mongoose";

type UserType = {
  email: string;
  age: number;
  interests: string[];
  name: {
    first: string;
    last: string;
  };
};

const schema = new Schema<UserType>({
  email: { type: String, required: true },
  age: { type: Number, required: true },
  interests: [String],
  name: {
    first: { type: String, required: true },
    last: String,
  },
});

const modelName = "User";

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<UserType>(modelName, schema);

// export default model<UserType>(modelName, schema);
