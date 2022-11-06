import React from "react";

import Visa from "../../asset/images/visa.png";
import GooglePay from "../../asset/images/google-pay.png";
import iDEAL from "../../asset/images/ideal.png";
import JCB from "../../asset/images/jcb.png";
import MasterCard from "../../asset/images/mastercard.png";
import PayPal from "../../asset/images/worldpay-paypal.png";

const PAYMENTS_LOGO = [Visa, MasterCard, JCB, PayPal, iDEAL, GooglePay];

const PaymentLogos = () => {
  return (
    <>
      {PAYMENTS_LOGO.map((logo, index) => (
        <img key={index + 1} src={logo} alt="Payment logo" />
      ))}
    </>
  );
};
export default PaymentLogos;
