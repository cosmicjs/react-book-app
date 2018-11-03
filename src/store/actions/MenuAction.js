export const FetchApiMenu = () => {
    return (dispatch) => {
        fetch('https://api.cosmicjs.com/v1/book-app/objects?pretty=true&hide_metafields=true&type=categories')
            .then(response => response.json())
            .then(data => {
                console.log("Action creator from:", data);
                dispatch({type:"FETCH_MENU", menu:data});
            })
    }
}