
let q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m;
(()=>{
  x = localStorage.getItem('cart');
  if (x == null) {
    localStorage.setItem('cart',null);
  }
})

export function checkCart() {
  var cart_badge = document.querySelector('font.cart-badge');
  var cart_badge_hol = document.querySelector('span.cart-badge-hol');
	a = getdata('cart');
  if(a.length > 0){
		if (cart_badge_hol.classList.contains('hidden')) {
			cart_badge_hol.classList.remove('hidden');
	    cart_badge.innerText = a.length;
		}else{
	    cart_badge.innerText = a.length
    }
  }else{
			cart_badge_hol.classList.add('hidden');
			cart_badge.innerText = a.length;
	}
  return a.length
}
export function showCart(theshade){
   theshade = addshade();
    var cart_cont = document.createElement('div');
    theshade.appendChild(cart_cont);
    var cart_cont_r = document.createElement('div');
    cart_cont.appendChild(cart_cont_r);
    if (window.innerWidth < 560) {
      cart_cont.className = "p-r  w-100 white h-70 p-5p btr-10p card-2 p-a b-0 bsbb bc-white";
    }else{
      cart_cont.className = 'p-r  w-450p white h-500p p-10p br-10p card-2 cntr bsbb bc-white';
      theshade.classList.add("p-10");		
    }
    window.addEventListener('resize', e=> {
      if (window.innerWidth <= 560) {
      theshade.classList.remove("p-10");
      cart_cont.className = "p-r ovh w-100 white h-70 p-5p btr-10p card-2 p-a b-0 bsbb bc-white";	
    }else{
      theshade.classList.add("p-10");
      cart_cont.className = 'p-r  w-450p white h-500p p-10p br-10p card-2 cntr bsbb bc-white';
    }
    });
    cart_cont_r.className = "w-100 h-100 p-5p bsbb";
    var itemshol = document.createElement('div');
    cart_cont_r.appendChild(itemshol);
    itemshol.className = "w-100 bsbb p-5p mt-50p h-85 p-r ovys";
    var items = document.createElement('div');
    itemshol.appendChild(items);
    items.className =''
    cart_cont_r.innerHTML = '<div class="w-100 center h-20p"><div class="w-100p br-5p h-5p bc-dgray "></div></div><div class="title p-r left pb-5p w-100 h-50p bb-1-s-g p-f c_title" bsbb><span class="left c_title w-120p center black verdana igrid h-100"><font class="verdana fs-20p bold capitalize">my&nbsp;cart</font></span></div>';
		cart_cont_r.appendChild(itemshol);
		for (var i  = 0; i <= 5; i++) {
      items.innerHTML += '<div class="hol w-100 h-80p p-r m-5p"><div class="left w-60p h-60p bc-gray skel m-5p iblock skel"></div><div class="info w-250p h-100 iblock"><div class="w-80 h-10p bc-gray m-5p br-5p skel"></div><div class="w-40 h-10p bc-gray skel m-5p br-5p"></div><div class="w-70 h-10p bc-gray m-5p skel br-5p"></div></div></div>';
		}
    animskel()
    a = getdata('cart');

    x = document.querySelector('div.c_title');
    if (a.length == 0) {
      x.innerHTML = '<font class="verdana fs-30p capitalize black">my&nbsp;cart</font>';
			items.innerHTML = `<div class="center w-100 h-200p"><p  class="center"><font class="gray w-100 fs-50p"><i class="fa fa-exclamation-circle"></i></font></p><p class="center"><font class="dgray w-100 fs-20p verdana">your cart is empty!</font></p><div class="w-100 h-40p center"><button class="br-20p h-100 w-100p bc-theme b-none p-10p bsbb __b hover-2"><font class=" white verdana">Add more</font></button></div></div>`;
			b = document.querySelector('button.__b');
      v = document.querySelector('div#body');
      n = document.querySelector('div.navigation'); 
      s = document.querySelector('div.sidenav');  
      a = new Array(v,n,s)
      
			b.addEventListener('click', e=>{
				e.preventDefault();
        a.forEach(el=>{
          if (el != null) {
            el.classList.remove('blur')
          }
        })
				closetab(theshade,theshade.parentNode);
			});
		}else{
      shwcrtcntn(a,x,items)
   	}
}
function shwcrtcntn(a,x,items) {
  if (a.length == 0) {
    x.innerHTML = '<font class="verdana fs-30p capitalize black">my&nbsp;cart</font>';
    items.innerHTML = `<div class="center w-100 h-200p"><p  class="center"><font class="gray w-100 fs-50p"><i class="fa fa-exclamation-circle"></i></font></p><p class="center"><font class="dgray w-100 fs-20p verdana">your cart is empty!</font></p><div class="w-100 h-40p center"><button class="br-20p h-100 w-100p bc-theme b-none p-10p bsbb __b hover-2"><font class=" white verdana">Add more</font></button></div></div>`;
    return 0;
  }
  p = ()=>{
    z = 0
    a.forEach(pr=>{
      z+= pr.price
    })
    return z
  }
  x.innerHTML = `<span class="shol left w-a center igrid h-100 ml-10p"><div class="w-100 h-100"><font class="black capitalize verdana left w-50p igrid">total:&nbsp;</font><font class="theme verdana fs-15p capitalize igrid p-2p">${adcm(p())} rwf</font></div></span><span class="igrid right center h-100 mr-10p"><a href="${geturl()}/checkout/?" class="td-none ls-none ls-n td-none"><button class="button bc-theme white br-2p pb-5p verdana b-none p-5p bsbb"><font class="fs-15p">Check out</font></button></a></span>`;
  items.innerHTML = "";
   a.forEach(d=>{
    items.innerHTML += `<div class="w-100 h-80p p-r mt-5p bb-1-s-g">
    <table class="w-100 bsbb">
      <tr>
        <td rowspan="2">
          <div class="left w-60p h-60p bc-gray skel iblock">
            <span class="w-100 h-100 p-r">
              <img src="${geturl()}/product-imgz/${d.image}" class="w-100 h-100 cover">
            </span>
          </div>
        </td>
        <td class="w-a">
          <div class="w-100 h-25p bc-white bsbb">
            <span class="w-100 h-100 p-4p bc-white w-100 __16141134">
              <a href="${geturl()}/product/?id=${d.prodid}" class="td-none ls-n">
                <font class="fs-16p black poppsins capitalize verdana hover-2 _16141134"  title="${d.pname}">
                  ${d.pname}
                </font>	
              </a>
            </span>
          </div>
        </td>
        <td>
          <div class="w-80  h-25p bc-white">
            <span class="w-100 h-100 p-4p bc-white right">
              <font class="fs-16p black verdana capitalize">
              ${adcm(d.price)}&nbsp;rwf
              </font>	
            </span>
          </div>
        </td>

      </tr>
      <tr>
        <td>
          <div class="h-25p bc-white mt--2p p-0 p-r igrid">
            <span class="w-100 h-100">
              <div class="inhol w-100 h-a p-5p">
                <div class="left br-1p h-20p w-20p center igrid b-1-s-gray">
                  <span class="w-100 h-100 center">
                    <span class="center fs-16p us-none minus hover-2 black consolas" id="'.$result[0]['id'].'">
                      -
                    </span>
                  </span>
                </div>
                <div class=" left center br-1p h-20p w-20p igrid b-1-s-gray">
                  <span class="w-100 h-100 center">
                    <span class="center fs-16p us-none quantity black consolas" id="${d.prodid}">${d.qty}</span>
                  </span>
                </div>
                <div class=" br-1p h-20p w-20p center igrid b-1-s-gray">
                  <span class="w-100 h-100 center">
                    <span class="center fs-16p us-none plus hover-2 black consolas" id="'.$result[0]['id'].'">
                      +
                    </span>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div class=" h-25p bc-white right igrid">
            <span class="w-100 h-100 p-4p bc-white w-100">
              <font class="fs-14p ${cc(d.condition)} verdana capitalize p-5p bc-tr-theme br-2p">
              ${d.condition}
              </font>	
            </span>
          </div>
        </td>
        <td>
          <div class="w-100 h-100 bc-white p-5p center bsbb">
            <span class="center w-100 h-100 bc-white">
              <font class="center removeb red verdana hover-2" id="${d.prodid}">
                &times;&nbsp;remove
              </font>
            </span>
          </div>
        </td>
      </tr>
    </table>
  </div>`;
  });
  var removeb = Array.from(document.querySelectorAll('font.removeb'));
  removeb.forEach(xc=>{
    xc.addEventListener('click',e=>{
      e.preventDefault();
      l =  removecartitem(xc.id,items);
      shwcrtcntn(l,x,items)
      checkCart()
    })
  })
}
export async function request(url,options){
  try {
    z = await fetch('https://itzoneshop.onrender.com/api/'+url,options);
    y = await z.json();
    return y;
  } catch (error) {
    // alertMessage(error);
    return {success:false,message:'an error occured'}
  }
  


}
export function addshade(){
  v = document.querySelector('div#body');
  n = document.querySelector('div.navigation'); 
  s = document.querySelector('div.sidenav');  
  a = new Array(v,n,s)
  a.forEach(el=>{
    if (el != null) {
      el.classList.add('tr-0-4')
      el.classList.add('blur')
    }
  })
  let thebody = document.querySelector('div.cont'); 
  var shaddow = document.createElement('div');
  thebody.appendChild(shaddow);
  shaddow.className = "w-100 h-100 ovh p-f bsbb bc-tblack t-0 zi-10000 blur-bc";	
  var close = document.createElement('div');
  close.className = "p-a t-0 r-0 w-50p h-50p m-20p center ovh";
  close.innerHTML = `<span class='w-100 h-100 white p-10p bsbb center '><font class='fs-50p white w-100 p-r hover-2'><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><line fill="none" stroke="#fff" stroke-width="2" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"/></g><g><line fill="none" stroke="#fff" stroke-width="2" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"/></g></svg></font></span>`;
  shaddow.appendChild(close)
  close.addEventListener('click',e=>{
	  e.preventDefault();
    a = new Array(v,n,s)
    a.forEach(el=>{
      if (el != null) {
        el.classList.remove('blur')
      }
    })
		closetab(shaddow,thebody);
	});
  document.body.classList.add('ovh');
  return shaddow;
}
export function closetab(element,parent){
  try {
    parent.removeChild(element); 
    document.body.classList.remove('ovh')
  } catch (error) {
    
  }
}
export function getdata(item){
  return JSON.parse(localStorage.getItem(item));
}
export function alertMessage(message){
  q =  addshade();
  a = document.createElement('div')
  q.appendChild(a)
  a.className = "w-300p h-200p p-20p bsbb bc-white cntr zi-10000 br-5p" 
  a.innerHTML = `<div class="head w-100 h-40p p-5p bsbb bb-1-s-dg"><span class="fs-18p black capitalize igrid center h-100 verdana">message</span></div><div class="body w-100 h-a p-5p grid center mt-10p"><span class="fs-15p dgray capitalize left verdana">${message}</span></div>`;
}
export function showsidemenu(){
  f = document.querySelector('div.sidenav');
  g = document.querySelector('div.theshade');
  v = document.querySelector('div#body');
  g.innerHTML = null
  if (f.classList.contains('ml--100')) {
    v.classList.add('blur');
    v.classList.add('tr-0-4');
    // f.classList.remove('hidden');
    f.classList.remove('ml--100');
    f.classList.add('ml-0');
    g.classList.remove('hidden');
    g.classList.add('ml-0');
    document.body.classList.add('ovh')
    
  } else {
    // f.classList.add('hidden');
    v.classList.remove('tr-0-4');

    v.classList.remove('blur');
    f.classList.add('ml--100');
    f.classList.remove('ml-0');
    g.classList.add('hidden');
    g.classList.remove('ml-0');
    document.body.classList.remove('ovh')
    g.innerHTML = null;

  }
}
export function searchFunc(input){
  x = input.parentNode.childNodes[1];
  if (input.value.trim().length > 0) {
    x.classList.add('ml-88');
    viewrecs(input.value,input);
    document.body.classList.add('ovh')


  }else{
    g = document.querySelector('div.theshade');
    g.classList.add('hidden');
    x.classList.remove('ml-88');
    document.body.classList.remove('ovh')

    g.innerHTML = null
  }
}
export async function viewrecs(s,ele){
  g = document.querySelector('div.theshade');
  g.classList.remove('hidden');
  if (g.innerHTML == ""){
   d =  showsskle(g);
  }
  let v = {
    mode: 'cors',
    method: "POST",
    body: JSON.stringify({needle: s}),
    headers: {
      "content-type": "application/json",
      'accept': '*/*'

    }
  } 
  r = await request(`search`,v);
  if (r.success) {
    showrecs(d,r);
  }
}
export function showrecs(cont,resp) {
  g = cont.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
  p = cont.childNodes[0].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1]
  b = cont.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1]
  k = cont.childNodes[0].childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1]
  t = Array(g,p);
  h = Array(b,k);
  b.classList.remove('pl-20p')
  t.forEach(ttl=>{
    ttl.classList.remove('w-200p')
    ttl.classList.add('w-100')
    ttl.classList.remove('h-10p')
    ttl.classList.add('h-40p')
    ttl.classList.remove('m-5p')
    ttl.classList.remove('bc-gray')
    ttl.classList.remove('skel')
    setInterval(()=>{ttl.classList.remove('anim')},100)
    t[0].innerHTML = "<span class='w-100 h-100 verdana  fs-16p'>categories & brands</span>"
    t[1].innerHTML = "<span class='w-100 h-100 verdana  fs-16p'>products</span>"
  })
  h.forEach(bdy=>{
    bdy.classList.replace('pl-20p','p-0')
    bdy.classList.replace('pl-10p','p-0')

    bdy.innerHTML = null;
  })
  resp.message.categories.forEach(cat=>{
    l = document.createElement('li');
    l.className = 'w-100';
    l.innerHTML = `<div class="w-100 h-100 flex">
                    <div class="the-thumb w-50p h-50p m-5p iblock">
                      <div class="w-50p h-50p br-50 m-5p">
                        <img src="${geturl()}/images/${cat.image}" class="w-100 h-100 contain">
                      </div>
                    </div>
                    <div class="the-desc w-60 h-50p p-5p mt-5p bsbb iblock">
                      <div class="w-80 h-15p br-5  m-5p"><a href="${geturl()}/browse/?category=${cat.name}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-15p'>${cat.name}</span></a></div>
                      <div class="w-60 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>in categories</span></div>
                    </div>
                  </div> `
    b.appendChild(l)
  })
  resp.message.brands.forEach(brand=>{
    l = document.createElement('li');
    l.className = 'w-100';
    l.innerHTML = `<div class="w-100 h-100 flex">
                    <div class="the-thumb w-50p h-50p m-5p iblock">
                      <div class="w-50p h-50p br-50  m-5p">
                        <img src="${geturl()}/brands/${brand.image}" class="w-100 h-100 contain">
                      </div>
                    </div>
                    <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-80 h-15p br-5  m-5p"><a href="${geturl()}/browse/?brand=${brand.name}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-15p'>${brand.name}</span></a></div>
                    <div class="w-60 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>in brands</span></div>
                    </div>
                  </div> `
    b.appendChild(l)
  })
  resp.message.series.forEach(serie=>{
    l = document.createElement('li');
    l.className = 'w-100';
    l.innerHTML = `<div class="w-100 h-100 flex">
                    <div class="the-thumb w-50p h-50p m-5p iblock">
                      <div class="w-50p h-50p br-50 m-5p">
                      <img src="${geturl()}/images/${serie.image}" class="w-100 h-100 contain">
                      </div>
                    </div>
                    <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-100 h-15p br-5  m-5p"><a href="${geturl()}/browse/?serie=${serie.famname}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-15p'>${serie.famname}</span></a></div>
                    <div class="w-100 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>a serie from <font class="theme hover-2"><a href="${geturl()}/browse/?brand=${serie.brandname}" class="td-none theme ls-n">${serie.brandname}</a></font> brand</span></div>
                    </div>
                  </div> `
    b.appendChild(l)
  })
  resp.message.subcategories.forEach(subcat=>{
    l = document.createElement('li');
    l.className = 'w-100';
    l.innerHTML = `<div class="w-100 h-100 flex">
                    <div class="the-thumb w-50p h-50p m-5p iblock">
                      <div class="w-50p h-50p br-50 m-5p">
                      <img src="${geturl()}/images/${subcat.image}" class="w-100 h-100 contain">
                      </div>
                    </div>
                    <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-100 h-15p br-5  m-5p"><a href="${geturl()}/browse/?subcategory=${subcat.name}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-15p'>${subcat.name}</span></a></div>
                    <div class="w-100 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>a subcategory from <font class="theme hover-2"><a href="${geturl()}/browse/?category=${subcat.catname}" class="td-none theme ls-n">${subcat.catname}</a></font></span></div>
                    </div>
                  </div> `
    b.appendChild(l)
  })
  if (resp.message.categories.length == 0 && resp.message.subcategories.length == 0 && resp.message.brands.length == 0 && resp.message.series.length == 0) {
    l = document.createElement('li');
    l.className = 'w-100';
    l.innerHTML = `<div class="w-100 h-100 flex">
                    <div class="the-desc w-100 h-100p p-5p bsbb m-5p iblock">
                      <div class="w-100 h-100 br-5  m-5p center">
                        <span class='w-100 h-100 verdana  fs-18p dgray center'>no brands or categories found</span>
                      </div>
                    </div>
                  </div> `
    b.appendChild(l)
  }
  resp.message.prods.forEach(prod=>{
    l = document.createElement('li');
    l.className = 'w-100 pb-10p';
    l.innerHTML = `<div class="w-100 h-100 flex ${(resp.message.prods.indexOf(prod) != (resp.message.prods.length-1))? 'bb-1-s-g':''} pb-10p">
                    <div class="the-thumb w-65p h-65p p-5p bsbb iblock">
                      <div class="w-100 h-100 br-5p">
                        <img src="${geturl()}/product-imgz/${prod.pimgs[0]}" alt="" class="w-100 h-100 b-none contain">
                      </div>
                    </div>
                    <div class="the-desc w-80 h-100 p-5p bsbb iblock">
                    <div class="w-100 h-15p"><a href="${geturl()}/product/?id=${prod.prodid}" class="td-none black ls-n"><span class='w-100 h-100 verdana  fs-15p'>${prod.pname}</span></a></div>
                    <div class="w-100 h-20p br-5 m-5p"><span class='w-100 h-100 verdana dgray  fs-12p'>in <a href="${geturl()}/browse/?category=${prod.catname}" class="td-none black ls-n"><font class="theme hover-2">${prod.catname}</font></a> , <a href="${geturl()}/browse/?subcategory=${prod.subcatname}" class="td-none black ls-n"><font class="theme hover-2">${prod.subcatname}</font></a>, <a href="${geturl()}/browse/?brand=${prod.brandname}" class="td-none black ls-n"><font class="theme hover-2">${prod.brandname}</font></a>, <a href="${geturl()}/browse/?usedin=${prod.usedinname}" class="td-none black ls-n"><font class="theme hover-2">${prod.usedinname}</font></a>, <a href="${geturl()}/browse/?serie=${prod.famname}" class="td-none black ls-n"><font class="theme hover-2">${prod.famname}</font></a></span></div>
                    </div>
                  </div> `
    k.appendChild(l)
  })
  if (resp.message.prods.length == 0) {
    l = document.createElement('li');
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
export function showsskle(g) {
  x = document.createElement('div');
  x.className = "w-80 cntr h-70 bc-white mt-50p br-5p p-10p bsbb zi-1000 b-mgc-resp"
  a = document.createElement('div');
  a.className = "w-100 h-100 p-a";
  a.addEventListener('click',df=>{
    df.preventDefault();
    g.classList.add('hidden');
    document.body.classList.remove('ovh')
    g.innerHTML = null;
  })
  g.appendChild(a)
  g.appendChild(x)
  x.innerHTML=`<div class="w-100 h-100 ovys ovxh">
    <div class="the-series w-100 h-a p-10p bsbb">
      <div class="w-100 h-100 p-10p bsbb">
        <div class="the-parents">
          <div class="the-title p-5p bsbb">
            <div class="w-200p h-10p br-5p bc-gray skel m-5p"></div>
          </div>
          <div class="the-content p-5p bsbb">
            <ul class="ls-none m-0 w-100 bsbb pl-10p">
              <li class="w-100">
                <div class="w-100 h-100">
                  <div class="the-thumb w-50p h-50p m-5p iblock">
                    <div class="w-50p h-50p br-50 bc-gray skel m-5p"></div>
                  </div>
                  <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-80 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-60 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-65 h-5p br-5 bc-gray skel m-5p"></div>
                  </div>
                </div>
              </li>
              <li class="w-100">
                <div class="w-100 h-100">
                  <div class="the-thumb w-50p h-50p m-5p iblock">
                    <div class="w-50p h-50p br-50 bc-gray skel m-5p"></div>
                  </div>
                  <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-80 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-60 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-65 h-5p br-5 bc-gray skel m-5p"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="the-products mt-10p">
          <div class="the-title p-5p bsbb">
            <div class="w-200p h-10p br-5p bc-gray skel m-5p"></div>
          </div>
          <div class="the-content p-5p bsbb">
            <ul class="ls-none m-0 w-100 bsbb pl-20p">
              <li class="w-100">
                <div class="w-100 h-100">
                  <div class="the-thumb w-50p h-50p m-5p iblock">
                    <div class="w-50p h-50p br-10p bc-gray skel m-5p"></div>
                  </div>
                  <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-80 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-60 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-65 h-5p br-5 bc-gray skel m-5p"></div>
                  </div>
                </div>
              </li>
              <li class="w-100">
                <div class="w-100 h-100">
                  <div class="the-thumb w-50p h-50p m-5p iblock">
                    <div class="w-50p h-50p br-10p bc-gray skel m-5p"></div>
                  </div>
                  <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                    <div class="w-80 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-60 h-5p br-5 bc-gray skel m-5p"></div>
                    <div class="w-65 h-5p br-5 bc-gray skel m-5p"></div>
                  </div>
                </div>
              </li>
              <li class="w-100">
              <div class="w-100 h-100">
                <div class="the-thumb w-50p h-50p m-5p iblock">
                  <div class="w-50p h-50p br-10p bc-gray skel m-5p"></div>
                </div>
                <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                  <div class="w-80 h-5p br-5 bc-gray skel m-5p"></div>
                  <div class="w-60 h-5p br-5 bc-gray skel m-5p"></div>
                  <div class="w-65 h-5p br-5 bc-gray skel m-5p"></div>
                </div>
              </div>
            </li>
            <li class="w-100">
              <div class="w-100 h-100">
                <div class="the-thumb w-50p h-50p m-5p iblock">
                  <div class="w-50p h-50p br-10p bc-gray skel m-5p"></div>
                </div>
                <div class="the-desc w-60 h-50p p-5p bsbb m-5p iblock">
                  <div class="w-80 h-5p br-5 bc-gray skel m-5p"></div>
                  <div class="w-60 h-5p br-5 bc-gray skel m-5p"></div>
                  <div class="w-65 h-5p br-5 bc-gray skel m-5p"></div>
                </div>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`
  animskel();
  return x;
}

export function animskel() {
  let skel = Array.from(document.getElementsByClassName('skel'));
  skel = shuffleArray(skel)
  let i=0
  skel.forEach(ele=>{
      setTimeout(()=>{
          ele.classList.add('anim')
      },i)
      i+=100;
  })
}
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export function hide(element) {
	element.classList.add("hidden")
}
export function show(element) {
	element.classList.remove("hidden")
}
export function v_(bscont,pw) {
	if (bscont.parentNode.clientWidth < pw) {
		show(bscont);
	} else {
		hide(bscont);
		
	}
}
export function geturl() {
   i = new URL(window.location.href)
   return i.origin
}
export function dcrtmgc(elem,aa,index,cond) {
	let cart = JSON.parse(localStorage.getItem('cart'))
	let added = false; 
	let f = false
	aa.message.forEach(prod=>{
		if(prod.prodid == elem.id){
			cart.forEach(prodc=>{
				if (prodc.prodid == elem.id) {
					f = true;
					return false;
				}
			})
			if (f == false) {
  
				cart.push({prodid: prod.prodid,pname: prod.pname,condition: cond,price:prod.conditions[index].newprice ,qty: 1,image: prod.pimgs[0]})
				localStorage.setItem('cart',JSON.stringify(cart));
				added = true
        checkCart()
			}else{
				return added
			}
		}
	})
	return added
}

export function adcm(n) {
  try {
    n= Array.from(n.toString()).reverse()
    let s = "";
    let i = 0;
    for(const t of n ){
      if(i % 3 == 0 && i!= 0){
        s+=`p${t}`
      }else{
        s+=t
      }
      i++
    }
    s= Array.from(s).reverse().toString().replace(/,/gi,"")
    s=s.replace(/p/gi,",")
    return (s)
    
  } catch (error) {
    return n
  }
}
export function cc(cond) {
	if (cond == "new") {
		return 'theme'
	}else if(cond == "used"){
		return 'orange'
	}else if (cond == "refubrished") {
		return 'green'
		
	}
}
export function removecartitem(id) {
  a = getdata('cart');
  a.forEach(item=>{
    if (item.prodid == id) {
      a.splice(a.indexOf(item),1)
    }
  })
  localStorage.setItem('cart',JSON.stringify(a));
  return a;

}
export function setFocusFor(input) {
  const rep = input.parentElement;
  rep.classList.remove('error');
  rep.classList.remove('blur');
  rep.classList.add('focus');
  rep.classList.remove('success');
  const small = rep.querySelector('small');
  small.classList.add('hidden');
}
export function setBlurFor(input) {
  const rep = input.parentElement;
  rep.classList.remove('focus');
  rep.classList.remove('error');
  rep.classList.remove('success');
  const small = rep.querySelector('small');
  let _err = rep.querySelector('span').childNodes[1];
  let _succ = rep.querySelector('span').childNodes[3];
   _err.classList.add('hidden');
  _succ.classList.add('hidden');
  small.classList.add('hidden');
}
export function setErrorFor(input,message) {
  try{
    const rep = input.parentElement;
    const small = rep.querySelector('small');
    small.classList.remove('hidden');
    small.innerText = message;
    s = rep.querySelector('span')
    let _err = s.childNodes[1];
    let _succ = s.childNodes[3];
    _err.classList.remove('hidden');
    _succ.classList.add('hidden');
    rep.classList.remove('success');
    rep.classList.add('error');
  }catch(error){
    console.log(error)
  }
  
}
export function setSuccessFor(input) {
  const rep = input.parentElement;
  // rep.classList.remove('focus');
  rep.classList.remove('error');
  rep.classList.add('success');
  let _err = rep.querySelector('span').childNodes[1];
  let _succ = rep.querySelector('span').childNodes[3];
  _err.classList.add('hidden');
  _succ.classList.remove('hidden');
  const small = rep.querySelector('small');
  small.classList.add('hidden');
}
export async function validateForm(form,inputs,formdata) {
  let val = 1;
  if (form.name == "contact_form") {
    inputs.forEach(inp=>{
      if (inp.name == "firstname") {
        if (inp.value == "") {
          setErrorFor(inp,"firstname is required");
          val = 0;
        }
      }else if (inp.name == "lastname") {
        if (inp.value == "") {
          setErrorFor(inp,"lastname is required");
          val = 0;
        }
      }else if (inp.name == "email") {
        if (inp.value == "") {
          setErrorFor(inp,"please enter your email");
          val = 0;
        }
      }else if (inp.name == "subject") {
        if (inp.value == "") {
          setErrorFor(inp,"please enter your subject");
          val = 0;
        }
      }else if (inp.name == "message") {
        if (inp.value == "") {
          setErrorFor(inp,"your message is required!");
          val = 0;
        }
      }
    })
    if(val == 1){
        inputs.forEach(inm=>{
          setBlurFor(inm);
        })
        sendmessage(inputs,'message',form,formdata);
      }
  }else if (form.name =='signup-form') {
    let passval
    inputs.forEach(async (inp)=>{
      if (inp.name == "firstname") {
          if (inp.value == "") {

            setErrorFor(inp,"firstname is required");
            val = 0;
          }else{
            setSuccessFor(inp);
          }
        }else if (inp.name == "lastname") {
          if (inp.value == "") {

            setErrorFor(inp,"lastname is required");
            val = 0;
          }else{
            setSuccessFor(inp);
          }
        }else if (inp.name == "email") {
          if (inp.value == "") {

            setErrorFor(inp,"please enter your email");
            val = 0;
          }else{
            val = await vdtemail(inp.value,inp);
          }
        }else if (inp.name == "password") {
          if (inp.value == "") {

            setErrorFor(inp,"please enter your password");
            val = 0;
          }else{
            passval = inp.value;
            setSuccessFor(inp);
          }
        }else if (inp.name == "confirm") {
          if (inp.value == "") {

            setErrorFor(inp,"confirm your password");
            val = 0;
          }else if (inp.value != passval) {
            setErrorFor(inp,"passwords do not match");
            val = 0;
          }else{
            setSuccessFor(inp);
          }
        }   
    })
     if(val == 1){
        inputs.forEach(inm=>{
          setBlurFor(inm);
        }) 
        sessionStorage.setItem('val',0);
        sendmessage(inputs,'signup',form,formdata);
      }else{
        console.log(val)
      }
  }else if (form.name == 'login-form') {
    inputs.forEach(inp=>{
      if (inp.name == "email") {
            if (inp.value == "") {
              setErrorFor(inp,"enter your email");
              val = 0;
            }
          }else if (inp.name == "password") {
            if (inp.value == "") {
              setErrorFor(inp,"password is required");
              val = 0;
            }
      }

    })
    if(val == 1){
        inputs.forEach(inm=>{
          setBlurFor(inm);
        })
        sendmessage(inputs,'login',form,formdata);
      }
  }else if (form.name == 'admin-login-form') {
    inputs.forEach(inp=>{
      if (inp.name == "username") {
            if (inp.value == "") {
              setErrorFor(inp,"enter your username");
              val = 0;
            }else{
              setSuccessFor(inp);
            }
          }else if (inp.name == "password") {
            if (inp.value == "") {
              setErrorFor(inp,"password is required");
              val = 0;
            }else{
              setSuccessFor(inp);
            }
      }

    })
    if(val == 1){
      sendmessage(inputs,'adminlogin',form,formdata);
    }
  }
}
export async function sendmessage(inputs,type,form,formdata) {
  if (type == 'message') {
    var values = {};
    inputs.forEach(inp=>{
      if (inp.name == "firstname") {
          if (inp.value != "") {
            Object.assign(values,{firstname: inp.value});
          }
        }else if (inp.name == "lastname") {
          if (inp.value != "") {
            Object.assign(values,{lastname: inp.value});
          }
        }else if (inp.name == "email") {
          if (inp.value != "") {
            Object.assign(values,{email: inp.value});
          }
        }else if (inp.name == "subject") {
          if (inp.value != "") {
            Object.assign(values,{subject: inp.value});
          }
        }if (inp.name == "message") {
          if (inp.value != "") {
            Object.assign(values,{message: inp.value});
          }
        }
    })
    var data = JSON.parse(localStorage.getItem("database"));
    Object.assign(values,{status: "new"});
    data.queries.push(values);
    localStorage.database = JSON.stringify(data);
    fetch('http://localhost:6060/api/addquery/',{
      mode: 'cors',
      method: "POST",
      body : JSON.stringify(formdata),
      headers: {
        "content-type": "application/json",
        'accept': '*/*'

      }
    }).then(response => response.json())
      .then(data => {
        alertMessage(data.message);
    }).catch(error=>{
      alertMessage(error);
    })
    form.reset();
  }else if (type == 'signup') {
    var values = {};
     inputs.forEach(inp=>{
      if (inp.name == "firstname") {
        if (inp.value != "") {
          Object.assign(values,{firstname: inp.value});
        }else{
            setErrorFor(inp,"fill this field");
          }
      }else if (inp.name == "lastname") {
        if (inp.value != "") {
          Object.assign(values,{lastname: inp.value});
        }else{
            setErrorFor(inp,"fill this field");
          }
      }else if (inp.name == "email") {
        if (inp.value != "") {
          Object.assign(values,{email: inp.value});
        }else{
            setErrorFor(inp,"fill this field");
          }
      }else if (inp.name == "password") {
        if (inp.value != "") {
          Object.assign(values,{password: inp.value});
        }else{
          setErrorFor(inp,"fill this field");
        }
      }
    })
    p = postschema
    p.body = JSON.stringify(formdata)
    r = await request('signup',p)
    if (r.success == false) {
      alertMessage(r.message);
    }else{
      alertMessage(r.message); 
      inputs.forEach(inp=>{
        setBlurFor(inp)
      })         
      form.reset();
    }   
  }else if(type == 'login'){
    var values = {};
    inputs.forEach(inp=>{
        if (inp.name == "email") {
          if (inp.value != "") {
              Object.assign(values,{email: inp.value});
          }else{
            setErrorFor(input,"fill this field");
          }
        }else if (inp.name == "password") {
          if (inp.value != "") {
              Object.assign(values,{password: inp.value});
          }
        }
    })
    p = postschema
    p.body =  JSON.stringify(values)
    r = await request('login',p)
    if (r.success == false) {
      alertMessage("incorrect email or password");
    }else if(r.success){
      localStorage.setItem("user",JSON.stringify(r.message.token));
      alertMessage("you have been successfully logged in");
      form.reset();
      window.location.refresh;
    }
  }else if(type == 'adminlogin'){
    var values = {};
      inputs.forEach(inp=>{
          if (inp.name == "username") {
            if (inp.value != "") {
                Object.assign(values,{username: inp.value});
            }else{
              setErrorFor(input,"fill this field");
            }
          }else if (inp.name == "password") {
            if (inp.value != "") {
                Object.assign(values,{password: inp.value});
            }
          }
      })
      o = {
            mode: 'cors',
            method: "POST",
            body : JSON.stringify(values),
            headers: {
              "content-type": "application/json",
              'accept': '*/*'

            }
        }
      r = await request('adminlogin',o)
      if (r.success == false) {
        alertMessage("incorrect username or password");
      }else if(r.success){
        alertMessage("you have been successfully logged in");
         inputs.forEach(inp=>{
          setBlurFor(inp)
         })
        form.reset();
        localStorage.setItem("admin",JSON.stringify(r.message.token));
        window.location.href = 'dashboard.html'
      }
  }else if (type == 'contact') {
    var values = {};
    var data = JSON.parse(localStorage.getItem("database"));
    Object.assign(values,{blog_type: "user_blog"});
    i = getdata('user');
    if (i == null) {
      i = getdata('admin');
    }
    Object.assign(values,{token: i});
    values = JSON.stringify(values)
    var leFull = document.querySelector('div.shade');
    let body = document.getElementById('body');
    var divs = Array.from(document.querySelectorAll('div.content'));
    
    fetch('http://localhost:6060/api/addblog',{
      mode: 'cors',
      method: "POST",
      body : values,
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }
    }).then(response => response.json())
        .then(data => {
          if (data.success) {
            if (form.classList[2] != 'adminform') {
              closeTab(body,leFull,divs);
              chkBlgCntnt();
            }
            alertMessage(data.message);
          }else{
            alertMessage(data.message);
          }
        }).catch(error=>{
        alertMessage(error);
      })
  }
}
export function chagecontent(newactive,prevactive) {
  newactive.classList.add('active');
  prevactive.classList.remove('active');
  newactive.classList.remove('ml-100');
  newactive.classList.remove('ml--100');
  prevactive.classList.add('ml--100');
  swtchcntnt(prevactive,newactive);
}
export function checkFileType(input) {
  var type = input.files[0].type.split(/\//);
  return type;
}
export function ellipsis(text, limit) {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}
export async function showPreview(input) {
    const file = input.files[0];
    const reader = new FileReader();
    const blob = await new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
    return blob
}
export async function showcontent(data,targetdiv) {
  if (targetdiv.id == 'users'){
		window.history.pushState('','','?page=users')
      var atr = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].innerHTML = null;
      targetdiv.childNodes[3].childNodes[1].appendChild(atr);
      atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                  <span class="fs-15p verdana p-10p">#</span>
                </td>
                <td class="p-10p bsbb bb-1-s-g">
                  <span class="fs-15p verdana p-10p no-wrap">First name</span>
                </td>
                <td class="p-10p bsbb bb-1-s-g">
                  <span class="fs-15p verdana p-10p no-wrap">Last name</span>
                </td>
                <td class="p-10p bsbb bb-1-s-g">
                  <span class="fs-15p verdana p-10p">Email</span>
                </td>
                <td class="p-10p bsbb bb-1-s-g">
                  <span class="fs-15p verdana p-10p">action</span>
                </td>
                `;
      i = 1;
      p = postschema
      p.body =  JSON.stringify({token :getdata('admin')});
      r = await request('getusers',p)
      console.log(r)
      if (!r.success) {
        return 0
      }

      r.message.forEach(users=>{
        a = document.createElement('tr');
        targetdiv.childNodes[3].childNodes[1].appendChild(a);
        a.innerHTML = `
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${i}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${users.firstname}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${users.lastname}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${users.email}</span>
                </td>
                <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana orange center hover-2 us-none banlink" id='${users.id}'>ban</span>
                  <span class="fs-14p verdana red center hover-2 us-none deletelink" id='${users.id}'>delete</span>
                </td>`;
                i+=1;
      })
      const deletee = Array.from(document.querySelectorAll('span.delete'));
      if (deletee.length > 0) {
        deletee.forEach(del=>{
          del.addEventListener('click',e=>{
            e.preventDefault();
            async function ftchusrs(url) {
              try {
                const response = await fetch(url,{
                  mode: 'cors',
                  method: "POST",
                  body: JSON.stringify({id: del.id,token: getdata('admin')}),
                  headers: {
                    "content-type": "application/json",
                    'accept': '*/*'

                }
                });
                const data = await response.json();
                if (data.success == true) {
                  alertMessage(data.message)
                  showcontent("database.users",targetdiv);
                }else{
                  alertMessage(data.message)
                }
              } catch (error) {
                alertMessage(error);
              }
            }
            ftchusrs("http://localhost:6060/api/deleteuser"); 
          })
        })
      }
  }else if (targetdiv.id == 'add-product') {
		window.history.pushState('','','?page=add-product')
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t= await request('tree',o)
    s = Array.from(document.querySelectorAll('select.main-input'))
    for (const select of s) {
      if (select.name == 'product-category') {
        select.innerHTML = `<option></option>`
        setBlurFor(select)
        ats(select,t.message.categories,s)
      }else if(select.name == 'product-brand'){
        select.innerHTML = `<option></option>`
        setBlurFor(select)
        ats(select,t.message.brands,s)
      }else if(select.name == 'product-usability'){
        select.innerHTML = `<option></option>`
        setBlurFor(select)
        ats(select,t.message.usedin,s)
      }else if(select.name == 'product-availability'){
        select.innerHTML = `<option></option>`
        setBlurFor(select)
        ats(select,t.message.availability,s)
      }
    }
    f = targetdiv.querySelector('form');
    f.addEventListener('submit',async (e)=>{
      e.preventDefault()
      i = Array.from(f.querySelectorAll('input.main-input'))
      t = Array.from(f.querySelectorAll('textarea.main-input'))
      s = Array.from(f.querySelectorAll('select.main-input'))
      t.forEach(textarea=>{
        i.push(textarea)
      })
      s.forEach(select=>{
        i.push(select)
      })
      p = Array.from(f.querySelectorAll('div.previewpanel'));
      let images,conditions,specifications
      for (const panel of p) {
        if (panel.title == 'images') {
           images = getcips(panel)
        }else if (panel.title == 'conditions') {
           conditions = getcips(panel)
        }else if (panel.title == 'specifications') {
           specifications = getcips(panel)
        }
      }
      let name,quantity,description,catid,subcatid,brandid,famid,usedin,availability
      for(const input of i){
        if (input.value == '') {
          setErrorFor(input,'this is a required field')
        }else(
          setSuccessFor(input)
        )
        if (input.id == 'name') {
           name = input.value
        }else if (input.id == 'quantity') {
          quantity = input.value
         
        }else if (input.id == 'description') {
           description = input.value
          
        }else if (input.id == 'category') {
           catid = input.value
          
        }else if (input.id == 'subcategory') {
           subcatid = input.value
          
        }else if (input.id == 'brand') {
           brandid = input.value
          
        }else if (input.id == 'serie') {
           famid = input.value
          
        }else if (input.id == 'usability') {
           usedin = input.value
          
        }else if (input.id == 'availability') {
           availability = input.value
          
        }
      }
      if(name != '' && quantity != '' && description != '' && catid != '' && subcatid != '' && brandid != '' && famid != '' && usedin != '' && availability != '' && images.length > 0 && conditions.length > 0 && Object.keys(specifications).length > 0){
        o = {
          name: name,
          quantity: quantity,
          description: description,
          catid: catid,
          subcatid: subcatid,
          brandid: brandid,
          famid: famid,
          usedin: usedin,
          availability: availability,
          images: images,
          conditions: conditions,
          specifications: specifications,
          token: getdata('admin')
        }
          l = {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify(o),
            headers: {
              "content-type": "application/json",
              'accept': '*/*'
          }
        }
        console.log(o)
        r = await request('addproduct',l)
      }else{
        console.log('not yet')
      }
    })
  }else if (targetdiv.id == 'add-discount') {
		window.history.pushState('','','?page=add-discount')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Owner&nbsp;name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Title</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">description</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g center">
                <span class="fs-15p verdana p-10p center">action</span>
              </td>
              `;
    i = 1;
    data.forEach(blogs=>{
      if (blogs.blog_type == '_USER_BLOG_') {
      auser = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(auser);
      auser.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${blogs.ownr_name}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${blogs.title}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${ellipsis(blogs.description,20)}</span>
              </td>
              <td class="p-10p flex w-150p jc-sb right">
                <span class="fs-14p verdana green center hover-2 us-none viewlink" id='${blogs._id}'>view</span>
                <span class="fs-14p verdana orange center hover-2 us-none editlink" id='${blogs._id}'>edit</span>
                <span class="fs-14p verdana red center hover-2 us-none deletelink" id='${blogs._id}'>delete</span>
              </td>`;
              i+=1;
      }
    })
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
      deletelink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await deleteBlog(s.id, getdata('admin'));
          if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
          }
        })
      })
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'view-products') {
		window.history.pushState('','','?page=view-products')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p nowrap">product id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p nowrap">product name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">description</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('getprods',o)
    if (!t.success) {
      return 0
    }
    console.log(t)
    t.message.forEach(prod=>{
      console.log(prod.pname)
      a = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(a);
      a.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${prod.prodid}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${prod.pname}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${ellipsis(prod.description,40)}</span>
              </td>
              <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana green center-2 hover-2 us-none adddiscountlink" id='${prod.id}'>add discount</span>
                <span class="fs-14p verdana orange center-2 hover-2 us-none editlink" id='${prod.id}'>edit</span>
                <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${blogs.id}'>delete</span>
              </td>`;
              i+=1;
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'new-queries') {
		window.history.pushState('','','?page=queries')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Contactor&nbsp;name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Email</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">subject</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    data.forEach(queries=>{
      if (queries.status == 'new') {
      auser = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(auser);
      auser.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${queries.firstname}&nbsp;${queries.lastname}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${queries.email}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${queries.subject}</span>
              </td>
              <td class="p-10p">
              <span class="fs-14p verdana green  hover-2 us-none view" id='${data.indexOf(queries)}'>view</span>
                <span class="fs-14p verdana orange right hover-2 us-none seen" id='${data.indexOf(queries)}'>mark&nbsp;as&nbsp;seen</span>
              </td>`;
              i+=1;
      }
    })
    const deletee = Array.from(document.querySelectorAll('span.seen'));
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.queries[parseInt(del.id)].status = "seen";
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.queries,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'queries') {
		window.history.pushState('','','?page=queries')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Contactor&nbsp;name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Email</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">subject</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    data.forEach(queries=>{
      if (queries.status == 'seen') {
      auser = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(auser);
      auser.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${queries.firstname}&nbsp;${queries.lastname}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${queries.email}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${queries.subject}</span>
              </td>
              <td class="p-10p">
              <span class="fs-14p verdana green center hover-2 us-none view" id='${data.indexOf(queries)}'>view</span>
                <span class="fs-14p verdana red center hover-2 us-none seen" id='${data.indexOf(queries)}'>delete</span>
              </td>`;
              i+=1;
      }
    })
    const deletee = Array.from(document.querySelectorAll('span.seen'));
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.queries.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.queries,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'home'){
		window.history.pushState('','','?page=home')
    var cards = Array.from(document.querySelectorAll('font.cardsc'));
    async function ftchnbrs(url) {
      try {
        const response = await fetch("http://localhost:6060/api/ftchnbrs",{
          mode: 'cors',
          method: "POST",
          body: JSON.stringify({token: getdata('admin')}),
          headers: {
            "content-type": "application/json",
            'accept': '*/*'

        }
        });
        const data = await response.json();
        if (data.success == true) {
           addnbrs(data.message);
        }else{
          alertMessage(data.message)
        }
      } catch (error) {
        // alertMessage(error);s
      }
    }
    // ftchnbrs("http://localhost:6060/api/ftchnbrs");
    function addnbrs(numbers) {
      cards.forEach(nbrs=>{
        if (nbrs.id == 'users') {
          numbers.forEach(ttl=>{
            if (ttl.id == nbrs.id) {
              nbrs.innerText = ttl.total;        
            }
          })
        }else if (nbrs.id == 'nqueries') {
          numbers.forEach(ttl=>{
            if (ttl.id == nbrs.id) {
              nbrs.innerText = ttl.total;        
            }
          })
        }else if (nbrs.id == 'blogs') {
          numbers.forEach(ttl=>{
            if (ttl.id == nbrs.id) {
              nbrs.innerText = ttl.total;        
            }
          })
        }else if (nbrs.id == 'queries') {
          numbers.forEach(ttl=>{
            if (ttl.id == nbrs.id) {
              nbrs.innerText = ttl.total;        
            }
          })        
        }
      })
    }
  }else if (targetdiv.id == 'new-orders') {
		window.history.pushState('','','?page=new-orders')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Owner&nbsp;name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Title</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">description</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    data.forEach(blogs=>{
      if (blogs.blog_type == '_ADMIN_BLOG_') {
      auser = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(auser);
      auser.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${blogs.ownr_name}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${blogs.title}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${ellipsis(blogs.description,20)}</span>
              </td>
              <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana green center-2 hover-2 us-none viewlink" id='${blogs._id}'>view</span>
                <span class="fs-14p verdana orange center-2 hover-2 us-none editlink" id='${blogs._id}'>edit</span>
                <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${blogs._id}'>delete</span>
              </td>`;
              i+=1;
      }
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'orders') {
		window.history.pushState('','','?page=orders')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Owner&nbsp;name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Title</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">description</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    data.forEach(blogs=>{
      if (blogs.blog_type == '_ADMIN_BLOG_') {
      auser = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(auser);
      auser.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${blogs.ownr_name}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${blogs.title}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${ellipsis(blogs.description,20)}</span>
              </td>
              <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana green center-2 hover-2 us-none viewlink" id='${blogs._id}'>view</span>
                <span class="fs-14p verdana orange center-2 hover-2 us-none editlink" id='${blogs._id}'>edit</span>
                <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${blogs._id}'>delete</span>
              </td>`;
              i+=1;
      }
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'log') {
		window.history.pushState('','','?page=log')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Owner&nbsp;name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">Title</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">description</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    // data.forEach(blogs=>{
    //   if (blogs.blog_type == '_ADMIN_BLOG_') {
    //   auser = document.createElement('tr');
    //   targetdiv.childNodes[3].childNodes[1].appendChild(auser);
    //   auser.innerHTML = `
    //           <td class="p-10p bsbb">
    //             <span class="fs-14p verdana">${i}</span>
    //           </td>
    //           <td class="p-10p bsbb">
    //             <span class="fs-14p verdana">${blogs.ownr_name}</span>
    //           </td>
    //           <td class="p-10p bsbb">
    //             <span class="fs-14p verdana">${blogs.title}</span>
    //           </td>
    //           <td class="p-10p bsbb">
    //             <span class="fs-14p verdana">${ellipsis(blogs.description,20)}</span>
    //           </td>
    //           <td class="p-10p flex jc-sb">
    //             <span class="fs-14p verdana green center-2 hover-2 us-none viewlink" id='${blogs._id}'>view</span>
    //             <span class="fs-14p verdana orange center-2 hover-2 us-none editlink" id='${blogs._id}'>edit</span>
    //             <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${blogs._id}'>delete</span>
    //           </td>`;
    //           i+=1;
    //   }
    // })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'add-user') {
		window.history.pushState('','','?page=add-user')
  }else if (targetdiv.id == 'categories') {
		window.history.pushState('','','?page=categories')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('tree',o)
    if (!t.success) {
      return 0
    }
    t.message.categories.forEach((category)=>{
      a = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(a);
      a.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${category.id}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${category.name}</span>
              </td>
              <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana green center-2 hover-2 us-none pinlink" id='${category._id}'>pin</span>
                <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${category._id}'>delete</span>
              </td>`;
              i+=1;
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'sub-categories') {
		window.history.pushState('','','?page=sub-categories')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">category</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('tree',o)
    if (!t.success) {
      return 0
    }
    t.message.categories.forEach(category=>{
      category.subcategories[0].forEach(subcategories=>{
        a = document.createElement('tr');
        targetdiv.childNodes[3].childNodes[1].appendChild(a);
        a.innerHTML = `
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${i}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${subcategories.id}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${subcategories.name}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${category.name}</span>
                </td>
                <td class="p-10p flex jc-sb">
                  <span class="fs-14p verdana green center-2 hover-2 us-none pinlink" id='${subcategories.idd}'>pin</span>
                  <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${subcategories.idd}'>delete</span>
                </td>`;
                i+=1;
      })
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'brands') {
		window.history.pushState('','','?page=brands')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('tree',o)
    if (!t.success) {
      return 0
    }
    t.message.brands.forEach((brands)=>{
      a = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(a);
      a.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${brands.id}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${brands.name}</span>
              </td>
              <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana green center-2 hover-2 us-none pinlink" id='${brands.id}'>pin</span>
                <span class="fs-14p verdana orange center-2 hover-2 us-none editlink" id='${brands.id}'>edit</span>
                <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${brands.id}'>delete</span>
              </td>`;
              i+=1;
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'series') {
		window.history.pushState('','','?page=series')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">brand</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('tree',o)
    if (!t.success) {
      return 0
    }
    t.message.brands.forEach((brand)=>{
      brand.series[0].forEach((series)=>{
        a = document.createElement('tr');
        targetdiv.childNodes[3].childNodes[1].appendChild(a);
        a.innerHTML = `
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${i}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${series.id}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${series.name}</span>
                </td>
                <td class="p-10p bsbb">
                  <span class="fs-14p verdana">${brand.name}</span>
                </td>
                <td class="p-10p flex jc-sb">
                  <span class="fs-14p verdana green center-2 hover-2 us-none pinlink" id='${series.id}'>pin</span>
                  <span class="fs-14p verdana orange center-2 hover-2 us-none editlink" id='${series.id}'>edit</span>
                  <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${series.id}'>delete</span>
                </td>`;
                i+=1;
      })
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'availability') {
		window.history.pushState('','','?page=availability')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">name</span>
              </td>
  
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('tree',o)
    if (!t.success) {
      return 0
    }
    console.log(t)
    t.message.availability.forEach((avs)=>{
      a = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(a);
      a.innerHTML = `
          <td class="p-10p bsbb">
            <span class="fs-14p verdana">${i}</span>
          </td>
          <td class="p-10p bsbb">
            <span class="fs-14p verdana">${avs.id}</span>
          </td>
          <td class="p-10p bsbb">
            <span class="fs-14p verdana">${avs.name}</span>
          </td>
          <td class="p-10p flex jc-sb">
            <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${avs.id}'>delete</span>
          </td>`;
          i+=1;
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }else if (targetdiv.id == 'usability') {
		window.history.pushState('','','?page=usability')
    var atr = document.createElement('tr');
    targetdiv.childNodes[3].childNodes[1].innerHTML = null;
    targetdiv.childNodes[3].childNodes[1].appendChild(atr);
    atr.innerHTML = ` <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">#</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">id</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">name</span>
              </td>
              <td class="p-10p bsbb bb-1-s-g">
                <span class="fs-15p verdana p-10p">action</span>
              </td>
              `;
    i = 1;
    o = {
      mode: 'cors',
      method: "GET",
      headers: {
        "content-type": "application/json",
        'accept': '*/*'
      }}
    t = await request('tree',o)
    if (!t.success) {
      return 0
    }
    t.message.usedin.forEach(usability=>{
      a = document.createElement('tr');
      targetdiv.childNodes[3].childNodes[1].appendChild(a);
      a.innerHTML = `
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${i}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${usability.id}</span>
              </td>
              <td class="p-10p bsbb">
                <span class="fs-14p verdana">${usability.name}</span>
              </td>
              <td class="p-10p flex jc-sb">
                <span class="fs-14p verdana red center-2 hover-2 us-none deletelink" id='${usability.id}'>delete</span>
              </td>`;
              i+=1;
    })

    const deletee = Array.from(document.querySelectorAll('span.delete'));
    var deletelink = Array.from(document.querySelectorAll('span.deletelink'));
    var editlink = Array.from(document.querySelectorAll('span.editlink'));
    editlink.forEach(s=>{
        s.addEventListener('click',async(e)=>{
          e.preventDefault();
          i = await editBlog(s.id, getdata('admin'));
          // if (i.success) {
          //   alertMessage(i.message);
          //   showcontent('data',targetdiv)
          // }
        })
      })
      deletelink.forEach(s=>{
        s.addEventListener('click',async (e)=>{
          e.preventDefault();
           i = await deleteBlog(s.id, getdata('admin'))
           if (i.success) {
            alertMessage(i.message);
            showcontent('data',targetdiv)
           }
        })
      })
    var viewlink = Array.from(document.querySelectorAll('span.viewlink'));
      viewlink.forEach(s=>{
        s.addEventListener('click',e=>{
          e.preventDefault();
          showBlog(s.id,'admin');
        })
      })
    if (deletee.length > 0) {
      deletee.forEach(del=>{
        del.addEventListener('click',e=>{
          e.preventDefault();
          database = JSON.parse(localStorage.getItem('database'));
          database.blogs.splice(parseInt(del.id),1);
          localStorage.setItem('database',JSON.stringify(database));
          showcontent(database.blogs,targetdiv);
        })
      })
    }
  }

}
export function swtchcntnt(extra,newdiv) {
  var content = newdiv.id;
  switch(content){
    case 'home':
      showcontent("home",newdiv);
      break;
    case 'users':
      showcontent("database.users",newdiv);
      break;
    case 'view-products':
      showcontent("database.blogs",newdiv);
      break;
    case 'new-queries':
      showcontent("database.blogs",newdiv);
      break;
    case 'add-product':
      showcontent("addBlog",newdiv);
      break;
    case 'new-orders':
      showcontent("addUser",newdiv);
      break;
    case 'add-discount':
      showcontent("addUser",newdiv);
      break;
    case 'orders':
      showcontent("database.queries",newdiv);
      break;
    case 'log':
      showcontent("database.log",newdiv);
      break;
    case 'add-user':
      showcontent("database.log",newdiv);
      break;
    case 'categories':
      showcontent("database.log",newdiv);
      break
    case 'sub-categories':
      showcontent("database.log",newdiv);
      break
    case 'brands':
      showcontent("database.log",newdiv);
      break
    case 'series':
      showcontent("database.log",newdiv);
      break
    case 'availability':
      showcontent("database.log",newdiv);
      break
    case 'usability':
      showcontent("database.log",newdiv);
      break
  }
}
export async function vdtemail(value,input) {
 let pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 if(input.value.match(pattern)){
    p = postschema 
    p.body = JSON.stringify({email:input.value.trim()})
    r = await request('checkEmail',p)
    if (r.success) {
      setErrorFor(input,"the entered email is in use!");
      sessionStorage.setItem('val',0)
    }else{
      setSuccessFor(input);
      sessionStorage.setItem('val',1)
      
    }    
 }else{
   setErrorFor(input,"try to use a valid email address");
   sessionStorage.setItem('val',0)
 }
 return sessionStorage.getItem('val')
}
export function getParam(param) {
  let i = new URL(window.location.href)
  let val = i.searchParams.get(param)
  return val
  
}
export function deletechild(element,parent) {
  parent.removeChild(element);
}
export function rs(string){
  string=string.replace(/,/gi,"")
  return string
}
export function ats(elem,obj,elems) {
  for (const category of obj) {
    o = document.createElement('option')
    o.className = 'p-10p bsbb'
    o.innerHTML = `<div class="w-100 h-100 block verdana black">${category.name}</div>`
    elem.appendChild(o)
  }
  elem.addEventListener('change',e=>{
    e.preventDefault();
    if(elem.id == 'category'){
      c = ()=> {
        for(const select of elems){
          if (select.name == 'product-subcategory') {
            return select
          }
        }
      }
      if (elem.value != '') {
        obj.forEach(category=>{
          if (category.name == elem.value) {
              cch(c(),category.subcategories[0])
          }
        })
      }else{
        c().innerHTML = '<option></option>'
      }
    }else if(elem.id == 'brand'){
      c = ()=> {
        for(const select of elems){
          if (select.name == 'product-serie') {
            return select
          }
        }
      }
      if (elem.value != '') {
        obj.forEach(category=>{
          if (category.name == elem.value) {
              cch(c(),category.series[0])
          }
        })
      }else{
        c().innerHTML = '<option></option>'
      }
    }
  })
}
export function cch(elem,obj) {
  elem.innerHTML = `<option></option>`
  for (const subcategory of obj) {
    o = document.createElement('option')
    o.className = 'p-10p bsbb'
    o.innerHTML = `<div class="w-100 h-100 block verdana black">${subcategory.name}</div>`
    elem.appendChild(o)
  }
  
}
export function getcips(parent) {
  c = Array.from(parent.querySelectorAll('span.chip'))
  if (parent.title == 'specifications') {
      d = {}
  }else if (parent.title == 'conditions') {
      d = []
  }else if(parent.title == 'images'){
      d = []
  }
  c.forEach(chip=>{
      if (parent.title == 'specifications') {
          Object.assign(d,{[chip.childNodes[0].textContent]: chip.childNodes[2].textContent})
      }else if (parent.title == 'conditions') {
          d.push({name:chip.childNodes[0].textContent,price:parseInt(rs(chip.childNodes[2].textContent))})
      }else if (parent.title == 'images') {
          d.push(chip.querySelector('img').src)
      }
  })
  return d
}
export const postschema = {
    mode: 'cors',
    method: "POST",
    body: null,
    headers: {
      "content-type": "application/json",
      'accept': '*/*'

    }
}
export const getschema =  {
    mode: 'cors',
    method: "GET",
    headers: {
      "content-type": "application/json",
      'accept': '*/*'

    }
}
