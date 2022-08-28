let pageOne = document.getElementById("part-one");
let pageTwo = document.getElementById("part-two");
let pageThree = document.getElementById("part-three");
//let pageOne = document.getElementById("part-one");
const applyBtn = document.getElementById("applyBtn");
const backBtn = document.getElementById("backBtn");
const finishBtn = document.getElementById("finishBtn");

var warner2 = document.getElementById("warner2");

var have_typed_wrong = false;

var ccPhoneNum = document.getElementsByClassName("ccPhoneNum")[0];
var ccWANum = document.getElementsByClassName("ccWhatsAppNum")[0];
var PhoneNum = document.getElementsByClassName("PhoneNum")[0];
var WhatsAppNum = document.getElementsByClassName("WhatsAppNum")[0];
finishBtn.addEventListener("click", function(){
    if(Can_moveon("part-two")){
        warner2.classList.remove("display");
        warner2.classList.add("hide");
        var aa = ccPhoneNum.value;
        var a = PhoneNum.value;
        var bb = ccWANum.value;
        var b = WhatsAppNum.value;
        PhoneNum.value = aa.toString() + "-" + a.toString();
        WhatsAppNum.value = bb.toString() + "-" + b.toString();
        finishBtn.type = "submit";
    }
    else{
        warner2.classList.remove("hide");
        warner2.classList.add("display");
        console.log("pappp");
    }
})

function Can_moveon(part){
    var allIntput = document.getElementById(part).querySelectorAll("input");
    var allSelect = document.getElementById(part).querySelectorAll("select");
    var allRadio =  document.getElementById(part).querySelectorAll(".radio");
    
    var all_filled = true;
    for(let i=0; i<allIntput.length; i++){
        if(allIntput[i].value==""){
            all_filled = false;
            break;
        }
    }
    for(let i=0; i<allSelect.length; i++){
        if(allSelect[i].value==""){
            all_filled = false;
            break;
        }
    }
    var all_rad_filled = false;
    for(let i=0; i<allRadio.length; i++){
        if(allRadio[i].checked){
            all_rad_filled = true;
            break;
        }
    }
    console.log("yupyup");
    if(allRadio.length==0) return all_filled;
    else return all_filled && all_rad_filled;
}

var warner = document.getElementById("warner");
applyBtn.addEventListener("click", function(){
    var Cn = document.getElementById("ggez");
    if(Cn.value==""){
        Cn.classList.add("is-invalid");
        have_typed_wrong = true;
        console.log("prrr");
    }
    else{
        if(have_typed_wrong)
            Cn.classList.remove("is-invalid");
    }
    if(Can_moveon("part-one")){
        warner.classList.remove("display");
        warner.classList.add("hide");        
        next();
    }
    else{
        console.log("yop");
        warner.classList.remove("hide");
        warner.classList.add("display");
    }
})

const radioBut = document.getElementsByClassName("radio");
console.log(radioBut);
radioBut[0].onclick = function(){ glow(1);}
radioBut[1].onclick = function(){ glow(2);}

function glow(i){
    console.log(i);
    var namee = "coverRad"+ i.toString();
    var name_other;
    if(i==1) name_other = "coverRad2";
    if(i==2) name_other = "coverRad1";
    console.log(namee + "  " + name_other);
    var boxi = document.getElementById(namee);
    var boxi2 = document.getElementById(name_other);
    boxi.style["box-shadow"] = "0px 0px 11px -1px blue";
    boxi2.style["box-shadow"] = "";
}

function hover(stuff){
    stuff.style["background-image"] = "linear-gradient(to right top, #ffd2eb, #f8d6f3, #f0daf9, #e8defd, #e1e2ff, #dbe6ff, #d6eaff, #d4eeff, #d1f3ff, #d0f7ff, #d0fbff, #d2fffc)";
    stuff.style["border-color"] = "rgb(80, 80, 80, 0.2)"
}
function hoverOut(stuff){
    stuff.style["background"] = "white";
    stuff.style["border-color"] = "rgb(80, 80, 80, 0.3)"
}

function next(){
    pageOne.classList.remove("display");
    pageOne.classList.add("hide");
    pageTwo.classList.remove("hide");
    pageTwo.classList.add("display");
}

backBtn.addEventListener("click", function(){
    pageTwo.classList.remove("display");
    pageTwo.classList.add("hide");
    pageOne.classList.remove("hide");
    pageOne.classList.add("display");
})


//ensure only one payment method selected at a time
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('entry.1849535877')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
}



