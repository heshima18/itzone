import { addshade, getdata,setBlurFor,validateForm,setSuccessFor,vdtemail } from "./functions.js";

let q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m
let usericon = document.querySelector('svg.user--ic');
usericon.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('dd')
    u = getdata('user');
    if (u) {
        
    }else{
        initiatelogin();
    }

})
function initiatelogin() {
    s = addshade();
    c = document.createElement('div')
    c.className = `w-80 h-70 bc-white cntr br-5p card-6 b-mgc-resp`
    s.appendChild(c)
    c.innerHTML = `<div class="data-cont w-100 h-100  bsbb p-10p ovh p-r" id="login">
    <div class="w-45 h-100 p-40p bsbb igrid t-0 hidden-resp">
        <div class="text w-90  bsbb p-20p bsbb">
            <span class="bold helvetica big-title fs-50p capitalize theme bold nowrap">
                welcome back.
            </span>
        </div>
        <div class="block w-70  ml-40p bsbb">
            <span class="verdana black fs-25p">
                log into your account. Get a personal access to the content of the website, and together let’s create something special.
            </span>
        </div>
    </div>
    <div class="w-50 h-100 p-a bsbb p-r r-0 p-20p igrid bp-0-resp bfull-resp">
        <div class="text w-100  bsbb bsbb p-r  ">
            <span class="right w-100 h-100 p-r ovh">
                <div class="w-100 h-100 p-10p bsbb  igrid m-0 user-form  tr-0-3 l-0 p-r">
                    <form method="post" name="login-form" onsubmit="function f(e) {e.preventDefault();}" class="p-10p bsbb" id="login-form">
                        <div class="w-100 h-60p mt-30p mb-10p p-10p bsbb">
                            <div class="w-100 igrid mr-10p left parent p-r">
                                <label class="capitalize fs-15p verdana">email</label>
                                <input type="email" name="email" placeholder="" class="p-15p no-outline bsbb b-1-s-dgray bc-white mt-10p">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana hidden ml-5p">error mssg</small>
                            </div>
                        </div>
                        <div class="w-100 h-60p mt-30p mb-10p p-10p bsbb">
                            <div class="w-100 igrid mr-10p left parent p-r">
                                <label class="capitalize fs-15p verdana">password</label>
                                <input type="password" name="password" placeholder="" class="p-15p no-outline bsbb b-1-s-dgray bc-white mt-10p">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana hidden ml-5p">error mssg</small>
                            </div>
                        </div>
                        
                        <div class="w-100  h-60p mt-60p p-r right mb-10p p-10p bsbb">
                            <div class="w-100 h-100">
                                <span class="iblock left h-100">
                                        <span class="verdana black h-100 fs-13p center capitalize">not yet a member<a href="signup" id="signup" class="td-none theme switch-link">signup</a></span>
                                </span>
                                <span class="iblock right h-100">
                                    <button class="bc-theme p-10p b-none w-100p br-2p">
                                        <span class="verdana white fs-15p capitalize">login</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w-100 h-100 p-10p bsbb bc-trgray igrid m-0 user-form  p-a t-0 tr-0-3 l-100">
                    <form method="post" name="signup-form" onsubmit="function f(e) {e.preventDefault();}" class="p-10p bsbb" id="signup-form">
                        <div class="w-100 h-60p mt-30p mb-10p p-10p bsbb">
                            <div class="w-50 bsbb igrid mr-10p left parent p-r">
                                <label class="verdana capitalize fs-15p ">first name</label>
                                <input type="text" name="firstname" placeholder="" class=" no-outline bsbb b-1-s-dgray bc-white w-100 p-15p mt-10p">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana hidden ml-5p">error mssg</small>
                            </div>
                            <div class="p-r w-45 bsbb igrid parent">
                                <label class="verdana capitalize fs-15p left">last name</label>
                                <input type="text" name="lastname" placeholder="" class="no-outline bsbb b-1-s-dgray bc-white w-100 p-15p mt-10p">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana left hidden ml-5p">error mssg</small>
                            </div>
                        </div>
                        <div class="w-100 h-60p mt-30p mb-10p p-10p bsbb">
                            <div class="w-100 igrid mr-10p left parent p-r">
                                <label class="verdana capitalize fs-15p ">email</label>
                                <input type="text" name="email" placeholder="" class="p-15p no-outline bsbb b-1-s-dgray bc-white mt-10p" id="emailsignup">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana left hidden ml-5p">error mssg</small>

                            </div>
                        </div>
                        <div class="w-100 h-60p mt-30p mb-10p p-10p bsbb">
                            <div class="w-50 bsbb igrid mr-10p left parent p-r">
                                <label class="verdana capitalize fs-15p ">password</label>
                                <input type="text" name="password" placeholder="" class=" no-outline bsbb b-1-s-dgray bc-white w-100 p-15p mt-10p">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana hidden ml-5p">error mssg</small>
                            </div>
                            <div class="p-r w-45 bsbb igrid parent">
                                <label class="verdana capitalize fs-15p left">confirm password</label>
                                <input type="text" name="confirm" placeholder="" class="no-outline bsbb b-1-s-dgray bc-white w-100 p-15p mt-10p">
                                <span class="p-a r-0 mt-43p mr-10p center">
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#FF0000"/>
                                        <path d="M11.0717 5.27273L10.8757 11.3281H9.12429L8.92827 5.27273H11.0717ZM9.99787 14.1236C9.69389 14.1236 9.43253 14.0156 9.21378 13.7997C8.99787 13.5838 8.88991 13.3224 8.88991 13.0156C8.88991 12.7145 8.99787 12.4574 9.21378 12.2443C9.43253 12.0284 9.69389 11.9205 9.99787 11.9205C10.2905 11.9205 10.5476 12.0284 10.7692 12.2443C10.9936 12.4574 11.1058 12.7145 11.1058 13.0156C11.1058 13.2202 11.0533 13.4062 10.9482 13.5739C10.8459 13.7415 10.7109 13.875 10.5433 13.9744C10.3786 14.0739 10.1967 14.1236 9.99787 14.1236Z" fill="white"/>
                                    </svg>
                                    <svg width="15" height="15" viewBox="0 0 20 20" class="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#68D753"/>
                                        <line x1="6.38765" y1="8.96481" x2="9.54712" y2="12.8401" stroke="white"/>
                                        <line x1="8.80605" y1="12.7273" x2="14.8872" y2="6.64614" stroke="white"/>
                                    </svg>
                                </span>
                                <small class="red verdana left hidden ml-5p">error mssg</small>
                            </div>
                        </div>
                        
                        <div class="w-100  h-60p mt-20p p-r right mb-10p p-10p bsbb">
                            <div class="w-100 h-100">
                                <span class="iblock left h-100">
                                        <span class="verdana black h-100 fs-13p center capitalize">already a member<a href="login" id="login" class="td-none theme switch-link">login</a></span>
                                </span>
                                <span class="iblock right h-100">
                                    <button class="bc-theme p-10p b-none w-100p br-2p">
                                        <span class="verdana white fs-15p capitalize">signup</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </span>
        </div>
    </div>
</div>`
var input = Array.from(c.getElementsByTagName('input'));
var login_form = document.getElementById('login-form');
var signup_form = document.getElementById('signup-form');
var sL = Array.from(document.querySelectorAll("a.switch-link"));
signup_form.addEventListener('submit',e=>{
    e.preventDefault();
    var ins = Array.from(signup_form.querySelectorAll('input'));
    let data = {};
       ins.forEach(inputs=>{
          Object.assign(data,{ [inputs.name]:inputs.value.trim()});
        })
    validateForm(signup_form,ins,data);
    
  })
  login_form.addEventListener('submit',e=>{
    e.preventDefault();
    var user = localStorage.getItem('user');
    if (user == null) {
      var ins = Array.from(login_form.querySelectorAll('input'));
      let data = {};
       ins.forEach(inputs=>{
          Object.assign(data,{ [inputs.name]:inputs.value.trim()});
        })
      validateForm(login_form,ins,data);
    }else{
      alertMessage("it seems like you are logged in firstly logout to proceed");
    }
    
  })
  input.forEach(inp=>{
    inp.addEventListener('focus',e=>{
      inp.parentNode.classList.add('focus');
    })
  })
  input.forEach(inp=>{
    inp.addEventListener('blur',e=>{
      inp.parentNode.classList.remove('focus');
      if (inp.value == "") {
        setBlurFor(inp);
      }else{
        setSuccessFor(inp);
      }
    })
    if (inp.id == 'emailsignup') {
      inp.addEventListener('keyup',e=>{
        vdtemail(inp.value,inp);
      })
    }
  })
sL.forEach(swl=>{
    swl.addEventListener("click",e=>{
      e.preventDefault();
        showForm(swl.id);
    })
})
}
export function showForm(form) {
  var forms = Array.from(document.querySelectorAll("div.user-form"));
  if (form == "signup") {
    forms[0].classList.replace('l-0','l--100');
    forms[1].classList.replace('l-100','l-0');
  }else if (form == "login"){
    forms[0].classList.replace('l--100','l-0');
    forms[1].classList.replace('l-0','l-100');
  }
}