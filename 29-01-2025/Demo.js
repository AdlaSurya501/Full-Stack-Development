// let fetchRes = fetch(
//     "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bc06bb050e908058f4297e640b800b3e");
// fetchRes.then(res =>res.json())
//         .then(d => {
//             console.log(d)
// })

let file = "fetch_info.txt"
fetch (file)
.then(x => x.text())
.then(y => console.log(y));