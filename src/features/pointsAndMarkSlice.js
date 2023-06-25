import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../functions/functions'

const initialState = {
  classResault: [],
}

const pointsAndMarkSlice = createSlice({
  name: 'pointsAndMark',
  initialState,
  reducers: {
    addClassResaults: (state, { action }) => {
      state.classResault = []
    },
  },
})

export const { addClassResaults } = pointsAndMarkSlice.actions

export default pointsAndMarkSlice.reducer
