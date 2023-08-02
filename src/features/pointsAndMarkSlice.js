import { createSlice } from '@reduxjs/toolkit'

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
