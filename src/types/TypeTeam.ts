export interface TypeTeam {
  rank: number,
  team: {
    name: string,
    id: number,
    logo: string,
  }
  all: { 
    played: number,
    win: number,
    draw:number,
    lose: number, 
    goals: { 
      for: number,
      against: number
    }
  },
  group?: string,
  points: number,
  goalsDiff: number
}