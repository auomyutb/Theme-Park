const Ride = require('../models/Ride')

// GET
const GetRides = async (req, res) => {
  const rides = await Ride.find()
  res.send(rides)
}

// POST
const CreateRide = async (req, res) => {
  const ride = await Ride.create(req.body)
  res.send(ride)
}

// DELETE
const DeleteRide = async (req, res) => {
  await Ride.findByIdAndDelete(req.params.id)
  res.send({ msg: "Deleted" })
}

module.exports = {
  GetRides,
  CreateRide,
  DeleteRide
}