
import { useEffect, useState } from 'react';
import BattleTechSheetService from './../service/BattleTechSheetService';

function MechbayOverview({ mechbays }) {
    const [tonnage, setTonnage] = useState(0)
    const [battleValue, setBattleValue] = useState(0)

    useEffect(() => {
        if (mechbays) {
            debugger
            let totalTonnage = 0;
            let totalBattleValue = 0;
            for (let i = 0; i < mechbays.length; i++) {
                if (mechbays[i] !== null) {
                    totalTonnage = totalTonnage + BattleTechSheetService.getByMechKey(mechbays[i]).tonnage
                    totalBattleValue = totalBattleValue + BattleTechSheetService.getByMechKey(mechbays[i]).battleValue
                }
            }
            setTonnage(totalTonnage)
            setBattleValue(totalBattleValue)
        }
    }, [mechbays])

    return (
        <>
            {tonnage !== null && <div>{`Tonnage: ${tonnage}`}</div>}
            <br />
            {battleValue !== null && <div>{`Battle Value: ${battleValue}`}</div>}
        </>
    )
}

export default MechbayOverview