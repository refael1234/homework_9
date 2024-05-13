async function fetchAndDisplayUsers() {
    const userList = document.getElementById('user-list')

    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json()
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Name: ${user.name}, City: ${user.address.city}`
        userList.appendChild(li);
    })
   
}

fetchAndDisplayUsers()