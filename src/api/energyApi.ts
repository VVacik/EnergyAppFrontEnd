import type { DailyMix, OptimalWindow } from "../components/types";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchEnergyMix(): Promise<DailyMix[]> {
  const res = await fetch(`${BASE_URL}/mix`);
  if (!res.ok) throw new Error("Failed to fetch energy mix");
  return res.json();
}

export async function fetchOptimalWindow(hours: number): Promise<OptimalWindow> {
  const res = await fetch(`${BASE_URL}/optimal?hours=${hours}`);
  if (!res.ok) throw new Error("Failed to fetch optimal window");
  return res.json();
}
