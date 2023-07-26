import { useAllMatches } from "@/hooks/useRequestApi"
import { TypeLeague } from "@/types/ChampionshipGroup";
import { styled } from "styled-components";
import { useInfoContext } from "@/hooks/useInfoContext";
import { Key, useEffect, useState } from "react";
import Image from "next/image";
import loading from '../images/loading.gif';
import iconLast from '../images/icon-last.png';
import iconNext from '../images/icon-next.png';
import iconFirst from '../images/icon-first.png';
import iconPrev from '../images/icon-prev.png'
import transformDate from "@/utils/transformDate";
import transformLocal from "@/utils/transfomrLocal";
import testNull from "@/utils/testNull";
import Loading from "./Loading";

const ContainerExtern = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  padding: 20px 0 40px;
  background-color: #98ffbc;
  margin-bottom: 40px;
`

const ContainerPagination = styled.div`
  h3 {
      text-align: center;
  }
`

const ContainerAllMatches = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`

const ContainerInfo = styled.div`
  text-align: center;
  background-color:#000000;
  color: aliceblue;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  font-size: 12px;
`

const ContainerMatch = styled.div<{ backgroundColor: string; }>`
  gap: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`

const ContainerTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`

const ButtonPagination = styled.button`
  &:hover {
    cursor: pointer;
  }
`

export default function Matches({ season, idLeague }: TypeLeague) {
  const { dataApi, isLoading, error } = useAllMatches(season, idLeague);
  const { setLoading } = useInfoContext();
  
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);
  
  const [page, setPage] = useState(1);
  
  const prevPage = () => {
    setPage(page-1);
  }

  const nextPage = () => {
    setPage(page+1);
  }

  const lastPage = () => {
    setPage(38);
  }

  const firstPage = () => {
    setPage(1);
  }

  return (
    <div>
      {isLoading && (
        <Loading/>
      )}
      {(!isLoading && !error) && (
        <ContainerExtern>
          <ContainerPagination>
            <h3>Rodada {page}</h3>
            <ButtonPagination
              type="button"
              onClick={firstPage}
              disabled={!(page > 2)}
            >
              <Image src={iconFirst} alt="icon-last" width={20} height={20}/> 
            </ButtonPagination>
            <ButtonPagination
              type="button"
              onClick={prevPage}
              disabled={!(page > 1)}
            >
              <Image src={iconPrev} alt="icon-last" width={20} height={20}/> 
            </ButtonPagination>
            {' '}
            <ButtonPagination
              type="button"
              onClick={nextPage}
              disabled={!(page < 38)}
            >
              <Image src={iconNext} alt="icon-next" width={20} height={20}/> 
            </ButtonPagination>
            <ButtonPagination
              type="button"
              onClick={lastPage}
              disabled={!(page < 37)}
            >
              <Image src={iconLast} alt="icon-last" width={20} height={20}/> 
            </ButtonPagination>
          </ContainerPagination>
          <ContainerAllMatches>
            {dataApi.filter((info: { league: { round: string; }; }) => (info.league.round === `Regular Season - ${page}`))
            .map((info: any, i: Key) => (
              <div key={i}>
                <ContainerInfo>
                  <h4>{`Data e horário: ${transformDate(info.fixture.date)}`}</h4> 
                  <h4>{transformLocal(info.fixture.venue.name, info.fixture.venue.city)}</h4>
                </ContainerInfo>
                <ContainerMatch
                  backgroundColor={info.fixture.status.long === "Match Finished" ? '#b3b3b3' : '#b6ddff'}
                >
                  <ContainerTeam>
                    <p>{info.teams.home.name}</p>
                    <Image src={info.teams.home.logo} alt={info.teams.home.name} width={50} height={50} />
                  </ContainerTeam>
                  <div>
                    <span>{` ${testNull(info.goals.home)} `}</span>
                    <span>x</span>
                    <span>{` ${testNull(info.goals.away)}`}</span>
                  </div>
                  <ContainerTeam>
                    <Image src={info.teams.away.logo} alt={info.teams.away.name} width={50} height={50} />
                    <p>{info.teams.away.name}</p>
                  </ContainerTeam>
                </ContainerMatch>
              </div>
            ))}
          </ContainerAllMatches>
        </ContainerExtern>
      )}
    </div>
  )
}