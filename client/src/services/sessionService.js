/*
    function to send login request to server, if the login request was successful, call the callback function 
    with the token retrieved by the server
*/
export const login = async (username, password, callback) => {
    //made to act like a server, waits a second and then replies
    await new Promise(t => setTimeout(t, 1000));

    //simulates a login, future logic should be on the server
    if(username === "admin" && password === "password"){
        //TODO: retrieve JWT from server
        let token = '123';
        if(callback !== null){
            callback(token);
        }

        return true;
    } else {
        return false;
    }
}