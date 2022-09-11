import {createSlice} from '@reduxjs/toolkit' /*This is my auth page. Importing createSliced from reduxju toolkit*/

const slice = createSlice({                  /*slice will equal createSlice. Inside of ({}) is the operation for this const*/
    name:"auth",                             /*It is an object and its name is auth. I will initially have a state of false*/
    initialState:{
        admin:false,
        LoggedIn:false,
    },
    reducers:{                               /*The reducer will be what the public see's and is sign in, sign out, or create user*/
        signIn:(state,action)=>{             /*It it has a state and passes an action for name and password*/
            const {name,password} = action.payload; /*Destructure name and password always inside of {}*/
            state.LoggedIn = true;          /*Set to true until I connect to backend*/
            state.admin = true;
        },
        signOut:(state)=>{
            state.LoggedIn = false;          /*False signout has no action*/
            state.admin = false;
        },
        createUser:(state,action)=>{

        }
    }
})

export default slice.reducer;

export const {signIn,signOut,createUser} = slice.actions;