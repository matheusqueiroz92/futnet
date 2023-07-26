"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import french from "../../../images/frances.png";
import { TagMain } from "@/components/TagMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CampeonatoFrances() {
  const season = 2022;
  const idLeague = 61;

  return (
    <TagMain>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={french}
        nameLeague="Campeonato Francês"
        typeLeague={false}
      />
      <Footer/>
    </TagMain>
  )
}