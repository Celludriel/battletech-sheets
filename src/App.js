import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Divider } from 'primereact/divider';
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import { useEffect, useState } from 'react';
import './App.css';
import CriticalHitTable from "./components/CriticalHitTable";
import Heat from "./components/Heat";
import HeatData from "./components/HeatData";
import Mech from './components/Mech';
import MechData from "./components/MechData";
import MechInternal from './components/MechInternal';
import WarriorData from "./components/WarriorData";
import BattleTechSheetService from './service/BattleTechSheetService';
import { ReactComponent as ArmorDiagram } from './svg/ArmorDiagram.svg';
import { ReactComponent as CriticalHitTableBanner } from './svg/CriticalHitTable.svg';
import { ReactComponent as InternalStructureDiagram } from './svg/InternalStructureDiagram.svg';
import { ReactComponent as MechRecordSheet } from './svg/MechRecordSheet.svg';

function App() {
  const [mechdata, setMechData] = useState()

  useEffect(() => {
    setMechData(BattleTechSheetService.getMechTemplate("'Gestalt' D2X-G"))
  }, [])

  const addOverflow = () => {
    let newData = Object.assign({}, mechdata);
    newData.overflow = mechdata.overflow + 1;
    setMechData(newData)
  }

  const lowerOverflow = () => {
    let newData = Object.assign({}, mechdata);
    newData.overflow = mechdata.overflow - 1 < 0 ? 0 : mechdata.overflow - 1;
    setMechData(newData)
  }

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
                  <HeatData data={mechdata} setMechData={setMechData} />
                </div>
              </div>
            </div>
            <div className="col-3 text-left" style={{ paddingTop: 50 }}>
              <Heat data={mechdata} setMechData={setMechData} />
              <br />
              <button onClick={lowerOverflow}>-</button>/<button onClick={addOverflow}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
