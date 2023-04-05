import { geturl } from './functions.js'
import {request} from './functions.js'
let opts = {
	mode: 'cors',
	method: "GET",
	headers: {
	  "content-type": "application/json",
	  'accept': '*/*'

	}}
let res = await request('getpinned',opts)
let navpinnedcont = document.querySelector('ul.nav-pinned-space');
let sidenavpinnedcont= document.querySelector('ul.the-sidenav-pinned')


if (res.success) {
    let pins = res.message;
    navpinnedcont.innerHTML = null
    sidenavpinnedcont.innerHTML= `<li class="#thetitle h-40p bc-white p-r">
                                    <div class="w-100 h-100 p-10p bsbb">
                                    <span class="thetitle black bold verdana fs-16p bc-white w-100">
                                        Browse
                                    </span>
                                    </div>
                                </li>`
    pins.categories.forEach(p=>{
        let s = document.createElement('li');
        let ss = document.createElement('li');
            s.className = 'w-a h-a'
            ss.className = '#thetitle p-5p bsbb'
            navpinnedcont.appendChild(s)
            sidenavpinnedcont.appendChild(ss)
            ss.innerHTML = `<div class="w-100 h-40p p-2p center-2 bsbb bb-1-s-g hover-6">
                                <a href="${geturl()}/browse/?category=${p.name}" class="td-none h-100 ls-n w-100 center-2 jc-sb hover-6"> 
                                    <span class="thetitle black hover-6 verdana fs-14p pl-10p bsbb w-100">
                                        ${p.name}
                                    </span>
                                    <span class="right center w-a h-100">
                                        <svg version="1.1" id="Layer_1" class="w-20p h-20p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g>
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="27,15 44,32 
                                                    27,49 "></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>`
            s.innerHTML = `<span class="verdana w-a pl-15p pr-15p capitalize hover-6"><a href="${geturl()}/browse/?category=${p.name}" class="td-none ls-n black hover-6">${p.name}</a></span>`
    })
    pins.subcategories.forEach(p=>{
        let s = document.createElement('li');
            s.className = 'w-a h-a'
            navpinnedcont.appendChild(s)
            s.innerHTML = `<span class="verdana w-a pl-15p pr-15p capitalize hover-6"><a href="${geturl()}/browse/?subcategory=${p.name}" class="td-none ls-n black hover-6">${p.name}</a></span>`
            let ss = document.createElement('li');
            ss.className = '#thetitle p-5p bsbb'
            sidenavpinnedcont.appendChild(ss)
            ss.innerHTML = `<div class="w-100 h-40p p-2p center-2 bsbb bb-1-s-g hover-6">
                                <a href="${geturl()}/browse/?subcategory=${p.name}" class="td-none h-100 ls-n w-100 center-2 jc-sb hover-6"> 
                                    <span class="thetitle black hover-6 verdana fs-14p pl-10p bsbb w-100">
                                        ${p.name}
                                    </span>
                                    <span class="right center w-a h-100">
                                        <svg version="1.1" id="Layer_1" class="w-20p h-20p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g>
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="27,15 44,32 
                                                    27,49 "></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>`
    })
    pins.brands.forEach(p=>{
        let s = document.createElement('li');
            s.className = 'w-a h-a'
            navpinnedcont.appendChild(s)
            s.innerHTML = `<span class="verdana w-a pl-15p pr-15p capitalize hover-6"><a href="${geturl()}/browse/?brand=${p.name}" class="td-none ls-n black hover-6">${p.name}</a></span>`
            let ss = document.createElement('li');
            ss.className = '#thetitle p-5p bsbb'
            sidenavpinnedcont.appendChild(ss)
            ss.innerHTML = `<div class="w-100 h-40p p-2p center-2 bsbb bb-1-s-g hover-6">
                                <a href="${geturl()}/browse/?brand=${p.name}" class="td-none h-100 ls-n w-100 center-2 jc-sb hover-6"> 
                                    <span class="thetitle black hover-6 verdana fs-14p pl-10p bsbb w-100">
                                        ${p.name}
                                    </span>
                                    <span class="right center w-a h-100">
                                        <svg version="1.1" id="Layer_1" class="w-20p h-20p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g>
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="27,15 44,32 
                                                    27,49 "></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>`
    })
    pins.families.forEach(p=>{
        let s = document.createElement('li');
            s.className = 'w-a h-a'
            navpinnedcont.appendChild(s)
            s.innerHTML = `<span class="verdana w-a pl-15p pr-15p capitalize hover-6"><a href="${geturl()}/browse/?serie=${p.name}" class="td-none ls-n black hover-6">${p.name}</a></span>`
            let ss = document.createElement('li');
            ss.className = '#thetitle p-5p bsbb'
            sidenavpinnedcont.appendChild(ss)
            ss.innerHTML = `<div class="w-100 h-40p p-2p center-2 bsbb bb-1-s-g hover-6">
                                <a href="${geturl()}/browse/?serie=${p.name}" class="td-none h-100 ls-n w-100 center-2 jc-sb hover-6"> 
                                    <span class="thetitle black hover-6 verdana fs-14p pl-10p bsbb w-100">
                                        ${p.name}
                                    </span>
                                    <span class="right center w-a h-100">
                                        <svg version="1.1" id="Layer_1" class="w-20p h-20p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g>
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="27,15 44,32 
                                                    27,49 "></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>`
    })
    pins.usedin.forEach(p=>{
        let s = document.createElement('li');
            s.className = 'w-a h-a'
            navpinnedcont.appendChild(s)
            s.innerHTML = `<span class="verdana w-a pl-15p pr-15p capitalize hover-6"><a href="${geturl()}/browse/?usedin=${p.name}" class="td-none ls-n black hover-6">${p.name}</a></span>`
            let ss = document.createElement('li');
            ss.className = '#thetitle p-5p bsbb'
            sidenavpinnedcont.appendChild(ss)
            ss.innerHTML = `<div class="w-100 h-40p p-2p center-2 bsbb bb-1-s-g hover-6">
                                <a href="${geturl()}/browse/?usedin=${p.name}" class="td-none h-100 ls-n w-100 center-2 jc-sb hover-6"> 
                                    <span class="thetitle black hover-6 verdana fs-14p pl-10p bsbb w-100">
                                        ${p.name}
                                    </span>
                                    <span class="right center w-a h-100">
                                        <svg version="1.1" id="Layer_1" class="w-20p h-20p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g>
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="27,15 44,32 
                                                    27,49 "></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>`
    })
    pins.availability.forEach(p=>{
        let s = document.createElement('li');
            s.className = 'w-a h-a'
            navpinnedcont.appendChild(s)
            s.innerHTML = `<span class="verdana w-a pl-15p pr-15p capitalize hover-6"><a href="${geturl()}/browse/?availability=${p.name}" class="td-none ls-n black hover-6">${p.name}</a></span>`
            let ss = document.createElement('li');
            ss.className = '#thetitle p-5p bsbb'
            sidenavpinnedcont.appendChild(ss)
            ss.innerHTML = `<div class="w-100 h-40p p-2p center-2 bsbb bb-1-s-g hover-6">
                                <a href="${geturl()}/browse/?availability=${p.name}" class="td-none h-100 ls-n w-100 center-2 jc-sb hover-6"> 
                                    <span class="thetitle black hover-6 verdana fs-14p pl-10p bsbb w-100">
                                        ${p.name}
                                    </span>
                                    <span class="right center w-a h-100">
                                        <svg version="1.1" id="Layer_1" class="w-20p h-20p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g>
                                                <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="27,15 44,32 
                                                    27,49 "></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>`
    })
}