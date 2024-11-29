async function fetchData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/photos') // If we using await keyword we want to represent as a async function because javascript is syncronous in nature
    let data = await res.json();
    console.log(data);  
}
fetchData()