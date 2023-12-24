paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10.00',
            currency_code: 'USD',
            breakdown: {
              item_total: { value: '10.00', currency_code: 'USD' },
            }
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        // إضافة التفاصيل اللازمة بعد إكمال الدفع
        console.log('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');