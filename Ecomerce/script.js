//increment function
function increment(incdec,prc,itm){
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_ammount = document.getElementById("pr_ammount").innerHTML;
    var charge = document.getElementById("charge").innerHTML;
    var total_ammount = document.getElementById("total_ammount").innerHTML;

    if(count.value>=5){
        count.value=5;
        alert("only five products allowed");
    }
    else{
        count.value++;

        var result = parseInt(price.innerHTML)+ parseInt(item.innerHTML);
        item.innerHTML=result;

        //for product ammount
        var total_product = parseInt(price.innerHTML) + parseInt(pr_ammount);
        document.getElementById("pr_ammount").innerHTML=total_product;

        //for total + charge
        var newresult = total_product + parseInt(charge);
        document.getElementById("total_ammount").innerHTML = newresult;

         var kupon_main = document.getElementById("kupon_main");
         
        
    }


}

//decrement function
function decrement(incdec,prc,itm){
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_ammount = document.getElementById("pr_ammount").innerHTML;
    var charge = document.getElementById("charge").innerHTML;
    var total_ammount = document.getElementById("total_ammount").innerHTML;

    if(count.value<=0){
        count.value=0;
        alert("only minimum 1 product allowed");
    }
    else{
        count.value--;
        var result = parseInt(item.innerHTML)-parseInt(price.innerHTML);
        item.innerHTML=result;

         //for product ammount
        var total_product = parseInt(pr_ammount) - parseInt(price.innerHTML);
        document.getElementById("pr_ammount").innerHTML=total_product;
       
        //for total + charge
        var newresult = total_product + parseInt(charge);
        document.getElementById("total_ammount").innerHTML = newresult;

    }
}



var kupon_main = document.getElementById("kupon_main");
kupon_main.style.display="block";  

var applybtn = document.getElementById("applybtn");
applybtn.addEventListener('click',function(){
    
    var kuponInput = document.getElementById("kuponInput");
    var total_ammount = document.getElementById("total_ammount").innerHTML;
    if(kuponInput.value == 'Shudipta'){
        var total = parseInt(total_ammount)-100;
        document.getElementById("total_ammount").innerHTML = total;
        alert('congratulation');
        kupon_main.style.display="none";
    }
    else{
        alert("kupon does not match");
    }


});