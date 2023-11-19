import { legacy_createStore as createStore } from "redux";

//initial State
const initalState={
    user:null,
}


//action types
const LOGIN_SUCCESS="LOGIN_SUCCESS";

//REDUCERS
const rootReducer=(state=initalState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.payload
            };
        default:
            return state;
    }
}

//creating Store
const store=createStore(rootReducer)
export default store

