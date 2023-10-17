function js_add_rows() {
    var numRowsInput = document.getElementById("txtNumRows");
    var numRows = parseInt(numRowsInput.value);
    var sampleTable = document.getElementById("sampleTable");
  
    
    var errorElement = document.getElementById("error");
    if (errorElement) {
      errorElement.remove();
    }
  
    if (isNaN(numRows)) {
      var error = document.createElement("p");
      error.id = "error";
      error.textContent = "Por favor, digite um valor numérico.";
      document.body.appendChild(error);
      return;
    }
  
   
    if (numRows < 1 || numRows > 10) {
      var error = document.createElement("p");
      error.id = "error";
      error.textContent = "Os valores válidos são entre 1 e 10.";
      document.body.appendChild(error);
      return;
    }
  
    for (var i = 0; i < numRows; i++) {
      var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      var cell2 = document.createElement("td");
      row.appendChild(cell1);
      row.appendChild(cell2);
      sampleTable.appendChild(row);
    }
  }
