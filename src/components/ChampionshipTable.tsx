import { usePathname, useRouter } from 'next/navigation';
import { useLeague } from '@/hooks/useRequestApi';
import { styled } from 'styled-components';
import { TypeTeam } from '@/types/TypeTeam';
import { TypeLeague } from '@/types/ChampionshipGroup';
import { sortGroups } from '@/utils/sortGroups';
import { useEffect } from 'react';
import { useInfoContext } from '@/hooks/useInfoContext';
import Image from 'next/image';
import ButtonTeam from './ButtonTeam';
import loading from '../images/loading.gif';
import TableLegend from './TableLegend';


const ContainerExtern = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContainerLoading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TableContainer = styled.table`
  width: 80vw;
  background-color: aliceblue;
  border-collapse: collapse;

  tbody {
    tr {
      &:nth-child(-n+4) {
        background-color: #a7edff;
      }

      &:nth-child(5), &:nth-child(6) {
        background-color: #b5ffa6;
      }

      &:nth-child(n+7):nth-child(-n+12) {
        background-color: #fff9ab;
      }

      &:nth-child(n+17):nth-child(-n+20) {
        background-color: #ffaaaa;
      }
    }
  }
    

  button:hover {
    transform: scale(1.2);
  }

  td {
    text-align: center;
  }
`

const TheadTableContainer = styled.thead`
  width: 500px;
  height: 30px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
`

const TeamNameContainer = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
`

const ContainerGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export default function ChampionshipTable({ season, idLeague, typeLeague }: TypeLeague) {
  const router = useRouter();
  const pathName = usePathname();

  const { isLoading, error, dataApi } = useLeague(season, idLeague);
  const { setLoading } = useInfoContext();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);
  
  return (
    <div>
      {isLoading && (
        <ContainerLoading>
          <Image src={loading} alt="loading"/>
        </ContainerLoading>
      )}
      {(!isLoading && !error && !typeLeague) && (
        <ContainerExtern>
          <TableContainer>
            <TheadTableContainer>
              <tr>
                <th>Posição</th>
                <th>Escudo</th>
                <th>Time</th>
                <th>Jogos</th>
                <th>Pontos</th>
                <th>Vitórias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>Saldo de Gols</th>
                <th>Gols marcados</th>
                <th>Gols sofridos</th>
              </tr>
            </TheadTableContainer>
            <tbody>
            { dataApi[0]?.map(({ rank, team: { name, id, logo }, all, points, goalsDiff }: TypeTeam, index: number) => ( 
                <tr
                  key={index}
                >
                  <td>{rank}º</td>
                  <td>
                    <ButtonTeam nameTeam={name} idTeam={id} logoTeam={logo} />
                  </td>
                  <td>
                    <TeamNameContainer
                      type="button"
                      onClick={ () => router.push(`${pathName}/time/${id}`)}
                    >
                      {name}
                    </TeamNameContainer>
                  </td>
                  <td>{all.played}</td>
                  <td>{points}</td>
                  <td>{all.win}</td>
                  <td>{all.draw}</td>
                  <td>{all.lose}</td>
                  <td>{goalsDiff}</td>
                  <td>{all.goals.for}</td>
                  <td>{all.goals.against}</td>
                </tr>
              ))}
            </tbody>
          </TableContainer>
          <TableLegend/>
        </ContainerExtern>
      )}
      {(!isLoading && !error && typeLeague) && (
        <div>
          {dataApi?.sort(sortGroups).map((item: TypeTeam[], i: number) => (
            <ContainerGroup key={i}>
              <h3 key={i}>Grupo {i + 1}</h3>
              <TableContainer>
                <TheadTableContainer>
                  <tr>
                    <th>Posição</th>
                    <th>Escudo</th>
                    <th>Time</th>
                    <th>Jogos</th>
                    <th>Pontos</th>
                    <th>Vitórias</th>
                    <th>Empates</th>
                    <th>Derrotas</th>
                    <th>Saldo de Gols</th>
                    <th>Gols marcados</th>
                    <th>Gols sofridos</th>
                  </tr>
                </TheadTableContainer>
                <tbody>
                  {item?.map(({ rank, team: { name, id, logo }, all, points, goalsDiff }: TypeTeam, index: number) => (
                    <tr
                      key={index}
                    >
                      <td>{rank}º</td>
                      <td>
                        <ButtonTeam
                          nameTeam={name}
                          idTeam={id} logoTeam={logo}
                        />
                      </td>
                      <td>
                        <TeamNameContainer
                        type="button"
                        onClick={ () => router.push(`${pathName}/time/${id}`)}
                      >
                        {name}
                      </TeamNameContainer>
                      </td>
                      <td>{all.played}</td>
                      <td>{points}</td>
                      <td>{all.win}</td>
                      <td>{all.draw}</td>
                      <td>{all.lose}</td>
                      <td>{goalsDiff}</td>
                      <td>{all.goals.for}</td>
                      <td>{all.goals.against}</td>
                    </tr>
                  ))}
                </tbody>
              </TableContainer>
            </ContainerGroup>
          ))}
        </div>
      )}
    </div>
  )
}