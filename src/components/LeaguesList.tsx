import ButtonLeague from "./ButtonLeague";
import brazilian from "../images/brasileiro.png";
import argentine from "../images/argentino.png";
import port from "../images/port.png";
import english from "../images/ingles.png";
import germany from "../images/alemao.png";
import italian from "../images/italiano.png";
import french from "../images/frances.png";
import spanish from "../images/espanhol.png";
import { styled } from "styled-components";

const ButtonsContainer = styled.div`
  padding: 20px;
  display: grid;
  padding: 0 10vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  width: 100vw;

  button {
    cursor: pointer;
  }

  button:hover {
    background: #5a8eff;
  }
`

export default function LeaguesList() {
  return (
    <ButtonsContainer>
      <ButtonLeague nameLeague="Campeonato Brasileiro" imageLeague={brazilian} pathNameLeague={'/campeonatos/brasileiro'}/>
      <ButtonLeague nameLeague="Campeonato Argentino" imageLeague={argentine} pathNameLeague={'/campeonatos/argentino'}/>
      <ButtonLeague nameLeague="Campeonato Português" imageLeague={port} pathNameLeague={'/campeonatos/portugues'}/>
      <ButtonLeague nameLeague="Campeonato Inglês" imageLeague={english} pathNameLeague={'/campeonatos/ingles'}/>
      <ButtonLeague nameLeague="Campeonato Alemão" imageLeague={germany} pathNameLeague={'/campeonatos/alemao'}/>
      <ButtonLeague nameLeague="Campeonato Italiano" imageLeague={italian} pathNameLeague={'/campeonatos/italiano'}/>
      <ButtonLeague nameLeague="Campeonato Francês" imageLeague={french} pathNameLeague={'/campeonatos/frances'}/>
      <ButtonLeague nameLeague="Campeonato Espanhol" imageLeague={spanish} pathNameLeague={'/campeonatos/espanhol'}/>
    </ButtonsContainer>
  )
}