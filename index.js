const SSLCzData = require("./SSLCzData");
const PublicSslCommerzPayment = require("./PublicSslCommerzPayment");

class SSLCommerzPayment extends PublicSslCommerzPayment {
    constructor(data, live) {
        const newdata = new SSLCzData(data);
        super(newdata.getPaymentArray(), live);
    }
}

module.exports=SSLCommerzPayment;
