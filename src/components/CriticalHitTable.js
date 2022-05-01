import { ReactComponent as FourToSix } from '../svg/FourToSix.svg';
import { ReactComponent as OneToThree } from '../svg/OneToThree.svg';
import { ReactComponent as DamageTransfer } from '../svg/DamageTransfer.svg';
import CriticalHits from './CriticalHits';

function CriticalHitTable({ data, setMechData }) {
    return (<>
        <div className="grid">
            <div className="col-12">
                <div className="grid">
                    <div className="col-4">
                        <div className="grid">
                            <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                Left Arm
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-2" >
                                <div className="grid">
                                    <div className="col-12">
                                        <OneToThree />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-12">
                                        <FourToSix />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
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
                        </div>
                        <div className="grid">
                            <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                Left Torso
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-2" >
                                <div className="grid">
                                    <div className="col-12">
                                        <OneToThree />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-12">
                                        <FourToSix />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
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
                        </div>
                        <div className="grid">
                            <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                Left Leg
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-2" >
                                <div className="grid">
                                    <div className="col-12">
                                        <OneToThree />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
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
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="grid">
                            <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                Head
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-2" >
                                <div className="grid">
                                    <div className="col-12">
                                        <OneToThree />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
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
                        </div>
                        <div className="grid">
                            <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                Center Torso
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-2" >
                                <div className="grid">
                                    <div className="col-12">
                                        <OneToThree />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-12">
                                        <FourToSix />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
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
                        </div>
                        <div className="grid">
                            <div className="col-12">
                                <CriticalHits  data={data} setMechData={setMechData} />
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-12">
                                <DamageTransfer />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="grid">
                            <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                Right Arm
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-2" >
                                <div className="grid">
                                    <div className="col-12">
                                        <OneToThree />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="col-12">
                                        <FourToSix />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
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
                                </tbody></table>
                            </div>

                            <div className="grid">
                                <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                    Right Torso
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-2" >
                                    <div className="grid">
                                        <div className="col-12">
                                            <OneToThree />
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="col-12">
                                            <FourToSix />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10">
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
                            </div>
                            <div className="grid">
                                <div className="col-12 text-center" style={{ fontSize: 17 }}>
                                    Right Leg
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-2" >
                                    <div className="grid">
                                        <div className="col-12">
                                            <OneToThree />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CriticalHitTable;