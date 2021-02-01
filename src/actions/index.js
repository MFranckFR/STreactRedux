

// Actions
export const increment = () =>{
    return {type:"INCREMENT"};
  }

 export const decrement = () =>{
    return {type:"DECREMENT"};
  }

export const signIn = ()=>{
    return {type:'LOG_IN'};
  }

export const signOut = ()=>{
    return  {type:'LOG_OUT'};
  }

  // store.dispatch(increment());
  // store.dispatch(increment());
  // store.dispatch(increment());
  // store.dispatch(decrement());
  // store.dispatch(decrement());
  // store.dispatch(decrement());