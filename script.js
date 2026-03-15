
   //  // NOTE -->  date,income,expense,balance,transcationdata,action,transcationtype,Row etc ---> PARENT
   //  // NOTE --> 4555,income,7/02/2026data,deletesymbol,2ndrow          ---> appendChild     -->Children

   //  let table = document.getElementById('table')
   //  // particular row remove delete  ---> D1
   //  function deleteRow(row){ // row receive it.
   //    console.log(row);
   //    row.remove();  
   //  }

   //  function addRow(){

   //    let amount = document.getElementsByClassName('amountInput')[0].value // 0 is first element/valve
   //    let date = document.getElementsByClassName('dateInput')[0].value 
   //    let transactionType = document.getElementsByClassName('transactionType')[0].value
   //    //console.log(date,amount,transactionType);
      
   //    // create row 
   //    let row = document.createElement('tr') 
   //    // create amount
   //    let amountCell = document.createElement('td') 
   //    amountCell.innerText = amount;
   //    // create transaction type
   //    let transactionCell = document.createElement('td')
   //    transactionCell.innerText = transactionType;
   //    // create date
   //    let dateCell = document.createElement('td')
   //    dateCell.innerText = date;

   //    // Action create
   //    let binCell =  document.createElement('td') 
   //    let deleteButton = document.createElement('button') 
   //    // delete image create
   //    let binImage = document.createElement('img')
   //    binImage.src='Images/delete.png'
   //    binImage.style.width ='25px';
   //    binImage.style.height ='25px';
   //    deleteButton.appendChild(binImage)
   //    deleteButton.classList.add('delete-button')
   //    // delete row   ---> D2child
   //    deleteButton.onclick =()=> deleteRow(row)
   //    binCell.appendChild(deleteButton)

      
   //    // 1.table ki child is row.
   //    // 2.row is a parent 3.appendchild is a child means [amount,date,transcationtype]-->td.
   //    row.appendChild(amountCell)
   //    row.appendChild(transactionCell)
   //    row.appendChild(dateCell)
   //    row.appendChild(binCell)

   //    table.appendChild(row)


   //    // TotalIncome, Expense , Balance 
   //    let totalIncome = document.getElementById('totalIncome').innerText // innertext ante 0 valve vasthundhi.
   //    let totalExpense = document.getElementById('expense').innerText
   //    let balance = document.getElementById('balance').innerText

   //    if(transactionType == 'income')
   //    {
   //      if(totalIncome == '0') { // f
   //         document.getElementById('totalIncome').innerText=amount // amount innertext ki aasigned.
   //      }
   //      else
   //      {               // parseint convert into numbers/integers.
   //          document.getElementById('totalIncome').innerText=parseInt(totalIncome)+parseInt(amount)
   //      }
   //      if(balance== "0"){
   //         document.getElementById('balance').innerText=amount
   //      }
   //      else{
   //       document.getElementById('balance').innerText=parseInt(balance)+parseInt(amount)
   //      }
   //   }

   //      else if(transactionType== 'expense')
   //      {
   //          if(totalExpense == '0'){
   //            document.getElementById('expense').innerText = amount
   //          }
   //          else
   //             {               // parseint convert into numbers/integers.
   //             document.getElementById('expense').innerText=parseInt(totalExpense)+parseInt(amount)
   //            }
   //            if(balance== "0"){
   //            document.getElementById('balance').innerText=amount
   //           }
   //          else{
   //           document.getElementById('balance').innerText=parseInt(balance)-parseInt(amount)
   //          }
   //      }
    
   //      console.log(totalIncome,totalExpense,balance);
   //  }

   let table = document.getElementById("table");

function deleteRow(row) {
  row.remove();
}

function addRow() {
  let amount = document.getElementsByClassName("amountInput")[0].value;
  let date = document.getElementsByClassName("dateInput")[0].value;
  let transactionType = document.getElementsByClassName("transactionType")[0].value;

  if (!amount || !date || transactionType === "Transaction Type") {
    alert("Please fill all fields");
    return;
  }

  let row = document.createElement("tr");

  let amountCell = document.createElement("td");
  amountCell.innerText = amount;

  let transactionCell = document.createElement("td");
  transactionCell.innerText = transactionType;

  let dateCell = document.createElement("td");
  dateCell.innerText = date;

  let binCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  let binImage = document.createElement("img");

  binImage.src = "Images/delete.png";
  binImage.style.width = "25px";
  binImage.style.height = "25px";

  deleteButton.appendChild(binImage);
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = () => deleteRow(row);

  binCell.appendChild(deleteButton);

  row.appendChild(amountCell);
  row.appendChild(transactionCell);
  row.appendChild(dateCell);
  row.appendChild(binCell);

  table.appendChild(row);

  let totalIncome = parseInt(document.getElementById("totalIncome").innerText);
  let totalExpense = parseInt(document.getElementById("expense").innerText);
  let balance = parseInt(document.getElementById("balance").innerText);
  let amountValue = parseInt(amount);

  if (transactionType === "income") {
    document.getElementById("totalIncome").innerText = totalIncome + amountValue;
    document.getElementById("balance").innerText = balance + amountValue;
  } else if (transactionType === "expense") {
    document.getElementById("expense").innerText = totalExpense + amountValue;
    document.getElementById("balance").innerText = balance - amountValue;
  }
}