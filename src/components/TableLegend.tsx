import { styled } from "styled-components"

const ContainerExtern = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 18px;
`

const ContainerMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 5px;
`

const ContainerSquare = styled.div<{ colorSquare: string; }>`
  width: 10px;
  height: 10px;
  background-color: ${props => props.colorSquare};
`

export default function TableLegend() {
  return (
    <ContainerExtern>
      <ContainerMiddle>
        <ContainerSquare colorSquare={'#a7edff'}></ContainerSquare>
        <p>Libertadores</p>
      </ContainerMiddle>
      <ContainerMiddle>
        <ContainerSquare colorSquare={'#b5ffa6'}></ContainerSquare>
        <p>Pré-libertadores</p>
      </ContainerMiddle>
      <ContainerMiddle>
        <ContainerSquare colorSquare={'#fff9ab'}></ContainerSquare>
        <p>Sul-americana</p>
      </ContainerMiddle>
      <ContainerMiddle>
        <ContainerSquare colorSquare={'#ffaaaa'}></ContainerSquare>
        <p>Rebaixamento</p>
      </ContainerMiddle>
    </ContainerExtern>
  )
}