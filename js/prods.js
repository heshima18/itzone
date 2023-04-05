var prods_cont = document.querySelector('div.ts-cont');
import { cc,request,v_,geturl,adcm, dcrtmgc, checkCart} from "./functions.js";
let ts = document.querySelector('div.ts-cont');
let ctscont = document.querySelector('div.cats-cont');
let brndscont = document.querySelector('div.brands-cont')
let diccont = document.querySelector('div.disccont')

let ops = {
	mode: 'cors',
	method: "GET",
	headers: {
	  "content-type": "application/json",
	  'accept': '*/*'

	}}
let aa = await request('gettopselling',ops);
a441618154(aa,prods_cont)
let cts = await request('getcats',ops);
let brnds = await request('getbrands',ops);
let disc = await request('getdiscounted',ops);
if(cts.success){
	s(cts.message)
}
if (disc.success) {
	sdisc(disc.message)
}
if(brnds.success){
	brnd(brnds.message)
}
let pw = Array.from(ts.querySelectorAll('div.product'));
let bscont = document.querySelector('div.sb_')
export let i=()=>{
	let i = 0;
	for (const p of pw) {
		let m = parseInt(window.getComputedStyle(p).marginLeft)+parseInt(window.getComputedStyle(p).marginRight);
		i+= p.clientWidth + m;
	}
	return i;
}

