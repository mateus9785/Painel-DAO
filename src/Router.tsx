import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { BuyTokens } from "./pages/BuyTokens";
import { SaleContract } from "./pages/SaleContract";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BuyTokens />} />
      <Route path="/saleContract" element={<SaleContract />} />
    </Routes>
  );
}
