"use client"

import { InfoContextProvider } from "@/contexts/infoContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProviderProops {
  children: ReactNode;
}

const theme = {
  desktopBreakPoint: "1068px",
  tabletBreakPoint: "768px",
}

export default function DefaultProviders({children}: DefaultProviderProops) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <InfoContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </InfoContextProvider>
    </QueryClientProvider>
  );
}