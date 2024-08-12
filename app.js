const winston = require('winston')
const { combine, timestamp, errors, json, prettyPrint} = winston.format


    
const logger = winston.createLogger({
        level: 'info',
        format: combine(
            errors({stack: true}),
            timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A',
              }),
            json(),
            prettyPrint(),
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({filename: 'app.log', level: 'error'}),
        ]
});

const requestlog = {method: "GET", isAuthenticated: false}
const childlogger = logger.child(requestlog)

childlogger.info("An info log")
childlogger.error("An error log", new Error('504 Getway Timeout'))