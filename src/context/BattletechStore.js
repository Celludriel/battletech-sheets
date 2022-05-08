export const createBattletechStore = () => {
    return {
        store: {
            mechbay: {
                bays: [null, null, null, null]
            }
        },
        getMechLab() {
            return this.store.mechbay
        },
        addMech(mech) {
            for(let i=0;i<this.store.mechbay.bays.length;i++){
                if(this.store.mechbay.bays[i] == null){
                    this.store.mechbay.bays[i] = mech
                    return true
                }
            }
            return false
        },
        clearBay(index) {
            this.store.mechbay.bays[index] = null
        }
    }
}