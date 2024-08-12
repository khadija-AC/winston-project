const winston = require('winston')
const {combine, timestamp, json, prettyPrint, errors } = winston.format
const { Logtail } = require("@logtail/node");
const { LogtailTransport } = require("@logtail/winston");

//process.env
const token = 'Xv5x7iHej7sGFXPELXb2dwkA'
const logtail = new Logtail(token);

winston.loggers.add('OrderLogger',{
    level: 'info',
    format: combine(
        errors({stack: true}),
        timestamp(),
        json(),
        prettyPrint(),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'orders.log'}),
        new LogtailTransport(logtail)
    ],
    defaultMeta:{service: 'OrderService'}
})

winston.loggers.add('PaymentLogger',{
    format: json(),
    transports: [
        new winston.transports.File({filename: 'payment.log'}),
        new LogtailTransport(logtail)
    ],
    defaultMeta:{service: 'PaymentService'}
})