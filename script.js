//create new request
var request = new XMLHttpRequest();

//open a new connection using GET on the url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function(){
    //begin accessing JSON data here
    var data = JSON.parse(this.response);

    data.forEach( movie => {
        console.log(movie.title);
    });
};

//send request
request.send(); 