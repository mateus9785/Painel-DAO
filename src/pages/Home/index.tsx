import { Painel } from "./Painel";
import { Menu } from "./Menu";

import {
  HomeContainer
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Menu></Menu>
      <Painel></Painel>
    </HomeContainer>
  );
}
