let expenses = [];
        let totalBudget = 0;
        let totalExpense = 0;
        let remainingBalance = 0;

        function setBudget() {
            const budgetInput = document.getElementById("budget");
            totalBudget = parseInt(budgetInput.value);
            document.getElementById("totalBudget").textContent = totalBudget;
            budgetInput.value = "";
        }

        function addExpense() {
            const dateInput = document.getElementById("date");
            const descriptionInput = document.getElementById("description");
            const categoryInput = document.getElementById("category");
            const expenseInput = document.getElementById("expense");

            const date = dateInput.value;
            const description = descriptionInput.value;
            const category = categoryInput.value;
            const expense = parseInt(expenseInput.value);

            expenses.push({ date, description, category, expense });

            const expenseTable = document.getElementById("expenseTable");
            const newRow = expenseTable.insertRow();

            const dateCell = newRow.insertCell();
            dateCell.textContent = date;

            const descriptionCell = newRow.insertCell();
            descriptionCell.textContent = description;

            const categoryCell = newRow.insertCell();
            categoryCell.textContent = category;

            const expenseCell = newRow.insertCell();
            expenseCell.textContent = expense;

            const actionsCell = newRow.insertCell();
            actionsCell.innerHTML = `
                <button onclick="editExpense(${expenses.length - 1})">Edit</button>
                <button onclick="deleteExpense(${expenses.length - 1})">Delete</button>
            `;

            totalExpense += expense;
            remainingBalance = totalBudget - totalExpense;

            document.getElementById("totalExpense").textContent = totalExpense;
            document.getElementById("remainingBalance").textContent = remainingBalance;

            // Clear input fields
            dateInput.value = "";
            descriptionInput.value = "";
            categoryInput.value = "";
            expenseInput.value = "";
        }

        function editExpense(index) {
            const expense = expenses[index];
            const dateInput = document.getElementById("date");
            const descriptionInput = document.getElementById("description");
            const categoryInput = document.getElementById("category");
            const expenseInput = document.getElementById("expense");

            dateInput.value = expense.date;
            descriptionInput.value = expense.description;
            categoryInput.value = expense.category;
            expenseInput.value = expense.expense;

            deleteExpense(index);
        }

        function deleteExpense(index) {
            const expense = expenses[index];
            expenses.splice(index, 1);
            const expenseTable = document.getElementById("expenseTable");
            expenseTable.deleteRow(index + 1);

            totalExpense -= expense.expense;
            remainingBalance = totalBudget - totalExpense;

            document.getElementById("totalExpense").textContent = totalExpense;
            document.getElementById("remainingBalance").textContent = remainingBalance;
        }