"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import italian from "../../../images/italiano.png";
import { TagMain } from "@/components/TagMain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CampeonatoItaliano() {
  const season = 2022;
  const idLeague = 135;

  return (
    <TagMain>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={italian}
        nameLeague="Campeonato Italiano"
        typeLeague={false}
      />
      <Footer/>
    </TagMain>
  )
}