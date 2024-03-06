const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
        .catch(error => console.log('error happened', error));
}


const loadComments2 = async () => { //async means this function will return a promise and we can use await inside this function to wait for the promise to resolve
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments'); // await will wait for the promise to resolve. promise is returned by fetch function and it will resolve when the data is fetched from the server
        const data = await res.json(); // here we are waiting for the promise to resolve which is returned by res.json() function
        console.log(data);
    } catch (error) {
        console.log('error happened', error);
    }

    
}