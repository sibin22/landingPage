

function reloadPage() {
    location.reload();
  }
  
 
  let screenWidth = window.innerWidth;
  

  window.addEventListener('resize', function() {
 
    if (window.innerWidth !== screenWidth) {
  
      setTimeout(reloadPage, 0); 
    }
  });
  
function mobileMenu(){
    var main=document.getElementById('main');
    var btn=document.getElementById('nav-item');
    var btn1=document.getElementById('nav-btn');
    var acheieve=document.getElementById('main-acheieve');

if(window.innerWidth <= 768 && btn.style.display ==='flex' && btn1.style.display==='flex'&& main.style.filter ==="blur(5px)")
{
    btn.style.display="none";
    btn1.style.display="none";
    main.style.filter ="blur(0px)";
    acheieve.style.filter ="blur(0px)";

}
else{
    btn.style.display="flex";
    btn1.style.display="flex";
    main.style.filter ="blur(5px)";
    acheieve.style.filter ="blur(5px)";


}


}

document.onclick = function(e){
    var bt1=document.getElementById('nav-ham');
    var btns=document.getElementById('nav-item');
    var btns1=document.getElementById('nav-btn');
    var main1=document.getElementById('main');
    var acheieve1=document.getElementById('main-acheieve');

    if (window.innerWidth <= 768 && !bt1.contains(e.target) && !btns.contains(e.target) && !btns1.contains(e.target) || btns.contains(e.target) || btns1.contains(e.target) ) {
        btns.style.display="none"
        btns1.style.display="none"
        main1.style.filter ="blur(0px)";
        acheieve1.style.filter ="blur(0px)";

    }
}