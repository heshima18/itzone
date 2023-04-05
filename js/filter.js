

// import {showFil} from './functions.js'
let cont = document.getElementById("bodycont");
let filternav=document.createElement("div");
filternav.className=`w-100 h-0 p-r  bsbb t-0 zi-0 filter-nav tr-0-3 bfull-resp ovh nowrap bp-0-resp`;
let fc = cont.firstChild;
cont.insertBefore(filternav, fc);
filternav.innerHTML = `<div class="w-100 h-100 br-10p bc-white p-20p bsbb">
<div class="w-100 h-a bsbb p-10p bsbb">
<div class="w-100 h-40p ">
<span class="capitalize verdana left fs-20 p-5p">
   filters
</span>
</div>
</div>
<div class="w-100 h-a p-10p bsbb center-2 bblock-resp ovh">
    <div class="w-a m-a h-100 p-5p bsbb p-r t-0">
        <div class="w-100 h-40p ">
            <span class="capitalize verdana left fs-17 p-5p">
                price range
            </span>
        </div>
        <div class="theslider w-90 w-300p bfull-resp m-a p-r h-20p">
            <div id="slider" class="p-a mt-10p h-2p w-100 bc-gray">
            </div>
            <div class="p-a w-20p hover-2 h-20p b-1-s-dgray bc-theme br-50 l-0 zi-20" id="handler1"></div>
            <div class="p-a w-20p hover-2 h-20p b-1-s-dgray bc-theme br-50" id="handler2"></div>
            <div class="p-a w-5 h-2p bc-theme t-50 r-0" id="range"></div>
        </div>
        <div class="w-100 h-a p-5p bsbb center">
            <span class="verdana black fs-11p" id="prid"></span>
        </div>
    </div>
    <div class="w-a m-a h-a p-5p bsbb iblock bblock-resp bfull-resp va-t">
        <div class="w-100 h-40p ">
            <span class="capitalize verdana left fs-17 p-5p">
                categories
            </span>
        </div>
        <div class="w-100 p-10p bsbb h-200p ovys left">
            <span class="w-100 h-100 verdana">
                <ul class="p-5p m-0 ls-none">
                    <li><input type="checkbox" name="" id=""> computes</li>
                    <li><input type="checkbox" name="" id=""> phones</li>
                    <li><input type="checkbox" name="" id=""> printers</li>
                    <li><input type="checkbox" name="" id=""> accessories</li>
                </ul>
            </span>
        </div>
    </div>
    <div class="w-a m-a h-a p-5p bsbb iblock bblock-resp bfull-resp va-t">
        <div class="w-100 h-40p ">
            <span class="capitalize verdana left fs-17 p-5p">
                sub categories
            </span>
        </div>
        <div class="w-100 p-10p bsbb h-a ovys left">
            <span class="w-100 h-100 verdana">
                <ul class="p-5p m-0 ls-none">
                    <li><input type="checkbox" name="" id=""> laptops</li>
                    <li><input type="checkbox" name="" id=""> desktops</li>
                    <li><input type="checkbox" name="" id=""> all in one</li>
                    <li><input type="checkbox" name="" id=""> smart phones</li>
                    <li><input type="checkbox" name="" id=""> fixed phones</li>
                    <li><input type="checkbox" name="" id=""> laptop accessoriess</li>
                    <li><input type="checkbox" name="" id=""> watches</li>
                    <li><input type="checkbox" name="" id=""> phone accessories</li>
                    <li><input type="checkbox" name="" id=""> cameras</li>
                    <li><input type="checkbox" name="" id=""> earphones</li>
                    <li><input type="checkbox" name="" id=""> headphones</li>
                    <li><input type="checkbox" name="" id=""> printer accessories</li>
                </ul>
            </span>
        </div>
    </div>
    <div class="w-a m-a h-a p-5p bsbb iblock bblock-resp bfull-resp va-t">
        <div class="w-100 h-40p ">
            <span class="capitalize verdana left fs-17 p-5p">
                Brands
            </span>
        </div>
        <div class="w-100 p-10p bsbb h-200p ovys left">
            <span class="w-100 h-100 verdana">
                <ul class="p-5p m-0 ls-none">
                    <li><input type="checkbox" name="" id=""> apple</li>
                    <li><input type="checkbox" name="" id=""> samsung</li>
                    <li><input type="checkbox" name="" id=""> nokia</li>
                    <li><input type="checkbox" name="" id=""> google</li>
                    <li><input type="checkbox" name="" id=""> huawei</li>
                    <li><input type="checkbox" name="" id=""> epson</li>
                    <li><input type="checkbox" name="" id=""> hp</li>
                    <li><input type="checkbox" name="" id=""> dell</li>
                    <li><input type="checkbox" name="" id=""> other</li>
                </ul>
            </span>
        </div>
    </div>
    <div class="w-a m-a h-a p-5p bsbb iblock bblock-resp bfull-resp va-t">
        <div class="w-100 h-40p ">
            <span class="capitalize verdana left fs-17 p-5p">
                availability
            </span>
        </div>
        <div class="w-100 p-10p bsbb h-200p ovys left">
            <span class="w-100 h-100 verdana">
                <ul class="p-5p m-0 ls-none">
                    <li><input type="checkbox" name="" id=""> out of stock</li>
                    <li><input type="checkbox" name="" id=""> in stock</li>
                    <li><input type="checkbox" name="" id=""> product on order</li>
                </ul>
            </span>
        </div>
    </div>
    </div>
</div>`

