function CriticalHits({data, setMechData}) {

    const pointClick = (evt) => {
        debugger
        let id = evt.target.id
        let newData = Object.assign({}, data);

        newData.criticalHits[id] = !data.criticalHits[id]
        setMechData(newData)
    }

    return (
        <>
            <svg version="1.2" viewBox="0 0 250 100" width="250" height="100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                    <path d="m-340-1142h1224v1530h-1224z"/>
                    </clipPath>
                    <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
                    <path d="m-319.14-1142h1182.28v1530h-1182.28z"/>
                    </clipPath>
                </defs>
                <style>{`.crtha{fill:none;stroke:#000;stroke-linecap:round;stroke-width:1.8}.crthb{font-size: 17px;line-height: 17px;fill: #000000;font-family: "Eurostile LT Std"}.crthd{fill:#fff;stroke:#000;stroke-width:1}.crthe{fill:#ff0000;stroke:#000;stroke-width:1}`}</style>
                <g clip-path="url(#cp1)">
                    <g clip-path="url(#cp2)">
                    <rect class="crtha" x="1.2" y="1.9" width="245" height="97" rx="13.6"/>
                    </g>
                    <text style={{transform: `matrix(0.999, 0, 0, 1.001, 15.263, 86.814)`}}>
                            <tspan x="0" y="0" class="crthb">Life Support
                </tspan>
                        </text>
                    <text style={{transform: `matrix(0.999, 0, 0, 1.001, 19.323, 65.655)`}}>
                            <tspan x="0" y="0" class="crthb">Sensor Hits
                </tspan>
                        </text>
                    <text style={{transform: `matrix(0.999, 0, 0, 1.001, 39.537, 44.13)`}}>
                            <tspan x="0" y="0" class="crthb">Gyro Hits
                </tspan>
                        </text>
                    <text style={{transform: `matrix(0.999, 0, 0, 1.001, 23.418, 22.606)`}}>
                            <tspan x="0" y="0" class="crthb">Engine Hits
                </tspan>
                        </text>
                </g>
                {
                    data && data.criticalHits &&
                        <>
                            <circle id="enghit-1" cx="170" cy="16.134" r="6.442" className = {data.criticalHits["enghit-1"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="enghit-2" cx="190" cy="16.134" r="6.442" className = {data.criticalHits["enghit-2"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="enghit-3" cx="210" cy="16.134" r="6.442" className = {data.criticalHits["enghit-3"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="gyrhit-1" cx="170" cy="38.416" r="6.442" className = {data.criticalHits["gyrhit-1"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="gyrhit-2" cx="190" cy="38.416" r="6.442" className = {data.criticalHits["gyrhit-2"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="gyrhit-3" cx="210" cy="38.416" r="6.442" className = {data.criticalHits["gyrhit-3"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="senhit-1" cx="170" cy="60.047" r="6.442" className = {data.criticalHits["senhit-1"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="senhit-2" cx="190" cy="60.047" r="6.442" className = {data.criticalHits["senhit-2"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="senhit-3" cx="210" cy="60.047" r="6.442" className = {data.criticalHits["senhit-3"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="lifhit-1" cx="170" cy="81.797" r="6.442" className = {data.criticalHits["lifhit-1"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="lifhit-2" cx="190" cy="81.797" r="6.442" className = {data.criticalHits["lifhit-2"] ? "crthe" : "crthd"} onClick={pointClick}/>
                            <circle id="lifhit-3" cx="210" cy="81.797" r="6.442" className = {data.criticalHits["lifhit-3"] ? "crthe" : "crthd"} onClick={pointClick}/>
                        </>
                }
            </svg>        
        </>
    )
}

export default CriticalHits