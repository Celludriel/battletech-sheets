
import { useEffect, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import MechCard from './../components/MechCard';
import MenuBar from './../components/MenuBar';
import BattleTechSheetService from '../service/BattleTechSheetService';
import { Menubar } from 'primereact/menubar';

function MechBay() {
    const [cardRollerItems, setCardRollerItems] = useState()

    useEffect(() => {
        let data = BattleTechSheetService.filterByFirstLetter('a')      
        setCardRollerItems(data)
    }, [])

    const menuItems = [
        {label: 'A',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('a'))}},
        {label: 'B',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('b'))}},
        {label: 'C',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('c'))}},
        {label: 'D',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('d'))}},
        {label: 'E',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('e'))}},
        {label: 'F',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('f'))}},
        {label: 'G',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('g'))}},
        {label: 'H',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('h'))}},
        {label: 'I',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('i'))}},
        {label: 'J',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('j'))}},
        {label: 'K',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('k'))}},
        {label: 'L',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('l'))}},
        {label: 'M',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('m'))}},
        {label: 'N',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('n'))}},
        {label: 'O',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('o'))}},
        {label: 'P',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('p'))}},
        {label: 'Q',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('q'))}},
        {label: 'R',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('r'))}},
        {label: 'S',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('s'))}},
        {label: 'T',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('t'))}},
        {label: 'U',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('u'))}},
        {label: 'V',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('v'))}},
        {label: 'W',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('w'))}},
        {label: 'X',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('x'))}},
        {label: 'Y',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('y'))}},
        {label: 'Z',command:()=>{ setCardRollerItems(BattleTechSheetService.filterByFirstLetter('z'))}}
    ];

    const onWheel = (apiObj, ev) => {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    
        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }
    
        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }

    return (
        <>
            <div className="BayMenuBar"><MenuBar /></div>
            <div className="BayFilterBar" style={{ display: "flex", justifyContent: "space-evenly", padding: 5, fontSize: 17 }}>
                <Menubar model={menuItems}/>
            </div>
            <div className="BayCardRoller">
                <ScrollMenu
                    onWheel={onWheel}
                >
                    {cardRollerItems && 
                        Object.keys(cardRollerItems).map(function (key, index){
                            return (
                                <MechCard
                                key={index}
                                itemId={index} // NOTE: itemId is required for track items
                                mechname={cardRollerItems[key].type}
                            />
                            )
                        })
                    }
                </ScrollMenu>
            </div>
            <div className="BayMech1"></div>
            <div className="BayMech2"></div>
            <div className="BayMech3"></div>
            <div className="BayMech4"></div>
            <div className="BayLeftMargin"></div>
            <div className="BayRightMargin"></div>
        </>
    )
}

export default MechBay