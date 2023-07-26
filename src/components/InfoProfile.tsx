import { styled } from "styled-components"

const ContainerExtern = styled.div`
  height: 100%;
  width: 80vw;
`

export default function InfoProfile() {
  return (
    <ContainerExtern>
      <div>Foto</div>
      <h2>Nome</h2>
      <h5>E-mail</h5>
      <h5>Telefone</h5>
      <h5>Time</h5>
    </ContainerExtern>
  )
}