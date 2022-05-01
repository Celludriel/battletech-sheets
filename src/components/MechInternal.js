function MechInternal({data,  setMechData}) {

    const pointClick = (evt) => {
        let id = evt.target.id
        let parts = id.split("-");

        let newData = Object.assign({}, data);

        newData.structure[parts[1]][parts[2]].selected = !data.structure[parts[1]][parts[2]].selected
        setMechData(newData)
    }

    return (
        <>
            <svg version="1.2" viewBox="0 0 240 345" width="240" height="345" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                <path d="m-828-771h1224v1530h-1224z"/>
                </clipPath>
                <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
                <path d="m-807.14-771h1182.28v1530h-1182.28z"/>
                </clipPath>
            </defs>
            <style>{`.a{fill:#fff;stroke:#000;stroke-width:2.9}.b{fill:#fff;stroke:#000;stroke-width:1}.e{fill:#ff0000;stroke:#000;stroke-width:1}`}</style>
            <g clipPath="url(#cp1)">
                <path className="a" d="m141.2 103.3l-4.6 32.4-0.1 26.7v1.5h-3v1.5h2.3v2.3h-2.3v1.5h1.5v2.3h-1.5v1.6h1.5v2.3l-5.3 9.2h-24.5l-5.4-9.2v-2.3h1.5v-1.6h-1.5v-2.3h1.5v-1.5h-2.3v-2.3h2.3v-1.5h-3v-1.5-26.7l-4.6-32.4v-66.7l3.8-3.7h39.8l3.9 3.7z"/>
                <path className="a" d="m182.9 74.3v3.8l0.8 0.8v6.1l-0.8 0.7-0.7 6.2h-2.3l-0.8 2.3h-5.4l-1.5-2.3h-1.5l-5.4 3.8h-1.5l-0.8 2.3h-2.3v4.6h2.3l-1.5 1.5h-0.8v1.6h0.8v1.5h-0.8v1.5h0.8l1.5 1.6h-2.3l-2.3 6.9-2.3 1.5v4.6l1.6 0.7v2.3l-1.6 1.6v4.6l-1.5 1.5h-1.5v3.1h1.5l1.5 1.5 16.1 3.8 0.8 1.6v7.6l0.7 0.8v1.5l1.6 0.8v0.8l-1.6 0.7-0.7 1.6 0.7 4.6h-36.8l0.1-26.7 4.6-32.4v-59.7h4.6l1.5-2.3h10.7l1.5 2.3h2.3v1.5h3.1l0.8-1.5h3.8l1.5 0.8 1.6-0.8h3.8l6.1 2.3 0.8 7.7 3.1 0.7v18.4z"/>
                <g clipPath="url(#cp2)">
                <path className="a" d="m188.3 54.5q1.7-0.1 3.1 0.3l-0.1-1.3 1.4-1.7 0.1-7.8 1.4-1.6 17.7-1.6 8 3.9 0.4 4 1.7 2.1 0.2 2.3-1.3 2.4 0.2 3.1 3.1 0.5-0.9 15.4-0.8 0.1 0.3 3.1 0.8-0.1-0.2 6.9 0.5 6.1 1.7 1.4 0.2 2.3-1.3 2.4 1 11.5-1.4 1.6 0.1 1.6 2.3-0.2 0.9 1.4 0.2 2.3-0.6 1.6-2.3 0.2 0.2 2.3 1.6 1.4 0.4 4.6 3.3 2-2.5 7.1-1.4 1.7 0.2 2.3-1.5 0.1 0.2 1.5 1.5-0.1 1.6 18.3-1.9 4.8 0.1 1.5 1.6 0.7 0.2 2.3-1.4 0.8 0.2 3.1v16.2l-3.3 6.4-15.7 1.8-1.6-0.7 4.8-6.5-5.7-11v-5.1l1.9-4-2.7-4.4-1.9-22.1 1.3-2.4-0.1-1.6-3.3-2-1.1-13 1.4-1.6-0.2-2.3-2.3 0.2-0.9-1.5-0.2-2.3 0.6-1.5 2.3-0.2-0.1-1.6-1.7-1.4-1.9-22.1 0.5-3.1-0.5-5.4-0.9-2.2-0.3-3-2.4-1.4-0.1-1.3q-1.4 0.7-3 0.8c-1.6 0.2-3-0.1-4.4-0.6v-17q1.3-0.5 2.7-0.7z"/>
                <path className="a" d="m47.9 55.2v17c-1.4 0.5-2.8 0.8-4.3 0.6q-1.7-0.1-3.1-0.8l-0.1 1.3-2.4 1.4-0.3 3-0.9 2.2-0.5 5.4 0.5 3.1-1.9 22.1-1.7 1.4-0.1 1.6 2.3 0.2 0.6 1.5-0.2 2.3-0.9 1.5-2.3-0.2-0.2 2.3 1.4 1.6-1.1 13-3.3 2-0.1 1.6 1.3 2.4-1.9 22.1-2.7 4.4 1.9 4v5.1l-5.7 11 4.8 6.5-1.6 0.7-15.7-1.8-3.3-6.4v-16.2l0.2-3.1-1.4-0.8 0.2-2.3 1.6-0.7 0.1-1.5-1.9-4.8 1.6-18.3 1.6 0.1 0.1-1.5-1.5-0.1 0.2-2.3-1.4-1.7-2.5-7.1 3.3-2 0.4-4.6 1.6-1.4 0.2-2.3-2.3-0.2-0.6-1.6 0.2-2.3 0.9-1.4 2.3 0.2 0.1-1.6-1.4-1.6 1-11.5-1.3-2.4 0.2-2.3 1.7-1.4 0.5-6.1-0.2-6.9 0.8 0.1 0.3-3.1-0.8-0.1-0.9-15.4 3.1-0.5 0.2-3.1-1.3-2.4 0.2-2.3 1.7-2.1 0.4-4 8-3.9 17.7 1.6 1.4 1.6 0.1 7.8 1.4 1.7-0.1 1.3q1.4-0.4 3.1-0.3 1.4 0.2 2.7 0.7z"/>
                <path className="a" d="m133.2 24.3c1.8 4.3 2.8 9.3 2.8 14.7 0 15.7-8.6 22.2-19.2 22.2-10.6 0-19.1-6.5-19.1-22.2 0-5.3 0.9-10.2 2.6-14.4l-2.2-1.3-0.9-1.4 1.1-2 1.7 0.1 2 1.1c2.5-4.6 4.6-8.2 8.7-9.7l2-7.6h7.9l2.3 7.5c4.2 1.3 6 4.8 8.6 9.6l1.6-0.9 1.7-0.1 1.2 2-1 1.4z"/>
                <path className="a" d="m167.8 168.8l2.2 1.8 1 2.1 1.5 5.1 0.8 5.2 0.2 4.7-0.2 2.4-1.3 3.4 0.4 2.3 1.3 0.4 0.4 2.3-1.2 0.3 0.2 1.5 1.4 0.4-1.1 1.1 0.3 1.5 1.2-0.3 0.3 2.2-1 1.1 0.5 3 1.8-0.5 0.5 3-1.4 2.7 1.1 6.8-0.9 1.8c0 0 3 0.5 3.4 0.8 0.5 0.3 1.1 5.1 0.7 6-0.5 1-2.5 2.9-2.5 2.9l0.8 4.5 2.4 3.3 1.9 7.3-0.8 2.6 4.3 3.8 9.3 31.4-0.6 9.2-5.2 9.1 2.2 12.7 1.5 9 21.2 9-1.8 5.4h-46.9v-2.3l1.8-3.8 5.2-3.3-3.3-16.7h-0.7v-6.9l-6-1.5-6.1-13-1.3-31.6 1.8-4.4 0.2-1.7-2-8.2-1-4.3-1-5.2c0 0-1.5-0.5-2.6-0.9-1.1-0.3-2-5-1.1-6 1-0.9 2.2-2.1 2.2-2.1l-1.5-1.2 1-5.2-4.3-6.7-4.9-16.5 0.3-4.5 1.4-2.7-1-2.1-4.5-26.9h28.4z"/>
                <path className="a" d="m66.5 162.4h28.4l-4.6 26.9-0.9 2.1 1.4 2.7 0.3 4.5-5 16.5-4.2 6.7 0.9 5.2-1.4 1.2c0 0 1.2 1.2 2.1 2.1 1 1 0.1 5.7-1 6-1.1 0.4-2.6 0.9-2.6 0.9l-1.1 5.2-1 4.3-2 8.2 0.3 1.7 1.8 4.4-1.4 31.6-6 13-6.1 1.5v6.9h-0.6l-3.4 16.7 5.3 3.3 1.8 3.8v2.3h-46.9l-1.8-5.4 21.2-9 1.5-9 2.2-12.7-5.2-9.1-0.6-9.2 9.3-31.4 4.3-3.8-0.8-2.6 1.9-7.3 2.4-3.3 0.8-4.5c0 0-2.1-1.9-2.5-2.9-0.4-0.9 0.2-5.7 0.6-6 0.5-0.3 3.5-0.8 3.5-0.8l-0.9-1.8 1.1-6.8-1.4-2.7 0.5-3 1.8 0.5 0.5-3-1.1-1.1 0.4-2.2 1.2 0.3 0.3-1.5-1.1-1.1 1.3-0.4 0.3-1.5-1.2-0.3 0.4-2.3 1.3-0.4 0.4-2.3-1.3-3.4-0.2-2.4 0.1-4.7 0.9-5.2 1.5-5.1 1-2.1 2.2-1.8z"/>
                <path className="a" d="m97.7 135.7v26.7h-36.8l0.8-4.6-0.8-1.6-1.5-0.7v-0.8l1.5-0.8v-1.5l0.8-0.8v-7.6l0.7-1.6 16.1-3.8 1.5-1.5h1.6v-3.1h-1.6l-1.5-1.5v-4.6l-1.5-1.6v-2.3l1.5-0.7v-4.6l-2.3-1.5-2.3-6.9h-2.3l1.5-1.6h0.8v-1.5h-0.8v-1.5h0.8v-1.6h-0.8l-1.5-1.5h2.3v-4.6h-2.3l-0.8-2.3h-1.5l-5.3-3.8h-1.6l-1.5 2.3h-5.4l-0.7-2.3h-2.3l-0.8-6.2-0.8-0.7v-6.1l0.8-0.8v-3.8l-3.8-1.6v-18.4l3-0.7 0.8-7.7 6.1-2.3h3.9l1.5 0.8 1.5-0.8h3.9l0.7 1.5h3.1v-1.5h2.3l1.5-2.3h10.7l1.6 2.3h4.6v59.7z"/>
                </g>
            </g>

            {
                data.structure && data.structure.leftArm &&
                data.structure.leftArm.map((item, key) => {
                    return (
                        <circle key={key} id={`s-leftArm-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.leftLeg &&
                data.structure.leftLeg.map((item, key) => {
                    return (
                        <circle key={key} id={`s-leftLeg-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.leftTorso &&
                data.structure.leftTorso.map((item, key) => {
                    return (
                        <circle key={key} id={`s-leftTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.head &&
                data.structure.head.map((item, key) => {
                    return (
                        <circle key={key} id={`s-head-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.centerTorso &&
                data.structure.centerTorso.map((item, key) => {
                    return (
                        <circle key={key} id={`s-centerTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.rightTorso &&
                data.structure.rightTorso.map((item, key) => {
                    return (
                        <circle key={key} id={`s-rightTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.rightArm &&
                data.structure.rightArm.map((item, key) => {
                    return (
                        <circle key={key} id={`s-rightArm-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }

            {
                data.structure && data.structure.rightLeg &&
                data.structure.rightLeg.map((item, key) => {
                    return (
                        <circle key={key} id={`s-rightLeg-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "b"} onClick={pointClick} />
                    )
                })
            }
            </svg>
        </>
    );
}

export default MechInternal;