
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


function Difference() {

    let goldRateFN = parseFloat(document.getElementById("goldRateFN").value) || 0
    let caratFN = parseFloat(document.getElementById("caratFN").value) || 0
    let weightFN = parseFloat(document.getElementById("weightFN").value) || 0
    let rateFN = goldRateFN * (caratFN/24) * weightFN

    let makingTQ = 0.165 * (goldRateFN*weightFN)
    let gstTQ = 0.03 * (makingTQ+rateFN)
    let sumTQ = rateFN + makingTQ + gstTQ

    let makingVM = 0.07 * (goldRateFN*weightFN)
    let gstVM = 0.03 * (makingVM+rateFN)
    let sumVM = rateFN + makingVM + gstVM

    let sumFN = sumTQ - sumVM

    document.getElementById("Difference").textContent = sumFN
}

