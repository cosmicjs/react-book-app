
const initialState = {
    books: [],
    menu: [],
    value: '',
    search:[],
    author:[],
    likes: [],
    add:[]
    
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS': 
    
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
        case 'HANDLE_LIKE':
     
            return{
                ...state,
                likes: state.books[action.like].options.slug_field ++
            }
                    
        default:
            return state;
            
    }
    
}
export default reducer;