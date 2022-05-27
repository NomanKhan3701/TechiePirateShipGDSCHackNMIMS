const AdminData = (req, res) => {
  try {
    res.status(200).send("Successfull request");
  } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = AdminData;
