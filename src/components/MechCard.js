import { Tooltip } from 'primereact/tooltip';
import { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import BattleTechSheetService from './../service/BattleTechSheetService';
import { useBattletechStore } from '../context/BattletechContext';

function MechCard({ itemId, mechName }) {
    const [mechdata, setMechData] = useState()
    const battleTechstore = useBattletechStore();
    const visibility = useContext(VisibilityContext);
    const visible = visibility.isItemVisible(itemId);

    useEffect(() => {
        if (mechName) {
            setMechData(BattleTechSheetService.getByMechKey(mechName))
        }
    }, [mechName])

    const mechCardClick = (evt) => {
        let parts = evt.target.id.split("_")
        battleTechstore.addMech(parts[2])
    }

    return (
        <div role="button"
            style={{
                border: "1px solid",
                display: "inline-block",
                margin: "0 10px",
                width: "160px",
                userSelect: "none"
            }}
            tabIndex={0}
            className="card"
        >
            {mechdata &&
                <>
                    <Tooltip target={`#mechcard-${itemId}`} position={'bottom'}>
                        <div>tonnage: {mechdata.tonnage}</div>
                        <div>movement: {mechdata.movement}</div>
                        <div>jumping: {mechdata.jumping}</div>
                        <div>heat: {mechdata.doubleHeat ? mechdata.heatSinks / 2 : mechdata.heatSinks} ({mechdata.doubleHeat ? "Double" : "Single"})</div>
                        <div>faction: {mechdata.clan ? "Clan" : "Innersphere"}</div>
                        <div>battle value: {mechdata.battleValue}</div>
                        <hr />
                        <div>equip</div>
                        <div>=======</div>
                        {
                            mechdata && mechdata.equipment.map(function (item, index) {
                                return (
                                    <div key={index}>{item.type} X {item.quantity}</div>
                                )
                            })
                        }
                        {
                            mechdata && mechdata.ammo.length > 0 && <>
                                <hr />
                                <div>ammo</div>
                                <div>=======</div>
                                {
                                    mechdata && mechdata.ammo.map(function (item, index) {
                                        return (
                                            <div key={index}>{item.type} X {item.shots}</div>
                                        )
                                    })
                                }
                            </>
                        }
                    </Tooltip>
                    <div id={`mechcard-${itemId}`}  onClick={mechCardClick}>
                        <div id={`mechcard_${itemId}_${mechdata.type}`} >{mechdata.type}</div>
                    </div>
                </>
            }
        </div>
    )
}

export default MechCard