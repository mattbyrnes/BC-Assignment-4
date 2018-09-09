//Verify

const viewVerify = event => {
    event.preventDefault();
    $('#content').empty();
    $('#content').append(`
      <p>Enter the name to verify</p>
      <input id="inputName" type="text">
      <button id="submit-verify">Verify</button>
    `);
    // $('#verifyName').on('keyup', verifyEmployee);
  };

function runVerify() {
    for (i = 0; i < employeeList.length; i++) {
      if (inputName === employeeList[i].name.toLowerCase()) {
        alert("I am an alert box!");
      } else {
        render(`False`);
      }
    }
  };

$('#menu-verify').on('click', viewVerify);
$('#submit-verify').on('click', runVerify);
  

  
const lookupEmployeeMenu = event => {
    event.preventDefault();
    $('#content').empty();
    $('#content').append(`
      <input id="lookupName" type="text">
      <label for="name_lookup">Name</label>
      <span>Enter the name to look up</span>
      </div> Look up </div>
    `);
  
    $('#lookupName').on('keyup', lookupEmployee);
  };

  $('#lookup-btn').on('click', lookupEmployeeMenu);
  


