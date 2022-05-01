function Mech({data, setMechData}) {

    const pointClick = (evt) => {
        let id = evt.target.id
        let parts = id.split("-");

        let newData = Object.assign({}, data);

        newData.armor[parts[1]][parts[2]].selected = !data.armor[parts[1]][parts[2]].selected
        setMechData(newData)
    }

    return (
        <>
            <svg version="1.2" viewBox="0 0 390 655" width="390" height="655" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                        <path d="m-225 0h1224v1530h-1224z" />
                    </clipPath>
                    <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
                        <path d="m-204.14 0h1182.28v1530h-1182.28z" />
                    </clipPath>
                </defs>
                <style>{`.a{fill:#fff;stroke:#000;stroke-width:2.9}.b{fill:none;stroke:#000;stroke-width:2.9}.c{fill:#c7c8ca;stroke:#c7c8ca;stroke-width:1.9}.d{fill:#fff;stroke:#000;stroke-width:1}.e{fill:#ff0000;stroke:#000;stroke-width:1}`}</style>
                <g clipPath="url(#cp1)" transform="matrix(1, 0, 0, 1, -549.506653, -83.795715)">
                    <g clipPath="url(#cp2)">
                        <path className ="a" d="m841.4 617.1l-3.3 70.2-3.3 3.3c0 0-37.3 2.2-44.9 3.3-2.2 32.9-12.1 36-12.1 36h-64.7c0 0-8.8-3.1-11-36-7.6-1.1-46-3.3-46-3.3l-3.3-3.3-3.3-70.2 4.4-5.5 58.1-3.3h5.5v-15.4l3.3-3.3 3.2-0.9c3.1-8 6.4-11.3 11.5-15.6l0.9-7.8 3.5-3.3h11.1l3.5 3.3 0.9 7.8c5.1 4.3 6.2 7.6 9.3 15.6l5.4 0.9 3.3 3.3v15.4h5.5l58.1 3.3z" />
                        <path className ="b" d="m789.9 693.9c0 0-1.1-20.9-16.5-30.7v-54.9m-55.9 0v54.9c-15.4 9.8-15.4 30.7-15.4 30.7m-97.4-323c-0.7 0.9-1.3 2-1.4 3.3l0.6-7.2c-0.1 1.4 0.2 2.7 0.8 3.9zm-1.5 4.1l0.1-0.8c-0.2 1.9 0.6 3.7 1.9 4.8h-0.1c-0.7 0.1-1.4 0.5-1.8 1l-2.4-2.9c1.3-0.4 2.3-1.2 2.3-2.1z" />
                        <path className ="a" d="m620.5 357.3c0.5 1.1 0.8 2.3 0.7 3.6l-0.7 7.5c-0.3 3.3-2.8 5.9-6.1 6.7q0 0 0 0.1c-0.2 1.5-0.9 2.9-2 3.8 0.7 0.5 1.2 1.2 1.3 2.1 0.1 1.1-0.5 2.1-1.4 2.7 0.5 0.5 0.9 1.2 0.9 1.9 0.2 1.9-1.2 3.5-3.1 3.7l-6.9 0.6q-0.8 0-1.6-0.3-0.2 0.5-0.6 0.8c-1.5 1.2-3.7 1-4.9-0.4l-9-10.4c-0.6-0.7-0.9-1.6-0.8-2.4l1.4-15.5-5.5-0.5 8.4-22.1 25.8 2.3 5.1 15.6z" />
                        <path className ="a" d="m609.5 382.7c1.9-0.2 3.6 1.2 3.7 3 0.2 1.9-1.2 3.5-3.1 3.7l-6.9 0.6c-1.9 0.1-3.6-1.3-3.8-3.1-0.2-1.9 1.3-3.5 3.2-3.7z" />
                        <path className ="a" d="m601.4 385.8c1.2 1.4 1 3.5-0.4 4.7-1.5 1.2-3.7 1-4.9-0.4l-9-10.4c-1.2-1.4-1-3.5 0.4-4.7 1.5-1.2 3.7-1 4.9 0.4z" />
                        <path className ="a" d="m600.1 378.5c-0.1 1.8-3.3 3.1-7.2 2.7-3.8-0.3-6.7-2.1-6.6-3.9l1.8-20.1c0.1-1.9 3.4-3.1 7.2-2.8 3.8 0.4 6.8 2.1 6.6 4z" />
                        <path className ="a" d="m610.7 378.5c1.5-0.1 2.8 1 3 2.6 0.1 1.6-1 2.9-2.6 3.1l-5.5 0.5c-1.5 0.1-2.9-1-3-2.6-0.1-1.5 1-2.9 2.5-3.1z" />
                        <path className ="a" d="m604.2 381.2c1 1.2 0.8 2.9-0.4 4-1.1 1-2.9 0.8-3.9-0.4l-7.1-8.7c-1-1.2-0.8-3 0.4-4 1.1-1 2.9-0.8 3.9 0.4z" />
                        <path className ="a" d="m603.2 375c-0.1 1.6-2.7 2.6-5.7 2.4-3.1-0.3-5.4-1.8-5.3-3.3l1.5-17c0.1-1.6 2.7-2.6 5.7-2.4 3.1 0.3 5.5 1.8 5.3 3.4z" />
                        <path className ="a" d="m614.4 375.2c-0.3 3.1-3 5.4-6.1 5.2-3-0.3-5.3-3.1-5-6.2 0.3-3.1 3-5.4 6-5.2 3.1 0.3 5.3 3.1 5.1 6.2z" />
                        <path className ="a" d="m620.5 368.4c-0.3 4.2-4.4 7.3-8.9 6.9-4.6-0.4-8-4.1-7.7-8.3l0.7-7.5c0.4-4.2 4.4-7.3 8.9-6.9 4.6 0.4 8 4.1 7.7 8.3z" />
                        <path className ="a" d="m590.6 339.2l25.8 2.3 5.1 15.6-32.9 4.8-6.4-0.6z" />
                        <path className ="a" d="m585.4 273.8l2.2 0.2 0.1-1.1-3.2-1.4 0.2-2.1 3.4-0.9 0.1-1-2.2-0.2-1.9-3.5 4.1-47-2.2-0.2-16.3-14.6 1-12 15.6-2-12.9-15.4 4.4-12.8 18.6 1.6-5.5-25.8 9.3-5.8 20 10.5 0.9-23 12.5-4.4 18.2 19.2 7.3 17.2-1.8 7.5-14 8.7-1.1 13.1 4.7-1.4 1.9 42.8-7.8-3-0.5 6.6-3.4 0.8-3.8 43.7-2.5 3.1-2.2-0.2-0.1 1.1 3.2 1.4-0.2 2.1-3.4 0.9-0.1 1 2.2 0.2 1.9 3.5-5.1 57.9-3.5 3-39.3-3.4-11.8-16.5 9.5-45.4z" />
                        <path className ="a" d="m840.7 415h8.9l4.4 21.9-1 24.1 3.5 2.7 24 55.5 0.1 7.6-7.1 8.8 6 25.2-8.8 4.4 4.4 7.7 20.9 8.8 2.2 5.4 4.3 2.2v7.7h-2.2-91v-8.8l3.3-3.2 1.1-5.5 6.6-3.3v-14.3l-4.3-1.1-3.4-15.3-13.2-2.2-8.7-14.3 1.1-61.4 1.4-2.2-3.6-13.1 1.1-4.4-1.1-7.7-4.4-3.3-5.5-4.4-1.1-1.1 1.1-2.2 3.3-1.1-1.1-4.4-1.9-6.5-20-75.7h61.4z" />
                        <path className ="a" d="m668.9 341.5h61.5l-20 75.7-2 6.5-1.1 4.4 3.3 1.1 1.1 2.2-1.1 1.1-5.5 4.4-4.4 3.3-1.1 7.7 1.1 4.4-3.5 13.1 1.4 2.2 1 61.4-8.7 14.3-13.2 2.2-3.4 15.3-4.3 1.1v14.3l6.6 3.3 1.1 5.5 3.3 3.2v8.8h-91-2.2v-7.7l4.4-2.2 2.2-5.4 20.8-8.8 4.4-7.7-8.8-4.4 6-25.2-7.1-8.8 0.1-7.6 24-55.5 3.5-2.7-0.9-24.1 4.4-21.9h8.8z" />
                        <path className ="a" d="m710.6 246.1l5.5 57v38.4h-54.8l-2.2-2.2 2.2-31.8 1-1.5 26.4-5.1c0 0-11-21.9-13.2-54.8-7.7-1.1-23-3.3-23-3.3l-3.3-3.3-3.3-71.3 2.2-3.3 50.5-3.3h12z" />
                        <path className ="a" d="m779.7 161.6h12.1l50.4 3.3 2.2 3.3-3.3 71.3-3.3 3.3c0 0-15.3 2.2-23 3.3-2.2 32.9-13.2 54.8-13.2 54.8l26.5 5.1 1 1.5 2.2 31.8-2.2 2.2h-54.9v-38.4l5.5-57z" />
                        <path className ="b" d="m886.9 367l0.7 7.2c-0.2-1.3-0.7-2.4-1.5-3.3 0.6-1.2 1-2.5 0.8-3.9zm3.1 10.1l-2.4 2.9c-0.5-0.5-1.1-0.9-1.9-1 1.3-1.1 2-2.9 1.9-4.8v0.8c0.1 0.9 1 1.7 2.4 2.1z" />
                        <path className ="a" d="m869.4 357.1l5.1-15.6 25.8-2.3 8.4 22.1-5.5 0.5 1.4 15.5c0 0.8-0.2 1.7-0.8 2.4l-9 10.4c-1.2 1.4-3.4 1.6-4.9 0.4q-0.4-0.3-0.7-0.8-0.7 0.3-1.5 0.3l-6.9-0.6c-1.9-0.2-3.3-1.8-3.2-3.7 0.1-0.7 0.4-1.4 0.9-1.9-0.8-0.6-1.4-1.6-1.3-2.7 0.1-0.9 0.6-1.6 1.2-2.1-1-0.9-1.8-2.3-1.9-3.8q0-0.1 0-0.1c-3.3-0.8-5.9-3.4-6.1-6.7l-0.7-7.5c-0.1-1.3 0.1-2.5 0.7-3.6z" />
                        <path className ="a" d="m888.3 383.2c1.9 0.2 3.3 1.8 3.2 3.7-0.2 1.8-1.9 3.2-3.8 3.1l-6.9-0.6c-1.9-0.2-3.3-1.8-3.2-3.7 0.2-1.8 1.9-3.2 3.8-3z" />
                        <path className ="a" d="m898.4 375.4c1.3-1.4 3.5-1.6 4.9-0.4 1.5 1.2 1.7 3.3 0.5 4.7l-9 10.4c-1.2 1.4-3.4 1.6-4.9 0.4-1.5-1.2-1.6-3.3-0.4-4.7z" />
                        <path className ="a" d="m889 358.4c-0.2-1.9 2.8-3.6 6.6-4 3.8-0.3 7 0.9 7.2 2.8l1.8 20.1c0.1 1.8-2.8 3.6-6.7 3.9-3.8 0.4-7-0.9-7.2-2.7z" />
                        <path className ="a" d="m885.7 379c1.6 0.2 2.7 1.6 2.6 3.1-0.2 1.6-1.5 2.7-3 2.6l-5.6-0.5c-1.5-0.2-2.6-1.5-2.5-3.1 0.1-1.6 1.5-2.7 3-2.6z" />
                        <path className ="a" d="m893.8 372.5c1-1.2 2.7-1.4 3.9-0.4 1.2 1 1.3 2.8 0.4 4l-7.2 8.7c-0.9 1.2-2.7 1.4-3.9 0.4-1.1-1.1-1.3-2.8-0.3-4z" />
                        <path className ="a" d="m886.1 358.1c-0.1-1.6 2.3-3.1 5.3-3.4 3.1-0.2 5.7 0.8 5.8 2.4l1.5 17c0.1 1.5-2.2 3-5.3 3.3-3 0.2-5.6-0.8-5.8-2.4z" />
                        <path className ="a" d="m881.5 369c3.1-0.2 5.8 2.1 6.1 5.2 0.2 3.1-2 5.9-5.1 6.2-3 0.2-5.7-2.1-6-5.2-0.3-3.1 2-5.9 5-6.2z" />
                        <path className ="a" d="m869.7 360.9c-0.4-4.2 3-7.9 7.6-8.3 4.6-0.4 8.6 2.7 9 6.9l0.6 7.5c0.4 4.2-3 7.9-7.6 8.3-4.6 0.4-8.6-2.7-8.9-6.9z" />
                        <path className ="a" d="m908.7 361.3l-6.4 0.6-32.9-4.8 5.1-15.6 25.8-2.3z" />
                        <path className ="a" d="m909 276.8l9.5 45.4-11.8 16.5-39.3 3.4-3.6-3-5-57.9 1.9-3.5 2.1-0.2-0.1-1-3.3-0.9-0.2-2.1 3.2-1.4-0.1-1.1-2.2 0.2-2.5-3.1-3.8-43.7-3.4-0.8-0.6-6.6-7.8 3 2-42.8 4.7 1.4-1.2-13.1-13.9-8.7-1.8-7.5 7.3-17.2 18.1-19.2 12.5 4.4 1 23 20-10.5 9.3 5.8-5.5 25.8 18.6-1.6 4.4 12.8-12.9 15.4 15.5 2 1.1 12-16.3 14.6-2.2 0.2 4.1 47-1.9 3.5-2.2 0.2 0.1 1 3.4 0.9 0.2 2.1-3.2 1.4 0.1 1.1 2.2-0.2z" />
                        <path className ="a" d="m779.7 161.6v84.5l-5.5 57v37.3l-3.3 29.6-4.3 4.4h-42.8l-4.4-4.4-3.3-29.6v-37.3l-5.5-57v-84.5z" />
                        <path className ="a" d="m745.2 198.9c-17.7 0-32-8.2-32-37.3h-9.2v-24.1l3.4-3.3 10.8-0.9c3.1-8 7.4-14.4 12.6-18.7l0.9-7.8 3.5-3.3h20l3.5 3.3 0.8 7.8c5.2 4.3 9.5 10.7 12.6 18.7l10.9 0.9 3.3 3.3v24.1h-9.1c0 29.1-14.4 37.3-32 37.3z" />
                        <path className ="c" d="m765 135.4q2.8 0.8 5.6 1.8c1.6 5.4 2.5 11.4 2.5 17.8 0 8.2-1.5 15.6-4.1 21.6-0.1-15.3-1.5-29.5-4-41.2z" />
                        <path className ="c" d="m717.2 155c0-6.4 0.9-12.4 2.5-17.9q2.8-0.9 5.7-1.7c-2.5 11.7-4 25.9-4 41.2-2.6-6-4.2-13.4-4.2-21.6z" />
                        <path className ="c" d="m745.2 128.6c-5 0-9.9 0.4-14.5 1.2 1.9-5.8 4.2-7.2 6.9-10.3 2.4-1.1 5-1.6 7.6-1.6 2.6 0 5.1 0.5 7.6 1.6 2.6 3.1 4.9 4.5 6.8 10.3-4.6-0.8-9.4-1.2-14.4-1.2z" />
                        <path className ="c" d="m725.9 175c0-15.4 1.6-29.6 4.2-40.8 4.8-1.1 9.8-1.6 15.1-1.6 5.2 0 10.3 0.5 15 1.6 2.6 11.2 4.2 25.4 4.2 40.8q0 1.6 0 3.2c-3.4 5.7-7.9 10.8-12.8 12.7l-1.2-5.4h-9.6l-1.4 5.7c-5.3-1.7-9.9-7-13.4-13q-0.1-1.6-0.1-3.2z" />
                    </g>
                </g>

                {
                    data.armor && data.armor.leftArm &&
                    data.armor.leftArm.map((item, key) => {
                        return (
                            <circle key={key} id={`a-leftArm-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.leftLeg &&
                    data.armor.leftLeg.map((item, key) => {
                        return (
                            <circle key={key} id={`a-leftLeg-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.leftTorso &&
                    data.armor.leftTorso.map((item, key) => {
                        return (
                            <circle key={key} id={`a-leftTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.head &&
                    data.armor.head.map((item, key) => {
                        return (
                            <circle key={key} id={`a-head-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.centerTorso &&
                    data.armor.centerTorso.map((item, key) => {
                        return (
                            <circle key={key} id={`a-centerTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.rightTorso &&
                    data.armor.rightTorso.map((item, key) => {
                        return (
                            <circle key={key} id={`a-rightTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.rightArm &&
                    data.armor.rightArm.map((item, key) => {
                        return (
                            <circle key={key} id={`a-rightArm-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.rightLeg &&
                    data.armor.rightLeg.map((item, key) => {
                        return (
                            <circle key={key} id={`a-rightLeg-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.leftBackTorso &&
                    data.armor.leftBackTorso.map((item, key) => {
                        return (
                            <circle key={key} id={`a-leftBackTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.centerBackTorso &&
                    data.armor.centerBackTorso.map((item, key) => {
                        return (
                            <circle key={key} id={`a-centerBackTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }

                {
                    data.armor && data.armor.rightBackTorso &&
                    data.armor.rightBackTorso.map((item, key) => {
                        return (
                            <circle key={key} id={`a-rightBackTorso-${key}`} cx={item.cx} cy={item.cy} r="4.4" className = {item.selected ? "e" : "d"} onClick={pointClick} />
                        )
                    })
                }
            </svg>
        </>
    );
}

export default Mech;