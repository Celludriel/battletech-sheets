function WarriorData({data, setMechData}) {

    return (
        <>
        <div className="card">
        <div className="field grid">
                <img alt="Warrior Data" src="Warrior Data.svg" />
            </div>
           <div className="field grid">
                <label htmlFor="name" className="col-fixed" style={{width: 70}}>Name:</label>
                <div className="col-fixed">
                    <input id="name" type="text" className="inputfield" style={{width: 165}}/>
                </div>
            </div>
            <div className="field grid">
                <label htmlFor="gunnery" className="col-fixed" style={{width: 70}}>Gunnery Skill:</label>
                <div className="col-fixed">
                    <input id="gunnery" type="text" className="inputfield" style={{width: 40}} />
                </div>
                <label htmlFor="piloting" className="col-fixed" style={{width: 70}}>Piloting Skill:</label>
                <div className="col-fixed">
                    <input id="piloting" type="text" className="inputfield" style={{width: 40}} />
                </div>
            </div>
        </div>
        </>
    );
}

export default WarriorData;