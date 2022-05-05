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
            "type" : mechdata.type,
            "movement" :mechdata.movement,
            "jumping" : mechdata.jumping,
            "tonnage" : mechdata.tonnage,
            "clan" : mechdata.clan,
            "innerSphere" : mechdata.innerSphere,
            "equipment": mechdata.equipment,
            "criticalHitTable": {
                leftArm: [],
                leftTorso: [],
                leftLeg: [],
                head: [],
                centerTorso: [],
                rightArm: [],
                rightTorso: [],
                rightLeg: []
            },
            "singleHeat" : mechdata.singleHeat,
            "doubleHeat" : mechdata.doubleHeat,
            "overflow": 0,
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

        // critical hit table
        for(let i=0;i<mechdata.criticalHitTable.leftArm.length;i++){
            template.criticalHitTable.leftArm.push({
                type: mechdata.criticalHitTable.leftArm[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.leftTorso.length;i++){
            template.criticalHitTable.leftTorso.push({
                type: mechdata.criticalHitTable.leftTorso[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.leftLeg.length;i++){
            template.criticalHitTable.leftLeg.push({
                type: mechdata.criticalHitTable.leftLeg[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.head.length;i++){
            template.criticalHitTable.head.push({
                type: mechdata.criticalHitTable.head[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.centerTorso.length;i++){
            template.criticalHitTable.centerTorso.push({
                type: mechdata.criticalHitTable.centerTorso[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.rightArm.length;i++){
            template.criticalHitTable.rightArm.push({
                type: mechdata.criticalHitTable.rightArm[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.rightTorso.length;i++){
            template.criticalHitTable.rightTorso.push({
                type: mechdata.criticalHitTable.rightTorso[i],
                destroyed: false
            })
        }
        for(let i=0;i<mechdata.criticalHitTable.rightLeg.length;i++){
            template.criticalHitTable.rightLeg.push({
                type: mechdata.criticalHitTable.rightLeg[i],
                destroyed: false
            })
        }

        // critical hits
        template.criticalHits = {
            "enghit-1": false,
            "enghit-2": false,
            "enghit-3": false,
            "gyrhit-1": false,
            "gyrhit-2": false,
            "gyrhit-3": false,
            "senhit-1": false,
            "senhit-2": false,
            "senhit-3": false,
            "lifhit-1": false,
            "lifhit-2": false,
            "lifhit-3": false
        }

        // heat sinks
        template.heatSinks = []
        let i=0
        for(;i < mechdata.heatSinks;i++){
            template.heatSinks[i] = false;
        }
        for(;i < 30;i++){
            template.heatSinks[i] = null;
        }

        // heat bar
        template.heat = [];
        for(let i = 0;i < 31;i++){
            template.heat[i] = false;
        }

        return template
    },
    filterByFirstLetter: (letter) => {
        return Object.fromEntries(Object.entries(mechs).filter(([key]) => key.toLowerCase().startsWith(letter)));
    },
    filterBySpecialCharacter: () => {
        const regexp = new RegExp(/^[a-z0-9]+$/i);
        return Object.fromEntries(Object.entries(mechs).filter(([key]) => regexp.test(key)));
    }
};

export default BattleTechSheetService;