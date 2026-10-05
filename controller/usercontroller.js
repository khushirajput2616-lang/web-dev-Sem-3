import employee from "../database/data.js";

const getuser = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Data not fetched",
      error: error.message,
    });
  }
};

const createuser = (req, res) => {
  try {
    const { name, email, empID } = req.body;

    if (!name || !email || !empID) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email and empID",
      });
    }

    employee.push({ name, email, empID });

    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Data not created",
      error: error.message,
    });
    const update
  } 
};

export { getuser, createuser };