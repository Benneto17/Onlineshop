document.getElementById("schuh").style.display = "none"; // Als erstes wird der Schuh verborgen.

function produktAnzeigen(nr) { // Die Funktion wird aufgerufen.
    if (nr === 1) { // Wenn NUmmer gleich eins dann....
        document.getElementById("tshirt").style.display = "block"; // ...wird das Tshirt sichtbar
        document.getElementById("schuh").style.display = "none"; // aber der Schuh geblockt.
    }
    if (nr === 2) { // Wenn die Nummer gleich zwei dann...
        document.getElementById("tshirt").style.display = "none"; // ... wird das Tshirt geblockt
        document.getElementById("schuh").style.display = "block"; // und der Schuh sichtbar.
    }
}


function initPayPalButton() { // alles für den Paypalbutton, farbe, größe. form
    paypal.Buttons({
        style: {
            shape: 'pill',
            color: 'silver',
            layout: 'vertical',
            label: 'paypal',

        },

        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{ "description":"Tshirt","amount":{"currency_code":"EUR","value":80}}]
            });
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {

                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';

                // Or go to another URL:  actions.redirect('thank_you.html');

            });
        },

        onError: function(err) {
            console.log(err);
        }
    }).render('#paypal-button-tshirt');
    paypal.Buttons({ // alles für den Paypalbutton, farbe, größe. form
        style: {
            shape: 'pill',
            color: 'silver',
            layout: 'vertical',
            label: 'paypal',

        },

        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{"description":"Schuh","amount":{"currency_code":"EUR","value":120}}]
            });
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {

                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';

                // Or go to another URL:  actions.redirect('thank_you.html');

            });
        },

        onError: function(err) {
            console.log(err);
        }
    }).render('#paypal-button-schuh');
}
    initPayPalButton();
