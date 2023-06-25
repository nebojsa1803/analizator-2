import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../functions/functions'

//take initial state from LS, so that it would not be lost on reload
const initialState = {
  taskLevels: getDataFromLocalStorage('levelsForTasks'),
}

const levelsDataSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    addTaskLevels: (state, { payload }) => {
      state.taskLevels = payload
    },
  },
})

export const { addTaskLevels } = levelsDataSlice.actions

export default levelsDataSlice.reducer
