import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = 'aHhtbTE-w7qdwaEV_x7VKrnU_fk8ONpWdn6zctoS0DX634N4OdN4yT5HnOJQKPRr5y_J53NXY2Ifqcjl3W0LdFzX6TgYUqHh6HC8G0nlPnAMclUNlo9bFbv2qDAZXXYx';

let Yelp = {

}

function search (term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: 
        {Authorization: `Bearer ${apiKey}`
    }
}).then(response=> {
    return response.json();
}).then(jsonResponse => {
    if (jsonResponse.businesses) {
    return jsonResponse.businesses.map(business => {
        return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].alias,
            rating: business.rating,
            reviewCount: business.review_count,
    }
});
}
})
}


export default search;
