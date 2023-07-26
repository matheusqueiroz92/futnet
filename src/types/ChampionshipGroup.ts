import { StaticImageData } from "next/image";

export interface TypeLeague {
  season: number,
  idLeague: number,
  nameLeague: string,
  logoLeague: StaticImageData,
  typeLeague: boolean,
}