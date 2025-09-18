function register() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        }, 4000);
    });
}

function sendemail() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("email end");
            resolve();
        }, 1000);
    });
}

function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("data end");
            resolve();
        }, 1000);
    });
}

function displayData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("display end");
            resolve();
        }, 2000);
    });
}

// Promise chain
register()
    .then(sendemail)
    .then(login)
    .then(getData)
    .then(displayData)
    .then(() => {
        console.log("other Application");
});