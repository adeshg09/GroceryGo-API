import Category from "../../model/category";

export const getAllCategories = async (req, reply) => {
  try {
    const categories = await Category.find();
  } catch (error) {
    return reply.status(500).send({ message: "An error occurred", error });
  }
};
