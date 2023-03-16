
let ID, Name, Extension, Email,Department;
let id, name1, ext, email,inputState, addEmployee;
const $ = (id) => document.getElementById(id)
id        = $('id')
name1     = $('name1')
ext       = $('ext')
email     = $('email')
inputState= $('inputState')
addEmployee=$('addEmployee')
addEmployee.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('ID         :' + String(ID=id.value) +'\nName       :' + String(Name=name1.value) + '\nExtension  :' + String(Extension=ext.value) + '\nEmail      :' + String(Email=email.value) + '\nDepartment :' + String(Department=inputState.value)); 
});