// setInterval(()=>{
// 	console.log(i(),bscont.parentNode.clientWidth);
// },3000)
window.addEventListener('resize',e=>{
	e.preventDefault();v_(bscont,i())
})
v_(bscont,i());
export function a441618154(aa,parent){
	if (aa.success) {
		if ( aa.message.length > 0) {
			parent.innerHTML = null;
			aa.message.forEach(d=>{
				parent.innerHTML+=`<div class="product w-250p h-360p bc-white br-5p ovh ml-10p mr-10p mb-15p mt-15p iblock b-70-resp bml-7-resp bmr-6-resp b-1-s-gray">
						<div class="w-100 h-170p">
							<div class="image bsbb w-100 h-100 br-5p">
								<span class="w-100 h-100">
									<img src="${geturl()}/product-imgz/${d.pimgs[0]}" class="w-100 h-100 contain">
								</span>
							</div>
							<div class="w-100 h-180p">
								<div class="title w-100 h-30p p-5p bsbb">
									<a href="${geturl()}/product?id=${d.prodid}" class="td-none ls-n black"><span class="verdana left fs-16p p-5p bsbb black">${d.pname}</span></a>
								</div>
								<div class="cats w-100 pl-15p pr-5p h-40p bsbb ovh">
									<span class="verdana left fs-13p bsbb dgray wrap">in <a href="${geturl()}/browse/?category=${d.catname}" class="td-none ls-n"><font class="theme">${d.catname}</font></a> , <a href="${geturl()}/browse/?subcategory=${d.subcatname}" class="td-none ls-n"><font class="theme">${d.subcatname}</font></a> , <a href="${geturl()}/browse/?brand=${d.brandname}" class="td-none ls-n"><font class="theme">${d.brandname}</font></a> , <a href="${geturl()}/browse/?serie=${d.famname}" class="td-none ls-n"><font class="theme">${d.famname}</font></a> , <a href="${geturl()}/browse/?usedin=${d.usedinname}" class="td-none ls-n"><font class="theme">${d.usedinname}</font></a></span>
								</div>
								<div class="cond w-100 pl-15p h-20p bsbb ovh">
									<span class="verdana left fs-14p bsbb ${cc(d.conditions[0].name)} bc-gray p-3p br-3p center h-100 w-a" id="${0}">${d.conditions[0].name}</span>
									<span class="verdana left fs-13p bsbb bc-gray p-3p br-3p center h-100 w-a ml-5p">${d.availability}</span>
								</div>
								<div class="w-100 h-a p-15p bsbb">
									<table class="w-100">
										<tr>
											<td colspan="2">
												<div class="w-100 h-100 bsbb ">
													<span class="verdana w-a left fs-15p dgray">Price:</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="w-100 h-100 bsbb ">
													<span class="verdana w-a left fs-14p black price 0" id="${d.conditions[0].name}">${adcm(d.conditions[0].newprice)} RWF</span>
												</div>
											</td>
											<td>
												<div class="w-100 h-100 bsbb ">
													<span class=" w-a right button">
														<button type="button" class="w-80p h-100 bsbb p-5p white bc-theme b-none br-5p center-2 hover-2 _311820" id="${d.prodid}">
															<span class="#icon cart-icon h-100 w-30p">
																<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<g clip-path="url(#clip0_6_146)">
																		<path d="M7.82031 9.29688C7.51562 9.29688 7.27344 9.05469 7.27344 8.75C7.27344 8.44531 7.51562 8.20312 7.82031 8.20312C8.125 8.20312 8.36719 8.44531 8.36719 8.75C8.36719 9.05469 8.11719 9.29688 7.82031 9.29688ZM3.44531 9.29688C3.14062 9.29688 2.89844 9.05469 2.89844 8.75C2.89844 8.44531 3.14062 8.20312 3.44531 8.20312C3.75 8.20312 3.99219 8.44531 3.99219 8.75C3.99219 9.05469 3.74219 9.29688 3.44531 9.29688ZM3.35937 7.73438C2.94531 7.73438 2.58594 7.40625 2.53906 6.99219L2.00781 3.25781L1.70312 1.51562C1.67969 1.32812 1.51562 1.17188 1.33594 1.17188H0.9375C0.804687 1.17188 0.703125 1.07031 0.703125 0.9375C0.703125 0.804688 0.804687 0.703125 0.9375 0.703125H1.33594C1.75 0.703125 2.11719 1.03125 2.17187 1.44531L2.47656 3.1875L3.00781 6.92969C3.02344 7.10937 3.1875 7.26562 3.35937 7.26562H8.4375C8.57031 7.26562 8.67187 7.36719 8.67187 7.5C8.67187 7.63281 8.57031 7.73438 8.4375 7.73438H3.35937ZM3.75 6.48438C3.625 6.48438 3.52344 6.39062 3.51562 6.26562C3.50781 6.20312 3.53125 6.14062 3.57031 6.09375C3.60937 6.04688 3.67187 6.01562 3.72656 6.01562L7.96875 5.70312C8.15625 5.70312 8.32031 5.55469 8.34375 5.375L8.83594 2.5625C8.85156 2.42969 8.8125 2.28906 8.73437 2.20312C8.67969 2.14062 8.60937 2.10938 8.52344 2.10938H3.125C2.99219 2.10938 2.89062 2.00781 2.89062 1.875C2.89062 1.74219 2.99219 1.64062 3.125 1.64062H8.53906C8.75781 1.64062 8.95312 1.73438 9.10156 1.89062C9.26562 2.07813 9.34375 2.35156 9.3125 2.625L8.82031 5.4375C8.77344 5.84375 8.40625 6.16406 8 6.16406L3.78125 6.47656C3.76562 6.48438 3.75781 6.48438 3.75 6.48438Z" fill="white"/>
																	</g>
																	<defs>
																		<clipPath id="clip0_6_146">
																			<rect width="10" height="10" fill="white"/>
																		</clipPath>
																	</defs>
																</svg>
															</span>
															<span class="verdana w-a h-100 p-5p bsbb">
																add
															</span>
														</button>
													</span>
												</div>
											</td>
										</tr>
									</table>
								</div>	
							</div>
						</div>
					</div>`;
			})
		}else{
			parent.innerHTML = `<div class="w-100 h-a">
									<div class="center p-10p bsbb w-100 h-100p svg-hol">
										<span class="verdana fs-15p"><svg class="w-100p h-100p" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="removeIconTitle" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ccc"> <title id="removeIconTitle">Remove</title> <path d="M17,12 L7,12"/> <circle cx="12" cy="12" r="10"/> </svg></span>
									</div>
									<div class="center p-10p bsbb w-100 h-100">
										<span class="verdana fs-18p ta-c dgray">it seems like there are <br> no products in your selection</span>
									</div>
								</div>`;
		}
	}else{
		parent.innerHTML = `<div class="w-100 h-a"><div class="center p-10p bsbb w-100 h-100">
											<span class="verdana fs-18p ta-c dgray">oops, an error has occured while trying to connect to the server</span>
									</div></div>`;
	}
}
export function sdisc(aa){
	if ( aa.length > 0) {
		diccont.innerHTML = null;
		
		aa.forEach(d=>{
			diccont.innerHTML+=`<div class="product w-370p h-450p bc-white br-5p ovh ml-10p mr-10p mb-15p mt-15p bmb-10p-resp bfull-resp iblock b-1-s-gray">
			<div class="w-100 h-250p">
				<div class="image p-10p bsbb w-100 h-100  br-5p">
					<span class="w-100 h-100">
						<img src="${geturl()}/product-imgz/${d.pimgs[0]}" class="w-100 h-100 contain">
					</span>
				</div>
				<div class="w-100 h-180p">
					<div class="title w-100 h-30p p-5p bsbb">
					<a href="${geturl()}/product?id=${d.prodid}" class="td-none ls-n black"><span class="verdana left fs-16p p-5p bsbb black">${d.pname}</span></a>
					</div>
					<div class="cats w-100 pl-15p h-30p bsbb ovh">
					<span class="verdana left fs-13p bsbb dgray wrap">in <a href="${geturl()}/browse/?category=${d.catname}" class="td-none ls-n"><font class="theme">${d.catname}</font></a> , <a href="${geturl()}/browse/?subcategory=${d.subcatname}" class="td-none ls-n"><font class="theme">${d.subcatname}</font></a> , <a href="${geturl()}/browse/?brand=${d.brandname}" class="td-none ls-n"><font class="theme">${d.brandname}</font></a> , <a href="${geturl()}/browse/?serie=${d.famname}" class="td-none ls-n"><font class="theme">${d.famname}</font></a> , <a href="${geturl()}/browse/?usedin=${d.usedinname}" class="td-none ls-n"><font class="theme">${d.usedinname}</font></a></span>
					</div>
					<div class="cond w-100 pl-15p h-20p bsbb ovh">
					<span class="verdana left fs-14p bsbb ${cc(d.conditions[0].name)} bc-gray p-3p br-3p center h-100 w-a">${d.conditions[0].name}</span>
					<span class="verdana left fs-13p bsbb bc-gray p-3p br-3p center h-100 w-a ml-5p">${d.availability}</span>
					</div>
					<div class="w-100 h-a p-15p bsbb">
						<table class="w-100" >
							<tr>
								<td colspan="2">
									<div class="w-100 h-100 bsbb ">
										<span class="verdana w-a left fs-15p dgray">Price:</span>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="w-100 h-100 bsbb ">
										<span class="verdana w-a left fs-15p black red"><del>${adcm(d.conditions[0].price)} frw</del></span>
									</div>
								</td>
								<td rowspan="2">
									<div class="w-100 h-100 bsbb ">
										<span class=" w-a right button">
										<button type="button" class="w-80p h-100 bsbb p-5p white bc-theme b-none br-5p center-2 hover-2 _311820" id="${d.prodid}">
												<span class="#icon cart-icon h-100 w-30p">
													<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clip-path="url(#clip0_6_146)">
															<path d="M7.82031 9.29688C7.51562 9.29688 7.27344 9.05469 7.27344 8.75C7.27344 8.44531 7.51562 8.20312 7.82031 8.20312C8.125 8.20312 8.36719 8.44531 8.36719 8.75C8.36719 9.05469 8.11719 9.29688 7.82031 9.29688ZM3.44531 9.29688C3.14062 9.29688 2.89844 9.05469 2.89844 8.75C2.89844 8.44531 3.14062 8.20312 3.44531 8.20312C3.75 8.20312 3.99219 8.44531 3.99219 8.75C3.99219 9.05469 3.74219 9.29688 3.44531 9.29688ZM3.35937 7.73438C2.94531 7.73438 2.58594 7.40625 2.53906 6.99219L2.00781 3.25781L1.70312 1.51562C1.67969 1.32812 1.51562 1.17188 1.33594 1.17188H0.9375C0.804687 1.17188 0.703125 1.07031 0.703125 0.9375C0.703125 0.804688 0.804687 0.703125 0.9375 0.703125H1.33594C1.75 0.703125 2.11719 1.03125 2.17187 1.44531L2.47656 3.1875L3.00781 6.92969C3.02344 7.10937 3.1875 7.26562 3.35937 7.26562H8.4375C8.57031 7.26562 8.67187 7.36719 8.67187 7.5C8.67187 7.63281 8.57031 7.73438 8.4375 7.73438H3.35937ZM3.75 6.48438C3.625 6.48438 3.52344 6.39062 3.51562 6.26562C3.50781 6.20312 3.53125 6.14062 3.57031 6.09375C3.60937 6.04688 3.67187 6.01562 3.72656 6.01562L7.96875 5.70312C8.15625 5.70312 8.32031 5.55469 8.34375 5.375L8.83594 2.5625C8.85156 2.42969 8.8125 2.28906 8.73437 2.20312C8.67969 2.14062 8.60937 2.10938 8.52344 2.10938H3.125C2.99219 2.10938 2.89062 2.00781 2.89062 1.875C2.89062 1.74219 2.99219 1.64062 3.125 1.64062H8.53906C8.75781 1.64062 8.95312 1.73438 9.10156 1.89062C9.26562 2.07813 9.34375 2.35156 9.3125 2.625L8.82031 5.4375C8.77344 5.84375 8.40625 6.16406 8 6.16406L3.78125 6.47656C3.76562 6.48438 3.75781 6.48438 3.75 6.48438Z" fill="white"/>
														</g>
														<defs>
															<clipPath id="clip0_6_146">
																<rect width="10" height="10" fill="white"/>
															</clipPath>
														</defs>
													</svg>
												</span>
												<span class="verdana w-a h-100 p-5p bsbb">
													add
												</span>
											</button>
										</span>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="w-100 h-100 bsbb ">
									<span class="verdana w-a left fs-14p black price ${d.conditions.indexOf(d.conditions[0])}" id="${d.conditions.indexOf(d.conditions[0])}">${adcm(d.conditions[0].newprice)} RWF</span>
									</div>
								</td>
							</tr>
						</table>
					</div>	
				</div>
			</div>
		</div>`;
		})
	}else{
		diccont.innerHTML = `<div class="w-100 h-a">
								<div class="center p-10p bsbb w-100 h-100p svg-hol">
									<span class="verdana fs-15p"><svg class="w-100p h-100p" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="removeIconTitle" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ccc"> <title id="removeIconTitle">Remove</title> <path d="M17,12 L7,12"/> <circle cx="12" cy="12" r="10"/> </svg></span>
								</div>
								<div class="center p-10p bsbb w-100 h-100">
									<span class="verdana fs-18p ta-c dgray">it seems like there are <br> no discounted products for now but give it a try as soon as possible!</span>
								</div>
							</div>`;
	}
}
let _311820 = document.querySelectorAll('button._311820')
_311820.forEach(button => {
	button.addEventListener('click',e=>{
		let x = parseInt(button.parentNode.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList[6])
		let y = button.parentNode.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].id
		e.preventDefault()
		let b = dcrtmgc(button,aa,x,y)
		checkCart()
	})
});

