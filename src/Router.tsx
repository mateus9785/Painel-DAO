import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { BuyTokens } from "./pages/BuyTokens";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buyTokens" element={<BuyTokens />} />
      </Route>
    </Routes>
  );
}
