import { useState, useEffect } from 'react';
import moment from "moment";
import { data } from '../../data/solar_panel_mock_data';
import { Card } from "./card";
import { calculateSolarPanelGridData, random } from '../../utils';
import "./style.css";
import { PanelGrid } from './panel_grid';


export const SolarPanelDashboard = () => {
  const [panelsData, setPanelsData] = useState(data);
  const [panelsGridData, setPanelsGridData] = useState({
    totalEnergy: 0,
    healthyPanels: 0,
    weakPanels: 0
  })

  useEffect(() => {
    async function fetchPanelsData() {
      const freshData = [];
      data.forEach(panel => {
        freshData.push({
          ...panel,
          time: moment().toISOString(),
          wattage: random(0, 400),
          voltage: random(0, 20),
          energy: `${random(0, 10000)}kWh`
        })
      })
      setPanelsData(freshData);
    }

    const interval = setInterval(fetchPanelsData, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


  useEffect(() => {
    // Calculate total energy and count healthy/weak panels
    const panelsGridData = calculateSolarPanelGridData(panelsData);
    setPanelsGridData(panelsGridData);

  }, [panelsData]);

  if(!panelsData.length){
    return null; // or we can show fallback component
  }

  const { totalEnergy, healthyCount, weakCount } = panelsGridData;

  return (
    <div className='solar-panel-dashboard'>
      <h1>Solar Panel Dashboard</h1>
      <div className='status-row'>
        <Card heading="Total Energy Produced" info={`${totalEnergy.toFixed(2)} kwh`} />
        <Card classNames="healthy-panel" heading="Healthy Panels" info={healthyCount} />
        <Card classNames="weak-panel" heading="Weak Panels" info={weakCount} />
      </div>
      <h3>Solar Panel Grid</h3>
      <PanelGrid panels={panelsData} />
    </div>
  );
};


