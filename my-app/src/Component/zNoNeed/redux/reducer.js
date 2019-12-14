import Redux from "redux"

const {createSotre} = Redux;

const initState={
    todo:[],
    post:[]
}

function myReducer(state= initState,action){
    
    if(action.type=="ADD_TODO"){
        return{
            ...state,
            todos:[...state.todo,action.todo]
        }
    }
    if(action.type=="ADD_Post"){
        return{
            ...state,
            post:[...post,action.post]
        }
    }
    console.log(action,state);
}


const store = createSotre(myReducer);

store.subscribe(()=>{
    console.log(store.getState());
})
