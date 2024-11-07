
function getUsers(){

    fetch('http://localhost:5000/users', {
        method: "GET",
        cors: "no-cors"
    }).then(res => console.log(res, "its a response") )

}

getUsers();

