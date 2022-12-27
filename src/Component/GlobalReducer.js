export const globalReducer =(state, action) =>{
    switch(action.type){
      case "TOGGLE THEME":{
        var newMode = state.mode==="light"?"dark":"light";
        return {...state, mode: newMode};
      }
      case "TOGGLE ADMIN ACCESS":{
        return {...state, isAdmin: !state.isAdmin};
      }default:
      return null;
    }
}
   