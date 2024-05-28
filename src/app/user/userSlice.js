import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [
      {
        first_name: 'Jitendra cASD',
        last_name: 'Sahu',
        age: '50',
        mobile: '8887603331',
        email: 'jitendrasahu179986@gmail.com',
        qualification: 'MCA',
      }
    ],
    countValue: 2
  },
  reducers: {
    addUser: (state, action) => {
        console.log('user add function trigger', state.userList.push(action.payload))
        //console.log('user add function payload', action)
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
     
      //state.value += 1
    },
    removeUser: (state, action) => {
      console.log('delete user', state)
      // console.log('delete user', action)
      //state.value -= 1
    },

    updateUser: (state, action) => {
        //console.log('update user action', action)
        console.log('update user state', state)
      //state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser } = userSlice.actions

export default userSlice.reducer