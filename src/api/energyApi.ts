import type { DailyMix, OptimalWindow } from "../components/types";

const BASE_URL = "http://localhost:5108/energy";

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
