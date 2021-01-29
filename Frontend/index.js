let login = async (pass) => {
    var settings = {
        "url": "http://localhost:5000/api/auth",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({ "email": "Admin@isl.com", "password": pass }),
    };

    await $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.token) {
            window.location = 'dashboard.html?token=' + response.token;
        }
    });
}



console.log(`%c
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
.           The first step of the challenge!                                      .
.                                                                                 .
.                      uuuuuuu                                                    .
.                  uu$$$$$$$$$$$uu                                                .
.               uu$$$$$$$$$$$$$$$$$uu                                             .
.              u$$$$$$$$$$$$$$$$$$$$$u                                            .
.             u$$$$$$$$$$$$$$$$$$$$$$$u                                           .
.            u$$$$$$$$$$$$$$$$$$$$$$$$$u                   K E E P  C A L M       .
.            u$$$$$$$$$$$$$$$$$$$$$$$$$u                                          .
.            u$$$$$$"   "$$$"   "$$$$$$u                        A N D             .
.            "$$$$"      u$u       $$$$"                                          .
.             $$$u   f   u$u   u   u$$$                        H A C K            .
.             $$$u      u$$$u      u$$$                                           .
.              "$$$$uu$$$   $$$uu$$$$"                         T H I S            .
.               "$$$$$$$"   "$$$$$$$"                                             .
.                 u$$$$$$$u$$$$$$$u                                               .
.                  u$"$"$"$"$"$"$u                                                .
.       uuu        $$u$ $ $ $ $u$$       uuu                                      .
.      u$$$$        $$$$$u$u$u$$$       u$$$$                                     .
.       $$$$$uu      "$$$$$$$$$"     uu$$$$$$                                     .
.     u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$              CHECK                .
.     $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"               THE                 .
.      """      ""$$$$$$$$$$$uu ""$"""                       SOURCE               .
.                uuuu ""$$$$$$$$$$uuu                                             .
.       u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$                                    .
.       $$$$$$$$$$""""           ""$$$$$$$$$$$"                                   .
.        "$$$$$"                      ""$$$$""                                    .
.          $$$"                         $$$$"                                     .
.                                                                                 .
.                                                                                 .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .`, "color:#9acc14; background:black; font-family: monospace");

let B64 = "bGV2ZWwgMSBmbGFnICJFbGxpb3QiOiBsb2dpbiBwYXNzd29yZCBpcyAiTGlnaHQgWWFnYW1pIiA=";

