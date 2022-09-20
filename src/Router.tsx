import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { BuyTokens } from "./pages/BuyTokens";
import { SaleContract } from "./pages/SaleContract";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/buyTokens" element={<BuyTokens />} />
        <Route path="/saleContract" element={<SaleContract />} />
      </Route>
    </Routes>
  );
}
