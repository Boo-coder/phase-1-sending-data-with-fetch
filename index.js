function submitData(name, email){
    const userData = {
        name: name,
        email: email
    };
    return fetch('http://localhost:3000/users', {  
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        body: JSON.stringify(userData),
         
    })
    .then(res => res.json())
    .then(data => {
        console.log("Success:", data)
        const contentElement = document.getElementById("content")
        const newUserId = document.createElement("p")
        newUserId.textContent = `rando: ${data.id}`
        contentElement.appendChild(newUserId)
    })
        
    .catch(error => {
        console.error('Error:', error)
        const contentElement = document.getElementById("content")
        const errorMessage = document.createElement("p")
        errorMessage.textContent = `Unauthorized Access: ${error.message}`
        contentElement.appendChild(errorMessage)
    });
}

submitData('Steve', 'steve@steve.com');