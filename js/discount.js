document.getElementById('btn-get').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

    if(inputValue === 'DISC30'){
    const productPriceId = document.getElementById('Product-price');
    const productPrice = parseFloat(productPriceId.innerText);
    
    const discountId = document.getElementById('discount-vlaue');
    const discountAmount = discountId.innerText;
    const newDiscountAmount = productPrice - 700;
    discountId.innerText = newDiscountAmount;

    const finalpayId = document.getElementById('final-pay');
    const finalPay = parseFloat(finalpayId.innerText);
    const newFinalPay =productPrice-newDiscountAmount;
    finalpayId.innerText=newFinalPay;
    }
    else if(inputValue !== 'DISC30'){
        alert("You entered the wrong coupon code so you won't get the discount!")
    
    const productPriceId = document.getElementById('Product-price');
    const productPrice = parseFloat(productPriceId.innerText);
    
    const discountId = document.getElementById('discount-vlaue');
    const discountAmount = parseFloat(discountId.innerText);
    const newDiscountAmount = discountAmount + 0;
    discountId.innerText = newDiscountAmount;

    const finalpayId = document.getElementById('final-pay');
    const finalPay = parseFloat(finalpayId.innerText);
    const newFinalPay =productPrice - 0;
    finalpayId.innerText=newFinalPay;
    }
    
    

    
    
    
    
    
    


})