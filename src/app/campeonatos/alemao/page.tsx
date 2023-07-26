"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import germany from "../../../images/alemao.png";
import { TagMain } from "@/components/TagMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CampeonatoAlemao() {
  const season = 2022;
  const idLeague = 78;

  return (
    <TagMain>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={germany}
        nameLeague="Campeonato Alemão"
        typeLeague={false}
      />
      <Footer/>
    </TagMain>
  )
}