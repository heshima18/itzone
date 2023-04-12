let q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m
import { getParam, postschema, request,getdata, adcm, geturl,showOrder } from "../../js/functions.js";
import{ initiatewishlist } from '../../js/wishlist.controller.js'
let pages = new Array(0,1,2);
a = getParam('page')
c = Array.from(document.querySelectorAll('span.cpcards'))
p = Array.from(document.querySelectorAll('div.pagecontentsection'))
if(a != null){
	pages.forEach(target=>{
		if (a == target) {
			t = target
            window.history.pushState('','',`?page=${t}`)
            c.forEach((cp)=>{
                cp.classList.remove('active','bb-1-s-theme','bc-tr-theme','theme')
            })
            c[t].classList.add('active','bb-1-s-theme','bc-tr-theme','theme')
            cpgcntn(t)
            return 0
		}
	})
}else{
	window.history.pushState('','','?page=0')
}
c.forEach((cudstp)=>{
    cudstp.addEventListener('click',()=>{
      c.forEach((cp)=>{
        cp.classList.remove('active','bb-1-s-theme','bc-tr-theme','theme')
      })
      cudstp.classList.add('active','bb-1-s-theme','bc-tr-theme','theme')
      cpgcntn(c.indexOf(cudstp))
    })
  })
async  function cpgcntn(step) {
    p.forEach(page=>{
        if(p.indexOf(page) == step){
           page.classList.replace('l-100','l-0')
           page.classList.replace('l--100','l-0')
           window.history.pushState('','',`?page=${step}`)
           gsd(page)
        }else if (p.indexOf(page) > step) {
            page.classList.replace('l--100','l-100')
            page.classList.replace('l-0','l-100')
        }else if (p.indexOf(page) < step) {
            page.classList.replace('l-100','l--100')
            page.classList.replace('l-0','l--100')
        }
    })
  }
  async function gsd(page) {
    x = page.id
    if (x == 'my-orders') {
        k = page.querySelector('div.orders')
        v = postschema
        v.body = JSON.stringify({token: getdata('user')})
        r = await request('myorders',v)
        if (r.message.length <= 0) {
            k.innerHTML = `<div class="w-100 h-a">
            <div class="center p-10p bsbb w-100 h-100p svg-hol">
                <span class="verdana fs-15p"><svg class="w-100p h-100p" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="removeIconTitle" stroke="#ccc" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ccc"> <title id="removeIconTitle">Remove</title> <path d="M17,12 L7,12"/> <circle cx="12" cy="12" r="10"/> </svg></span>
            </div>
            <div class="center p-10p bsbb w-100 h-100">
                <span class="verdana fs-18p ta-c dgray">it seems like there are <br> no orders in your order history</span>
            </div>
        </div>`
           return  0
        }
        k.innerHTML = null
        for (const order of r.message) {
            h = document.createElement('div')
            k.appendChild(h)
            h.className = 'w-100 h-a p-10p bsbb'
            h.innerHTML = `<div class="w-100 h-100 b-1-s-gray br-10p hover-2 ordr" data-wrap="${order.id}">
                            <div class="w-100 h-100 obody flex bblock-resp p-10p bsbb">
                                <div class="imgs-cont w-100p h-100p bfull-resp bcenter-500p-resp p-r">
                                    
                                </div>
                                <div class="odesc w-80 h-100 ml-10p bsbb flex  bblock-resp bfull-resp bm-a-resp ">
                                    <div class="left w-90 h-100 m-0 bfull-resp bmt-10p">
                                        <div class="oidhol w-100 h-30p p-5p bsbb">
                                            <div class="flex">
                                                <span class="w-a h-20p verdana dgray fs-12p pr-10p bsbb capitalize br-5p center">
                                                    order:
                                                </span>
                                                <span class="w-a h-20p verdana theme consolas br-5p">
                                                    #${order.id}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="odeschol w-80 h-a p-5p bsbb bfull-resp ">
                                            <div class="thedesc p-10p bsbb ">
                                                <ul class="flex bblock-resp p-0 m-0">
                                                    <li class="w-100 h-a flex">
                                                        <span class="w-a h-20p verdana dgray fs-10p pr-10p bsbb capitalize br-5p center">
                                                            products:
                                                        </span>
                                                        <span class="w-a h-20p verdana theme consolas br-5p">
                                                            X${order.products.length}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-150p h-100 p-10p bsbb bh-a-resp bfull-resp ">
                                        <div class="w-100 h-100  osthol ">
                                            <div class="w-100 h-a mb-10p center">
                                                <span class="w-a h-20p verdana dgray fs-10p pr-10p bsbb capitalize br-5p center nowrap">
                                                    total price:
                                                </span>
                                                <span class="w-a h-20p fs-13p verdana black consolas br-5p nowrap">
                                                    ${adcm(order.totalprice)} RWF
                                                </span>
                                            </div>
                                            <div class="w-100 h-a mb-10p center-2">
                                                <span class="w-a p-5p courier bold-2 ${coc(order.status)} bsbb h-a ${cobc(order.status)} br-2p fs-12p block">
                                                    ${order.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            i = h.querySelector('div.imgs-cont')
            q = 1
            for (const product of order.products) {

                i.innerHTML+= `<div class="w-60p h-60p br-5p bc-gray b-1-s-gray p-a ml-${q}p bcntr-resp">
                    <img src="${geturl()}/product-imgz/${product.image}" class="cover w-100 h-100">
                </div>`
                q+=5
            }
        }
        let ordr = Array.from(k.querySelectorAll('div.ordr'))
        for (const ord of ordr) {
            ord.addEventListener('click',async()=>{
                l = ord.getAttribute('data-wrap');
                z = postschema
                z.body = JSON.stringify({orderid: l,token: getdata('user')})
                r = await request('getorder',z)
                if (r.success) {
                    showOrder(r.message)
                }
            })
        }
    }else if (x == 'my-account') {
        t = postschema
        t.body = JSON.stringify({token: getdata('user')})
        r = await request('getuser',t)
        // if (!r.success) return 0
        r=r.message
        n = page.querySelector('span.n-img')
        n.textContent = r.firstname.substring(0,1)
        b = page.querySelector('span.name')
        b.innerHTML = r.firstname+'&nbsp;'+r.lastname

    }else{
        initiatewishlist()
    }
  }
  function coc(string) {
    if (string == 'pending') {
        return 'green'
    }else if (string == 'delivered') {
        return 'theme'
    }else if (string == 'new') {
        return 'dgray'
    }
  }
  function cobc(string) {
    if (string == 'pending') {
        return 'bc-tr-green'
    }else if (string == 'delivered') {
        return 'bc-tr-theme'
    }else if (string == 'new') {
        return 'bc-gray'
    }
  }
//   window.addEventListener('p',()=>{
    
//   })