const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const transactionList = document.getElementById("transaction-list");

const addBtn = document.querySelector(".add-btn");

// Creating new elements
const td = document.createElement("td");
let count = 0;

// Function to get the local date
function getLocalDate() {
    const transactionDate = new Date();

    const year = transactionDate.getFullYear();
    const month = String(transactionDate.getMonth() + 1).padStart(2, "0");
    const date = String(transactionDate.getDate()).padStart(2, "0");

    return `${date}-${month}-${year}`;
}

// Function to generate the table cell
function createCell(value) {
    const td = document.createElement("td");
    td.innerText = value;
    return td;
}

// Function to delete the transaction
function deleteTransaction() {
    let transaction = this;
    transaction.closest("tr").remove();
    --count;
}

function addTransaction() {
    // Creating new required elements
    const tr = document.createElement("tr");
    const actionCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    let descriptionValue = description.value;
    let amountValue = Number(amount.value);
    let typeValue = type.value;
    let categoryValue = category.value;

    transactionList.appendChild(tr);
    tr.appendChild(createCell(++count));
    tr.appendChild(createCell(descriptionValue));
    tr.appendChild(createCell(categoryValue));
    tr.appendChild(createCell(typeValue));
    tr.appendChild(createCell(amountValue));
    tr.appendChild(createCell(getLocalDate()));

    actionCell.appendChild(deleteBtn);
    tr.appendChild(actionCell);

    // Delete Transaction button call
    deleteBtn.addEventListener("click", deleteTransaction);
}

// Add Transaction function
addBtn.addEventListener("click", () => {
    addTransaction();
});

