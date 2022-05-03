import { ReactComponent as CriticalHitTableBanner } from '../svg/CriticalHitTable.svg';
import { ReactComponent as DamageTransfer } from '../svg/DamageTransfer.svg';
import { ReactComponent as FourToSix } from '../svg/FourToSix.svg';
import { ReactComponent as OneToThree } from '../svg/OneToThree.svg';
import CriticalHits from './CriticalHits';

function CriticalHitTable({ data, setMechData }) {
    return (

        <div className="internalContainer">
            <div className="LeftArm">
                <span style={{fontSize: 17}}>Left Arm</span>
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['leftArm'].map(function (item, key) {
                            return (
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
                                    </td>
                                </tr>)
                        })
                    }
                </tbody></table>
            </div>
            <div className="CenterTorso">
                <table><tbody>
                    {
                        data && data.criticalHitTable &&
                        data.criticalHitTable['centerTorso'].map(function (item, key) {
                            return (
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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
                                <tr key={key}>
                                    <td>
                                        {(key % 6) + 1} {item}
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