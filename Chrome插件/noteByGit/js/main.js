


function test() {
    alert(123)

}

function setToken() {
    var token = document.getElementById('token').value;
    localStorage.setItem('my_github_token', token);
}


function getToken() {
    var token = localStorage.getItem('my_github_token');  
    document.getElementById('token').value = token;
}

function removeToken() {
    localStorage.removeItem('my_github_token');
}



document.getElementById('btn').onclick = test;

document.getElementById('updateToken').onclick = setToken;
document.getElementById('showToken').onclick = getToken;




