const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const phone_number=document.querySelector('#phnumber');
const msg= document.querySelector('.msg');
const userList = document.querySelector('#users');
myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value ==='' || phone_number.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>msg.remove() , 3000);

    }
    else{
        const li = document.createElement('li');
        let myObj = {
            nameInput : nameInput.value,
            emailInput : emailInput.value,
            phone_number : phone_number.value 

        };
        let myObj_serialized = JSON.stringify(myObj);
        localStorage.setItem(emailInput.value, myObj_serialized);
        let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

          var createEle = document.createElement('input');
        createEle.type = 'button';
        createEle.value = "Delete"
        createEle.id ="buttonid";
        var createDeletenode = document.createTextNode('Delete');
        createEle.appendChild(createDeletenode);
      

        var createBtn= document.createElement('input');
        createBtn.type = 'button';
        createBtn.value = "Edit"
        createBtn.id ="edit";
        var createEditnode = document.createTextNode('Edit');
        createBtn.appendChild(createEditnode);
      

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phone_number.value}`));
      li.appendChild(createEle);
       li.appendChild(createBtn);
    li.id = nameInput.value;
    userList.appendChild(li);
    var buttonid = document.getElementById(nameInput.value);
    var listid = document.getElementById(nameInput.value);
    
      buttonid.addEventListener('click',deleteFunction);
      function deleteFunction(e){
        if(e.target.value=="Delete"){
          listid.remove();
         localStorage.removeItem(listid.innerHTML.split(": ")[1]);

        }
        else
        {
          listid.remove();
          var ITEM = localStorage.getItem(listid.innerHTML.split(": ")[1]); 
          var details= ITEM.split(","); 
          nameInput.value= ITEM.split(",")[0].split(":")[1].replaceAll("\"","");
          emailInput.value= ITEM.split(",")[1].split(":")[1].replaceAll("\"","");
          phone_number.value=ITEM.split(",")[2].split(":")[1].replaceAll(/["{}]/g, "");
          localStorage.removeItem(listid.innerHTML.split(": ")[1]);
        }
       
        console.log(e.target.value);
      }

        



    nameInput.value = '';
    emailInput.value = '';
    phone_number.value = '';
  }

}
