import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import type { DailyMix } from "./types";

Chart.register(ArcElement, Tooltip, Legend);

interface Props {
  data: DailyMix[];
}

export default function EnergyMixCharts({ data }: Props) {
  return (
    <div className="energy-mix-container-whole">
      <h2>Energy mix (3 days)</h2>
      <div className="energy-mix-container">
        {data.map((day, i) => {
          const labels = Object.keys(day.averages);
          const values = Object.values(day.averages);

          return (
            <div key={i} className="energy-card">
              <h3>{new Date(day.date).toLocaleDateString()}</h3>
              <Pie
                data={{
                  labels,
                  datasets: [
                    {
                      data: values,
                      backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                        "#C9CBCF",
                      ],
                    },
                  ],
                }}
              />
              <p>
                Clean energy percentage:{" "}
                <strong>{day.cleanEnergyPercent.toFixed(2)}%</strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
