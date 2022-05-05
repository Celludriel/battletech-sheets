
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import MechCard from './../components/MechCard';
import MenuBar from './../components/MenuBar';

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

function MechBay() {
    const items = [{ name: "test" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
        , { name: "test2" }
    ]

    return (
        <>
            <div className="BayMenuBar"><MenuBar /></div>
            <div className="BayFilterBar" style={{ display: "flex", justifyContent: "space-evenly", padding: 5, fontSize: 17 }}>
                <span>#</span>
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>I</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
                <span>M</span>
                <span>N</span>
                <span>O</span>
                <span>P</span>
                <span>Q</span>
                <span>R</span>
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>V</span>
                <span>W</span>
                <span>X</span>
                <span>Y</span>
                <span>Z</span>
            </div>
            <div className="BayCardRoller">
                <ScrollMenu
                    onWheel={onWheel}
                >
                    {items.map(({ key }) => (
                        <MechCard
                            key={key}
                            itemId={key} // NOTE: itemId is required for track items
                        />
                    ))}
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