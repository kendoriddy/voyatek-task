import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PaymentIn from "./pages/PaymentIn";
import CustomerTransaction from "./pages/CustomerTransaction";
import Layout from "./components/BaseComponents/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard/payment-in"
          element={
            <Layout>
              <PaymentIn />
            </Layout>
          }
        />
        <Route
          path="/dashboard/payment-in/customer-transaction"
          element={
            <Layout>
              <CustomerTransaction />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
