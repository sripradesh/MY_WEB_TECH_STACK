async function fetchData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/photos')
    let data = await res.json();
    console.log(data);  
}
fetchData()