function s(cats) {
	ctscont.innerHTML = null
	cats.forEach(subcat=>{
		ctscont.innerHTML+= `<a href="${geturl()}/browse/?subcategory=${subcat.name}" class="td-none ls-n black">
								<div class="cat w-200p h-100 p-5p bsbb iblock m-10p b-1-s-gray br-5p">
									<div class="the-img center mb-10p p-5p bsbb">
										<div class="img w-100p h-100p  br-50">
											<img src="images/${subcat.image}" class="w-100 h-100 contain">
										</div>
									</div>
									<div class="the-desc bsbb">
										<div class="desc w-100 h-a ">
											<div class="w-100 h-30p center-2">
												
													<span class="w-100 center-2 verdana fs-16p hover-6 capitalize">${subcat.name}</span>
												
											</div>
										</div>
									</div>
								</div>
						    </a>`
	})
}
function brnd(brands) {
	localStorage.setItem('next',geturl())
	brndscont.innerHTML = null
	brndscont.classList.replace('scroll-3','no-scroll')
	brndscont.classList.add("smooth")
	brands.forEach(brand=>{
		brndscont.innerHTML+= `<a href="${geturl()}/browse/?brand=${brand.name}" class="td-none ls-n black hover-6">
								<div class="brand w-250p h-100 p-5p bsbb iblock m-a">
									<div class="the-img center mb-10p">
										<div class="img w-200p h-100p"><img src="${geturl()}/brands/${brand.image}" alt="${brand.name}" class="w-100 h-100 contain"></div>
									</div>
								</div>
						    </a>`
	})
	inttbrnssfunc();
}
function inttbrnssfunc() {
	// let i = 100
	// let psp = 0
	// brndscont.scrollLeft+=i;
	// let f = setInterval(() => {
	// 	console.log(psp,brndscont.scrollLeft)
	// 	if (psp < brndscont.scrollLeft) {
	// 		brndscont.scrollLeft+=i;
	// 	} if(psp == brndscont.scrollLeft){
	// 		clearInterval(f)
	// 		l()

	// 	}
	// 	psp = brndscont.scrollLeft

	// }, 400);
	// let l = ()=>setInterval(() => {
	// 	brndscont.scrollLeft-=i;
	// 	if(psp == brndscont.scrollLeft){
	// 		clearInterval(l())
	// 		console.log('psp,brndscont.scrollLeft')

	// 		// setInterval(l)

	// 	}
	// 	console.log(psp,brndscont.scrollLeft,i)

	// 	psp = brndscont.scrollLeft
	// }, 400);
}
