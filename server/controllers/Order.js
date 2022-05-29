const { Order, validate } = require("../models/Order");
const generateUniqueId = require("generate-unique-id");
const { FoodItem } = require("../models/FoodItem");
const AddOrder = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const id = generateUniqueId({length:15});
   
    const { error } = validate({...req.body,"OrderId":id,Status:"Ongoing"});
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    //   const order = await Order.findOne({ OrderId: req.body.OrderId,OrderedBy:req.body.OrderedBy,Status:"Ongoing" });
    await new Order({...req.body,OrderId:id,Status:"Ongoing",OrderDate:new Date}).save();
>>>>>>> 7c61dcf18526971e88f232db05de759d0e3b68fb
    res.status(201).send({ message: "Order Placed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const GetOrders = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    if(req.query.SortBy=="All")
    {
    const orders = await Order.find({});
    res.send(orders);
    }
    else if(req.query.SortBy=="Ongoing")
    {
      const orders=await Order.find({Status:"Ongoing"})
      res.send(orders)
    }
    else if(req.query.SortBy=="Completed")
    {
      const orders = await Order.find({ Status: "Complete" });
      res.send(orders);
    }

>>>>>>> 7c61dcf18526971e88f232db05de759d0e3b68fb
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const SetOrder = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    if(req.body.Type==="Complete")
    {
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
    }
    else if(req.body.Type==="Paid")
    {
       Order.updateOne(
         { OrderId: req.body.OrderId },
         { Paid:true },
         function (err, docs) {
           if (err) {
             res.send(err);
           } else {
             res.status(200).send(docs);
           }
         }
       );
    }

>>>>>>> 7c61dcf18526971e88f232db05de759d0e3b68fb
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
    console.log(req.body.Items)
   const Food= await FoodItem.find({ItemId: {
      $in: req.body.Items,
   }});
   Prices = Food.map((food) => {
     return food.Price;
   });
   res.status(200).send(Prices)
   // req.Items ->ItemID
   //req.Quantity ->Quantites
   //req.Price ->Price 
  } catch (error) {
     res.status(500).send({ message: "Internal Server Error" });
  }

}
module.exports = { AddOrder, GetOrders, SetOrder, TerminateOrder, PayOrder,MakePayment };
