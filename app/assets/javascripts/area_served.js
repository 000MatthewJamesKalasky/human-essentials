function calculateClientShareTotal(){
    total = 0;
    const clientShares = document.querySelectorAll('*[id$="client_share"]')
    clientShares.forEach(
        cs => {
            if(!cs.value || cs.offsetWidth === 0){
                return;
            }
            if(cs.value){
                total += parseInt(cs.value)
            }
        }
    );
    document.getElementById("partners-served-areas-client-share-total").innerHTML = total + " %";

    if(total == 0 || total == 100){
        document.getElementById("partners-served-areas-client-share-total-warning").style.visibility= 'hidden';
    }else {
        document.getElementById("partners-served-areas-client-share-total-warning").style.visibility= 'visible';
        document.getElementById("partners-served-areas-client-share-total-warning").style.color= 'red';
    }
    return total;
}

//Following the pattern from adjustments.js

$(document).on("cocoon:after-remove", function(){
    calculateClientShareTotal();
});

