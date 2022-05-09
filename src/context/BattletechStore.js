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
                    let newArray = [...this.store.mechbay.bays]
                    newArray[i] = mech
                    this.store.mechbay.bays = newArray
                    return true
                }
            }
            return false
        },
        clearBay(index) {
            let newArray = [...this.store.mechbay.bays]
            newArray[index] = null
            this.store.mechbay.bays = newArray
        }
    }
}