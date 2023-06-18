function validateForm() {
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var inventory = document.getElementById("inventory").value;

    if (name === "" || price === "" || inventory === "") {
        alert("Todos los campos son requeridos");
        return false;
    }