"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import spanish from "../../../images/espanhol.png";
import { TagMain } from "@/components/TagMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CampeonatoEspanhol() {
  const season = 2022;
  const idLeague = 140;

  return (
    <TagMain>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={spanish}
        nameLeague="Campeonato Espanhol"
        typeLeague={false}
      />
      <Footer/>
    </TagMain>
  )
}