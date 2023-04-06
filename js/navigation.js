var q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m;
import {searchFunc,checkCart,geturl} from './functions.js'
export let thecont = document.querySelector('div#cont');
export let thenav = document.createElement('div');
thenav.className = 'w-100 h-110p bsbb bb-1-s-dg zi-1000 bc-white p-f navigation t-0';
thecont.appendChild(thenav);
thenav.innerHTML = `<div class="w-100 h-70p p-5p bsbb p-r">
<div class="w-100 h-100 bsbb">
<ul class="ls-none w-100 h-100 flex jc-sb p-0 m-0">
<li class="ml-5p w-a h-a verdana bcntr-resp bmt--10p"><a class="td-none ls-n black w-100 h-100 center" href="${geturl()}"><img src="${geturl()}/icons/favicon.png" class="w-35p h-35p cover"></a></li>
        <li class="hidden-resp">
          <div class="verdana center-2 h-100">
          <span class="pl-10p pr-10p bsbb"><a href="${geturl()}/about/" class="td-none ls-n"><span class="nowrap hover-2 black">About us</span></a></span>
          <span class="pl-10p pr-10p bsbb"><a href="${geturl()}/contact/" class="td-none ls-n"><span class="nowrap hover-2 black">contact us</span></a></span>
          <span class="pl-10p pr-10p bsbb"><a href="${geturl()}/terms/" class="td-none ls-n"><span class="nowrap hover-2 black">policy</span></a></span>
          </div>
        </li>
        <li class="b-60-resp">
        <div class="p-6p w-100 h-100 bsbb gob-resp  p-r search-sec">
        <div class="b-1-s-gray w-400p h-90 mt-5p p-r bfull-resp">
              <form action="" method="post" class="h-100 w-100" id ="searchFrm">
              <div class="#icon search-icon w-30p h-100 p-a l-0 center tr-0-3">
              <button type="submit" class="b-none p-0 m-0 bc-white">
              <span class="w-100 h-100 center #search-icon">
              <svg width="17" height="16" class="hover-2" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-0.5" x2="11.1922" y2="-0.5" transform="matrix(0.709258 0.704949 -0.807599 0.589733 7.4779 7.63948)" stroke="#818080"/>
              <circle cx="6.41608" cy="6.52942" r="5.5" fill="white" stroke="#818080"/>
              </svg>
              </span>
              </button>
              </div>
                <input type="text" name="search" class="w-100 h-100 pl-25p bsbb b-none" placeholder="what are you looking for..." id="searchTxt">
                </form>
                </div>
                </div>
                </li>
                <li class="w-a h-100 center pr-10p">
                <div class="p-5p bsbb h-50p w-110p jc-sb flex gob-resp p-r ics">
                <span class="#icon wish-icon h-100 center-2 w-a">
                  <svg version="1.1" class="w-20p h-20p p-r hover-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 51.997 51.997" style="enable-background:new 0 0 51.997 51.997;" xml:space="preserve">
                  <g>
                    <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
                        c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
                        c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
                        C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
                        c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
                        c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
                        c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"/>
                  </g>
                </svg>
                 </svg>
                </span>
                <span class="#icon cart-icon h-100 center">
                  <span class="hidden p-a br-50 w-15p h-15p theme bc-theme ml-20p cart-badge-hol ">
                    <font class="white consolas fs-12p center cart-badge iblock w-100 h-100">0</font>
							    </span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="carticon hover-2"  width="20px" height="25px" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" style="stroke: #000; fill: #000;">
                    <g>
                    <g>
                    <g>
                        <g>
                        <polygon points="311.2,365.5 63,365.5 11,126.7 250.7,126.7 250.7,146.5 36.5,146.5 79.9,345.7 296.3,345.7 416.2,11 501,11       501,31.9 431,31.9     "></polygon>
                        </g>
                        <g>
                        <g>
                        <path d="m262.4,501c-29.7,0-54.1-24-54.1-54.2 0-30.2 24.4-54.2 54.1-54.2s54.1,24 54.1,54.2c0,30.2-24.4,54.2-54.1,54.2zm0-87.6c-19.1,0-33.9,15.6-33.9,33.4 0,18.8 14.8,33.4 33.9,33.4s33.9-15.6 33.9-33.4c5.68434e-14-18.8-15.9-33.4-33.9-33.4z"></path>
                        </g>
                        <g>
                        <path d="m108.6,501c-29.7,0-54.1-24-54.1-54.2 0-30.2 24.4-54.2 54.1-54.2s54.1,24 54.1,54.2c0,30.2-24.4,54.2-54.1,54.2zm0-87.6c-19.1,0-33.9,15.6-33.9,33.4 0,18.8 14.8,33.4 33.9,33.4s33.9-15.6 33.9-33.4c-1-18.8-15.9-33.4-33.9-33.4z"></path>
                        </g>
                        </g>
                        </g>
                        </g>
                        </g>
                      </svg>
                </span>
                <span class="#icon user-icon h-100 center pt-7p bsbb">
                  <svg width="30" height="30" viewBox="0 0 23 30" fill="none" class="mt-5p hover-2 user--ic" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5735 5C16.5735 7.44151 14.3809 9.5 11.5735 9.5C8.76621 9.5 6.57355 7.44151 6.57355 5C6.57355 2.5585 8.76621 0.5 11.5735 0.5C14.3809 0.5 16.5735 2.5585 16.5735 5Z" stroke="black"/>
                  <path d="M21.7068 20C21.7068 25.2029 17.0517 29.5 11.2068 29.5C5.36189 29.5 0.706787 25.2029 0.706787 20C0.706787 14.797 5.36189 10.5 11.2068 10.5C17.0517 10.5 21.7068 14.797 21.7068 20Z" stroke="url(#paint0_linear_3_22)"/>
                  <defs>
                  <linearGradient id="paint0_linear_3_22" x1="11.2068" y1="9.99997" x2="11.2068" y2="30" gradientUnits="userSpaceOnUse">
                  <stop/>
                  <stop offset="0.369792" stop-color="#818080" stop-opacity="0.440945"/>
                    <stop offset="0.661458" stop-color="#818080" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                  </svg>
              </span>
              </div>
              </li>
      </ul>
    </div>
    </div>
    <div class="w-100 h-40p p-5p bsbb ovh">
    <div class="w-100 h-100">
      <ul class="ls-none w-100 h-100 flex p-0 m-0 ml-0">
      <li class="w-a h-100 menubutt hover-2 bp-a-resp p-r">
      <span class="#icon menu-icon ml-6p  w-100 h-100">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 21.25H10M15 21.25H25M5 15H25M5 8.75H15M20 8.75H25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
              </span>
              </li>
              <li class="w-95 h-a ovxh center pr-10p pl-10p bsbb">
              <ul class="ls-none w-100 h-100 center-2 horizontal no-scroll poppsins ovyh jc-sb m-0 p-0 hidden-resp nav-pinned-space">
              <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
              </li>
              <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
              </li>
              <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
              </li>
              <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
            </li>
            <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
              </li>
              <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
              </li>
              <li class="w-a h-a">
              <div class="verdana pl-15p pr-15p capitalize hover-2 bc-gray skel br-5p w-80p h-25p ml-10p"></div>
              </li>
          </ul>
          </li>
          </ul>
          </div>
          </div>`     
export let menubutt = document.querySelector('li.menubutt');
a = document.querySelector('input#searchTxt');
f = document.querySelector('form#searchFrm');
f.addEventListener('submit',ff=>{
  ff.preventDefault();
  window.location.replace(`${geturl()}/search/?q=${a.value.trim()}`)
})
a.addEventListener('focus',cv=>{
  cv.preventDefault();
  
})
a.addEventListener('keyup',e=>{
  e.preventDefault()
  searchFunc(a);
})
checkCart()
          // var banner = document.getElementById('banner');
// window.onscroll = function() {scrollFunction()};
// window.onload = function() {scrollFunction()};

// var prevScrollpos = window.pageYOffset;
// function scrollFunction() {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
    //     navbar.classList.remove("mt-8p");
    //     banner.classList.remove("mt--100p");
    //     banner.classList.add('tr-0-4');
    //     navbar.classList.add('tr-0-4');
    
    //   } else {
      //     navbar.classList.add("mt-8p");
//     banner.classList.add("mt--100p");
//     navbar.classList.add('tr-0-4');
//     banner.classList.add('tr-0-4');

//   }
//   prevScrollpos = currentScrollPos;
// }