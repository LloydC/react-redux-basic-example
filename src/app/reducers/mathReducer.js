const mathReducer = (state = {
                        result: 25,
                        values: [],
                        name: 'Lloyd'
                    }, action) =>{ 
                    // A reducer always 
                    //  handle actions
                    //  return a state
                    switch(action.type){
                    case "ADD": // by convention, action types is written in CAP
                    state = { 
                    // spread your state and change selective values && make it immutable
                    ...state, 
                    result: state.result + action.payload,
                    values: [...state.values, action.payload]
                    }
                    break;
                    case "SUBTRACT":
                    state ={
                    ...state,
                    result: state.result - action.payload,
                    values: [...state.values, action.payload]
                    }
                    break;
                    case "MULTIPLY":
                    state ={
                    ...state,
                    result: state.result * action.payload,
                    values: [...state.values, action.payload]
                    }
                    break;
                    case "DIVIDE":
                    state ={
                    ...state,
                    result: state.result / action.payload
                    }
                    break;
}
return state 
}

export default mathReducer;