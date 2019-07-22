var FormData = require('form-data');
class SSLCzData {
    constructor(data = {}) {

        /*  Integration Required Parameters */
        //required//
        this.store_id = data.store_id;
        this.store_passwd = data.store_passwd;
        this.productcategory = data.productcategory;
        this.tran_id = data.tran_id;
        this.total_amount = data.total_amount;
        this.currency = data.currency;
        this.success_url = data.success_url;
        this.fail_url = data.fail_url;
        this.cancel_url = data.cancel_url;
        //optional//
        this.ipn_url = data.ipn_url;
        this.multi_card_name = data.multi_card_name;
        this.allowed_bin = data.allowed_bin;

        /* Parameters to Handle EMI Transaction */
        // required//
        this.emi_option = data.emi_option;
        //optional//
        this.emi_max_inst_option = data.emi_max_inst_option;
        this.emi_selected_inst = data.emi_selected_inst;

        /* Customer Information */
        //required
        this.cus_name = data.cus_name;
        this.cus_email = data.cus_email;
        this.cus_add1 = data.cus_add1;
        this.cus_add2 = data.cus_add2;
        this.cus_city = data.cus_city;
        this.cus_state = data.cus_state;
        this.cus_postcode = data.cus_postcode;
        this.cus_country = data.cus_country;
        this.cus_phone = data.cus_phone;
        //optional
        this.cus_fax = data.cus_fax;

        /* Shipment Information */
        //required
        this.shipping_method = data.shipping_method;
        this.num_of_item = data.num_of_item;
        //optional
        this.ship_name = data.ship_name;
        this.shipcity = data.shipcity;
        this.ship_add1 = data.ship_add1;
        this.ship_add2 = data.ship_add2;
        this.ship_city = data.ship_city;
        this.ship_state = data.ship_state;
        this.ship_postcode = data.ship_postcode;
        this.ship_country = data.ship_country;

        /* Product Information */
        //required
        this.product_name = data.product_name;
        this.product_category = data.product_category;
        this.product_profile = data.product_profile;
        //optional
        this.hours_till_departure = data.hours_till_departure;
        this.flight_type = data.flight_type;
        this.pnr = data.pnr;
        this.journey_from_to = data.journey_from_to;
        this.third_party_booking = data.third_party_booking;
        this.hotel_name = data.hotel_name;
        this.length_of_stay = data.length_of_stay;
        this.check_in_time = data.check_in_time;
        this.hotel_city = data.hotel_city;
        this.product_type = data.product_type;
        this.topup_number = data.topup_number;
        this.country_topup = data.country_topup;
        this.cart = data.cart;
        this.product_amount = data.product_amount;
        this.discount_amount = data.discount_amount;
        this.convenience_fee = data.convenience_fee;

        /* Customized or Additional Parameters */
        //optional
        this.value_a = data.value_a;
        this.value_b = data.value_b;
        this.value_c = data.value_c;
        this.value_d = data.value_d;
    }

    getPaymentArray() {
        let postData = {};
        /*  Integration Required Parameters */
        //required//
        postData['store_id'] = this.store_id;
        postData['store_passwd'] = this.store_passwd;
        postData['productcategory'] = this.productcategory;
        postData['tran_id'] = this.tran_id;
        postData['total_amount'] = this.total_amount;
        postData['currency'] = this.currency;
        postData['success_url'] = this.success_url;
        postData['fail_url'] = this.fail_url;
        postData['cancel_url'] = this.cancel_url;
        //optional//
        postData['ipn_url'] = this.ipn_url;
        postData['multi_card_name'] = this.multi_card_name;
        postData['allowed_bin'] = this.allowed_bin;

        /* Parameters to Handle EMI Transaction */
        // required//
        postData['emi_option'] = this.emi_option;
        //optional//
        postData['emi_max_inst_option'] = this.emi_max_inst_option;
        postData['emi_selected_inst'] = this.emi_selected_inst;

        /* Customer Information */
        //required
        postData['cus_name'] = this.cus_name;
        postData['cus_email'] = this.cus_email;
        postData['cus_add1'] = this.cus_add1;
        postData['cus_add2'] = this.cus_add2;
        postData['cus_city'] = this.cus_city;
        postData['cus_state'] = this.cus_state;
        postData['cus_postcode'] = this.cus_postcode;
        postData['cus_country'] = this.cus_country;
        postData['cus_phone'] = this.cus_phone;
        //optional
        postData['cus_fax'] = this.cus_fax;

        /* Shipment Information */
        //required
        postData['shipping_method'] = this.shipping_method;
        postData['num_of_item'] = this.num_of_item;
        //optional
        postData['ship_name'] = this.ship_name;
        postData['shipcity'] = this.shipcity;
        postData['ship_add1'] = this.ship_add1;
        postData['ship_add2'] = this.ship_add2;
        postData['ship_city'] = this.ship_city;
        postData['ship_state'] = this.ship_state;
        postData['ship_postcode'] = this.ship_postcode;
        postData['ship_country'] = this.ship_country;

        /* Product Information */
        //required
        postData['product_name'] = this.product_name;
        postData['product_category'] = this.product_category;
        postData['product_profile'] = this.product_profile;
        //optional
        postData['hours_till_departure'] = this.hours_till_departure;
        postData['flight_type'] = this.flight_type;
        postData['pnr'] = this.pnr;
        postData['journey_from_to'] = this.journey_from_to;
        postData['third_party_booking'] = this.third_party_booking;
        postData['hotel_name'] = this.hotel_name;
        postData['length_of_stay'] = this.length_of_stay;
        postData['check_in_time'] = this.check_in_time;
        postData['hotel_city'] = this.hotel_city;
        postData['product_type'] = this.product_type;
        postData['topup_number'] = this.topup_number;
        postData['country_topup'] = this.country_topup;
        postData['cart'] = this.cart;
        postData['product_amount'] = this.product_amount;
        postData['discount_amount'] = this.discount_amount;
        postData['convenience_fee'] = this.convenience_fee;

        /* Customized or Additional Parameters */
        //optional
        postData['value_a'] = this.value_a;
        postData['value_b'] = this.value_b;
        postData['value_c'] = this.value_c;
        postData['value_d'] = this.value_d;

        let fdata = new FormData();
        for(const a  in postData) {
            fdata.append(a, postData[a] ? postData[a] : '');
        }

        return fdata;
    }

}

module.exports = SSLCzData;




