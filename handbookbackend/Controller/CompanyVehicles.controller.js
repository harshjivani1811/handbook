const CompanyVehicles = require("../Models/Form/CompanyVehicles")


exports.createCompanyVehicles = async (req, res) => {
  try {
    const { userId, isCompanyVehicle, isGpsSystem } = req.body;
    if (!isCompanyVehicle || !isGpsSystem || !userId) {
      return res.status(400).json({
        sucesss: false,
        error: "Please include this field"
      });
    }
    const companyvehicles = new CompanyVehicles(req.body);
    await companyvehicles

      .save()
      .then((data) => {
        if (data) {
          return res.status(200).json({
            sucesss: true,
            msg: "CompanyVehicles successfully created",
            data
          })
        }
      })
      .catch((err) => {
        // console.log(err, "testas");
        return res.status(400).json({
          sucesss: true,
          err: "CompanyVehicles is not created"
        })
      })
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      error: "something went wrong"
    })
  }
}

exports.getCompanyVehicles = (req, res) => {
  try {
    const { _id } = req.body;
    CompanyVehicles.findOne({ _id }, (err, resp) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: "no CompanyVehicles found"
        });
      }
      else if (!CompanyVehicles) {
        return res.status(400).json({
          success: false,
          err: "CompanyVehicles not found"
        })
      }
      else {
        return res.status(200).json({
          success: true,
          data: resp
        })
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "something wrong"
    })
  }
}


exports.getAllCompanyVehicles = async (req, res) => {
  try {
    const companyvehiclesData = await CompanyVehicles.find({});
    return res.status(200).json({
      success: true,
      data: companyvehiclesData
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "no input"
    })
  }
}

exports.updateCompanyVehicles = async (req, res) => {
  CompanyVehicles.findOne({ _id: req.body._id }, async (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err: "No CompanyVehicles found...",
      });
    }

    if (req.body.isCompanyVehicle) {
      data.isCompanyVehicle = req.body.isCompanyVehicle
    }
    if (req.body.isGpsSystem) {
      data.isGpsSystem = req.body.isGpsSystem
    }
    await CompanyVehicles.findOneAndUpdate(
      { _id: req.body._id },
      data,
      (err, respo) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err: "No CompanyVehicles found...",
          });
        }
        return res.status(200).json({
          success: true,
          data: respo
        });
      });
  });
}

exports.deleteCompanyVehicles = async (req, res) => {
  try {
    const { _id } = req.body;
    await CompanyVehicles.findOneAndDelete({ _id })
      .then((data) => {
        if (data) {
          return res.status(200).json({
            success: true,
            msg: "CompanyVehicles Deleted"
          })
        }
      })
      .catch((err) => {
        return res.status(200).json({
          success: false,
          msg: "CompanyVehicles is not Deleted"
        })
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "CompanyVehicles not deleted"
    })
  }
}

