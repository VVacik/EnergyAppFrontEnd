import { useEffect, useState } from "react";
import type { DailyMix } from "./components/types";
import EnergyMixCharts from "./components/EnergyMixCharts";
import OptimalWindowForm from "./components/OptimalWindowForm";
import { fetchEnergyMix } from "./api/energyApi";
import { NavBar } from "./components/NavBar";
import "./App.css"

export default function App() {
  const [mixData, setMixData] = useState<DailyMix[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnergyMix()
      .then(setMixData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
    <NavBar></NavBar>

    <div className="Flex">
        
        <div className="Left">
      
      {loading ? (
        <p>Ładowanie miksu energetycznego...</p>
      ) : (
        <EnergyMixCharts data={mixData} />
      )}

      <hr/>
      </div>
      <div className="Right">
      <OptimalWindowForm />
      </div>
    </div>
    </main>
    
  );
}