function payMerge(stuff){
    var class_n = [];
    var anim_name = [];
    if(stuff.id == "cash"){
        class_n = ["fps", "bank"];
        anim_name = ["paymentMergeL1", "paymentMergeL2"]
    }
    if(stuff.id == "fps") {
        class_n = ["cash", "bank"];
        anim_name = ["paymentMergeR1", "paymentMergeL1"]
    }
    if(stuff.id == "bank"){
        class_n = ["fps", "cash"];
        anim_name = ["paymentMergeR1", "paymentMergeR2"]
    }

    var divBox = [];
    divBox[0] = document.getElementsByClassName(class_n[0])[0];
    divBox[1] = document.getElementsByClassName(class_n[1])[0];
    divBox[2] = document.getElementsByClassName(stuff.id)[0];
    if(stuff.checked) playAnimForward(class_n, anim_name, divBox, stuff);
    else playAnimBackward(class_n, anim_name, divBox, stuff);
}

let payType = document.getElementsByName("paymentType");
let payType_selected;
let inperson = document.getElementsByClassName("payInperson")[0];
let fps = document.getElementsByClassName("payFPS")[0];
let bank = document.getElementsByClassName("payBank")[0];
let evidence = document.getElementsByClassName("evidence")[0];

var agreement = document.getElementById("checkbox-2");

function playAnimForward(class_n, anim_name, divBox, stuff){
    divBox[0].style.animation='none';
    divBox[0].offsetHeight;
    divBox[0].style.animation = null;
    divBox[1].style.animation='none';
    divBox[1].offsetHeight;
    divBox[1].style.animation = null;

    divBox[0].removeAttribute("animation-name");
    divBox[1].removeAttribute("animation-name");
    divBox[0].classList.remove("animRev");
    divBox[1].classList.remove("animRev");
    
    divBox[2].style["z-index"] = 3;
    divBox[0].style["z-index"] = 2;
    divBox[1].style["z-index"] = 1;    
    
    divBox[0].classList.add("anim");
    divBox[1].classList.add("anim");

    divBox[0].style["animation-name"] = anim_name[0];
    divBox[1].style["animation-name"] = anim_name[1];
    
    document.getElementById(class_n[0]).disabled = true;
    document.getElementById(class_n[1]).disabled = true;

    if(stuff.id=="cash") payType_selected = "payInperson";
    if(stuff.id=="fps") payType_selected = "payFPS";
    if(stuff.id=="bank") payType_selected = "payBank";

    var tmp = document.getElementsByClassName(payType_selected)[0];
    
    tmp.style.animation='none';
    tmp.offsetHeight;
    tmp.style.animation = null;
    tmp.classList.remove("fadeIn_animRev");
    tmp.classList.add("fadeIn_anim");

    tmp.classList.remove("hide");
    tmp.classList.add("display");
    if(payType_selected!="payInperson"){
        var temp = document.getElementsByClassName("evidence")[0];
        agreement.required = false;
        temp.style.animation='none';
        temp.offsetHeight;
        temp.style.animation = null;
        temp.classList.remove("fadeIn_animRev");
        temp.classList.add("fadeIn_anim");
        temp.classList.remove("hide");
        temp.classList.add("display");
    }
    else agreement.required = true;
}
 
function playAnimBackward(class_n, anim_name, divBox, stuff){
    agreement.required = false;
    
    document.getElementById(class_n[0]).disabled = false;
    document.getElementById(class_n[1]).disabled = false;
    
    divBox[0].style.animation='none';
    divBox[0].offsetHeight;
    divBox[0].style.animation = null;
    divBox[1].style.animation='none';
    divBox[1].offsetHeight;
    divBox[1].style.animation = null;

    divBox[0].removeAttribute("animation-name");
    divBox[1].removeAttribute("animation-name");
    divBox[0].classList.remove("anim");
    divBox[1].classList.remove("anim");

    divBox[0].classList.add("animRev");
    divBox[1].classList.add("animRev");
    divBox[0].style["animation-name"] = anim_name[0];
    divBox[1].style["animation-name"] = anim_name[1];

    if(stuff.id=="cash") payType_selected = "payInperson";
    if(stuff.id=="fps") payType_selected = "payFPS";
    if(stuff.id=="bank") payType_selected = "payBank";

    var tmp = document.getElementsByClassName(payType_selected)[0];
    tmp.style.animation='none';
    tmp.offsetHeight;
    tmp.style.animation = null;
    
    tmp.classList.remove("fadeIn_anim");
    tmp.classList.add("fadeIn_animRev");
    tmp.classList.remove("display");
    tmp.classList.add("hide");

    if(payType_selected!="payInperson"){
        var temp = document.getElementsByClassName("evidence")[0];
        temp.style.animation='none';
        temp.offsetHeight;
        temp.style.animation = null;
        temp.classList.remove("fadeIn_anim");
        temp.classList.add("fadeIn_animRev");
        temp.classList.remove("display");
        temp.classList.add("hide");
    }
}
