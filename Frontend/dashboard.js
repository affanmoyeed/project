let createheaders = () => {

}
let data;
let getdata = async (passtoken) => {
    console.log(passtoken)
    var settings = {
        "url": "http://localhost:5000/api/data",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({ "token": passtoken }),
    };

    return await $.ajax(settings).done(async function (response) {
        console.log(response);
        data = await response;
    });
}
var url_string = window.location.href
var url = new URL(url_string);
var token = url.searchParams.get("token");
console.log(token)
getdata(token).then((data) => {
    data.subjects.forEach(element => {
        $("tbody").append(`<tr><th scope="col">` + element.name + `</th><th scope="col">` + element.Title + `</th><th scope="col">` + element.Description + `</th><th scope="col">` + element.Snippet + `</th></tr>`);
    })
    createheaders();

})

