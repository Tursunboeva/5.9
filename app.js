// BACKENT BILAN ISHLASH

// GET

// POST

// PUT

// DELETE



const $result= document.querySelector("#result");



fetch(" https://dummyjson.com/users")
.then(response =>  response.json())
.then(data => renderProducts(data))

const renderProducts = (data) => {
    data.users.forEach(product => {
        const $div = document.createElement("div");
        $div.className = "card";
        $div.innerHTML = `
            <div><img src="${product.image}"/></div><br>
            <div class="cards">
                <b class="name">${product.firstName} ${product.lastName} ${product.maidenName}</b>
                <p><b>Age:</b> ${product.age}</p>
                <p><b>Birth date:</b> ${product.birthDate}</p>
                <p><b>Email:</b> ${product.email}</p>
                <p><b>Tel:</b> ${product.phone}</p>
                <p><b>Address:</b> ${product.address.address}</p>
                <p><b>University:</b> ${product.university}</p>
                <p><b>Company name:</b> ${product.company.name}</p>
                <p><b>Country:</b> ${product.address.country}</p>
                <button data-product-id="${product.id}" class="delete">Delete</button>
            </div>`;
        $result.appendChild($div);
    });
};
const handleProductsActions = (e) => {
    if (e.target.classList.contains("delete")) {
        const id = e.target.dataset.productId;
        const userAgree = confirm("Are you sure to delete this user?")
        if(userAgree){
            fetch(` https://dummyjson.com/users/${id}`, { method:"DELETE"})
            .then(response =>  response.json())
            .then(data => console.log(data))
            
        }

    }
};

$result.addEventListener("click", handleProductsActions);