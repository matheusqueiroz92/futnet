import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BASE_API_URL = 'https://api-football-v1.p.rapidapi.com/v3';


const fetcherLeague = (sufix: string, season: number, idLeague: number) => {
  const config = {
    params: {
      season: season,
      league: idLeague,
    },
    headers: {
      'X-RapidAPI-Key': '75b80e07c1msh9369ba2b5de2cebp1feb30jsnfec0ecd210df',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    }
  }
  return axios.get(`${BASE_API_URL}${sufix}`, config);
}

const fetcherTeam = (sufix: string, idTeam: number) => {
  const config = {
    params: {
      team: idTeam
    },
    headers: {
      'X-RapidAPI-Key': '75b80e07c1msh9369ba2b5de2cebp1feb30jsnfec0ecd210df',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    }
  }
  return axios.get(`${BASE_API_URL}${sufix}`, config);
}

const fetcherMatchesByTeam = (sufix: string, idLeague: number, season: number, idTeam: number) => {
  const config = {
    params: {
      league: idLeague,
      season: season,
      team: idTeam,
    },
    headers: {
      'X-RapidAPI-Key': '75b80e07c1msh9369ba2b5de2cebp1feb30jsnfec0ecd210df',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    }
  }
  return axios.get(`${BASE_API_URL}${sufix}`, config);
}

const fetcherAllMatches = (sufix: string, season: number, idLeague: number) => {
  const config = {
    params: {
      season: season,
      league: idLeague,
    },
    headers: {
      'X-RapidAPI-Key': '75b80e07c1msh9369ba2b5de2cebp1feb30jsnfec0ecd210df',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    }
  }
  return axios.get(`${BASE_API_URL}${sufix}`, config);
}

export function useLeague(season: number, idLeague: number) {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetcherLeague('/standings', season, idLeague),
    queryKey: ['league', idLeague, season],
    enabled: !!idLeague,
    staleTime: 1000 * 60 * 30
  });

  const dataApi = data?.data?.response[0]?.league?.standings;

  return {
    dataApi,
    isLoading,
    error
  }
}

export function useTeam(idTeam: number) {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetcherTeam('/players/squads', idTeam),
    queryKey: ['team', idTeam],
    enabled: !!idTeam,
    staleTime: 1000 * 60 * 30
  });

  const dataApi = data?.data.response[0];

  return {
    dataApi,
    isLoading,
    error
  }
}

export function useMatchesByTeam(idLeague: number , season: number, idTeam: number) {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetcherMatchesByTeam('/fixtures', idLeague, season, idTeam),
    queryKey: ['matchesByTeam', idTeam, season, idLeague],
    enabled: !!idTeam,
    staleTime: 1000 * 60 * 30,
  });

  const dataApi = data?.data?.response;

  return {
    dataApi,
    isLoading,
    error
  }
}

export function useAllMatches(season: number, idLeague: number) {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetcherAllMatches('/fixtures', season, idLeague),
    queryKey: ['matches', season, idLeague],
    enabled: !!idLeague,
    staleTime: 1000 * 60 * 30,
  });

  const dataApi = data?.data?.response;

  return {
    dataApi,
    isLoading,
    error
  }
}

export function useTopScorers(season: number, idLeague: number) {
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetcherLeague('/players/topscorers', season, idLeague),
    queryKey: ['top-scorers', season, idLeague],
    enabled: !!idLeague,
    staleTime: 1000 * 60 * 30,
  });

  const dataApi = data?.data?.response;

  return {
    dataApi,
    isLoading,
    error
  }
}
