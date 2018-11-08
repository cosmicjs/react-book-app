
const initialState = {
    books: [],
    menu: [],
    value: '',
    search:[],
    author:[]
    
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS': 
        console.log("bucket fetch init", action.data.bucket);
            return{
                ...state,
                books: action.data.bucket.objects.filter(item => {
                    return(item.type_slug === "books")  
                }),
                menu: action.data.bucket.objects.filter(item => {
                    return(item.type_slug === "categories")  
                }),
                author: action.data.bucket.objects.filter(item => {
                    return(item.type_slug === "authors")  
                })
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