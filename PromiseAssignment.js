function getData(uId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve({ email: "skc@gmail.com" });
        }, 4000);
    }).then(data => data.email);
}

async function fetchEmail() {
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

fetchEmail();
