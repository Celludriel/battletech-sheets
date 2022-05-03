import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import { useEffect, useState } from 'react';
import './App.css';
import MechSheet from "./components/MechSheet";
import BattleTechSheetService from './service/BattleTechSheetService';


function App() {
  const [mechdata, setMechData] = useState()

  useEffect(() => {
    setMechData(BattleTechSheetService.getMechTemplate("'Gestalt' D2X-G"))
  }, [])

  return (
    <div class="mainApp">
      <div class="Top"></div>
      <div class="Content"><MechSheet mechdata={mechdata} setMechData={setMechData} /></div>
      <div class="Bottom"></div>
    </div>
  );
}

export default App;
