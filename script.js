
function finalPrice() {

    let goldRate = parseFloat(document.getElementById("goldRate").value) || 0

    let carat = parseFloat(document.getElementById("carat").value) || 0

    let weight = parseFloat(document.getElementById("weight").value) || 0

    let rate = goldRate * (carat/24) * weight

    let making = 0.07 * (goldRate*weight)

    let gst = 0.03 * (making+rate)

    let sum = rate + making + gst  

    document.getElementById("finalprice").textContent = sum
}

function finalPriceTQ() {

    let goldRateTQ = parseFloat(document.getElementById("goldRateTQ").value) || 0

    let caratTQ = parseFloat(document.getElementById("caratTQ").value) || 0

    let weightTQ = parseFloat(document.getElementById("weightTQ").value) || 0

    let rateTQ = goldRateTQ * (caratTQ/24) * weightTQ

    let makingTQ = 0.165 * (goldRateTQ*weightTQ)

    let gstTQ = 0.03 * (makingTQ+rateTQ)

    let sumTQ = rateTQ + makingTQ + gstTQ  

    document.getElementById("finalPriceTQ").textContent = sumTQ
}

function finaldiff(){

    let Diff = parseInt(finalPriceTQ.sumTQ) - parseInt(finalPrice.sum)
    document.getElementById("finaldiff").textContent = Diff
    
}