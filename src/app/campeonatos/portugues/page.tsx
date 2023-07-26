"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import port from "../../../images/port.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TagMain } from "@/components/TagMain";

export default function CampeonatoPortugues() {
  const season = 2022;
  const idLeague = 94;

  return (
    <TagMain>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={port}
        nameLeague="Campeonato Português"
        typeLeague={false}
      />
      <Footer/>
    </TagMain>
  )
}