import { LayoutContainer } from "./styles";
import { Header } from "./../header";
import { Footer } from "./../footer";

interface DefaultLayoutInterface {
  children: React.ReactNode
}

export function DefaultLayout({ children } : DefaultLayoutInterface) {
  return (
    <LayoutContainer>
      <Header/>
        {children}
      <Footer/>
    </LayoutContainer>
  );
}
