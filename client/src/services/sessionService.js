/*
    function to send login request to server, if the login request was successful, call the callback function 
    with the token retrieved by the server
*/
export const login = async (username, password) => {

    //turns the object to json to send to server
    const body = JSON.stringify({username, password});

    //indicator for login success/fail
    let success = false;

    //sending the login request to the server
    await fetch("/api/users/login", {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        //if login is successful, removes it from 
        if(res.success)
        {
            localStorage.setItem('jwt', res.token);
            console.log(res.token);
            success = true;
        }
    });
    return success;
}

export const signIn = async (username, firstName, lastName, gender, password) => {
    //made to act like a server, waits a second and then replies
    await new Promise(t => setTimeout(t, 1000));
    return true;
}


export const isLoggedIn = () => {
    return window.isLoggedIn;
}

export const logout = () => {
    localStorage.removeItem('jwt');
}