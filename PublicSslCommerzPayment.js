const fetch = require("node-fetch");

class SslCommerzPayment {

    constructor(data, live) {
        this.data = data;
        this.direct_api_url = !live ? "https://sandbox.sslcommerz.com/gwprocess/v4/api.php" : "https://securepay.sslcommerz.com/gwprocess/v4/api.php";
        return this.sslCommarzCall();
    }

    sslCommarzCall() {
        // Default options are marked with *
        return fetch(this.direct_api_url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: this.data, // body data type must match "Content-Type" header
        }).then(response => response.json()).catch(err => err);
    }
}

module.exports = SslCommerzPayment;


