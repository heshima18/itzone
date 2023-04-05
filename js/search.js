import { request,geturl,cc,adcm } from "./functions.js";
let q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m
let catscont = document.querySelector('div.cats')
let prodscont = document.querySelector('div.prods')
try {
    i = new URL(window.location.href)
    q = i.searchParams.get("q")
    v = {
        mode: 'cors',
        method: "POST",
        body: JSON.stringify({needle: q}),
        headers: {
          "content-type": "application/json",
          'accept': '*/*'
    
        }
      } 
    if(q.length > 0) {
        r = await request(`search?b=${q}`,v);
        if(r.success) showprods(r.message);
    }
} catch (error) {
    console.error(error)
}

function showprods(aa) {
    let ctitle = catscont.querySelector('div.title')
    let ptitle = prodscont.querySelector('div.title')
    let prodsbody = prodscont.querySelector('div.prodsbody')
    let catsbody = catscont.querySelector('div.catsbody')
    catsbody.innerHTML = null
    prodsbody.innerHTML = null

    ctitle.innerHTML = `<div class="w-100 h-a p-5p bsbb ">
        <span class="w-100 h-100 left block black verdana capitalize fs-20p">categories & others</span>
    </div>`
    ptitle.innerHTML = `<div class="w-100 h-a p-5p bsbb ">
        <span class="w-100 h-100 left block black verdana capitalize fs-20p">products</span>
    </div>`

    console.log(aa)
    aa.categories.forEach(cat=>{
        l = document.createElement('div');
        l.className = 'w-100 h-a p-5p bsbb mb-20p';
        l.innerHTML = `<div class="w-100 h-100 flex">
                        <div class="the-thumb w-80p h-80p p-5p bsbb iblock">
                            <div class="w-100 h-100 br-50 center">
                                <img class="w-100 h-100 contain " src="${geturl()}/images/${cat.image}">
                            </div>
                        </div>
                        <div class="the-desc w-60 h-50p mt-5p  p-5p bsbb iblock ml-10p" >
                          <div class="w-80 h-15p br-5p mt-10p"><a href="${geturl()}/browse/?category=${cat.name}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-18p capitalize nowrap'>${cat.name}</span></a></div>
                          <div class="w-60 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>in categories</span></div>
                        </div>
                      </div> `
        catsbody.appendChild(l)
      })
      aa.brands.forEach(brand=>{
        l = document.createElement('div');
        l.className = 'w-100 h-a p-5p bsbb mb-20p';
        l.innerHTML = `<div class="w-100 h-100 flex">
                        <div class="the-thumb w-80p h-80p p-5p bsbb iblock">
                          <div class="w-100 h-100 br-50 center">
                            <img class="w-100 h-100 contain " src="${geturl()}/brands/${brand.image}">
                          </div>
                        </div>
                        <div class="the-desc w-60 h-50p p-5p mt-10p ml-10p bsbb  iblock">
                        <div class="w-80 h-15p "><a href="${geturl()}/browse/?brand=${brand.name}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-18p capitalize'>${brand.name}</span></a></div>
                        <div class="w-60 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>in brands</span></div>
                        </div>
                      </div> `
        catsbody.appendChild(l)
      })
      aa.series.forEach(serie=>{
        l = document.createElement('div');
        l.className = 'w-100 h-a p-5p bsbb mb-20p';
        l.innerHTML = `<div class="w-100 h-100 flex">
                        <div class="the-thumb w-80p h-80p p-5p bsbb iblock">
                            <div class="w-100 h-100 br-50 center">
                                <img class="w-100 h-100 contain " src="${geturl()}/images/${serie.image}">
                            </div>
                        </div>
                        <div class="the-desc w-60 h-50p mt-5p  p-5p bsbb m-5p iblock mt-10p">
                        <div class="w-100 h-15p br-5p mt-10p"><a href="${geturl()}/browse/?serie=${serie.famname}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-18p capitalize nowrap'>${serie.famname}</span></a></div>
                        <div class="w-100 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>a serie from <font class="theme hover-2"><a href="${geturl()}/browse/?brand=${serie.brandname}" class="td-none theme ls-n">${serie.brandname}</a></font> brand</span></div>
                        </div>
                      </div> `
        catsbody.appendChild(l)
      })
      aa.subcategories.forEach(subcat=>{
        l = document.createElement('div');
        l.className = 'w-100 h-a p-5p bsbb mb-20p';
        l.innerHTML = `<div class="w-100 h-100 flex">
                        <div class="the-thumb w-80p h-80p p-5p bsbb iblock">
                            <div class="w-100 h-100 br-50 center">
                                <img class="w-100 h-100 contain " src="${geturl()}/images/${subcat.image}">
                            </div>
                        </div>
                        <div class="the-desc w-60 h-50p ml-20p  p-5p bsbb iblock mt-5p">
                        <div class="w-100 h-15p br-5 mt-10p"><a href="${geturl()}/browse/?subcategory=${subcat.name}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-18p capitalize nowrap'>${subcat.name}</span></a></div>
                        <div class="w-100 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>a subcategory from <font class="theme hover-2"><a href="${geturl()}/browse/?category=${subcat.catname}" class="td-none theme ls-n">${subcat.catname}</a></font></span></div>
                        </div>
                      </div> `
        catsbody.appendChild(l)
      })
      if (aa.categories.length == 0 && aa.subcategories.length == 0 && aa.brands.length == 0 && aa.series.length == 0) {
        l = document.createElement('div');
        l.className = 'w-100 h-a p-5p bsbb';
        l.innerHTML = `<div class="w-100 h-100 flex">
                        <div class="the-desc w-100 h-100p p-5p bsbb m-5p iblock">
                          <div class="w-100 h-100 br-5  m-5p center">
                            <span class='w-100 h-100 verdana  fs-18p dgray center'>no brands or categories found</span>
                          </div>
                        </div>
                      </div> `
        catsbody.appendChild(l)
      }
      aa.prods.forEach(prod=>{
        l = document.createElement('div');
        l.className = 'w-100';
        l.innerHTML = `<div class="w-100 h-100 flex p-10p bsbb ${(aa.prods.indexOf(prod) != (aa.prods.length-1))? 'bb-1-s-g':''}">
                        <div class="the-thumb w-100p h-100p m-5p iblock">
                          <div class="w-100 h-100 br-10p bc-gray">
                            <img src="" class="w-100 h-100 contain">
                          </div>
                        </div>
                        <div class="the-desc w-80 h-100 p-5p bsbb m-5p iblock">
                            <div class="w-100 h-15p">
                                <a href="${geturl()}/product/?id=${prod.prodid}" class="td-none black ls-n">
                                    <span class='w-100 h-100 verdana  fs-16p'>${prod.pname}</span> 
                                </a>
                            </div>
                            <div class="w-100 h-a br-5 m-5p">
                                <span class='w-100 h-100 verdana dgray  fs-12p'>
                                    in <a href="${geturl()}/browse/?category=${prod.catname}" class="td-none black ls-n">
                                        <font class="theme hover-2">${prod.catname}</font>
                                    </a> , 
                                    <a href="${geturl()}/browse/?subcategory=${prod.subcatname}" class="td-none black ls-n">
                                        <font class="theme hover-2">${prod.subcatname}</font>
                                    </a>, 
                                    <a href="${geturl()}/browse/?brand=${prod.brandname}" class="td-none black ls-n"><font class="theme hover-2">${prod.brandname}</font></a>, <a href="${geturl()}/browse/?usedin=${prod.usedinname}" class="td-none black ls-n"><font class="theme hover-2">${prod.usedinname}</font></a>, <a href="${geturl()}/browse/?serie=${prod.famname}" class="td-none black ls-n"><font class="theme hover-2">${prod.famname}</font></a>
                                    </span>
                            </div>
                            <div class="w-100 h-100 p-10p bsbb condshol"></div>
                        </div>
                      </div> `
                    prodsbody.appendChild(l)
                    i = l.querySelector('div.condshol')
                    d = document.createElement('div')
                    d.className = 'w-100 h-a p-10p bp-0-resp bsbb'
                    d.innerHTML = `<div class=" left m-5p bsbb w-100"><span class="verdana left m-5p  fs-18p bsbb center-2 pt-2p pb-4p  h-100"><span class="fs-13p pr-10p pt-2p"></span><span class="condprice" id="">${adcm(prod.conditions[0][Object.keys(prod.conditions[0])[0]].newprice)}</span> <span class="fs-11p pl-10p pt-2p dgray">RWF</span></span></div>`
                    prod.conditions.forEach(cond=>{
                        Object.keys(cond).forEach(ccc=>{
                            i.innerHTML +=`<span class="conds hover-2 verdana left m-5p  fs-14p bsbb ${cc(ccc)} bc-gray pr-15p pl-15p br-3p center pt-2p pb-4p w-a" id="${prod.conditions.indexOf(cond)}">${ccc}</span>`
                            
                        })
                    })
                    i.appendChild(d)
      })
      if (aa.prods.length == 0) {
        l = document.createElement('div');
        l.className = 'w-100';
        l.innerHTML = `<div class="w-100 h-100 flex">
                        <div class="the-desc w-100 h-100p p-5p bsbb m-5p iblock">
                          <div class="w-100 h-100 br-5  m-5p center">
                            <span class='w-100 h-100 verdana  fs-18p dgray'>no products found</span>
                          </div>
                        </div>
                      </div> `
        k.appendChild(l)
      }


    
}