
const initialState = {
    bucket: [],
    books: [],
    menu: [],
    value: '',
    search:[]
    
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS': 
        console.log("bucket fetch init", action.data.bucket);
            return{
                ...state,
                bucket:action.data.bucket,
                books: action.data.bucket.objects.filter(item => {
                    return(item.type_slug === "books")  
                }),
                menu: action.data.bucket.objects.filter(item => {
                    return(item.type_slug === "categories")  
                })
            }    
        case 'FETCH_MENU':
        console.log('bucket menu', state.bucket);
            return{
                ...state
                // menu: state.bucket.objects.filter(item => {
                //     console.log('state.menu', state.menu);
                //     return(item.type_slug === "categories")  
                // }) 
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