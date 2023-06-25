import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../functions/functions'

//take initial state from LS, so that it would not be lost on reload
const initialState = {
  generalData: getDataFromLocalStorage('generalData'),
}

const generalDataSlice = createSlice({
  name: 'generalData',
  initialState,
  reducers: {
    addGeneralData: (state, { payload }) => {
      state.generalData = payload
    },
  },
})

export const { addGeneralData } = generalDataSlice.actions

export default generalDataSlice.reducer
