import {loadEasyCheckout} from "./ui";

const PaymentController = require("./api/payment-controller.js");

class SSLCommerzPayment extends PaymentController {
    constructor(store_id, store_password, live = false) {
        super(store_id, store_password, live);
    }

    loadEasyCheckout = loadEasyCheckout;
}

module.exports = SSLCommerzPayment;
