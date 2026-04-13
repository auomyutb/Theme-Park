const Ride = require('../models/Ride')

// get
const getRides = async (req, res) => {
  try{
  const rides = await Ride.find()
  res.json(rides)
}catch (error){
  res.status(500).json ({message: error.message})
}}

// post
const createRide = async (req, res) => {
  try{
  const newRide = await Ride.create(req.body)
  res.status(201).json (newRide)
} catch (error) {
  res.status (400).json ({message: error.message})
}}

// delete
const deleteRide = async (req, res) => {
  try{
  await Ride.findByIdAndDelete(req.params.id)
  res.json ({message: "User deleted"})
  } catch (error) {
    res.status (500).json ({message:error.message})
  }
}

module.exports = {
  getRides,
  createRide,
  deleteRide
}
