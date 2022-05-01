import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ReactComponent as MechDataBanner } from '../svg/MechData.svg';

function MechData({ data, setMechData }) {

    return (
        <>
            <div className="card">
                <div className="field grid">
                    <MechDataBanner />
                </div>
                <div className="field grid">
                    <label htmlFor="type" className="col-fixed" style={{ width: 100 }}>Type:</label>
                    <div className="col">
                        <span id="type">{data && data.type}</span>
                    </div>
                </div>
                <div className="field grid">
                    <div className="col">
                        Movement Points:
                    </div>
                    <label htmlFor="tonnage" className="col-fixed" style={{ width: 100 }}>Tonnage:</label>
                    <div className="col">
                        <span id="type">{data && data.tonnage}</span>
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="walking" className="col-fixed" style={{ width: 100 }}>&nbsp;Walking:</label>
                    <div className="col">
                        <span id="walking">{data && data.movement}</span>
                    </div>
                    <div className="col">
                        Tech Base:
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="running" className="col-fixed" style={{ width: 100 }}>&nbsp;Running:</label>
                    <div className="col">
                        <span id="running">{data && Math.round(data.movement * 1.5)}</span>
                    </div>
                    <div className="col">
                        <div className="field-checkbox">
                            <label htmlFor="clan">Clan:&nbsp;</label>
                            {data && data.clan ? <i id="clan" className="pi pi-check-square"></i> : ""}
                        </div>
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="jumping" className="col-fixed" style={{ width: 100 }}>&nbsp;Jumping:</label>
                    <div className="col">
                        <span id="jumping">{data && data.jumping}</span>
                    </div>
                    <div className="col">
                        <div className="field-checkbox">
                            <label htmlFor="innersphere">Inner Sphere:&nbsp;</label>
                            <span id="innersphere">{data && !data.clan ? <i className="pi pi-check-square"></i> : ""}</span>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="field grid">
                    <div className="col">
                        Weapons & Equipment inventory
                    </div>
                </div>
                <div className="field grid">
                    {
                        data && data.equipment &&
                        <DataTable value={data.equipment} size={'small'} responsiveLayout="scroll">
                            <Column field="quantity" header="Qty" style={{width:'1%'}}></Column>
                            <Column field="type" header="Type" style={{width:'71%'}}></Column>
                            <Column field="location" header="Loc" style={{width:'1%'}}></Column>
                            <Column field="heat" header="Ht" style={{width:'1%'}}></Column>
                            <Column field="damage" header="Dmg" style={{width:'13%'}}></Column>
                            <Column field="minRange" header="Min" style={{width:'1%'}}></Column>
                            <Column field="shortRange" header="Sht" style={{width:'1%'}}></Column>
                            <Column field="mediumRange" header="Med" style={{width:'1%'}}></Column>
                            <Column field="longRange" header="Lng" style={{width:'1%'}}></Column>
                        </DataTable>
                    }
                </div>
            </div>
        </>
    );
}

export default MechData;