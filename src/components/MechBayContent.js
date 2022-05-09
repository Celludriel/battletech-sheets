
import { useEffect, useState } from 'react';
import BattleTechSheetService from './../service/BattleTechSheetService';

function MechBayContent({ mechname }) {
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
            <img alt={mech.type} src={mech.image != null ? `./mechimages/${mech.image}` : `./Cockpit.png`} />
        </>

    )
}

export default MechBayContent