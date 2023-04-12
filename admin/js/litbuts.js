let q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m
import {ellipsis,checkFileType,showPreview,setSuccessFor,setErrorFor,deletechild, setBlurFor,cc, adcm, rs,getcips} from '../../js/functions.js'
let litbuts = Array.from(document.querySelectorAll('span.litbuts'));
litbuts.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.id == 'conditions'){
            p =  button.parentNode.parentNode.parentNode
            i = Array.from(p.querySelectorAll('input'));
            i.forEach(input=>{
                (input.value == '')? setErrorFor(input,'') : setSuccessFor(input);
            })
            if(i[0].value != '' && i[1].value != ''){
                v = p.parentElement.childNodes[3].childNodes[1]
                d = {[i[0].value]: i[1].value}
                i.forEach(input=>{
                    input.value = null;
                    setBlurFor(input)
                })
                ac(d,v)
            }
        }else if (button.id == 'specifications') {
            p =  button.parentNode.parentNode.parentNode
            i = Array.from(p.querySelectorAll('input'));
            i.forEach(input=>{
                (input.value == '')? setErrorFor(input,'') : setSuccessFor(input);
            })
            if(i[0].value != '' && i[1].value != ''){
                v = p.parentElement.childNodes[3].childNodes[1]
                d = {[i[0].value]: i[1].value}
                i.forEach(input=>{
                    input.value = null;
                    setBlurFor(input)
                })
                as(d,v)
            }
        }else if (button.id == 'images') {
            p =  button.parentNode.parentNode.parentNode.parentNode
            i = Array.from(p.querySelectorAll('input'));
            i.forEach(inp=>{
                if (inp.type == 'file' && inp.value == '') {
                    setErrorFor(inp,"choose an image");
                    return 0;
                  }else if (inp.type == 'file' && inp.value != '') {
                    d = checkFileType(inp)[0];
                    if (d == 'image') {
                      setSuccessFor(inp);
                      ai(inp,p.querySelector('div.previewpanel'))
                      return 1;
                    }else{
                      setErrorFor(inp,'only images are allowed')
                      return 0;
                    }
            
                  }
            })
        }
    })
})
function ac(info,parent) {
    p = parent.querySelector('span.placeholder')
    if (p) {
        deletechild(p,parent)
    }
    c = document.createElement('span')
    c.className = 'w-a h-20p b-1-s-gray br-2p p-5p m-5p fs-13p iblock chip verdana dgray consolas ';
    r = document.createElement('div');
    r.className = "w-20p h-20p p-r right bc-white remove mb-5p ml-5p  b-1-s-gray center br-50 hover"
    r.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"></line></g><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"></line></g></svg>`
    c.innerHTML = `<span class="p-5p bsbb consolas ${cc(Object.keys(info)[0])} fs-12p">${Object.keys(info)[0]}</span> : <span class="p-5p bsbb consolas black fs-12p">${adcm(info[Object.keys(info)[0]])}</span> RWF`
    c.appendChild(r)
    let found = 0
    for(const chip of parent.childNodes){
        if (chip) {
            t = chip.childNodes[0]
            if (t && t.textContent == Object.keys(info)[0]) {
             found = 1
            }
        }
    }
    (!found)? parent.appendChild(c): null
    d = getcips(parent)
    r = Array.from(document.querySelectorAll('div.remove'));
    r.forEach(remove=>{
        remove.addEventListener('click',e=>{
            e.preventDefault();
            try {
                deletechild(remove.parentNode,parent)
                l = Array.from(parent.querySelectorAll('span.chip'))
                if(l.length == 0){
                    parent.innerHTML = `<span class="placeholder w-100 h-100p p-10p center verdana dgray fs-13p capitalize bsbb">add conditions to preview them here</span>`
            }
            } catch (error) {
                console.log(error)
            }
            
        })
    })
}
function as(info,parent) {
    let p = parent.querySelector('span.placeholder')
    if (p) {
        deletechild(p,parent)
    }
    c = document.createElement('span')
    c.className = 'w-a h-20p b-1-s-gray br-2p p-5p m-5p fs-13p iblock chip verdana dgray consolas ';
    r = document.createElement('div');
    r.className = "w-20p h-20p p-r right bc-white remove mb-5p ml-5p  b-1-s-gray center br-50 hover"
    r.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"></line></g><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"></line></g></svg>`
    c.innerHTML = `<span class="p-5p bsbb consolas black fs-12p">${Object.keys(info)[0]}</span> : <span class="p-5p bsbb consolas dgray fs-12p">${info[Object.keys(info)[0]]}</span> `
    c.appendChild(r)
    let found = 0
    for(const chip of parent.childNodes){
        if (chip) {
            t = chip.childNodes[0]
            if (t && t.textContent == Object.keys(info)[0]) {
             found = 1  
            }
        }
    }
    (!found)? parent.appendChild(c): null
    d = getcips(parent)
    r = Array.from(document.querySelectorAll('div.remove'));
    r.forEach(remove=>{
        remove.addEventListener('click',e=>{
            e.preventDefault();
            try {
            deletechild(remove.parentNode,parent)
            l = Array.from(parent.querySelectorAll('span.chip'))
            if(l.length == 0){
                parent.innerHTML = `<span class="placeholder w-100 h-100p p-10p center verdana dgray fs-13p capitalize bsbb">add conditions to preview them here</span>`
            }
            } catch (error) {
                console.log(error)
            }
            
        })
    })
}
export async function ai(input,parent) {
    let p = parent.querySelector('span.placeholder')
    if (p) {
        deletechild(p,parent)
    }
    s = await showPreview(input)
    input.value = null
    c = document.createElement('span')
    c.className = 'w-60p h-60p b-1-s-gray br-2p m-5p iblock chip p-r';
    r = document.createElement('div');
    r.className = "w-20p h-20p p-a bc-white remove b-1-s-gray center br-50 hover t-0 r-0 mr--10p mt--5p"
    r.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"></line></g><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"></line></g></svg>`
    c.innerHTML = `<span class="p-5p block h-100 w-100 bsbb p-r"><img src="${s}" class="w-100 h-100 contain"></span> `
    c.appendChild(r)
    parent.appendChild(c)
    k = getcips(parent)
    r = Array.from(document.querySelectorAll('div.remove'));
    r.forEach(remove=>{
        remove.addEventListener('click',e=>{
            e.preventDefault();
            try {
            deletechild(remove.parentNode,parent)
            l = Array.from(parent.querySelectorAll('span.chip'))
            if(l.length == 0){
                parent.innerHTML = `<span class="placeholder w-100 h-100p p-10p center verdana dgray fs-13p capitalize bsbb">add conditions to preview them here</span>`
            }
            } catch (error) {
                console.log(error)
            }
            
        })
    })
}
