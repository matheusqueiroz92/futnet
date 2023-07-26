import { useMatchesByTeam } from "@/hooks/useRequestApi";
import { useParams } from "next/navigation"
import { Key } from "react";
import Loading from "./Loading";
import Image from "next/image";
import transformDate from "@/utils/transformDate";
import transformLocal from "@/utils/transfomrLocal";
import testNull from "@/utils/testNull";
import { styled } from "styled-components";

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

export default function MatchesByTeam() {
  const params = useParams();
  const { isLoading, error, dataApi } = useMatchesByTeam(71, 2023, Number(params?.id));
  
  return (
    <div>
      {isLoading && (
        <Loading/>
      )}
      {dataApi?.map((info: any, i: Key) =>(
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
    </div>
  )
}