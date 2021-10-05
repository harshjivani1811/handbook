const express = require("express");
const { createFireExit, 
    getFireExit, 
    getAllFireExit, 
    updateFireExit, 
    deleteFireExit 
} = require("../Controller/FireExit.controller");
const router = express.Router();

router.post("/createfireexit" ,createFireExit );
router.post("/getfireexit" , getFireExit);
router.get("/getallfireexit" , getAllFireExit);
router.put("/updatefireexit" , updateFireExit);
router.delete("/deletefireexit" , deleteFireExit);

module.exports = router;