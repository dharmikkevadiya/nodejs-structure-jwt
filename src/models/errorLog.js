const { model, Schema } = require("mongoose");

const ErrorLogSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    desc: { type: String },
    img: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

let ErrorLog = new model("ErrorLog", ErrorLogSchema);
module.exports = ErrorLog;
