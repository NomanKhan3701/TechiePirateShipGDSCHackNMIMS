const { Order, validate } = require("../models/Order");

const AddOrder = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    //   const order = await Order.findOne({ OrderId: req.body.OrderId,OrderedBy:req.body.OrderedBy,Status:"Ongoing" });
    await new Order(req.body).save();
    res.status(201).send({ message: "Order Placed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const GetOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const SetOrder = async (req, res) => {
  try {
    Order.updateOne(
      { OrderId: req.body.OrderId },
      { Status: "Complete" },
      function (err, docs) {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(docs);
        }
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const PayOrder = async (req, res) => {
  try {
    Order.updateOne(
      { OrderId: req.body.OrderId },
      { Paid: true },
      function (err, docs) {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(docs);
        }
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const TerminateOrder = async (req, res) => {
  try {
    Order.updateOne(
      { OrderId: req.body.OrderId },
      { Status: "Cancelled" },
      function (err, docs) {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(docs);
        }
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = { AddOrder, GetOrders, SetOrder, TerminateOrder, PayOrder };
