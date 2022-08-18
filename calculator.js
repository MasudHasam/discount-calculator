//connect to the apply button.
document.getElementById("applyBtn").addEventListener("click", function () {
    const getInputPriceString = document.getElementById("inputPrice");
    const getInputPriceNormal = parseFloat(getInputPriceString.value);
    const getInputPrice = Math.abs(getInputPriceNormal);
    getInputPriceString.value = "";
    if (isNaN(getInputPrice)) {
        alert("Invalid input");
        return;
    };
    const discountPrice = getInputPrice / 100 * 30;
    const cupon = document.getElementById("cupon");
    const cuponValue = cupon.value;
    cupon.value = "";
    const finalprice = document.getElementById("finalPrice");
    // const finalPriceValue = finalprice.innerText;
    if (cuponValue === "DOM") {
        finalprice.innerText = discountPrice.toFixed(2);
        console.log(discountPrice)
    }
    else {
        alert("Invalid discount cupon.You have to pay 100%")
        finalprice.innerText = getInputPrice;
    }
});