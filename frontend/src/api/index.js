export const url = "http://localhost:8080";

export const setHeaders = () =>{
    const headers = {
        headers:{
            "x-access-token": localStorage.getItem("token"),
        },
    };

    return headers;
};