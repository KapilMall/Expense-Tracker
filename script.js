const addExpense = document.querySelector('.AddExpense');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#Amount');
const table = document.querySelector('#Table');
const secondRow = document.querySelector('#second');
addExpense.addEventListener('click', () => {
	let messages = [];
	if(name.value === ""){
		messages.push("Please enter expense name");
	}
	if(date.value === ""){
		messages.push('Please enter the date of purchase');
	}
	if(amount.value === ""){
		messages.push("Please enter the amount spent");
	}
	if(messages.length > 0){
		alert(messages.join('\n'));
		return false;
	}
	else{
		secondRow.remove();
		let newRow = table.insertRow();
		newRow.classList.add('tr');
		let nameCell = newRow.insertCell();
		nameCell.classList.add('th');
		let nameText = document.createTextNode(name.value); 
		nameCell.appendChild(nameText);
		let dateCell = newRow.insertCell();
		dateCell.classList.add('th');
		let dateText = document.createTextNode(date.value);
		dateCell.appendChild(dateText);
		let amountCell = newRow.insertCell();
		amountCell.classList.add('th');
		let amountText = document.createTextNode(amount.value);
		amountCell.appendChild(amountText);
		let deleteButtonCell = newRow.insertCell();
		deleteButtonCell.classList.add('th');
		let deleteButton = document.createElement('button');
		deleteButton.innerHTML = "&times;";
		deleteButton.classList.add('deleteButton');
		deleteButtonCell.appendChild(deleteButton);
		name.value = "";
		date.value = "";
		amount.value = "";

		//Functioning of Delete Button
		deleteButton.addEventListener('click', () => {
			let nodes = deleteButton.parentNode.parentNode;

			function removeRow(parent){
				while(parent.firstChild){
					parent.removeChild(parent.firstChild);
				}
			}

			removeRow(nodes);
		});
	}
});