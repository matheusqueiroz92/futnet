"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import argentin from "../../../images/argentino.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CampeonatoArgentino() {
  const season = 2023;
  const idLeague = 134;

  return (
    <main>
      <Header/>
      <ChampionshipTable
        season={season}
        idLeague={idLeague}
        logoLeague={argentin}
        nameLeague="Campeonato Argentino"
        typeLeague={true}
      />
      <Footer/>
    </main>
  )
}