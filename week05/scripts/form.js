const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function selectProduct() {
    document.getElementById("product-name").innerHTML = "";
    let select = document.getElementById("product-name");

    let option = document.createElement("option");
    option.textContent = "Select a Product ...";
    option.value = "";
    option.setAttribute("selected", "");
    option.setAttribute("disabled", "");
    select.appendChild(option);
    
    products.forEach(product => {
        let option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;

        select.appendChild(option);
    });
};

selectProduct();