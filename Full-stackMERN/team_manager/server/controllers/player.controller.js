const PLayer = require("../models/model.player");

module.exports.FindAllPlayers = (req, res) => {
  PLayer.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//create New

module.exports.CreatNewPlayer = (req, res) => {
  PLayer.create(req.body)
    .then((Createplayer) => {
      res.json({ new: Createplayer });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//delete player

module.exports.deleteOnePlayer = (req, res) => {
  PLayer.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//update

module.exports.updateExistingPlayer = (req, res) => {
  PLayer.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      res.json({ done: result });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
