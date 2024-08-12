require('./loggers')

const winston = require('winston')

const paymentLogger = winston.loggers.get('PaymentLogger')
const orderLogger = winston.loggers.get('OrderLogger')

paymentLogger.info('Payment received')
orderLogger.error('Order failed')