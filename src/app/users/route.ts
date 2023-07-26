import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const config = {
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "75b80e07c1msh9369ba2b5de2cebp1feb30jsnfec0ecd210df",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    }
  }

  const result = await fetch('https://api-football-v1.p.rapidapi.com/v3/standings?league=71&season=2023', config);
  const data = await result.json();

  console.log(data);
  
  return NextResponse.json({ data });
}

export async function POST(req: Request, res: Response) {
  const result = await fetch('');
  const data = result.json();

  console.log(data);

  return NextResponse.json({ data });
}