require('./loggers')

const winston = require('winston')

const paymentLogger = winston.loggers.get('PaymentLogger')
const orderLogger = winston.loggers.get('OrderLogger')

let requestHandler = (path) => {
    const profiler = paymentLogger.startTimer()

    //request processing
    const ONE_BILLION = 1000000000
    for (let i = 0; i < ONE_BILLION; i++){
        j=i*2
    }

    profiler.done({message: `Request to ${path} processed`});

}

requestHandler("/payment")
orderLogger.info('An order was placed')