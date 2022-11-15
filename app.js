const addItem = () => {
    const namefield = document.getElementById('input-field');
    const name1 = namefield.value;


    displayProduct(name1);

    namefield.value = '';

}

const displayProduct = name2 => {
    const ul = document.getElementById('addProducts');
    const li = document.createElement('li');
    li.innerText = name2;
    ul.appendChild(li);
}