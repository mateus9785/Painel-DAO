import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "./../header";
import { Footer } from "./../footer";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet />
      <Footer/>
    </LayoutContainer>
  );
}
