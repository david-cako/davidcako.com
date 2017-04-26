//spammers deactivate yourselves IRL please

var email = document.getElementsByClassName("email-address");
var u = "david"
var d = "cako.io"
var a = u + "@" + d

for (i = 0; i < email.length; i++) {
    email[i].outerHTML = email[i].outerHTML.replace(/name@domain.io/g, a);
}
