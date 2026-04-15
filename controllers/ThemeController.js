const Theme = require('../models/Theme')

// this is get  .. when need to show data
const getThemes = async (req, res) => {
  try {
    const themes = await Theme.find()
    res.json(themes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// this is post   here create new data
const createTheme = async (req, res) => {
  try {
    const newTheme = await Theme.create(req.body)
    res.status(201).json(newTheme)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//this is delete
const deleteTheme = async (req, res) => {
  try {
    await Theme.findByIdAndDelete(req.params.id)
    res.json({ message: "Theme deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



module.exports = {
  getThemes,
  createTheme,
  deleteTheme,
  
}
