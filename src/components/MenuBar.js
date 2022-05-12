import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

function MenuBar() {

    const navigator = useNavigate()

    const navigateToPage = (path) => {
		console.log('Navigate to path ' + path);
		navigator(path);
	}

    const items = [
        {
            label: 'Home',
            command:()=>{ navigateToPage('/')}
        },
        {
            label: 'Mechbay',
            command:()=>{ navigateToPage('/mechbay')}
        },
        {
            label: 'Command Center',
            command:()=>{ navigateToPage('/command-center')}
        }
    ];

    return (
        <>
            <Menubar model={items}/>
        </>
    )
}

export default MenuBar