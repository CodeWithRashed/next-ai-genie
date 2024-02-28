import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  promptCount: {
    type: Number,
    required: true,
  },
  promptUsed: {
    type: Number,
    default: 0
  },
  packageFor: {
    type: String,
    required: true
  },
  packagePrice: {
    type: Number,
  },
  
});

const Package = mongoose.models.Package || mongoose.model("Package", packageSchema);
export default Package;
