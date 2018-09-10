//Print
const viewPrint = event => {
  $('#content').empty();
  $('#content').append(`
      <p>View all employees</p>
      <button id="submit-print">Print</button>
    `);
  function runPrint() {
    $('#output').empty();
    for (i = 0; i < employeeList.length; i++) {
      $('#output').append(`Name: ${employeeList[i].name}`);
      $('#output').append(`Office Number: ${employeeList[i].officeNum}`);
      $('#output').append(`Phone Number: ${employeeList[i].phoneNum}`);
    }
  };
  $('#submit-print').on('click', runPrint);
};
$('#menu-print').on('click', viewPrint);

//Verify
const viewVerify = event => {
  $('#content').empty();
  $('#content').append(`
      <p>Enter the name to VERIFY</p>
      <input id="inputName" type="text">
      <button id="submit-verify">Verify</button>
    `);
  function runVerify() {
    $('#output').empty();
    $('#output').append(`<p>False</p>`);
    console.log(`Hello False`);
    let userInput = document.querySelectorAll('#inputName')[0].value;
    for (i = 0; i < employeeList.length; i++) {
      if (userInput === employeeList[i].name.toLowerCase()) {
        $('#output').empty();
        $('#output').append(`<p>True</p>`);
        console.log(`Hello True`);
      }
    }
  };
  $('#submit-verify').on('click', runVerify);
};
$('#menu-verify').on('click', viewVerify);

//Lookup
const viewLookup = event => {
  $('#content').empty();
  $('#content').append(`
      <p>Enter the name to LOOKUP</p>
      <input id="inputName" type="text">
      <button id="submit-lookup">Lookup</button>
    `);
    function runLookup() {
      $('#output').empty();
      $('#output').append(`<p>Employee Not Found</p>`);
      console.log(`Hello - Employee Not Found`);
      let userInput = document.querySelectorAll('#inputName')[0].value;
      for (let i = 0; i < employeeList.length; i++) {
        if (userInput === employeeList[i].name.toLowerCase()) {
          $('#output').empty();
          $('#output').append(`Name: ${employeeList[i].name}`);
          $('#output').append(`Office Number: ${employeeList[i].officeNum}`);
          $('#output').append(`Phone Number: ${employeeList[i].phoneNum}`);
        }
      }
    }
  $('#submit-lookup').on('click', runLookup);
  $('#inputName').on('keyup', runLookup);
};
$('#menu-lookup').on('click', viewLookup);

//Contains
const viewContains = event => {
  $('#content').empty();
  $('#content').append(`
      <p>Employee name CONTAINS what letters?</p>
      <input id="inputName" type="text">
      <button id="submit-contains">Contains</button>
    `);
    function runContains() {
      $('#output').empty();
      $('#output').append(`<p>Employee Not Found</p>`);
      console.log(`Hello - Employee Not Found`);
      let userInput = document.querySelectorAll('#inputName')[0].value;
      for (i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name.toLowerCase().includes(userInput)) {
          $('#output').empty();
          $('#output').append(`Name: ${employeeList[i].name}`);
          $('#output').append(`Office Number: ${employeeList[i].officeNum}`);
          $('#output').append(`Phone Number: ${employeeList[i].phoneNum}`);
        }
      }
    }
  $('#submit-contains').on('click', runContains);
  $('#inputName').on('keyup', runContains);
};
$('#menu-contains').on('click', viewContains);

//Update//////////////////////////

//Add
const viewAdd = event => {
  $('#content').empty();
  $('#content').append(`
      <p>ADD a new employee</p>
      <input id="newName" type="text">
      <input id="newOffice" type="text">
      <input id="newPhone" type="text">
      <button id="submit-add">Add</button>
    `);
    function runAdd() {
      let nameAdd = document.querySelectorAll('#newName')[0].value;
      let officeAdd = document.querySelectorAll('#newOffice')[0].value;
      let phoneAdd = document.querySelectorAll('#newPhone')[0].value;
      var employeeAdd = { name: nameAdd, officeNum: officeAdd, phoneNum: phoneAdd };
      employeeList.push(employeeAdd);
      $('#output').empty();
      $('#output').append(`${nameAdd} has been added.`);
     
      // runPrint();
    };
  $('#submit-add').on('click', runAdd).on('click', runPrint);
};
$('#menu-add').on('click', viewAdd);

