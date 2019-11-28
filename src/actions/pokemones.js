import axios from 'axios';
const GET_BY_NAME = "GET_BY_NAME";


export const getByNameAction = (data) =>({
  data,
  type: GET_BY_NAME
})

export const getByName = (name) => (dispatch) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data)=>{
    dispatch(getByNameAction(data.data))
  })
}


