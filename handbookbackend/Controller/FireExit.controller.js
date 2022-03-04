const FireExit = require("../Models/Form/FireExit")


exports.createFireExit = async (req, res) => {
  try {
    const {userId, location } = req.body;
    if (!location||!userId) {
      return res.status(400).json({
        sucesss: false,
        error: "Please include this field"
      });
    }
    const fireexit = new FireExit(req.body);
    await fireexit
      .save()
      .then((data) => {
        if (data) {
          return res.status(200).json({
            sucesss: true,
            msg: "FireExit successfully created",
            data
          })
        }
      })
      .catch((err) => {
        // console.log(err);
        return res.status(400).json({
          sucesss: false,
          err: "Fireexit is not created"
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

exports.getFireExit = (req, res) => {
  try {
    const { _id } = req.body;
    FireExit.findOne({ _id }, (err, resp) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: "no fireexit found"
        });
      }
      else if (!FireExit) {
        return res.status(400).json({
          success: false,
          err: "fireexit not found"
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


exports.getAllFireExit = async (req, res) => {
  try {
    const fireexitData = await FireExit.find({});
    return res.status(200).json({
      success: true,
      data: fireexitData
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "no input"
    })
  }
}

exports.updateFireExit = async (req, res) => {
  FireExit.findOne({ _id: req.body._id }, async (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err: "No fireexit found...",
      });
    }

    if (req.body.location) {
      data.location = req.body.location
    }
       await FireExit.findOneAndUpdate(
      { _id: req.body._id },
      data,
      (err, respo) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err: "No fireexit path found...",
          });
        } else {
          return res.status(200).json({
            success: true,
            data: respo
          });
        }
      });
  });
}

exports.deleteFireExit = async (req, res) => {
  try {
    const { _id } = req.body;
    await FireExit.findOneAndDelete({ _id })
      .then((data) => {
        if (data) {
          return res.status(200).json({
            success: true,
            msg: "Fire Exit Deleted"
          })
        }
      })
      .catch((err) => {
        return res.status(200).json({
          success: false,
          msg: "Fire Exit issssss not Deleted"
        })
      })
  }
   catch (error) {
    return res.status(400).json({
      success: false,
      error: "something is wrong"
    })
  }
}

