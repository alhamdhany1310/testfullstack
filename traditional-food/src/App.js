import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Account, Cart, Login, Home, Register } from './page';
import AddressForm from './page/Account/address-form';
import CheckoutPage from './page/Account/Checkout/checkout-page';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home count={count} setCount={setCount} />} />
          <Route path="/cart" element={<Cart setCount={setCount} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<CheckoutPage setCount={setCount} />} />
          <Route path="/account/address-form" element={<AddressForm />} />
          <Route path="/account/address-form/:id" element={<AddressForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
