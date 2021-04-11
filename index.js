import {loadEasyCheckout} from "./ui";

import PaymentController from "./api/payment-controller.js";

class SSLCommerzPayment extends PaymentController {
    constructor(store_id, store_password, live = false) {
        super(store_id, store_password, live);
    }
}

module.exports = SSLCommerzPayment;
