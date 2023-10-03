const userContainer = document.querySelector('.user-container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let userDiv = document.createElement('div');
            userDiv.className = 'user';
            userDiv.innerHTML = `<p>ID: ${user.id}</p><p>Name: ${user.name}</p>`;

            let detailsButton = document.createElement('button');
            detailsButton.innerText = 'Details';
            detailsButton.addEventListener('click', () => {
                location.href = `../User-det/user-details.html?userId=${user.id}`;
            });

            userDiv.appendChild(detailsButton);
            userContainer.appendChild(userDiv);
        });
    });
