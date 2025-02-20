import { Customer, DeliveryPartner } from "../../model/index.js";

export const updateUSer = async (req, reply) => {
  try {
    const { userId } = req.body;
    const updateData = req.body; // location that is to be updated afer being fetched from the body

    let user =
      (await Customer.findById(userId)) ||
      (await DeliveryPartner.findById(userId));

    if (!user) {
      return reply.status(404).send({ message: "User not found" });
    }
    let UserModal;

    if (user.role === "Customer") {
      UserModal = Customer;
    } else if (user.role === "Delivery Partner") {
      UserModal = DeliveryPartner;
    } else {
      return reply.status(400).send({ messag: "Invalid user role" });
    }

    const updatedUser = await UserModal.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return reply.status(404).send({ message: "User not found" });
    }

    return reply.send({
      messag: "User updated sucessfully",
      user: updatedUser,
    });
  } catch (error) {
    return reply.status(500).send({ message: "Failed to update user", error });
  }
};
