let siteNameInput = document.querySelector("#site-name");
let siteUrlInput = document.querySelector("#site-url");


let bookMarkList= [];

if (localStorage.getItem("websitelist") !== null) {
    bookMarkList = JSON.parse(localStorage.getItem("websitelist"));
    displayData();
}


function  addBookmark(){
let bookMark = {
    webSiteName: siteNameInput.value,
    visit : siteUrlInput.value,
};
bookMarkList.push(bookMark);

localStorage.setItem("websitelist", JSON.stringify(bookMarkList));
displayData();
clearForm();
console.log(bookMarkList);

}
function displayData(){
    let dataTable = "";
    for(let i = 0; i< bookMarkList.length; i++){
        dataTable +=`     <tr>
                <td>${i+1}</td>
                <td>${bookMarkList[i].webSiteName}</td>
                <td><button class="border-0" onclick="visitUrl(${i})"><a  id="btn-visit" href="#"><i class="fa-regular fa-eye"></i>Visit</a>  </button></td>
                <td><button onclick="deleteData(${i})" class="border-0 bg-danger"><i class="fa-solid fa-trash-can "></i>Delete</button></td>
            </tr>`;
    }
    document.getElementById("table-data").innerHTML= dataTable;
    // bookMarkList.push(bookMark,displayData)
}

function clearForm(){
    siteNameInput.value = null;
    siteUrlInput.value = null;
}

function deleteData(indexItem){
    bookMarkList.splice(indexItem, 1);
    localStorage.setItem("websitelist", JSON.stringify(bookMarkList));
    displayData();
}
 function visitUrl(indexElement){
let url= bookMarkList[indexElement].visit;
let fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;


window.open(url, '_blank')

 }