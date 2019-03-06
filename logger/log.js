const {transports, createLogger, format} = require('winston')

const logger = createLogger({
    format : format.combine(
        format.timestamp(),
        format.json()
    ),
    transports : [
        new transports.Console(),
        new transports.File({filename : "logs/info.log", level : "info"})
    ]

})

class Log {
    info(message) {
        logger.log('info',message);
    }
}

// Singleton pattern
module.exports = new Log()