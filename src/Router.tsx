import { Routes, Route } from "react-router-dom";
import { BuyTokens } from "./pages/BuyTokens";
import { SaleContract } from "./pages/SaleContract";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BuyTokens />} />
      <Route path="/saleContract" element={<SaleContract />} />
      <Route path="*" element={<BuyTokens />} />
    </Routes>
  );
}
