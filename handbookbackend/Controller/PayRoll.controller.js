const PayRoll = require("../Models/Form/PayRoll");

exports.createPayRoll = async (req, res) => {
    try {
        const { userId, isPayRoll, isPayRollOps } = req.body;
        if (!isPayRoll || !userId || !isPayRollOps) {
            return res.status(400).json({
                success: false,
                error: "please select all of this"
            })
        }
        else {
            const payrollData = new PayRoll(req.body);
            await payrollData
                .save()
                .then((data) => {
                    if (data) {
                        return res.status(200).json({
                            success: true,
                            data: payrollData
                        })
                    }
                })
                .catch((err) => {
                    return res.status(400).json({
                        success: false,
                        error: "payroll is not found"
                    })
                })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something is wrong"
        })
    }
}

exports.getPayRoll = async (req, res) => {
    try {
        const { _id } = req.body;
        PayRoll.findOne({ _id }, (err, payrollData) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    err: "payroll is not found"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    data: payrollData
                })
            }
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            err: "something is wrong"
        })
    }
}

exports.getAllPayRoll = async (req, res) => {
    try {
        const payrollData = await PayRoll.find({});
        return res.status(200).json({
            success: true,
            data: payrollData

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something wrong"
        })
    }
}

exports.updatePayRoll = async (req, res) => {
    try {
        PayRoll.findOne({ _id: req.body._id }, async (err, data) => {
            if (err) {

                return res.status(400).json({
                    success: false,
                    err: "payroll not found"
                })
            }
            if (req.body.isPayRoll) {
                data.isPayRoll = req.body.isPayRoll
            }
            if (req.body.isPayRollOps) {
                data.isPayRollOps = req.body.isPayRollOps
            }
            if (req.body.firstpath) {
                data.firstpath = req.body.firstpath
            }
            if (req.body.secondpath) {
                data.secondpath = req.body.secondpath
            }
            await PayRoll.findOneAndUpdate(
                { _id: req.body._id },
                data,
                (err, resp) => {
                    if (err) {
                        return res.status(400).json({
                            success: false,
                            err: "payroll not found"
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

exports.deletePayRoll = async (req, res) => {
    try {
        const { _id } = req.body
        await PayRoll.findOneAndDelete({ _id })
            .then((data) => {
                if (data) {
                    return res.status(200).json({
                        success: true,
                        msg: "payroll deleted"
                    })
                }
            })
            .catch((err) => {
                return res.status(200).json({
                    success: false,
                    msg: "payroll is not Deleted"
                })
            })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something is wrong"
        })
    }

}