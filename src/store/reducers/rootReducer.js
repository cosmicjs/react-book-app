
const initialState = {
    books: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS': 
            return{
                ...state,
                books: action.data.objects
            }
        default:
            return state;
    }
    
}
export default reducer;