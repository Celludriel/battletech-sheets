import { useEffect, useState } from 'react';
import './App.css';
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { Divider } from 'primereact/divider';
import { ReactComponent as Heat } from './svg/Heat.svg';
import { ReactComponent as MechRecordSheet } from './svg/MechRecordSheet.svg';
import { ReactComponent as ArmorDiagram } from './svg/ArmorDiagram.svg';
import { ReactComponent as CriticalHitTableBanner } from './svg/CriticalHitTable.svg';
import { ReactComponent as InternalStructureDiagram } from './svg/InternalStructureDiagram.svg';
import Mech from './components/Mech';
import MechData from "./components/MechData";
import MechInternal from './components/MechInternal';
import WarriorData from "./components/WarriorData";
import BattleTechSheetService from './service/BattleTechSheetService';
import CriticalHitTable from "./components/CriticalHitTable";
import HeatData from "./components/HeatData";

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
                  <MechRecordSheet />
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
                  <ArmorDiagram />
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
                  <CriticalHitTableBanner />
                </div>
              </div>
              <div className="grid">
                <div className="col-12">
                  <CriticalHitTable data={mechdata} setMechData={setMechData} />
                </div>
              </div>
            </div>
            <div className="col-3 text-left">
              <div className="grid">
                <div className="col-12">
                  <InternalStructureDiagram />
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
                  <HeatData data={mechdata} setMechData={setMechData}  />
                </div>
              </div>
            </div>
            <div className="col-3 text-left" style={{ paddingTop: 50}}>
              <Heat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