const slider = document.getElementById("slider");
const handler1 = document.getElementById("handler1");
const handler2 = document.getElementById("handler2");
const range = document.getElementById("range");
const prrange = document.getElementById('prid');
// Set the initial position of the handlers and range
handler1.style.left = "0%";
handler2.style.left = "97%";
range.style.width = "100%";
// Add event listeners to the handlers
handler1.addEventListener("mousedown", startDrag);
handler2.addEventListener("mousedown", startDrag);
// Dragging a handler updates the range and the position of the other handler
function startDrag(event) {
    const handler = event.target;
    const startX = event.clientX;
    const handlerX = handler.offsetLeft;
    const sliderWidth = slider.clientWidth;
    document.addEventListener("mousemove", dragHandler);
    document.addEventListener("mouseup", stopDrag);
    function dragHandler(event) {
        if (handler2.style.left != handler1.style.left && parseInt(handler2.style.left) >= parseInt(handler1.style.left)) {
            let newHandlerX = handlerX + (event.clientX - startX);
            if (newHandlerX < 0) {
            newHandlerX = 0;
            } else if (newHandlerX > sliderWidth) {
            newHandlerX = sliderWidth;
            }
            range.style.width = `${parseInt(handler2.style.left)-parseInt(handler1.style.left)}%`;
            range.style.left = `${parseInt(handler1.style.left)+2}%`;
            handler.style.left = `${(newHandlerX / sliderWidth) * 100}%`;
            prrange.textContent = `${parseInt(handler1.style.left)*50000}RWF - ${parseInt(handler2.style.left)*50000}RWF`
        }else{
            if (parseInt(handler2.style.left) == 100) {
                handler1.style.left = `${parseInt(handler1.style.left)-2}%`
            } else if(parseInt(handler1.style.left) == 0){
                handler2.style.left = `${parseInt(handler2.style.left)+2}%`
            }else{
                handler2.style.left = `${parseInt(handler1.style.left)+2}%`
                handler1.style.left = `${parseInt(handler1.style.left)-2}%`
            }
            stopDrag()
        }
    }
    function stopDrag() {
        document.removeEventListener("mousemove", dragHandler);
        document.removeEventListener("mouseup", stopDrag);
    }
}
let filterbutt = document.querySelector('span.filter-icon');
let pgbody = document.querySelector('div.pgbody');
filterbutt.addEventListener('click',e=>{
    e.preventDefault();
    if(filternav.classList.contains('h-0')){
        filternav.classList.add('mr-5p')
        filternav.classList.add('r-0')
        filterbutt.classList.add('b-1-s-dgray')
        filternav.classList.remove('h-0')   
        filternav.classList.add('h-a')   
        filternav.classList.add('p-20p')   

    }else{
        filternav.classList.remove('h-a')
        filternav.classList.add('h-0')
        filternav.classList.remove('r-0')
        filternav.classList.remove('mr-5p')
        filterbutt.classList.remove('b-1-s-dgray')
        filternav.classList.remove('p-20p')   


    }
    

})