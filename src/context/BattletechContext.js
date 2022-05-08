import React, { createContext, useContext } from 'react'

import { createBattletechStore } from "./BattletechStore";

import { useLocalObservable } from 'mobx-react';

const BattletechContext = createContext(null)

export const BattletechContextProvider = ({ children }) => {
    const battletechStore = useLocalObservable(createBattletechStore)

    return (
        <BattletechContext.Provider value={battletechStore}>{children}</BattletechContext.Provider>
    )
}
export const useBattletechStore = () => useContext(BattletechContext)