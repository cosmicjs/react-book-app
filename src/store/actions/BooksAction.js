import config from '../../config'
export const FetchApiBooks = () => {
    return (dispatch) => {
        console.log(process.env)
        fetch(`https://api.cosmicjs.com/v1/${config.COSMIC_BUCKET ? config.COSMIC_BUCKET : 'book-app'}?pretty=true&hide_metafields=true&read_key=${config.COSMIC_READ_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log("Action creator from:", data);
                dispatch({type:"FETCH_BOOKS", data:data});
            })
    }
}