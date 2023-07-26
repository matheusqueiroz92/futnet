import { InfoContext } from "@/contexts/infoContext";
import { useContext } from "react";

export function useInfoContext() {
  return useContext(InfoContext);
}