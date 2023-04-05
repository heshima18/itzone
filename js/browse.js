let loc = window.location.href
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
    let i = new URL(url)
    let cat = {category : i.searchParams.get("category")}
    let brttl = document.querySelector('span.br-ttl');
    let subcategory = {subcategory: i.searchParams.get("subcategory")}
    let usedin = {usedin:i.searchParams.get("usedin")}
    let brand = {brand: i.searchParams.get("brand")}
    let family = {family: i.searchParams.get("serie")}
    let availability = {availability: i.searchParams.get("availability")}
    let ass = Array(cat,subcategory,usedin,brand,family,availability)
    let btitle = document.querySelector('div.the-title');
    btitle.className = `the-title w-100 h-100 p-5p bsbb`
    let asked = null    

    ass.forEach(as=>{
        if (as[Object.keys(as)]) {
            asked = as
            localStorage.setItem('next',`${geturl()}/?${Object.keys(as)}=${as[Object.keys(as)]}`)
            return asked
        }
    })
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
        btitle.innerHTML = `<span class="w-100 h-20p br-5p flex verdana nowrap">browsing in &nbsp;<b>${asked[Object.keys(asked)]}</b></span>`
        brttl.innerHTML = `<span class="w-a h-a br-5p capitalize"> ${asked[Object.keys(asked)]}</span>`
        document.title =  `${asked[Object.keys(asked)]} | ITZONE +`
        sf(a)
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
        brttl.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].classList.replace('center-2','hidden')
        brttl.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].classList.replace('iblock','hidden')

        console.log(brttl.parentNode.parentNode.parentNode.childNodes[1].childNodes[3])
    }

}
function sf(aa) {
    if (aa.success) {
		if ( aa.message.length > 0) {
			prodscont.innerHTML = null;
			console.log(aa)
			aa.message.forEach(d=>{
                if(aa.message.indexOf(d) == (aa.message.length-1)){

                    prodscont.innerHTML+=  `<div class="product w-100 h-a bc-white  p-10p bsbb ovh mr-10p mb-15p mt-15p iblock hover-2">
                        <div class="w-100 h-100 p-10p bsbb flex">
                            <div class="image p-10p bsbb iblock w-100p h-100p br-5p">
                                <span class="w-100 h-100">
                                 <img src="${geturl()}/product-imgz/${d.pimgs[0]}" alt="" class="w-100 h-100 b-none contain">
                                </span>
                            </div>
                            <div class="w-80 h-100 iblock pl-20p bsbb">
                                <div class="title w-100 h-a p-5p bsbb">
                                <a href="${geturl()}/product?id=${d.prodid}" class="td-none ls-n black w-100 h-100 flex"><span class="verdana left fs-16p bsbb black ">${d.pname}</span></a>
                                </div>
                                <div class="desc w-100 h-a p-5p bsbb ">
                                <span class="verdana left fs-13p bsbb dgray wrap">in <a href="${geturl()}/browse/?category=${d.catname}" class="td-none ls-n"><font class="theme">${d.catname}</font></a> , <a href="${geturl()}/browse/?subcategory=${d.subcatname}" class="td-none ls-n"><font class="theme">${d.subcatname}</font></a> , <a href="${geturl()}/browse/?brand=${d.brandname}" class="td-none ls-n"><font class="theme">${d.brandname}</font></a> , <a href="${geturl()}/browse/?serie=${d.famname}" class="td-none ls-n"><font class="theme">${d.famname}</font></a> , <a href="${geturl()}/browse/?usedin=${d.usedinname}" class="td-none ls-n"><font class="theme">${d.usedinname}</font></a></span>
                                </div>
                                <div class="av w-100 h-a p-5p bsbb ">
                                <span class="verdana left fs-13p bsbb bc-gray pb-3p pl-10p pr-10p pt-1p br-3p center h-100 w-a ml-5p dgray">${d.availability}</span>
                                <span class="verdana left fs-14p bsbb center-2 ml-20p h-100"><span class="condprice" id="">${adcm(d.conditions[0].newprice)}</span> <span class="fs-11p pl-10p pt-2p dgray consolas">RWF</span></span>
                                </div>
                            </div>
                        </div>
                    </div>`
                }else{
                    prodscont.innerHTML+=  `<div class="product w-100 h-a bc-white  p-10p bsbb ovh mr-10p mb-15p mt-15p iblock hover-2 bb-1-s-g">
                    <div class="w-100 h-100 p-10p bsbb flex">
                        <div class="image p-10p bsbb iblock w-100p h-100p bc-dgray skel br-5p">
                            <span class="w-100 h-100">
                                <img src="" class="w">
                            </span>
                        </div>
                        <div class="w-80 h-100 iblock pl-20p bsbb">
                            <div class="title w-100 h-a p-5p bsbb">
                            <a href="${geturl()}/product?id=${d.prodid}" class="td-none ls-n black w-100 h-100 flex"><span class="verdana left fs-16p bsbb black ">${d.pname}</span></a>
                            </div>
                            <div class="desc w-100 h-a p-5p bsbb ">
                            <span class="verdana left fs-13p bsbb dgray wrap">in <a href="${geturl()}/browse/?category=${d.catname}" class="td-none ls-n"><font class="theme">${d.catname}</font></a> , <a href="${geturl()}/browse/?subcategory=${d.subcatname}" class="td-none ls-n"><font class="theme">${d.subcatname}</font></a> , <a href="${geturl()}/browse/?brand=${d.brandname}" class="td-none ls-n"><font class="theme">${d.brandname}</font></a> , <a href="${geturl()}/browse/?serie=${d.famname}" class="td-none ls-n"><font class="theme">${d.famname}</font></a> , <a href="${geturl()}/browse/?usedin=${d.usedinname}" class="td-none ls-n"><font class="theme">${d.usedinname}</font></a></span>
                            </div>
                            <div class="av title w-100 h-a p-5p bsbb flex">
                            <span class="verdana left fs-13p bsbb bc-gray p-3p br-3p center h-100 w-a">${d.availability}</span>
                            <span class="verdana left m-5p  fs-18p bsbb center-2 pt-2p pb-4p  h-100"><span class="fs-13p pr-10p pt-2p ">starting at</span><span class="condprice" id="">${adcm(d.conditions[0].newprice)}</span> <span class="fs-13p pl-10p pt-2p dgray">RWF</span></span>
                            </div>
                        </div>
                    </div>
                </div>`
                }
			})
		}else{
			prodscont.innerHTML = `<div class="w-100 h-a">
									<div class="center p-10p bsbb w-100 h-a svg-hol">
										<span class="verdana fs-15p"><svg class="w-100p h-100p" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="removeIconTitle" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ccc"> <title id="removeIconTitle">Remove</title> <path d="M17,12 L7,12"/> <circle cx="12" cy="12" r="10"/> </svg></span>
									</div>
									<div class="center p-40p bsbb w-100 h-100">
										<span class="verdana fs-18p ta-c dgray">it seems like there are <br> no products in your selection</span>
									</div>
								</div>`;
		}
	}else{
		prodscont.innerHTML = `<div class="w-100 h-a"><div class="center p-10p bsbb w-100 h-100">
											<span class="verdana fs-18p ta-c dgray">oops, an error has occured while trying to connect to the server</span>
									</div></div>`;
	}
}