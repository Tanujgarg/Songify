/**
 * Created by tanuj on 10/11/17.
 */
var name = document.querySelector("#name-input").value;
function myfunc() {
        var name = document.querySelector("#name-input").value;
        message = "Welcome " + name;
        console.log(name);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
        $('.main h1').text(message);
    }
document.getElementById("myform").onsubmit = function() {myfunc()};
