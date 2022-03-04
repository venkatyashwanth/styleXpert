let fullName = document.getElementById("fullName");
let  email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let cities = document.getElementById('cities');


let border1="2px solid red";
let border2="2px solid green";

let details = {
    validname: false,
    validemail: false,
    validmobile: false,
    validcity: false
}


function validate1(){
    let fname = fullName.value;
    fname = fname.replace(/\s/g, "");
    let regExp=new RegExp("^[A-Za-z]*$"); 
    
    if(fname==''){
        alert('Name Field is empty')
        fullName.style.border=border1;
        details.validname = false;
    }
    else if(regExp.test(fname)==false){
        alert('only alphabets allowed')
        fullName.style.border=border1;
        details.validname = false;
    }
    else{
        fullName.style.border=border2;
        details.validname = true;
    }
}


function validate2(){
    let emailId=email.value;
    let ss=emailId.substring(emailId.indexOf('@')+1);
    if(emailId==''){
        alert('email field is empty');
        email.style.border = border1;
        details.validemail = false;
    }
    else if(!emailId.includes('@') || ss==''){
        alert('Please put valid email id')
        email.style.border = border1;
        details.validemail = false;
    }
    else{
        email.style.border = border2;
        details.validemail = true;
    }
}

function validate3(){
    let mobileNumber=mobile.value;
    let regExp=new RegExp("^[0-9]*$"); 
    if(mobileNumber==''){
        alert("this field is required");
        mobile.style.border = border1;
        details.validmobile = false;
    }
    else if(regExp.test(mobileNumber)==false){
        alert('mobile number should contain only digits')
        mobile.style.border = border1;
        details.validmobile = false;
    }
    else if(mobileNumber.length!=10){
        alert("please put valid mobile number");
        mobile.style.border = border1;
        details.validmobile = false;
    }
    else{
        mobile.style.border = border2;
        details.validmobile = true;
    }
}

function validate4(){
    let city = cities.value;
    if(city == '-'){
        alert('Select One City');
        cities.style.border = border1;
        details.validcity = false;
    }else{
        cities.style.border = border2;
        details.validcity = true;
    }
}


fullName.addEventListener('blur',validate1)
email.addEventListener('blur',validate2)
mobile.addEventListener('blur',validate3)
cities.addEventListener('blur',validate4)

function validateForm(){
    let v1 = details.validname;
    let v2 = details.validemail;
    let v3 = details.validmobile;
    let v4 = details.validcity;
    if(v1 && v2 && v3 && v4){
        return true;
    }else{
        alert('please fill all required fields');
        return false;
    }
    
}   


let carouselbox1 = document.getElementById('carouselbox1');
let carouselbox2 = document.getElementById('carouselbox2');


let previousBtn = document.getElementById('previousBtn');
let nextBtn = document.getElementById('nextBtn');



nextBtn.addEventListener('click',function(){
    carouselbox1.classList.toggle('active');
    carouselbox2.classList.toggle('active');
})

previousBtn.addEventListener('click',function(){
    carouselbox1.classList.toggle('active');
    carouselbox2.classList.toggle('active');
})