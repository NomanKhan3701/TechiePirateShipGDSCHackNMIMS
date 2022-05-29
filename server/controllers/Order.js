const { Order, validate } = require("../models/Order");
const generateUniqueId = require("generate-unique-id");
const {FoodItem}= require("../models/FoodItem")
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const AddOrder = async (req, res) => {
  try {
    const id = generateUniqueId({ length: 15 });
    const { error } = validate({
      ...req.body,
      OrderedBy: String(req.body.OrderedBy),
      OrderId: id,
      Status: "Ongoing",
    });
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    //   const order = await Order.findOne({ OrderId: req.body.OrderId,OrderedBy:req.body.OrderedBy,Status:"Ongoing" });
    await new Order({
      ...req.body,
      OrderedBy: String(req.body.OrderedBy),
      OrderId: id,
      Status: "Ongoing",
      OrderDate: new Date(),
    }).save();
    res.status(201).send({ message: "Order Placed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const GetOrders = async (req, res) => {
  try {
    if (req.query.SortBy == "All") {
      const orders = await Order.find({});
      res.send(orders);
    } else if (req.query.SortBy == "Ongoing") {
      const orders = await Order.find({ Status: "Ongoing" });
      res.send(orders);
    } else if (req.query.SortBy == "Completed") {
      const orders = await Order.find({ Status: "Complete" });
      res.send(orders);
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const SetOrder = async (req, res) => {
  try {
    if (req.body.Type === "Complete") {
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
    } else if (req.body.Type === "Paid") {
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
    }
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
const MakePayment=async(req,res)=>{
  try {
   const Food= await FoodItem.find({ItemId: {
      $in: req.body.Items,
   }});
   Prices = Food.map((food) => {
     return food.Price;
   });

   try {
     const session = await stripe.checkout.sessions.create({
       payment_method_types: ["card"],
       mode: "payment",
       line_items: req.body.Items.map((item,key) => {
         return {
           price_data: {
             currency: "inr",
             product_data: {
               name: item.ItemId,
             },
             unit_amount:Prices[key]*100,
           },
           quantity: req.body.Quantity[key],
         };
       }),
       success_url: `${process.env.CLIENT_URL}/success.html`,
       cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
     });
     res.json({ url: session.url });
   } catch (e) {
     res.status(500).json({ error: e.message });
   }
   
   // req.Items ->ItemID
   //req.Quantity ->Quantites
   //Prices ->Price 
  } catch (error) {
     res.status(500).send({ message: "Internal Server Error" });
  }

}
module.exports = { AddOrder, GetOrders, SetOrder, TerminateOrder, PayOrder,MakePayment };
