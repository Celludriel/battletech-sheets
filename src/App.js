import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react';
import './App.css';
import Mech from './components/Mech';
import MechData from "./components/MechData";
import MechInternal from './components/MechInternal';
import WarriorData from "./components/WarriorData";
import BattleTechSheetService from './service/BattleTechSheetService';
import { Divider } from 'primereact/divider';
import CriticalHitTable from "./components/CriticalHitTable";
import { ReactComponent as HeatData } from './svg/HeatData.svg';
import { ReactComponent as Heat } from './svg/Heat.svg';

function App() {
  const [mechdata, setMechData] = useState()

  useEffect(() => {
    setMechData(BattleTechSheetService.getMechTemplate("'Gestalt' D2X-G"))
  }, [])

  return (
    <div className="App">

      <div className="grid">
        <div className="col-2" />
        <div className="col-10">
          <div className="grid">
            <div className="col-6 text-right">
              <div className="grid">
                <div className="col-12">
                  <img alt="Mech Record Sheet" src="MECH RECORD SHEET.svg" />
                </div>
                <div className="col-8 text-left">
                  <MechData data={mechdata} setMechData={setMechData} />
                </div>
                <div className="col-4 text-left">
                  <div className="grid">
                    <div className="col-12">
                      <WarriorData />
                    </div>
                    <div className="col-12 text-center">
                      <img alt="Cockpit" src="Cockpit.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 text-left">
              <div className="grid">
                <div className="col-12 pl-10">
                  <img alt="Armor Diagram" src="Armor Diagram.svg" />
                </div>
              </div>
              <div className="grid">
                <div className="col-12 text-left">
                  {
                    mechdata &&
                    <Mech data={mechdata} setMechData={setMechData} />
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col-12">
              <Divider />
            </div>
          </div>
          <div className="grid">
            <div className="col-6 text-left">
              <div className="grid">
                <div className="col-12">
                  <img alt="Critical Hit Table" src="Critical Hit Table.svg" />
                </div>
              </div>
              <div className="grid">
                <div className="col-12">
                  <CriticalHitTable data={mechdata} setMechData={setMechData} />
                </div>
              </div>
            </div>
            <div className="col-2 text-left">
              <div className="grid">
                <div className="col-12">
                  <img alt="Internal Structure Diagram" src="Internal Structure Diagram.svg" />
                </div>
              </div>
              <div className="grid">
                <div className="col-12">
                  {
                    mechdata &&
                    <MechInternal data={mechdata} setMechData={setMechData} />
                  }
                </div>
              </div>
              <div className="grid">
                <div className="col-12">
                  <HeatData />
                </div>
              </div>
            </div>
            <div className="col-4 text-left" style={{ paddingTop: 50, paddingLeft: 50}}>
              <Heat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
