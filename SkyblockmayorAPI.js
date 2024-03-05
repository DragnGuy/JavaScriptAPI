fetch("https://api.hypixel.net/v2/resources/skyblock/election")
.then(Response => Response.json())
.then(res => {
    const data = res.mayors;
    let rows = '';
    data.forEach(mayors => {
        rows += <tr><td></td></tr>
    })
    document.getElementById('').innerHTML = rows;
})
.catch(error => console.log(error))