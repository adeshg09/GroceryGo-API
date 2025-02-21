// route to fetch products from a  specific categoey only

import Product from "../../model/products.js";

export const getProductsByCategoryId = async (req, reply) => {
  const { categoryId } = req.params;
  try {
    // try block fetches all the products from the category whose categoryId
    // is being sent while also sending all the fields from database for
    // a producrt except for category
    const producst = await Product.find({ category: categoryId })
      .select("-category") // return all fields from database excluding category
      .exec(); // execte the query wirh above condition

    return reply.send(producst); // sends all the details of products of specified categpryId
  } catch (error) {
    return reply.status(500).send({ message: "An error occured", error });
  }
};
