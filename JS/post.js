function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}


function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>${post.id}</h4>
        <p>${post.title}</p>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPosts();

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    });
}

function PatchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
function CreateAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}