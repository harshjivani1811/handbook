const jwt = require('jsonwebtoken')
const winston = require('winston')
const morgan = require('morgan')

// Logger Setup

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
}

const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    info => `${info.timestamp} ${info.level}: ${info.message}`
  ),
  winston.format.prettyPrint()
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
  }),
  new winston.transports.File({
    filename: 'logs/info.log',
    level: 'info'
  }),

  new winston.transports.File({
    filename: 'logs/warn.log',
    level: 'warn'
  }),

  new winston.transports.File({
    filename: 'logs/http.log',
    level: 'http'
  }),

  new winston.transports.File({
    filename: 'logs/debug.log',
    level: 'debug'
  })
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
})

const stream = {
  // Use the http severity
  write: message => Logger.http(message)
}

const skip = () => {
  const env = process.env.NODE_ENV || 'development'
  return env !== 'development'
}

const morganHttp = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
)

// JWT Setup

const validateToken = (req, res, next) => {
  const authorizationToken = req.headers.authorization

  if (authorizationToken) {
    const token = authorizationToken.split(' ')[1] // Bearer <token>
    const isCustomAuth = token.length < 500

    try {
      // verify makes sure that the token hasn't expired and has been issued by us
      let userId
      if (token && isCustomAuth) {
        jwt.verify(token, process.env.JWT_SECRET)
        const decodedToken = jwt.decode(token, {
          json: true,
          key: process.env.JWT_SECRET
        })
        // userId = decodedToken?.id
        if (decodedToken.id) {
          userId = decodedToken.id
        }
      } else {
        // jwt.verify(token);
        const decodedToken = jwt.decode(token)
        if (decodedToken.sub) {
          userId = decodedToken.sub
        }
      }
      Logger.http('Requested Path' + req['originalUrl'] + ' ,ID: ' + userId)
      // We call next to pass execution to the subsequent middleware
      next()
    } catch (error) {
      // Throw an error just in case anything goes wrong with verification
      if (error instanceof jwt.JsonWebTokenError) {
        // if the error thrown is because the JWT is unauthorized, return a 401 error
        return res.status(400).json({
          error: 'Authentication error. Invalid token.'
        })
      }

      // console.log('error', error)
      return res
        .status(500)
        .json({ error: 'Some Internal Server Error occured.' })
    }
  } else {
    return res.status(400).json({
      error: `Authentication error. Token required.`
    })
  }
}

module.exports = {
  validateToken,
  Logger,
  morganHttp
}
