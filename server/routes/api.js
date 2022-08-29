const express = require("express");
const router = express.Router();
const axios = require("axios");
//to recive obj/data from post
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
//////////////////////
const Bank = require("../models/transaction");
const { remove } = require("../models/transaction");
const bank = require("../models/transaction");
//بقرأ من داتا بيس
router.get("/transactions", function (req, res) {
  Bank.find({}, function (err, transactions) {
    res.send(transactions);
  });
});


//بخزن في داتا بيس
router.post("/transaction", function (req, res) {
  console.log(req.body);
  const transaction = new Bank({
    amount: req.body.amount,
    vendor: req.body.vendor,
    category: req.body.category,
  });
  transaction.save();
  res.end();
});

router.delete("/transaction/:transactionId", function (req, res) {
  Bank.findByIdAndDelete(req.params.transactionId)

});
module.exports = router;
