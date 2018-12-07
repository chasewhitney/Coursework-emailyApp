import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default () => {
  return (
    <StripeCheckout
      amount={500}
      token={token => console.log('token:', token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  );
};
