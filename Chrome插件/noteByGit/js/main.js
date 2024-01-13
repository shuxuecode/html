










function setToken() {
    var token = document.getElementById('token').value;
    localStorage.setItem('my_github_token', token);
}

function getToken() {
    var token = localStorage.getItem('my_github_token');
    document.getElementById('token').value = token;
}

function removeAll() {
    localStorage.removeItem('my_github_token');
    localStorage.removeItem('my_github_owner');
    localStorage.removeItem('my_github_repo');
    localStorage.removeItem('my_github_filepath');
}

// 
function setOwner() {
    localStorage.setItem('my_github_owner', document.getElementById('owner').value);
}

function getOwner() {
    document.getElementById('owner').value = localStorage.getItem('my_github_owner');
}

// 
function setRepo() {
    localStorage.setItem('my_github_repo', document.getElementById('repo').value);
}

function getRepo() {
    document.getElementById('repo').value = localStorage.getItem('my_github_repo');
}

// 
function setFilePath() {
    localStorage.setItem('my_github_filepath', document.getElementById('filePath').value);
}

function getFilePath() {
    document.getElementById('filePath').value = localStorage.getItem('my_github_filepath');
}



function base64Encode(input) {
    return window.btoa(unescape(encodeURIComponent(input)));
}



var octo = undefined
var repo = undefined
var sha = undefined;


var pullContent = function () {
    octo = new Octokat({ token: document.getElementById('token').value })
    repo = octo.repos(document.getElementById('owner').value, document.getElementById('repo').value)

    repo.contents(document.getElementById('filePath').value).read() // Use `.read` to get the raw file.
        .then((contents) => {        // `.fetch` is used for getting JSON
            console.log(contents)
            document.getElementById("content").value = contents;
        });

    repo.contents(document.getElementById('filePath').value).fetch()
        .then((info) => {
            // console.log(info.sha, info.content)
            sha = info.sha
        });
}

var pushContent = function () {

    var text = document.getElementById("content").value

    var config = {
        message: 'Updating file',
        content: base64Encode(text),
        sha: sha, // the blob SHA
        // branch: 'gh-pages'
    }

    repo.contents(document.getElementById('filePath').value).add(config)
        .then((info) => {
            console.log('File Updated. new sha is ', info.commit.sha)
        })
}




var init = function () {

    // 绑定事件
    document.getElementById('updateToken').onclick = setToken;
    document.getElementById('showToken').onclick = getToken;

    document.getElementById('updateOwner').onclick = setOwner;
    document.getElementById('showOwner').onclick = getOwner;

    document.getElementById('updateRepo').onclick = setRepo;
    document.getElementById('showRepo').onclick = getRepo;

    document.getElementById('updateFilePath').onclick = setFilePath;
    document.getElementById('showFilePath').onclick = getFilePath;

    document.getElementById('pullBtn').onclick = pullContent;
    document.getElementById('pushBtn').onclick = pushContent;


    // 初始化内容
    getToken();
    getOwner();
    getRepo();
    getFilePath();
}


init()