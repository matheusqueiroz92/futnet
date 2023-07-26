"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import english from "../../../images/ingles.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TagMain } from "@/components/TagMain";

export default function CampeonatoIngles() {
  const season = 2022;
  const idLeague = 39;

  return (
    <TagMain>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={english}
        nameLeague="Campeonato Inglês"
        typeLeague={false}
      />
      <Footer/>
    </TagMain>
  )
}