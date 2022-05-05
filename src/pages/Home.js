
import { useEffect, useState } from 'react';
import BattleTechSheetService from '../service/BattleTechSheetService';
import MechSheet from './../components/MechSheet';
import MenuBar from './../components/MenuBar';

function Home() {
    const [mechdata, setMechData] = useState()

    useEffect(() => {
      setMechData(BattleTechSheetService.getMechTemplate("'Gestalt' D2X-G"))
  
      let result = BattleTechSheetService.filterByFirstLetter('b')
    }, [])

    return (
        <div className="homeContainer">
            <div className="HomeMenuBar"><MenuBar /></div>
            <div className="HomeContent"><MechSheet mechdata={mechdata} setMechData={setMechData}/></div>
            <div className="HomeLeftMargin"></div>
            <div className="HomeRightMargin"></div>
            <div className="BottomMargin"></div>
        </div>
    )
}

export default Home