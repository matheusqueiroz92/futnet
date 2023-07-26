import { useTopScorers } from "@/hooks/useRequestApi";
import { TypeLeague } from "@/types/ChampionshipGroup";
import Image from "next/image";
import { Key, useEffect } from "react";
import { styled } from "styled-components";
import loading from '../images/loading.gif';
import { useInfoContext } from "@/hooks/useInfoContext";

const ContainerExtern = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 80vw;
  padding: 20px;
  background-color: #cae4fa;
  margin-bottom: 40px;
`

const ContainerLoading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerTopScorer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  :nth-child(4) {
    width: 200px;
  }
`

const TagSpan = styled.div`
  display: flex;
  font-weight: 600;
`

export default function TopScorers({ season, idLeague }: TypeLeague) {
  const { isLoading, error, dataApi } = useTopScorers(season, idLeague);
  const { setLoading } = useInfoContext();
  
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  function ranking(key: number) {
    return key + 1;
  }

  return (
    <div>
      {isLoading && (
        <ContainerLoading>
          <Image src={loading} alt="loading"/>
        </ContainerLoading>
      )}
      {(!isLoading && !error) && (
        <ContainerExtern>
          {dataApi?.map((topscorer: { 
            player: { name: string, photo: string };
            statistics: [{ team: { name: string, logo: string }, goals: { total: number} }] 
          }, i: Key) => (
            <ContainerTopScorer key={i}>
              <div>
                <span>{ranking(i as number)}º</span>
                <Image style={{borderRadius: '100%', overflow: 'hidden'}} src={topscorer.player.photo} width={80} height={80} alt={topscorer.player.name}/>
                <Image src={topscorer.statistics[0].team.logo} width={30} height={30} alt={topscorer.statistics[0].team.name}/>
                <span>{topscorer.player.name}</span>
              </div>
              <TagSpan>{topscorer.statistics[0].goals.total} gols</TagSpan>
            </ContainerTopScorer>
          ))}
        </ContainerExtern>
      )}
    </div>
  )
}