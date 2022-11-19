import React, { memo } from "react";

const PAYMENTS_LOGO = [
  "https://ableton-production.imgix.net/payment-icons/visa.png?fm=png",
  "https://ableton-production.imgix.net/payment-icons/mastercard.png?fm=png",
  "https://ableton-production.imgix.net/payment-icons/jcb.png?fm=png",
  "https://ableton-production.imgix.net/payment-icons/worldpay-paypal.png?fm=png",
  "https://ableton-production.imgix.net/payment-icons/ideal.png?fm=png",
  "https://ableton-production.imgix.net/payment-icons/google-pay.png?fm=png",
];

const PaymentLogos = memo(() => {
  return (
    <>
      {PAYMENTS_LOGO.map((logo, index) => (
        <img key={index + 1} src={logo} alt="Payment logo" />
      ))}
    </>
  );
});
export default PaymentLogos;
