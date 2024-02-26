// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //.json is not similar but close to JSON.parse
//       .then(json => console.log(json));


function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));
        // explain above lines of code
        // fetch is a function that takes a url as an argument and returns a promise
        // .then is a method that takes a callback function as an argument and returns a promise
        // response.json() is a method that returns a promise
        // .then is a method that takes a callback function as an argument and returns a promise
        // json is the data that is returned from the server

        //what is promise?
        // A promise is a placeholder for a value that is not yet known
        // A promise can be in one of three states: pending, resolved, or rejected

}