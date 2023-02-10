//console.log('hello')

//click button fetch/get name from api
//retrieve value from user input, apply to GET request
//create function with get request with specific character endpoint
// `https://api.disneyapi.dev/character?name=${searchInput.val()}`
//create dom elements to store requested data from API 

//outputs : character name, picture, films
//input : user to input character name
//constraints :

//const data = "";
//const div = $('body').prepend('<div>place holder</div>')
//const tvShows = $('#tvShows');//div id...to store shows here

//
const searchInput = $('#title');//from html ID in label tag
const searchButton = $('#button');//from html ID in button tag
const charFilms = $('#films');//div place holder for film names
const reset = $('#Reset')

//SEARCH FUNCTION
searchButton.click(function(e) {
    e.preventDefault();//prevents page from reloading each time search function is used
    //console.log(searchInput.val());
    getRequest(searchInput.val());//val() returns elements from data input by user
})

//RESET FUNCITON
reset.click(function(e) {
    e.preventDefault();
    $(':reset')
})


//FETCH FUNCTION
function getRequest(name) {
$.get(`https://api.disneyapi.dev/character?name=${name}`, (data) => {//calling the API
    //console.log("this is the data: ", data);
    //const tvShowsData = data.data[0].tvShows;
    //console.log("tv shows: ", tvShowsData);
    const filmData = data.data[0].films;//fetch film array from api
    charFilms.append(filmData[0]);
    console.log(filmData);
    // for (let i = 0; i < 5; i++){//
    //     charFilms.append(filmData[i]);
    //     //console.log(JSON.stringify(charFilms.append(filmData[i])))
    // }
    //tvShows.append(tvShowsData)
    

    //     //let title = $(`<h2> id='movie'${data.data}</h2>`);
    //     let name = data.data[i].name;//pulls name from api
    //     let filmTitle = data.data[i].films//pulls film from api
    //     let tvShow = data.data[i].tvShows//pulls tv shows
    //     document.body.append(name);
    //     let randomName = Math.floor(Math.random()*name.length)

        
        // document.body.append(filmTitle);
        // document.body.append(tvShow);
    // }
// });
    })
}