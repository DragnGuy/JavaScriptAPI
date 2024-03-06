fetch("https://api.hypixel.net/v2/resources/skyblock/election")
.then(Response => Response.json())
.then(res => {
    const data = res.mayor;
    let rows = '';
    data.forEach(mayor => {
        rows += <tr><td>${mayor.key}</td><td>${mayor.name}</td><td>${mayor.perks}</td></tr>
    })
    document.getElementById('tableRows').innerHTML = rows;
})
.catch(error => console.log(error))