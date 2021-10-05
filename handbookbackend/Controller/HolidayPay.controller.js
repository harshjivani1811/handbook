const HolidayPay = require("../Models/Form/HolidayPay")

exports.createHolidayPay = async (req, res) => {
    try {
        const { userId, isHolidayPay, isPayHolidayPay, holiday } = req.body;
        if (!isHolidayPay || !userId || !isPayHolidayPay || !holiday) {
            return res.status(400).json({
                success: false,
                error: "please include this field"
            });
        }

        const holidaypayData = new HolidayPay(req.body);
        await holidaypayData

            .save()
            .then((data) => {
                if (data) {
                    return res.status(200).json({
                        success: true,
                        data: holidaypayData
                    })
                }
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    err: "info not found"
                })
            })

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "Holiday Pay is not created"
        })
    }

}

exports.getHolidaypay = (req, res) => {
    try {
        const { _id } = req.body;

        HolidayPay.findOne({ _id }, (err, respo) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    err: "No Holidaypay found...",
                });
            }

            if (!HolidayPay) {
                return res.status(400).json({
                    success: false,
                    err: "No Holidaypay found...",
                });
            }

            return res.status(200).json({
                success: true,
                data: respo,
            });
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something went wrong",
        });
    }
}

exports.getAllHolidayPay = async (req, res) => {
    try {
        HolidayPay.find((err, resp) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    err: "HolidayPay not found"
                });
            }
            if (!HolidayPay) {
                return res.status(400).json({
                    success: false,
                    err: "Holiday not Found"
                })
            }
            return res.status(200).json({
                success: true,
                data: resp
            });
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            err: "something went wrong"
        });
    };

};

exports.updateHolidayPay = async (req, res) => {
    HolidayPay.findOne({ _id: req.body._id }, async (err, data) => {
        if (err) {
            return res.status(400).json({
                success: false,
                err: "No HolidayPay found...",
            });
        }

        if (req.body.isHolidayPay) {
            data.isHolidayPay = req.body.isHolidayPay
        }
        if (req.body.isPayHolidayPay) {
            data.isPayHolidayPay = req.body.isPayHolidayPay;
        }
        await HolidayPay.findOneAndUpdate(
            { _id: req.body._id },
            data,
            (err, respo) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        err: "No HolidayPay found...",
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        data: respo
                    })
                }
            });
    });
}


exports.deleteHolidayPay = async (req, res) => {
    try {
        const { _id } = req.body;
        await HolidayPay.findOneAndDelete({ _id })
            .then((data) => {

                return res.status(200).json({
                    success: true,
                    msg: "HolidayPay deleted successfully!"
                })
            })
            .catch((err) => {
                return res.status(200).json({
                    success: false,
                    err: "holiday is not Deleted"
                })
            })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "something is wrong"
        })
    }
}