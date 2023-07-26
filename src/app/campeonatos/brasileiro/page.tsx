"use client"

import ChampionshipTable from "@/components/ChampionshipTable";
import brazilian from "../../../images/brasileiro.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TagMain } from "@/components/TagMain";
import Matches from "@/components/Matches";
import NavTable from "@/components/NavTable";
import { useInfoContext } from "@/hooks/useInfoContext";
import Image from "next/image";
import { styled } from "styled-components";
import TopScorers from "@/components/TopScorers";

const InfoLeagueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  gap: 10px;
  margin-top: 10px;

  p {
    font-size: 20px;
    font-weight: 600;
  }
`

export default function CampeonatoBrasileiro() {
  const { showComponent, loading } = useInfoContext();

  const objLeague = {
    season: 2023,
    idLeague: 71,
    logoLeague: brazilian,
    nameLeague: "Campeonato Brasileiro",
    typeLeague: false,
  }

  return (
    <TagMain>

      <Header/>
      
      {!loading && (
        <InfoLeagueContainer>
          <Image src={objLeague.logoLeague} alt={objLeague.nameLeague} width={50} height={50}/>
            <p>{objLeague.nameLeague}</p>
        </InfoLeagueContainer>
      )}

      <NavTable/>

      {(showComponent === 'classification') && (
        <ChampionshipTable
        season={objLeague.season}
        idLeague={objLeague.idLeague}
        logoLeague={objLeague.logoLeague}
        nameLeague={objLeague.nameLeague}
        typeLeague={objLeague.typeLeague}
      />)}

      {(showComponent === 'matches') && (
        <Matches 
        season={objLeague.season}
        idLeague={objLeague.idLeague}
        logoLeague={objLeague.logoLeague}
        nameLeague={objLeague.nameLeague}
        typeLeague={objLeague.typeLeague}
      />)}

      {(showComponent === 'top-scorers') && (
        <TopScorers
          season={objLeague.season}
          idLeague={objLeague.idLeague}
          logoLeague={objLeague.logoLeague}
          nameLeague={objLeague.nameLeague}
          typeLeague={objLeague.typeLeague}
      />)}

      <Footer/>
      
    </TagMain>
  )
}