const userReducer = (state = {name: "Lloyd", age: 30}, action) =>{ 
    // A reducer always 
    //  handle actions
    //  return a state
        switch(action.type){
            case "SET_NAME": // by convention, action types is written in CAP
            state = { 
                // spread your state and change selective values && make it immutable
                ...state, 
                name: action.payload
            }
            break;
            case "SET_AGE":
                state ={
                    ...state,
                    age: action.payload
                }
            break;
        }
        return state 
}

export default userReducer;