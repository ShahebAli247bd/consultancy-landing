// console.log("I am out of promise function run as syncronous way");

function fetchDatafake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am promise, is resolved by you.");
        }, 3000);
    });
}

// fetchDatafake().then((res) => console.log(res));

// console.log("I am end of syncronous way");

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                if (!response.ok) {
                    reject("HTTP erorr, can't fetch data");
                }
                return response.json();
            })
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
}

// fetchData()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//async/await to handle the asyncrounous task

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
}

async function callFetchDat() {
    const todos = await fetchData();
    console.log(todos);
}

// callFetchDat();
