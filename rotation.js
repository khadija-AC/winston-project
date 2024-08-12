const winston = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, json, prettyPrint } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: 'combined-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
      }),
    json(),
    prettyPrint(),
),
  transports: [fileRotateTransport],
});
// fired when a log file is created
fileRotateTransport.on('new', (filename) => {});
// fired when a log file is rotated
fileRotateTransport.on('rotate', (oldFilename, newFilename) => {});
// fired when a log file is archived
fileRotateTransport.on('archive', (zipFilename) => {});
// fired when a log file is deleted
fileRotateTransport.on('logRemoved', (removedFilename) => {});


logger.info("Test info log")