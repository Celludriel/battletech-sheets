import { ReactComponent as CriticalHitTableBanner } from '../svg/CriticalHitTable.svg';
import { ReactComponent as DamageTransfer } from '../svg/DamageTransfer.svg';
import { ReactComponent as FourToSix } from '../svg/FourToSix.svg';
import { ReactComponent as OneToThree } from '../svg/OneToThree.svg';
import CriticalHits from './CriticalHits';

function CriticalHitTable({ data, setMechData }) {

    const updateCritical = (evt) => {
        let id = evt.target.id
        let parts = id.split("-");

        let newData = Object.assign({}, data);

        newData.criticalHitTable[parts[0]][parts[1]].destroyed = !data.criticalHitTable[parts[0]][parts[1]].destroyed
        setMechData(newData)
    }

    return (

        <div className="internalContainer">
            <div className="LeftArm">
                <span style={{fontSize: 17}}>Left Arm</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['leftArm'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`leftArm-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="LeftTorso">
                <br /><span style={{fontSize: 17}}>Left Torso</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['leftTorso'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`leftTorso-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="LeftLeg">
                <br /><span style={{fontSize: 17}}>Left Leg</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['leftLeg'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`leftLeg-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="CriticalInternalBanner"><CriticalHitTableBanner /></div>
            <div className="LA13"><OneToThree /></div>
            <div className="LA46"><FourToSix /></div>
            <div className="LT13"><OneToThree /></div>
            <div className="LT46"><FourToSix /></div>
            <div className="Head">
                <br /><span style={{fontSize: 17}}>Head</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['head'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`head-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="CenterTorso">
                <br /><span style={{fontSize: 17}}>Center Torso</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['centerTorso'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`centerTorso-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="CT13"><OneToThree /></div>
            <div className="CT46"><FourToSix /></div>
            <div className="CriticalHits"><CriticalHits data={data} setMechData={setMechData} /></div>
            <div className="DamageTransfer"><DamageTransfer /></div>
            <div className="RightArm">
                <br /><span style={{fontSize: 17}}>Right Arm</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['rightArm'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`rightArm-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table></div>
            <div className="RA13"><OneToThree /></div>
            <div className="RA46"><FourToSix /></div>
            <div className="RightTorso">
                <br /><span style={{fontSize: 17}}>Right Torso</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['rightTorso'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`rightTorso-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="RT13"><OneToThree /></div>
            <div className="RT46"><FourToSix /></div>
            <div className="RightLeg">
                <br /><span style={{fontSize: 17}}>Right Leg</span>    
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['rightLeg'].map(function (item, key) {
                            return (
                                <tr key={key} className={item.destroyed ? "red" : "none"} onClick={updateCritical}>
                                    <td id={`rightLeg-${key}`}>
                                        {(key % 6) + 1} {item.type}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
        </div>
    );
}

export default CriticalHitTable;