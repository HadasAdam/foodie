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

export const signUp = async (username, firstName, lastName, gender, password) => {
    //turns the object to json to send to server
    const body = JSON.stringify({username, firstName, lastName, gender, password});

    //indicator for sign up success/fail
    let success = false;

    //sending the sign up request to the server
    await fetch("/api/users/signup", {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        //if sign up is successful, removes it from 
        if(res.success)
        {
            localStorage.setItem('jwt', res.token);
            console.log(res.token);
            success = true;
        }
    });
    return success;
}


export const isLoggedIn = () => {
    return window.isLoggedIn;
}

export const logout = () => {
    localStorage.removeItem('jwt');
}