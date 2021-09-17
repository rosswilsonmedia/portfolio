var mobileNav=document.getElementById("mobileNav");
var hideMobileNavTimer;

function closeMobileNav() {
    mobileNav.style.top='-100%';
    document.getElementById("mobileNavToggle").style.transform="rotate(0deg)";
    document.body.style.overflow="visible";
    hideMobileNavTimer=setTimeout(function(){
        mobileNav.style.visibility="hidden";
    }, 500);
}
function openMobileNav() {
    clearTimeout(hideMobileNavTimer);
    mobileNav.style.visibility="visible";
    mobileNav.style.top='0%';
    document.getElementById("mobileNavToggle").style.transform="rotate(-180deg)";
    document.body.style.overflow="hidden";
}
function toggleMobileNav() {
    if(mobileNav.style.top=='-100%') {
        openMobileNav();
    } else {
        closeMobileNav();
    }
}
closeMobileNav();