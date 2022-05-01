import mechs from '../data/mechs.json'
import mech_armor_points from '../data/mech_armor_points.json'
import mech_internal_points from '../data/mech_internal_points.json'

const addSelection = (point) => {
    point["selected"] = false;
    return point;
}

const BattleTechSheetService = {
    getMechTemplate: (mechname) => {
        const mechdata = mechs[mechname];
        const template = {
            "armor": {
                "leftArm": [],                
                "leftLeg": [],                
                "leftTorso": [],                
                "head": [],                
                "centerTorso": [],                
                "rightTorso": [],                
                "rightArm": [],                
                "rightLeg": [],                
                "leftBackTorso": [],                
                "centerBackTorso": [],                
                "rightBackTorso": []            
            },
            "structure": {
                "leftArm": [],                
                "leftLeg": [],                
                "leftTorso": [],                
                "head": [],                
                "centerTorso": [],                
                "rightTorso": [],                
                "rightArm": [],                
                "rightLeg": []             
            }
        }

        // armor

        for(let i=0;i<mechdata.armor.leftArm;i++){
            template.armor.leftArm.push(addSelection(mech_armor_points.leftArm[i]));
        }

        for(let i=0;i<mechdata.armor.leftLeg;i++){
            template.armor.leftLeg.push(addSelection(mech_armor_points.leftLeg[i]));
        }

        for(let i=0;i<mechdata.armor.leftTorso;i++){
            template.armor.leftTorso.push(addSelection(mech_armor_points.leftTorso[i]));
        }

        for(let i=0;i<mechdata.armor.head;i++){
            template.armor.head.push(addSelection(mech_armor_points.head[i]));
        }

        for(let i=0;i<mechdata.armor.centerTorso;i++){
            template.armor.centerTorso.push(addSelection(mech_armor_points.centerTorso[i]));
        }

        for(let i=0;i<mechdata.armor.rightTorso;i++){
            template.armor.rightTorso.push(addSelection(mech_armor_points.rightTorso[i]));
        }

        for(let i=0;i<mechdata.armor.rightArm;i++){
            template.armor.rightArm.push(addSelection(mech_armor_points.rightArm[i]));
        }

        for(let i=0;i<mechdata.armor.rightLeg;i++){
            template.armor.rightLeg.push(addSelection(mech_armor_points.rightLeg[i]));
        }

        for(let i=0;i<mechdata.armor.backLeftTorso;i++){
            template.armor.leftBackTorso.push(addSelection(mech_armor_points.leftBackTorso[i]));
        }

        for(let i=0;i<mechdata.armor.backCenterTorso;i++){
            template.armor.centerBackTorso.push(addSelection(mech_armor_points.centerBackTorso[i]));
        }

        for(let i=0;i<mechdata.armor.backRightTorso;i++){
            template.armor.rightBackTorso.push(addSelection(mech_armor_points.rightBackTorso[i]));
        }
        
        // internal
        
        for(let i=0;i<mechdata.structure.leftArm;i++){
            template.structure.leftArm.push(addSelection(mech_internal_points.leftArm[i]));
        }

        for(let i=0;i<mechdata.structure.leftLeg;i++){
            template.structure.leftLeg.push(addSelection(mech_internal_points.leftLeg[i]));
        }

        for(let i=0;i<mechdata.structure.leftTorso;i++){
            template.structure.leftTorso.push(addSelection(mech_internal_points.leftTorso[i]));
        }

        for(let i=0;i<mechdata.structure.head;i++){
            template.structure.head.push(addSelection(mech_internal_points.head[i]));
        }

        for(let i=0;i<mechdata.structure.centerTorso;i++){
            template.structure.centerTorso.push(addSelection(mech_internal_points.centerTorso[i]));
        }

        for(let i=0;i<mechdata.structure.rightTorso;i++){
            template.structure.rightTorso.push(addSelection(mech_internal_points.rightTorso[i]));
        }

        for(let i=0;i<mechdata.structure.rightArm;i++){
            template.structure.rightArm.push(addSelection(mech_internal_points.rightArm[i]));
        }

        for(let i=0;i<mechdata.structure.rightLeg;i++){
            template.structure.rightLeg.push(addSelection(mech_internal_points.rightLeg[i]));
        }

        // equipment
        template.equipment = mechdata.equipment

        // criticals
        template.criticalHitTable = mechdata.criticalHitTable

        return template
    }   
};

export default BattleTechSheetService;