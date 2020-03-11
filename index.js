var phoneNumber = document.getElementById('phone');
var userName = document.getElementById('name');
var userEmail =document.getElementById('email');
var caseNumber = document.getElementById('case');
//------------------------------------------------------------

var phoneRGEX = /[0-9]/;
function CheckPhoneByRegExp(){
    if(phoneRGEX.test(phoneNumber.value) === true) {
        // phoneNumber.style.borderBottomColor = "green";
        phoneNumber.style.border='3px solid green'
    }else{
        phoneNumber.style.border='3px solid red'; 
    }
  };

  //  for validation User Name by reg exp ........................

var valdUserName =/[a-z0-9]+ +[a-z0-9] +[a-z0-9]/;
function checkUsernameReqEx(){
    if (valdUserName.test(userName.value)===true){
        userName.style.border = '3px solid green';
    }else{
        userName.style.border='5px solid red';
    }
};

//  for validation User Email by reg exp ........................

var valdEmailUser=/^[a-z0-9]+@+[a-z]+\.+[a-z]/i;
function valdEmailUserReqexp(){
 if(valdEmailUser.test(userEmail.value)===true){
userEmail.style.border='5px solid green';
 }else{
     userEmail.style.border='4px solid red';
 }
};
//  for validation User caseNumber by reg exp ........................
var caseNumberInUNHCR= /[0-9]+\-+[0-9]/;
function valdCaseUserNumberReqexp(){
    if(caseNumberInUNHCR.test(caseNumber.value) == true){
        caseNumber.style.border='5px solid green';
    }else{
        caseNumber.style.border='5px solid red';
    }
};

//-----------------------------------------------------------------

//-------------------------add img-----------------------------------
document.getElementById('btnAdd').addEventListener('click', e => {
    document.getElementById('img').click()
})
//-------------------------------------------------------------------


