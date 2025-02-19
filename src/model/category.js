import mongoose from "mongoose";

// Catergory Schema

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
