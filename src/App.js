import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PaymentIn from "./pages/PaymentIn";
import CustomerTransaction from "./pages/CustomerTransaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/payment-in" element={<PaymentIn />} />
        <Route path="/payment-in/customer-transaction" element={<CustomerTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
