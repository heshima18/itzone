let loc = window.location.href
import { getasked } from "./filter.js";
import {sf} from './functions.js'
import { request ,geturl,cc,adcm} from "./functions.js";
let prodscont = document.querySelector('div.prods-cont');
prodscont.innerHTML = null

for (let i = 0; i <=10; i++) {
    if (i == 10) {
        prodscont.innerHTML+=`<div class="product w-100 h-150p bc-white  p-10p bsbb ovh mr-10p mb-15p mt-15p iblock hover-2">
        <div class="w-100 h-100 p-10p bsbb center-2">
            <div class="image p-10p bsbb iblock w-100p h-100p bc-dgray skel br-5p">
                <span class="w-100 h-100">
                    <img src="" class="w">
                </span>
            </div>
            <div class="w-80 h-a iblock p-20p bsbb">
                <div class="title w-100 h-30p p-5p bsbb">
                    <span class="verdana left fs-16p p-5p bsbb black bc-gray skel w-30 h-100 br-5p"></span>
                </div>
                <div class="title w-100 h-10p p-5p bsbb m-10p">
                    <span class="verdana left fs-16p p-5p bsbb black bc-gray skel w-80 h-100 br-5p"></span>
                </div>
                <div class="title w-100 h-10p p-5p bsbb m-10p">
                    <span class="verdana left fs-16p p-5p bsbb black bc-gray skel w-70 h-100 br-5p"></span>
                </div>
            </div>
        </div>
    </div>`
    } else {
        
        prodscont.innerHTML+=`<div class="product w-100 h-150p bc-white  p-10p bsbb ovh mr-10p mb-15p mt-15p iblock hover-2 bb-1-s-g">
        <div class="w-100 h-100 p-10p bsbb center-2">
            <div class="image p-10p bsbb iblock w-100p h-100p bc-dgray skel br-5p">
                <span class="w-100 h-100">
                    <img src="" class="w">
                </span>
            </div>
            <div class="w-80 h-a iblock p-20p bsbb">
                <div class="title w-100 h-30p p-5p bsbb">
                    <span class="verdana left fs-16p p-5p bsbb black bc-gray skel w-30 h-100 br-5p"></span>
                </div>
                <div class="title w-100 h-10p p-5p bsbb m-10p">
                    <span class="verdana left fs-16p p-5p bsbb black bc-gray skel w-80 h-100 br-5p"></span>
                </div>
                <div class="title w-100 h-10p p-5p bsbb m-10p">
                    <span class="verdana left fs-16p p-5p bsbb black bc-gray skel w-70 h-100 br-5p"></span>
                </div>
            </div>
        </div>
    </div>`
    }
    
}
getparams(loc);
async function getparams(url) {
    
    let btitle = document.querySelector('div.the-title');
    var asked = getasked(url)  
    let brttl = document.querySelector('span.br-ttl'); 

    
    if (asked != null) {
        let opts = {
            mode: 'cors',
            method: "post",
            body: JSON.stringify({cntn: [asked]}),
            headers: {
              "content-type": "application/json",
              'accept': '*/*'
        
            }}
        let a = await request('getprodswthcndtn',opts)
        brttl.parentNode.classList.add('center-2')
        brttl.parentNode.classList.add('ml-10p','p-6p')
        brttl.parentNode.parentNode.parentNode.className='the-h w-100 h-50p  bsbb mt-10p mb-10p  b-1-s-dgray br-5p bc-white'
        brttl.parentNode.parentNode.className='h-100 w-100 flex jc-sb'
        btitle.innerHTML = `<div class=" w-100 h-100 br-10p p-5p bsbb"><span class="w-100 h-20p br-5p flex verdana nowrap">browsing in &nbsp;<b>${asked[Object.keys(asked)]}</b></span></div>`
        brttl.innerHTML = `<span class="w-a h-a br-5p capitalize"> ${asked[Object.keys(asked)]}</span>`
        document.title =  `${(asked[Object.keys(asked)].substring(0,1).toUpperCase()+asked[Object.keys(asked)].substring(1,asked[Object.keys(asked)].length))} | ITZONE +`
        sf(a,prodscont)
    }else{
        prodscont.innerHTML = `<div class="w-100 h-a">
									<div class="center p-10p bsbb w-100 h-a svg-hol">
										<span class="verdana fs-15p">
                                         <svg class="w-100p h-100p" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="removeIconTitle" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ccc"> <path d="M17,12 L7,12"/> <circle cx="12" cy="12" r="10"/> 
                                         </svg>
                                        </span>
									</div>
									<div class="center p-40p bsbb w-100 h-100">
										<span class="verdana fs-18p ta-c dgray">it seems like there are <br> no products in your selection</span>
									</div>
								</div>`;
        // brttl.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].classList.replace('center-2','hidden')
        // brttl.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].classList.replace('iblock','hidden')
    }

}

