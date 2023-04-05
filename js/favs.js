import { getParam, getdata,request,postschema,getschema,addshade,shuffleArray,closetab } from "./functions.js";
import{ a441618154 } from './prods.js'
let q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m;
j = document.querySelector('div.fav-c')
f = getdata('favs');
if (f) {
    p = postschema
    p.body = JSON.stringify({cntn: f})
    r = await request('getprodswthorcndtn',p);
    if (r.success) {
        a441618154(r,j)
    }else{
        console.log(r)
    }
}else{
    s = addshade();
    s.removeChild(s.firstChild)
    c = document.createElement('div')
    c.className = `w-80 h-80 bc-white cntr br-5p card-6 b-mgc-resp`
    s.appendChild(c)
    c.innerHTML = `<div class="w-100 h-100p p-5p bsbb the-h">
                        <div class="w-100 h-100 center p-40p bsbb">
                            <span class="dgray helvetica fs-15p">
                                Allow us to know,
                            </span>
                            <span class="verdana helvetica fs-30p">What turns you on ?</span>
                        </div>
                    </div>
                    <div class="theb w-100 h-70 ovys p-10p bsbb">
                    </div>
                    <div clas="w-100 h-60p bsbb bc-white">
                    <div class="w-100 h-100 center-2 p-5p bsbb">
                        <span class="verdana helvetica h-100 w-100 block pr-20p bsbb">
                            <button class="w-a h-a bc-gray br-2p b-none p-10p hover-2 right">
                                <span class="helvetica white fs-16p">Get started</span>
                            </button>
                        </span>
                    </div>
                    </div>
                    `
    t = c.querySelector('div.theb')
    for(i = 0; i<= 15; i++){
        t.innerHTML+=` <div class="cat w-200p h-a p-5p bsbb iblock m-10p b-1-s-gray br-5p bfull-resp bm-a-resp bmb-20p-resp">
        <div class="the-img center mb-10p p-5p bsbb">
            <div class="img w-100p h-100p  br-50 bc-dgray">
            </div>
        </div>
        <div class="the-desc bsbb">
            <div class="desc w-100 h-a ">
                <div class="w-100 h-60p center-2">
                        <span class="w-50 center-2 verdana block h-10p fs-16p hover-6 capitalize bc-gray br-2p"></span>  
                </div>
            </div>
        </div>
    </div>`
    }
    g = getschema
    z = await request('getcategories',g);
    a = await request('getcats',g);
    if (z.success & a.success) {
        z = z.message
        z.forEach(category=>{
            Object.assign(z[z.indexOf(category)],{type: 'category'});
        })
        a = a.message
        a.forEach(subcat => {
            Object.assign(subcat,{type: 'subcategory'})
            z.push(subcat);
        });
        z = shuffleArray(z)
        t.innerHTML = null
        for (const category of z) {
            t.innerHTML+=`
                <div class="cat w-200p h-a p-5p hover-2 bsbb iblock m-10p b-1-s-gray br-5p bfull-resp bm-a-resp bmb-20p-resp" id='${z.indexOf(category)}' title="${category.type}">
                    <div class="the-img center mb-10p p-5p bsbb">
                        <div class="img w-100p h-100p  br-50">
                            <img src="images/${category.image}" class="w-100 h-100 contain">
                        </div>
                    </div>
                    <div class="the-desc bsbb">
                        <div class="desc w-100 h-a ">
                            <div class="w-100 h-60p center-2">
                                <div></div>
                                    <span class="w-100 center-2 verdana fs-16p hover-6 capitalize">${category.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>`
        }
        m = Array.from(t.querySelectorAll('div.cat'))
        b = c.querySelector('button');
        d = []
        m.forEach(cat=>{
            cat.addEventListener('click',()=>{
                if(cat.classList.contains('b-1-s-gray')){
                    t = cat.id
                    v = z[t]
                    if (v) {
                        v = {[v.type] : v.name}
                        d.push(v)
                        if (d.length > 4) {
                            b.classList.replace('bc-gray','bc-theme');
                        }
                        cat.classList.replace('b-1-s-gray','b-1-s-theme')
                    }
                }else{
                    t = cat.id
                    v = z[t]
                    if (v) {
                        v = {[v.type] : v.name}
                        p = d.indexOf(v)
                        d.splice(p,1);
                        if (d.length <= 4) {
                            b.classList.replace('bc-theme','bc-gray');
                        }
                        cat.classList.replace('b-1-s-theme','b-1-s-gray')
                    }
                }
            })
        })
        v = document.querySelector('div#body');
        n = document.querySelector('div.navigation'); 
        m = document.querySelector('div.sidenav');  
        q = new Array(v,n,m)
        b.addEventListener('click',async(e)=>{
            e.preventDefault();
            if (d.length > 4) {
                localStorage.setItem('favs',JSON.stringify(d))
                q.forEach(el=>{
                    if (el != null) {
                      el.classList.remove('blur')
                    }
                })
                closetab(s,s.parentNode)
                f = getdata('favs');
                if (f) {
                    p = postschema
                    p.body = JSON.stringify({cntn: f})

                    r = await request('getprodswthorcndtn',p);
                    if (r.success) {
                        a441618154(r,j)
                    }
                }
            }
        })
    }
}