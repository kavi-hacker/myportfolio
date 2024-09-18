document.getElementById("dataForm").addEventListener("submit", formValid());

function formValid(event){
    event.preventDefault();

    var name = document.getElementById("getname").value;
    var age = document.getElementById("getAge").value;
    var genderM = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById('getprogram').value;
    var email = document.getElementById('getmail').value;
    var delbtn = document.createElement('button');
    delbtn.textContent = 'DELETE';
    delbtn.id = 'remove';

    delbtn.addEventListener("click", function(){
        newRow.remove();
    });

    var mainTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = mainTable.insertRow();

    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);
    var courseCell = newRow.insertCell(3);
    var emailCell = newRow.insertCell(4);
    var delbtnCell = newRow.insertCell(5);

    nameCell.textContent = name;
    ageCell.textContent = age;
    genderCell.textContent = genderM;
    courseCell.textContent = course;
    emailCell.textContent = email;
    delbtnCell.append(delbtn);
    

    

    document.getElementById('dataForm').reset();
}
