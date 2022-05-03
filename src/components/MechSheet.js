import { ReactComponent as ArmorDiagram } from '../svg/ArmorDiagram.svg';
import { ReactComponent as MechRecordSheet } from '../svg/MechRecordSheet.svg';
import CriticalHitTable from "./CriticalHitTable";
import Heat from "./Heat";
import HeatData from "./HeatData";
import Mech from './Mech';
import MechData from "./MechData";
import MechInternal from './MechInternal';
import WarriorData from "./WarriorData";


function MechSheet({ mechdata, setMechData }) {
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
        <>
        <div className="container">
            <div className="Header"><MechRecordSheet /></div>
            <div className="ArmorPoints">
                <div className="armorPointsContainer">
                    <ArmorDiagram />
                    {
                        mechdata &&
                        <Mech data={mechdata} setMechData={setMechData} />
                    }

                </div>
            </div>
            <div className="TopInformation">
                <div className="MechInformation">
                    <MechData data={mechdata} setMechData={setMechData} />
                </div>
                <div className="WarriorInformation">
                    <div className="WarriorData"><WarriorData /></div>
                    <div className="CockpitImage"><img alt="Cockpit" src="Cockpit.png" /></div>
                </div>
            </div>
            <div className="CriticalData"><CriticalHitTable data={mechdata} setMechData={setMechData} /></div>
            <div className="InternalData">
                <div className="InternalPoints">
                    {mechdata &&
                        <MechInternal data={mechdata} setMechData={setMechData} />
                    }
                </div>
                <div className="HeatSinks"><HeatData data={mechdata} setMechData={setMechData} /></div>
                <div className="HeatBar">                        <Heat data={mechdata} setMechData={setMechData} />
                    <br />
                    <button onClick={lowerOverflow}>-</button>/<button onClick={addOverflow}>+</button></div>
            </div>
        </div>
        </>
    )
}

export default MechSheet