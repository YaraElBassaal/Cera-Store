export default function Payment() {
  return (
    <section className="payment">
      <div className="payment-method">
        <h1 className="payment-method-title">Payment Method</h1>
        <p className="payment-method-text">Please select a payment method</p>
        <div className="payment-method-options">
          <div className="payment-method-option">
            <input
              type="radio"
              name="payment-method"
              id="paypal"
              value="paypal"
            />
            <label htmlFor="paypal">Paypal</label>
          </div>
          <div className="payment-method-option">
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              value="credit-card"
            />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          <div className="payment-method-option">
            <input
              type="radio"
              name="payment-method"
              id="debit-card"
              value="debit-card"
            />
            <label htmlFor="debit-card">Debit Card</label>
          </div>
        </div>
        <button className="payment-method-submit">Payment</button>
      </div>
      <div className="order-summary"></div>
    </section>
  );
}
