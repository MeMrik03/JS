const postDetailsContainer = document.querySelector('.post-details-container');
const urlParams = new URLSearchParams(location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-details';
        postDiv.innerHTML = `<p>ID: ${post.id}</p><p>Title: ${post.title}</p><p>Body: ${post.body}</p>`;

        postDetailsContainer.appendChild(postDiv);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const commentsDiv = document.createElement('div');
        commentsDiv.className = 'comments';
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `<p>ID: ${comment.id}</p><p>Name: ${comment.name}</p><p>Email: ${comment.email}</p><p>Body: ${comment.body}</p>`;
            commentsDiv.appendChild(commentDiv);
        });

        postDetailsContainer.appendChild(commentsDiv);
    });
