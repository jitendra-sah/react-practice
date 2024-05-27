import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [],
  },
  reducers: {
    addUser: (state) => {
        console.log('user add function trigger')
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
     
      //state.value += 1
    },
    removeUser: (state) => {
      console.log('delete user', state)
      //state.value -= 1
    },

    updateUser: (state, action) => {
        console.log('update user action', action)
        console.log('update user state', state)
      //state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser } = userSlice.actions

export default userSlice.reducer