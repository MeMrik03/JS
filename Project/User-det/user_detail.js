let userDetailsContainer = document.querySelector('.user-details-container');
let postsContainer = document.querySelector('.posts-container');
let showPostsButton = document.querySelector('.show-posts-button');

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        userDetailsContainer.innerHTML = `
           <h2>User Details</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <h3>Address</h3>
            <p><strong>Street:</strong> ${user.address.street}</p>
            <p><strong>Suite:</strong> ${user.address.suite}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
            <h4>Geo</h4>
            <p><strong>Lat:</strong> ${user.address.geo.lat}</p>
            <p><strong>Lng:</strong> ${user.address.geo.lng}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <h3>Company</h3>
            <p><strong>Name:</strong> ${user.company.name}</p>
            <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
            <p><strong>BS:</strong> ${user.company.bs}</p>
        `;
    });

showPostsButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                let postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = `
                <p>ID: ${post.id}</p>
                <p>Title: ${post.title}</p>
                <button class="post-details-button" data-post-id="${post.id}">Details</button>
            `;
                let detailsButton = postDiv.querySelector('.post-details-button');
                detailsButton.addEventListener('click', () => {
                    location.href = `../post-det/post-details.html?postId=${post.id}`;
                });
                postsContainer.appendChild(postDiv);
            });

        });
})


