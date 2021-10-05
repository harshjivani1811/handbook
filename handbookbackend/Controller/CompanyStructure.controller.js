const CompanyStructure = require("../Models/Form/CompanyStructure")


exports.createCompanyStructure= async (req, res) => {
  try {
    const {userId, R1 ,R2 ,R3 } = req.body;
    if (!userId || !R1 || !R2 || !R3) {
      return res.status(400).json({
        sucesss: false,
        error: "Please include this field"
      });
    }
    const companystructure = new CompanyStructure(req.body);
    await companystructure

      .save()
      .then((data) => {
        if (data) {
          return res.status(200).json({
            sucesss: true,
            msg: "CompanyStructure successfully created",
            data
          })
        }
      })
      .catch((err) => {
        return res.status(400).json({
          sucesss: false,
          err: "CompanyStructure is not created"
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

exports.getCompanyStructure = (req, res) => {
  try {
    const { _id } = req.body;
    CompanyStructure.findOne({ _id }, (err, resp) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: "no CompanyStructure found"
        });
      }
      else if (!CompanyStructure) {
        return res.status(400).json({
          success: false,
          err: "CompanyStructure not found"
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


exports.getAllCompanyStructure = async (req, res) => {
  try {
    const companystructureData = await CompanyStructure.find({});
    return res.status(200).json({
      success: true,
      data: companystructureData
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "no input"
    })
  }
}

exports.updateCompanyStructure = async (req, res) => {
    CompanyStructure.findOne({ _id: req.body._id }, async (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err: "No CompanyStructure found...",
      });
    }
     if (req.body.R1) {
      data.R1 = req.body.R1
    }
    if (req.body.R2) {
      data.R2 = req.body.R2
    }
    if (req.body.R3) {
      data.R3 = req.body.R3
    }
    await CompanyStructure.findOneAndUpdate(
      { _id: req.body._id },
      data,
      (err, respo) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err: "No HolidayPay found...",
          });
        }
        return res.status(200).json({
          success: true,
          data: respo
        });
      });
  });
}

exports.deleteCompanyStructure = async (req, res) => {
  try {
    const { _id } = req.body;
    await CompanyStructure.findOneAndDelete({ _id })
      .then((data) => {
          return res.status(200).json({
            success: TransformStreamDefaultController,
            msg: "companystructure Deleted"
          })
      })
      .catch((err) => {
        return res.status(200).json({
          success: false,
          msg: "companystructure is not Deleted"
        })
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "companystructure not deleted"
    })
  }
}

