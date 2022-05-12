import { Observer } from "mobx-react";
import { useState } from 'react';
import { useBattletechStore } from '../context/BattletechContext';
import MechBayContent from './../components/MechBayContent';
import MechSheet from './../components/MechSheet';
import MenuBar from './../components/MenuBar';

function CommandCenter() {
    const battleTechstore = useBattletechStore();
    const [selectedBay, setSelectedBay] = useState(null)
    const [mechdata, setMechData] = useState()

    const getDeployed = (evt) => {
        let id = evt.target.id
        let parts = id.split("-");
        if (selectedBay !== null) {
            setSelectedBay(parts[1])
        }
        setMechData(battleTechstore.getDeployed(parts[1]))
    }

    return (
        <Observer>
            {() => {
                return (
                    <div className="commandCenterContainer">
                        <div className="MechSheetBox"><MechSheet mechdata={mechdata} setMechData={setMechData} /></div>
                        <div className="CommandCenterTopBar"><MenuBar /></div>
                        <div className="CommandCenterBottomBar"></div>
                        <div className="CommandCenterTopLeftBox">
                            <div id="mechbay-0" className="CCTLMech" onClick={getDeployed}>
                                {
                                    battleTechstore.getMechLab().bays && battleTechstore.getMechLab().bays[0] !== null &&
                                    <>
                                        <MechBayContent mechname={battleTechstore.getMechLab().bays[0]} bay={0} showStats={false} />
                                    </>
                                }
                            </div>
                        </div>
                        <div className="CommandCenterBottomLeftBox">
                            <div id="mechbay-1" className="CCBLMech" onClick={getDeployed}>
                                {
                                    battleTechstore.getMechLab().bays && battleTechstore.getMechLab().bays[1] !== null &&
                                    <>
                                        <MechBayContent mechname={battleTechstore.getMechLab().bays[1]} bay={1} showStats={false} />
                                    </>
                                }

                            </div>
                        </div>
                        <div className="CommandCenterTopRightBox">
                            <div id="mechbay-2" className="CCTRMech" onClick={getDeployed}>
                                {
                                    battleTechstore.getMechLab().bays && battleTechstore.getMechLab().bays[2] !== null &&
                                    <>
                                        <MechBayContent mechname={battleTechstore.getMechLab().bays[2]} bay={2} showStats={false} />
                                    </>
                                }

                            </div>
                        </div>
                        <div className="CommandCenterBottomRightBox">
                            <div id="mechbay-3" className="CCBRMech" onClick={getDeployed}>
                                {
                                    battleTechstore.getMechLab().bays && battleTechstore.getMechLab().bays[3] !== null &&
                                    <>
                                        <MechBayContent mechname={battleTechstore.getMechLab().bays[3]} bay={3} showStats={false} />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )
            }}
        </Observer>
    )
}

export default CommandCenter