const winston = require("winston");
const morgan = require("morgan");


// Logger Setup

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
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
  debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
  winston.format.prettyPrint(),
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
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
   }),
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})

const stream = {
  // Use the http severity
  write: (message) => Logger.http(message),
};


const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganHttp = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

module.exports = {
    Logger, morganHttp
}