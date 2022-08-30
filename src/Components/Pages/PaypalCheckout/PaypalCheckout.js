import React from "react";
import { Fade } from "react-reveal";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import SubHeader from "../../Shared/SubHeader/SubHeader";
import MetaData from "../../Utils/MetaData";
import "./Paypal_Checkout.scss";

const sub_header_data = {
  title: "Checkout with PayPal",
  desc: "Please review your checkout details below. If everything is correct, place your order and you will receive more information via email.",
};

export default function PaypalCheckout() {
  return (
    <div className="paypal_checkout">
      <MetaData
        title={
          "Checkout (PayPal) - Realtor X - Webflow Ecommerce website template"
        }
      />

      <Navbar />
      <SubHeader data={sub_header_data} />
      <div className="space150"></div>
      <div className="container">
        <Fade bottom delay={100}>
          <div className="paypal_info">
            <div className="wrapper_left">
              <div className="wrapper">
                <h3>Shipping Method</h3>

                <div className="module">
                  <input type="radio" name="" id="" />
                </div>
              </div>

              <div className="wrapper">
                <h3>Customer Information</h3>

                <div className="module">
                  <div>
                    <h4>Email</h4>
                  </div>
                  <div>
                    <h4>Shipping Address</h4>
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <h3>Payment Info</h3>

                <div className="module">
                  <div>
                    <h4>Payment Info</h4>
                  </div>
                  <div>
                    <h4>Billing Address</h4>
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <h3>Items in Order</h3>
              </div>
            </div>

            <div className="wrapper_right">
              <h3>Order Summary</h3>

              <p>Subtotal</p>
              <p>Total</p>

              <h4>Discount Code</h4>
              <input type="text" className="input" />

              <button className="button apply">Apply</button>
              <button className="button">Place Order</button>
            </div>
          </div>
        </Fade>
      </div>

      <div className="space100"></div>

      <hr />

      <Footer />
    </div>
  );
}
