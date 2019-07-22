const SSLCzData= require("./SSLCzData");
const PublicSslCommerzPayment= require("./PublicSslCommerzPayment");

class SSLCommarzPayment extends PublicSslCommerzPayment {
    constructor(data, live) {
        const newdata = new SSLCzData(data);
        super(newdata.getPaymentArray(), live);
    }
}

let test = new SSLCommarzPayment({
    store_id: 'testbox',
    store_passwd: 'qwerty',
    total_amount: 100,
    currency: 'EUR',
    tran_id: 'REF123',
    success_url: 'http://yoursite.com/success.php',
    fail_url: 'http://yoursite.com/fail.php',
    cancel_url: 'http://yoursite.com/cancel.php',
    shipping_method:'Courier',
    product_name:'Computer.',
    product_category:'Electronic',
    product_profile:'general',
    cus_name: 'Customer Name',
    cus_email: 'cust@yahoo.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    multi_card_name: 'mastercard',
    value_a: 'ref001_A',
    value_b: 'ref002_B',
    value_c: 'ref003_C',
    value_d: 'ref004_D'
}, false);

// modules.exports : SSLCommarzPayment;
