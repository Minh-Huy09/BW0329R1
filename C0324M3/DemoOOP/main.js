let myStore = new Store("Cua hang cua H1ghr Music");
function showHome() {
    document.getElementById("main").innerHTML = `
     <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Image</td>
        </tr>
        <tbody id="listProduct">

        </tbody>
    </table>
    `
    let list = myStore.listProduct;
    let html= ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt=""></td>
        </tr>
        `
    }
    document.getElementById("listProduct").innerHTML = html;
}

function showFormAdd() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id">
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="price" placeholder="Price">
    <input type="text" id="image" placeholder="Image">
    <button onclick="add()">Add</button>
    `
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    myStore.add(newProduct);
    showHome();
}