
const initialState = {
    books: [],
    menu: [],
    value: '',
    search:[]
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
        case 'INPUT_CHANGE': 
        console.log("Input", action);
        let newList = state.books.filter(item => {
            return item.slug.toLowerCase().search(action.input.toLowerCase()) !== -1 || item.metadata.author.title.toLowerCase().search(action.input.toLowerCase()) !== -1; 
        });
       
        return{
            ...state,
            search: newList,
            value:action.input
        }
        default:
            return state;
            
    }
    
}
export default reducer;