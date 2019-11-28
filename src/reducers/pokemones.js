const initialData = {
  data: []
}

const pokemonReducer = (state = initialData, action) =>{
  switch (action.type) {
    case 'GET_BY_NAME':
      return{
        ...state,
        data: [...state.data, action.data]
      }
      break;
    default:
      return state
  }
}

export default pokemonReducer;