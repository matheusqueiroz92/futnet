import { useInfoContext } from "@/hooks/useInfoContext"
import { styled } from "styled-components"

const NavContainer = styled.nav`
  display: flex;
  background-color: gray;
  width: 80vw;
`

const TagUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TagButton = styled.button<{ active: string; }>`
  border: none;
  background-color: ${props => props.active || 'gray'};
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 15px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: var(--blue-futnet);
  }
`

export default function NavTable() {
  const { showComponent, setShowComponent, loading } = useInfoContext();

  const toggleComponent = (param: string) => {
    setShowComponent(param);
  }

  return (
    <NavContainer>
      {!loading && (
        <TagUl>
          <li>
            <TagButton
              type="button"
              onClick={() => toggleComponent('classification')}
              active={showComponent === 'classification' ? '#505050' : ''}
            >
              Classificação
            </TagButton>
          </li>
          <li>
            <TagButton
              type="button"
              onClick={() => toggleComponent('matches')}
              active={showComponent === 'matches' ? '#505050' : ''}
            >
              Partidas
            </TagButton>
          </li>
          <li>
            <TagButton
              type="button"
              onClick={() => toggleComponent('top-scorers')}
              active={showComponent === 'top-scorers' ? '#505050' : ''}
            >
              Artilharia
            </TagButton>
          </li>
        </TagUl>
      )}
    </NavContainer>
  )
}