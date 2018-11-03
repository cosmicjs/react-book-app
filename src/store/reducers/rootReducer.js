
const initialState = {
    books: [],
    menu: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS': 
            return{
                ...state,
                books: action.data.objects
            }
        case 'FETCH_MENU':
            return{
                ...state,
                menu: action.menu.objects
            }
        default:
            return state;
            
    }
    
}
export default reducer;