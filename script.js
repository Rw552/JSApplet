const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);
//create new request
var request = new XMLHttpRequest();

//open a new connection using GET on the url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function(){
    //begin accessing JSON data here
    var data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.forEach( movie => {
            //create a div with the card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //create an h1 and set text content to the film title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //create a p and set the text content to the film description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);//limit to 300 chars
            p.textContent = `${movie.description}...`;//ends with elipses

            //append the cards to the container element
            container.appendChild(card);

            //each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else{
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    };

    
};

//send request
request.send(); 