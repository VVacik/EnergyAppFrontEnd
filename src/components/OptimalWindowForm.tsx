import React, { useState } from "react";
import type { OptimalWindow } from "./types";
import { fetchOptimalWindow } from "../api/energyApi";

export default function OptimalWindowForm() {
  const [hours, setHours] = useState<number>(2);
  const [result, setResult] = useState<OptimalWindow | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetchOptimalWindow(hours);
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="optimal-window-form">
      <h2>Optimal charging window</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Czas ładowania (1–6h):{" "}
          <input
            type="number"
            min={1}
            max={6}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </label>
        <button type="submit">
          Oblicz
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }} className="optimal-window-result">
          <p>
            <strong>Start:</strong> {new Date(result.start).toLocaleString()}
          </p>
          <p>
            <strong>End:</strong> {new Date(result.end).toLocaleString()}
          </p>
          <p>
            <strong>Average share of clean energy:</strong>{" "}
            {result.averageCleanEnergy.toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}
