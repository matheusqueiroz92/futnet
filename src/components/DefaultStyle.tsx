"use client"

import { styled } from "styled-components";

export const DefaultStyle = styled.div`
  padding: 12px 24px;
  background-color: var(--bg-primary);
  height: 85vh;

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    padding: 34px 160px;
  }
`