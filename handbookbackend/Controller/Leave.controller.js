const LeaveSchema = require('../Models/Leave')

exports.createLeaveSchema = async (req, res) => {
    try {
        const { title, description, companySize, stateId } = req.body;
        if (!title || !description || !companySize || !stateId) {
            return res.status(400).json({
                success: false,
                error: "please include all the fields first"
            });
        }

        const leaveschema = new LeaveSchema(req.body)
        await leaveschema

            .save()
            .then((data) => {
                if (data) {
                    return res.status(200).json({
                        sucesss: true,
                        msg: "leaves successfully created",
                        data
                    })
                }
            })
            .catch((err) => {
                console.log(err, "testas");
                return res.status(400).json({
                    sucesss: true,
                    err: "leave is not created"
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


exports.getLeaveSchema = (req, res) => {
    try {
        const { _id } = req.body;
        LeaveSchema.findOne({ _id }, (err, resp) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    err: "no leaves found"
                });
            }
            else {
                return res.status(200).json({
                    success: true,
                    data: resp
                })
            }
        })

    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: "something went wrong"
        })
    }
}

exports.getAllLeaveSchema = async (req, res) => {
    try {
        const leaveschemaData = await LeaveSchema.find({});
        return res.status(200).json({
            success: true,
            data: leaveschemaData

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something wrong"
        })
    }
}
exports.updateLeaveSchema = async (req, res) => {
    try {
        LeaveSchema.findOne({ _id: req.body._id }, async (err, data) => {
            if (err) {

                return res.status(400).json({
                    success: false,
                    err: "LeaveSchema not found"
                })
            }
            if (req.body.title) {
                data.title = req.body.title
            }
            if (req.body.description) {
                data.description = req.body.description
            }
            if (req.body.companySize) {
                data.companySize = req.body.companySize
            }
            await LeaveSchema.findOneAndUpdate(
                { _id: req.body._id },
                data,
                (err, resp) => {
                    if (err) {
                        return res.status(400).json({
                            success: false,
                            err: "LeaveSchema not found"
                        })
                    }
                    else {
                        return res.status(200).json({
                            success: true,
                            data: data
                        })
                    }
                }
            )
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "payroll not found"
        })
    }
}

exports.deleteLeaveSchema = async (req, res) => {
    try {
        const { _id } = req.body
        await LeaveSchema.findOneAndDelete({ _id })
            .then((data) => {
                if (data) {
                    return res.status(200).json({
                        success: true,
                        msg: "LeaveSchema deleted"
                    })
                }
            })
            .catch((err) => {
                return res.status(200).json({
                    success: false,
                    msg: "LeaveSchema is not Deleted"
                })
            })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something is wrong"
        })
    }

}

exports.getLeaveSchemaByStateId = async (req, res) => {
    try {
        const { stateId } = req.body;
        LeaveSchema.find({ stateId }, (err, data) => {
            if (err) {
                return res.status(200).json({
                    success: false,
                    err: " no leaves found"
                })
            } else {
                return res.status(200).json({
                    success: true,
                    data
                })
            }

        })



    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            error: "something wrong"
        })
    }
}