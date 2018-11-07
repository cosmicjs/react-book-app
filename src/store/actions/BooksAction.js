
export const FetchApiBooks = () => {
    return (dispatch) => {
        fetch('https://api.cosmicjs.com/v1/book-app?pretty=true&hide_metafields=true')
            .then(response => response.json())
            .then(data => {
                console.log("Action creator from:", data);
                dispatch({type:"FETCH_BOOKS", data:data});
            })
    }
}