
function Heat({data, setMechData}) {

    const pointClick = (evt) => {
        let id = evt.target.id
        let parts = id.split("-");
        let newData = Object.assign({}, data);

        if(data.heat[parts[1]] != null){
            newData.heat[parts[1]] = !data.heat[parts[1]]
            setMechData(newData)    
        }
    }    

    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 734" width="46" height="734">
            <defs>
                <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                    <path d="m-1103-739h1224v1530h-1224z" />
                </clipPath>
            </defs>
            <style>{`.hta{font-size: 10px;fill: #000000;font-family: "Eurostile LT Std"}.htb{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:2.9}.htc{font-size: 6px;fill: #000000;font-family: "Eurostile LT Std"}.hte{fill:none;stroke:#000;stroke-width:2.9}.htf{font-size: 8px;fill: #000000;font-family: "Eurostile LT Std"}.htd{fill:#fff}.htg{fill:#228B22}.hth{fill:#ffff00}.hti{fill:#ff0000}`}</style>
            <g clipPath="url(#cp1)">
                <text style={{transform:`matrix(1,0,0,1,6.758,10.666`}}>
                    <tspan x="0" y="0" className="hta">Heat</tspan>
                </text>
                <text style={{transform:`matrix(1,0,0,1,4.851,26.894`}}>
                    <tspan x="0" y="0" className="hta">Scale</tspan>
                </text>
                
                {
                    data &&
                        <rect className={data.overflow > 0 ? "hti" : "htb"} x="2.1" y="35.8" width="41.1" height="41.1" rx="8.7"></rect>
                }
                
                <text style={{transform:`matrix(.947,0,0,1.053,6.198,46.763`}}>
                    <tspan x="0" y="0" className="htc">Overﬂow</tspan>
                </text>

                {
                    data &&
                        <text style={{transform:`matrix(.947,0,0,1.053,6.198,68.763)`}}>
                            <tspan x="0" y="0" className="htc" style={{fontSize: 16}}>{data.overflow}</tspan>
                        </text>
                }


                {
                    data && data.heat &&
                    <>
                        <path id="heat-0" className={data.heat[0] ? "htg" : "htd"} d="m40.5 730.2h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 730.2h-35.6v-21.3h35.6z" />
                        <path id="heat-1" className={data.heat[1] ? "htg" : "htd"} d="m40.5 709.4h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 709.4h-35.6v-21.3h35.6z" />
                        <path id="heat-2" className={data.heat[2] ? "htg" : "htd"} d="m40.5 688.6h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 688.6h-35.6v-21.4h35.6z" />
                        <path id="heat-3" className={data.heat[3] ? "htg" : "htd"} d="m40.5 667.8h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 667.8h-35.6v-21.4h35.6z" />
                        <path id="heat-4" className={data.heat[4] ? "htg" : "htd"} d="m40.5 647h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 647h-35.6v-21.4h35.6z" />
                        <path id="heat-5" className={data.heat[5] ? "htg" : "htd"} d="m40.5 626.2h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 626.2h-35.6v-21.4h35.6z" />
                        <path id="heat-19" className={data.heat[19] ? "hth" : "htd"} d="m40.5 334.8h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 334.8h-35.6v-21.3h35.6z" />
                        <path id="heat-20" className={data.heat[20] ? "hth" : "htd"} d="m40.5 314h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 314h-35.6v-21.3h35.6z" />
                        <path id="heat-21" className={data.heat[21] ? "hti" : "htd"} d="m40.5 293.2h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 293.2h-35.6v-21.3h35.6z" />
                        <path id="heat-22" className={data.heat[22] ? "hti" : "htd"} d="m40.5 272.4h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 272.4h-35.6v-21.3h35.6z" />
                        <path id="heat-23" className={data.heat[23] ? "hti" : "htd"} d="m40.5 251.6h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 251.6h-35.6v-21.3h35.6z" />
                        <path id="heat-24" className={data.heat[24] ? "hti" : "htd"} d="m40.5 230.8h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 230.8h-35.6v-21.4h35.6z" />
                        <path id="heat-25" className={data.heat[25] ? "hti" : "htd"} d="m40.5 210h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 210h-35.6v-21.4h35.6z" />
                        <path id="heat-26" className={data.heat[26] ? "hti" : "htd"} d="m40.5 189.2h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 189.2h-35.6v-21.4h35.6z" />
                        <path id="heat-27" className={data.heat[27] ? "hti" : "htd"} d="m40.5 168.4h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 168.4h-35.6v-21.4h35.6z" />
                        <path id="heat-28" className={data.heat[28] ? "hti" : "htd"} d="m40.5 147.6h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 147.6h-35.6v-21.4h35.6z" />
                        <path id="heat-29" className={data.heat[29] ? "hti" : "htd"} d="m40.5 126.8h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 126.8h-35.6v-21.4h35.6z" />
                        <path id="heat-30" className={data.heat[30] ? "hti" : "htd"} d="m40.5 105.9h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 105.9h-35.6v-21.3h35.6z" />
                        <path id="heat-6" className={data.heat[6] ? "htg" : "htd"} d="m40.5 605.4h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 605.4h-35.6v-21.4h35.6z" />
                        <path id="heat-7" className={data.heat[7] ? "htg" : "htd"} d="m40.5 584.6h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 584.6h-35.6v-21.4h35.6z" />
                        <path id="heat-8" className={data.heat[8] ? "htg" : "htd"} d="m40.5 563.7h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 563.7h-35.6v-21.3h35.6z" />
                        <path id="heat-9" className={data.heat[9] ? "htg" : "htd"} d="m40.5 542.9h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 542.9h-35.6v-21.3h35.6z" />
                        <path id="heat-10" className={data.heat[10] ? "htg" : "htd"} d="m40.5 522.1h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 522.1h-35.6v-21.3h35.6z" />
                        <path id="heat-11" className={data.heat[11] ? "hth" : "htd"} d="m40.5 501.3h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 501.3h-35.6v-21.3h35.6z" />
                        <path id="heat-12" className={data.heat[12] ? "hth" : "htd"} d="m40.5 480.5h-35.6v-21.3h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 480.5h-35.6v-21.3h35.6z" />
                        <path id="heat-13" className={data.heat[13] ? "hth" : "htd"} d="m40.5 459.7h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 459.7h-35.6v-21.4h35.6z" />
                        <path id="heat-14" className={data.heat[14] ? "hth" : "htd"} d="m40.5 438.9h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 438.9h-35.6v-21.4h35.6z" />
                        <path id="heat-15" className={data.heat[15] ? "hth" : "htd"} d="m40.5 418.1h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 418.1h-35.6v-21.4h35.6z" />
                        <path id="heat-17" className={data.heat[17] ? "hth" : "htd"} d="m40.5 376.5h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 376.5h-35.6v-21.4h35.6z" />
                        <path id="heat-18" className={data.heat[18] ? "hth" : "htd"} d="m40.5 355.7h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 355.7h-35.6v-21.4h35.6z" />
                        <path id="heat-16" className={data.heat[16] ? "hth" : "htd"} d="m40.5 397.3h-35.6v-21.4h35.6z" onClick={pointClick} />
                        <path className="hte" d="m40.5 397.3h-35.6v-21.4h35.6z" />
                        <text style={{transform:`matrix(1.069,0,0,.931,14.492,723.073`}}>
                            <tspan x="0" y="0" className="htf"> 0</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.492,702.26`}}>
                            <tspan x="0" y="0" className="htf"> 1</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.492,681.446`}}>
                            <tspan x="0" y="0" className="htf"> 2</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.492,660.632`}}>
                            <tspan x="0" y="0" className="htf"> 3</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.492,639.819`}}>
                            <tspan x="0" y="0" className="htf"> 4</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.492,619.005`}}>
                            <tspan x="0" y="0" className="htf"> 5</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,22.156,618.484`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,22.156,555.511`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,514.441`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,451.467`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,429.563`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,410.397`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,369.327`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,347.423`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,325.519`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,306.354`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,265.284`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,243.38`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,221.476`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,202.31`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,180.406`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,139.336`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,24.896,98.266`}}>
                            <tspan x="0" y="0" className="htf"> *</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,327.688`}}>
                            <tspan x="0" y="0" className="htf">19</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,306.874`}}>
                            <tspan x="0" y="0" className="htf">20</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,286.061`}}>
                            <tspan x="0" y="0" className="htf">21</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,265.259`}}>
                            <tspan x="0" y="0" className="htf">22</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,244.446`}}>
                            <tspan x="0" y="0" className="htf">23</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,223.632`}}>
                            <tspan x="0" y="0" className="htf">24</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,202.819`}}>
                            <tspan x="0" y="0" className="htf">25</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,182.005`}}>
                            <tspan x="0" y="0" className="htf">26</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,161.192`}}>
                            <tspan x="0" y="0" className="htf">27</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,140.378`}}>
                            <tspan x="0" y="0" className="htf">28</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,119.564`}}>
                            <tspan x="0" y="0" className="htf">29</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.044,98.751`}}>
                            <tspan x="0" y="0" className="htf">30</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.506,598.168`}}>
                            <tspan x="0" y="0" className="htf"> 6</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.506,577.354`}}>
                            <tspan x="0" y="0" className="htf"> 7</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.506,556.54`}}>
                            <tspan x="0" y="0" className="htf"> 8</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,14.506,535.739`}}>
                            <tspan x="0" y="0" className="htf"> 9</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,514.925`}}>
                            <tspan x="0" y="0" className="htf">10</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,494.112`}}>
                            <tspan x="0" y="0" className="htf">11</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,473.31`}}>
                            <tspan x="0" y="0" className="htf">12</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,452.497`}}>
                            <tspan x="0" y="0" className="htf">13</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,431.695`}}>
                            <tspan x="0" y="0" className="htf">14</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,410.882`}}>
                            <tspan x="0" y="0" className="htf">15</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,369.267`}}>
                            <tspan x="0" y="0" className="htf">17</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,348.453`}}>
                            <tspan x="0" y="0" className="htf">18</tspan>
                        </text>
                        <text style={{transform:`matrix(1.069,0,0,.931,12.058,390.068`}}>
                            <tspan x="0" y="0" className="htf">16</tspan>
                        </text>
                    </>
                }
                
            </g>
        </svg>
    )
}

export default Heat