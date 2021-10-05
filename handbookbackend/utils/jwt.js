const jwt = require("jsonwebtoken");
const { Logger } = require("./logger");
// JWT Setup

const validateToken = (req, res, next) => {
  const authorizationToken = req.headers.authorization;
  if (authorizationToken) {
    const token = authorizationToken.split(" ")[1]; // Bearer <token>
    try {
      // verify makes sure that the token hasn't expired and has been issued by us
      jwt.verify(token, process.env.JWT_SECRET);
      const decodedToken = jwt.decode(token, {
        json: true,
        key: process.env.JWT_SECRET,
      });
      Logger.http(
        "Requested Path" +
          req["originalUrl"] +
          " , Admin ID: " +
          decodedToken["id"]
      );
      // We call next to pass execution to the subsequent middleware
      next();
    } catch (error) {
      // Throw an error just in case anything goes wrong with verification
      if (error instanceof jwt.JsonWebTokenError) {
        // if the error thrown is because the JWT is unauthorized, return a 401 error
        return res.status(400).json({
          error: "Authentication error. Invalid token.",
        });
      }

      // console.log("error", error);
      return res
        .status(500)
        .json({ error: "Some Internal Server Error occured." });
    }
  } else {
    return res.status(400).json({
      error: `Authentication error. Token required.`,
    });
  }
};


const validateAdminToken = (req, res, next) => {
    const authorizationToken = req.headers.authorization;
    const userRole = req.headers.role
    // console.log(userRole);
    if (authorizationToken) {
      const token = authorizationToken.split(" ")[1]; // Bearer <token>
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        jwt.verify(token, process.env.JWT_SECRET);
        const decodedToken = jwt.decode(token, {
          json: true,
          key: process.env.JWT_SECRET,
        });
        Logger.http(
          "Requested Path" +
            req["originalUrl"] +
            " , Admin ID: " +
            decodedToken["id"]
        );
        // We call next to pass execution to the subsequent middleware
        next();
      } catch (error) {
        // Throw an error just in case anything goes wrong with verification
        if (error instanceof jwt.JsonWebTokenError) {
          // if the error thrown is because the JWT is unauthorized, return a 401 error
          return res.status(400).json({
            error: "Authentication error. Invalid token.",
          });
        }
  
        // console.log("error", error);
        return res
          .status(500)
          .json({ error: "Some Internal Server Error occured." });
      }
    } else {
      return res.status(400).json({
        error: `Authentication error. Token required.`,
      });
    }
  };

module.exports = {
  validateToken,
  validateAdminToken
};
