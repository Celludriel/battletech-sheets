
function HeatData({data,setMechData}) {

    const pointClick = (evt) => {
        let id = evt.target.id
        let newData = Object.assign({}, data);

        if(data.heatSinks[id] != null){
            newData.heatSinks[id] = !data.heatSinks[id]
            setMechData(newData)    
        }
    }

    return (
        <svg version="1.2" viewBox="0 0 310 350" width="310" height="350" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                    <path d="m-795-1116h1224v1530h-1224z" />
                </clipPath>
            </defs>
            <style>{`tspan{white-space:pre}.hdata{fill:#fff;stroke:#000;stroke-linecap:square;stroke-width:3.9}.hdatb{stroke:#fff;stroke-linejoin:round;stroke-width:1.9}.hdatc{font-size: 14px;fill: #ffffff;font-family: "Eurostile LT Std"}.hdatd{font-size: 10px;fill: #000000;font-family: "Eurostile LT Std"}.hdate{fill:#fff;stroke:#000;stroke-width:1}.hdatf{fill:#ff0000;stroke:#000;stroke-width:1}.hdatg{fill:#000000;stroke:#000;stroke-width:1}`}</style>
            <g clipPath="url(#cp1)" transform="matrix(1, 0, 0, 1, 3.799988, 3.199988)">
                <path className="hdata" d="m17.1 342.8l-13.6-13.7v-303.9l13.6-21.9h137l16.4 21.9h112.2l16.5 13.7v290.2l-13.7 13.7z" />
                <path className="hdatb" d="m151.5 38.9h-131.9l-10.4-15.6 10.3-15.6h132l11 15.6z" />
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 26.292, 30.676 )`}}>
                    <tspan x="0" y="0" className="hdatc">HEAT DATA</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 86.021 )`}}>
                    <tspan x="0" y="0" className="hdatd">30</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 85.399 )`}}>
                    <tspan x="0" y="0" className="hdatd">Shutdown</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 14.409, 55.324 )`}}>
                    <tspan x="0" y="0" className="hdatd">Heat</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 12.506, 70.835 )`}}>
                    <tspan x="0" y="0" className="hdatd">Level*</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 107.501, 70.213 )`}}>
                    <tspan x="0" y="0" className="hdatd">Effects</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 101.234 )`}}>
                    <tspan x="0" y="0" className="hdatd">28</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 100.612 )`}}>
                    <tspan x="0" y="0" className="hdatd">Ammo Exp. avoid on 8+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 116.434 )`}}>
                    <tspan x="0" y="0" className="hdatd">26</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 115.812 )`}}>
                    <tspan x="0" y="0" className="hdatd">Shutdown, avoid on 10+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 131.634 )`}}>
                    <tspan x="0" y="0" className="hdatd">25</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 131.012 )`}}>
                    <tspan x="0" y="0" className="hdatd">+5 Movement Points</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 146.833 )`}}>
                    <tspan x="0" y="0" className="hdatd">24</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 146.211 )`}}>
                    <tspan x="0" y="0" className="hdatd">+4 Modiﬁer to Fire</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 162.033 )`}}>
                    <tspan x="0" y="0" className="hdatd">23</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 161.411 )`}}>
                    <tspan x="0" y="0" className="hdatd">Ammo Exp. avoid on 6+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 177.232 )`}}>
                    <tspan x="0" y="0" className="hdatd">22</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 176.61 )`}}>
                    <tspan x="0" y="0" className="hdatd">Shutdown, avoid on 8+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 192.432 )`}}>
                    <tspan x="0" y="0" className="hdatd">20</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 191.81 )`}}>
                    <tspan x="0" y="0" className="hdatd">+4 Movement Points</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 207.632 )`}}>
                    <tspan x="0" y="0" className="hdatd">19</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 207.01 )`}}>
                    <tspan x="0" y="0" className="hdatd">Ammo Exp. avoid on 4+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 222.831 )`}}>
                    <tspan x="0" y="0" className="hdatd">18</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 222.209 )`}}>
                    <tspan x="0" y="0" className="hdatd">Shutdown, avoid on 6+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 238.031 )`}}>
                    <tspan x="0" y="0" className="hdatd">17</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 237.409 )`}}>
                    <tspan x="0" y="0" className="hdatd">+3 Modiﬁer to Fire</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 253.231 )`}}>
                    <tspan x="0" y="0" className="hdatd">15</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 252.609 )`}}>
                    <tspan x="0" y="0" className="hdatd">+3 Movement Points</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 268.43 )`}}>
                    <tspan x="0" y="0" className="hdatd">14</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 267.808 )`}}>
                    <tspan x="0" y="0" className="hdatd">Shutdown, avoid on 4+</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 283.63 )`}}>
                    <tspan x="0" y="0" className="hdatd">13</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 283.008 )`}}>
                    <tspan x="0" y="0" className="hdatd">+2 Modiﬁer to Fire</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 298.83 )`}}>
                    <tspan x="0" y="0" className="hdatd">10</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 298.207 )`}}>
                    <tspan x="0" y="0" className="hdatd">+2 Movement Points</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 314.029 )`}}>
                    <tspan x="0" y="0" className="hdatd"> 8</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 313.407 )`}}>
                    <tspan x="0" y="0" className="hdatd">+1 Modiﬁer to Fire</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 22.627, 329.229 )`}}>
                    <tspan x="0" y="0" className="hdatd"> 5</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 58.215, 328.607 )`}}>
                    <tspan x="0" y="0" className="hdatd">+1 Movement Points</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 230.215, 302.207 )`}}>
                    <tspan x="0" y="0" className="hdatd">Single</tspan>
                </text>
                <text style={{transform: `matrix(0.999, 0, 0, 1.001, 230.215, 318.207 )`}}>
                    <tspan x="0" y="0" className="hdatd">Double</tspan>
                </text>

                {
                    data &&
                        <>
                            <circle id="0" className = {data.heatSinks[0] == null ? "hdatg" : data.heatSinks[0] ? "hdatf" : "hdate"} cx="238.574" cy="91.128" r="6.953" onClick={pointClick} />
                            <circle id="1" className = {data.heatSinks[1] == null ? "hdatg" : data.heatSinks[1] ? "hdatf" : "hdate"} cx="263.378" cy="91.128" r="6.953" onClick={pointClick} />
                            <circle id="2" className = {data.heatSinks[2] == null ? "hdatg" : data.heatSinks[2] ? "hdatf" : "hdate"} cx="288.574" cy="91.128" r="6.953" onClick={pointClick} />
                            <circle id="3" className = {data.heatSinks[3] == null ? "hdatg" : data.heatSinks[3] ? "hdatf" : "hdate"} cx="238.574" cy="111.396" r="6.953" onClick={pointClick} />
                            <circle id="4" className = {data.heatSinks[4] == null ? "hdatg" : data.heatSinks[4] ? "hdatf" : "hdate"} cx="263.378" cy="111.396" r="6.953" onClick={pointClick} />
                            <circle id="5" className = {data.heatSinks[5] == null ? "hdatg" : data.heatSinks[5] ? "hdatf" : "hdate"} cx="288.574" cy="111.396" r="6.953" onClick={pointClick} />
                            <circle id="6" className = {data.heatSinks[6] == null ? "hdatg" : data.heatSinks[6] ? "hdatf" : "hdate"} cx="238.574" cy="133.017" r="6.953" onClick={pointClick} />
                            <circle id="7" className = {data.heatSinks[7] == null ? "hdatg" : data.heatSinks[7] ? "hdatf" : "hdate"} cx="263.378" cy="133.017" r="6.953" onClick={pointClick} />
                            <circle id="8" className = {data.heatSinks[8] == null ? "hdatg" : data.heatSinks[8] ? "hdatf" : "hdate"} cx="288.574" cy="133.017" r="6.953" onClick={pointClick} />
                            <circle id="9" className = {data.heatSinks[9] == null ? "hdatg" : data.heatSinks[9] ? "hdatf" : "hdate"} cx="238.574" cy="172.579" r="6.953" onClick={pointClick} />
                            <circle id="10" className = {data.heatSinks[10] == null ? "hdatg" : data.heatSinks[10] ? "hdatf" : "hdate"} cx="263.378" cy="172.579" r="6.953" onClick={pointClick} />
                            <circle id="11" className = {data.heatSinks[11] == null ? "hdatg" : data.heatSinks[11] ? "hdatf" : "hdate"} cx="288.574" cy="172.579" r="6.953" onClick={pointClick} />
                            <circle id="12" className = {data.heatSinks[12] == null ? "hdatg" : data.heatSinks[12] ? "hdatf" : "hdate"} cx="238.574" cy="152.445" r="6.953" onClick={pointClick} />
                            <circle id="13" className = {data.heatSinks[13] == null ? "hdatg" : data.heatSinks[13] ? "hdatf" : "hdate"} cx="263.378" cy="152.445" r="6.953" onClick={pointClick} />
                            <circle id="14" className = {data.heatSinks[14] == null ? "hdatg" : data.heatSinks[14] ? "hdatf" : "hdate"} cx="288.574" cy="152.445" r="6.953" onClick={pointClick} />
                            <circle id="15" className = {data.heatSinks[15] == null ? "hdatg" : data.heatSinks[15] ? "hdatf" : "hdate"} cx="238.574" cy="192.79" r="6.953" onClick={pointClick} />
                            <circle id="16" className = {data.heatSinks[16] == null ? "hdatg" : data.heatSinks[16] ? "hdatf" : "hdate"} cx="263.378" cy="192.79" r="6.953" onClick={pointClick} />
                            <circle id="17" className = {data.heatSinks[17] == null ? "hdatg" : data.heatSinks[17] ? "hdatf" : "hdate"} cx="288.574" cy="192.79" r="6.953" onClick={pointClick} />
                            <circle id="18" className = {data.heatSinks[18] == null ? "hdatg" : data.heatSinks[18] ? "hdatf" : "hdate"} cx="238.574" cy="213.06" r="6.953" onClick={pointClick} />
                            <circle id="19" className = {data.heatSinks[19] == null ? "hdatg" : data.heatSinks[19] ? "hdatf" : "hdate"} cx="263.378" cy="213.06" r="6.953" onClick={pointClick} />
                            <circle id="20" className = {data.heatSinks[20] == null ? "hdatg" : data.heatSinks[20] ? "hdatf" : "hdate"} cx="288.574" cy="213.06" r="6.953" onClick={pointClick} />
                            <circle id="21" className = {data.heatSinks[21] == null ? "hdatg" : data.heatSinks[21] ? "hdatf" : "hdate"} cx="238.574" cy="234.68" r="6.953" onClick={pointClick} />
                            <circle id="22" className = {data.heatSinks[22] == null ? "hdatg" : data.heatSinks[22] ? "hdatf" : "hdate"} cx="263.378" cy="234.68" r="6.953" onClick={pointClick} />
                            <circle id="23" className = {data.heatSinks[23] == null ? "hdatg" : data.heatSinks[23] ? "hdatf" : "hdate"} cx="288.574" cy="234.68" r="6.953" onClick={pointClick} />
                            <circle id="24" className = {data.heatSinks[24] == null ? "hdatg" : data.heatSinks[24] ? "hdatf" : "hdate"} cx="238.574" cy="274.242" r="6.953" onClick={pointClick} />
                            <circle id="25" className = {data.heatSinks[25] == null ? "hdatg" : data.heatSinks[25] ? "hdatf" : "hdate"} cx="263.378" cy="274.242" r="6.953" onClick={pointClick} />
                            <circle id="26" className = {data.heatSinks[26] == null ? "hdatg" : data.heatSinks[26] ? "hdatf" : "hdate"} cx="288.574" cy="274.242" r="6.953" onClick={pointClick} />
                            <circle id="27" className = {data.heatSinks[27] == null ? "hdatg" : data.heatSinks[27] ? "hdatf" : "hdate"} cx="238.574" cy="254.107" r="6.953" onClick={pointClick} />
                            <circle id="28" className = {data.heatSinks[28] == null ? "hdatg" : data.heatSinks[28] ? "hdatf" : "hdate"} cx="263.378" cy="254.107" r="6.953" onClick={pointClick} />
                            <circle id="29" className = {data.heatSinks[29] == null ? "hdatg" : data.heatSinks[29] ? "hdatf" : "hdate"} cx="288.574" cy="254.107" r="6.953" onClick={pointClick} />
                            <rect id="singleHeat" x="282.464" y="290.256" width="13.063" height="13.063" className = {data.singleHeat? "hdatf" : "hdate"}/>
                            <rect id="doubleHeat" x="282.464" y="306.149" width="13.063" height="13.063" className = {data.doubleHeat ? "hdatf" : "hdate"}/>
                        </>
                }


            </g>
        </svg>        
    )
}

export default HeatData