var activepg,dec,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m
import {chagecontent,ellipsis,validateForm,geturl,setSuccessFor,setErrorFor,getParam,vdtemail} from '../../js/functions.js'
var signup_form = document.getElementById('signup-form');
localStorage.setItem('next',`${geturl()}/admin/dashboard.html`)
var titles = Array.from(document.querySelectorAll('li.titles'));
var navbar = document.getElementById('navbar');
var cont = document.getElementById('cont');
var sCard = document.createElement("div");
var blogForm = document.getElementById('blog-form');
let menuBut = document.querySelector('span.menu-icon');
var linkSwitcher = Array.from(document.querySelectorAll('li.linkSwitcher'));
var pagesection = Array.from(document.querySelectorAll('div.pagecontentsection'));
var input = Array.from(document.getElementsByTagName('input'));
let sidenav = document.querySelector('div.sidenav');
let pages = new Array('home','add-product','view-products','orders','log','add-discount','add-user','users','categories','sub-categories','brands','series','availability','usedin');
let textarea = Array.from(document.getElementsByTagName('textarea'))
let select = Array.from(document.getElementsByTagName('select'))
textarea.forEach(elem=>{
	input.push(elem)
})
select.forEach(elem=>{
	input.push(elem)
})

// ======================================================= FOR TOGGLING THE MENU ==============================================



menuBut.addEventListener('click',()=>{
	(sidenav.classList.contains('hidden-resp'))? sidenav.classList.remove('hidden-resp'): sidenav.classList.add('hidden-resp')
})

// ======================================================= FOR GETTING THE REQUESTED PAGE ==============================================

a = getParam('page')
if(a != null){
	pages.forEach(target=>{
		if (a == target) {
			t = target
		}
	})
	if(t){
		v = document.querySelector('div.active');
		p = document.querySelector(`div#${t}`);
		(v!=p)? chagecontent(p,v) : null
	}else{
		window.history.pushState('','','?page=home')
	}
}else{
	window.history.pushState('','','?page=home')
}

// ======================================================= FOR LINK SWITCHERS IN THE SIDENAV ==============================================



linkSwitcher.forEach(e=>{
	e.addEventListener('click',d=>{
		d.preventDefault();
		pagesection.forEach(pgsec=>{
			if (pgsec.id == e.id) {
				let activepg = document.querySelector('div.active');
				if (activepg != pgsec) {
					chagecontent(pgsec,activepg);
				}
			}
		})

	})
})
titles.forEach(ttl=>{
	ttl.addEventListener('click',e=>{
		e.preventDefault();
		var c = ttl.childNodes;
		if (c.length != 3) {
			if (c[3].classList.contains('hidden')) {
				c[3].classList.remove('hidden');
				ttl.classList.add('expand');

			}else{
				c[3].classList.add('hidden');
				ttl.classList.remove('expand');
			}
		}
	})
})




// ======================================================= FOR FOCUSES ==============================================


// inputs

input.forEach(e=>{
	e.addEventListener('focus',f=>{
		var parent = e.parentNode;
		var placeholder = parent.childNodes[5];
		if (parent.childNodes.length > 5) {
			placeholder.classList.remove('hidden');
		}
		parent.classList.add('focus');
	})
	e.addEventListener('keyup',(c)=>{
		if (e.id == 'emailsignup') {			
			vdtemail(e.value,e);
		}
	})
})
input.forEach(e=>{
	e.addEventListener('blur',f=>{
		var parent = e.parentNode;
		var placeholder = parent.childNodes[5];
		if(e.value == ''){
			if (parent.childNodes.length > 5) {
				placeholder.classList.add('hidden');
			}
			parent.classList.remove('focus');
		}
	})
})


// ======================================================= FOR FORM SUBMITION ==============================================


signup_form.addEventListener('submit',e=>{
	e.preventDefault();
	var ins = Array.from(signup_form.querySelectorAll('input'));
    let data = {};
       ins.forEach(inputs=>{
          Object.assign(data,{ [inputs.name]:inputs.value.trim()});
        })
	validateForm(signup_form,ins,data); 
  })

