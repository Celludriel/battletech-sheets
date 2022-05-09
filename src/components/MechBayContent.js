
import { useEffect, useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import BattleTechSheetService from './../service/BattleTechSheetService';

function MechBayContent({ mechname, bay }) {
    const [mech, setMech] = useState()

    useEffect(() => {
        setMech(BattleTechSheetService.getByMechKey(mechname))
    }, [mechname])

    return (
        mech &&
        <>
            <div>{mech.type}</div>
            <hr />
            <div>tonnage: {mech.tonnage}</div>
            <div>movement: {mech.movement}</div>
            <div>jumping: {mech.jumping}</div>
            <div>heat: {mech.doubleHeat ? mech.heatSinks / 2 : mech.heatSinks} ({mech.doubleHeat ? "Double" : "Single"})</div>
            <div>faction: {mech.clan ? "Clan" : "Innersphere"}</div>
            <div>battle value: {mech.battleValue}</div>
            <hr />
            <Tooltip target={`#mechcontent-${bay}`} position={'top'}>
                <div>equip</div>
                <div>=======</div>
                {
                    mech && mech.equipment.map(function (item, index) {
                        return (
                            <div key={index}>{item.type} X {item.quantity}</div>
                        )
                    })
                }
                {
                    mech && mech.ammo.length > 0 && <>
                        <hr />
                        <div>ammo</div>
                        <div>=======</div>
                        {
                            mech && mech.ammo.map(function (item, index) {
                                return (
                                    <div key={index}>{item.type} X {item.shots}</div>
                                )
                            })
                        }
                    </>
                }
            </Tooltip>
            <img id={`mechcontent-${bay}`} alt={mech.type} src={mech.image != null ? `./mechimages/${mech.image}` : `./Cockpit.png`} />
        </>

    )
}

export default MechBayContent