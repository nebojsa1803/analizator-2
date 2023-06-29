import { configureStore } from '@reduxjs/toolkit'
import generalDataReducer from './../features/generalDataSlice'
import levelsDataReducer from './../features/levelsDataSlice'
import pointsAndMarkReducer from './../features/pointsAndMarkSlice'
import modalReducer from './../features/modalSlice'

export const store = configureStore({
  reducer: {
    generalData: generalDataReducer,
    levels: levelsDataReducer,
    pointsAndMark: pointsAndMarkReducer,
    modal: modalReducer,
  },
})
