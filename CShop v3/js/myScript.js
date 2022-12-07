import notebookData from './modules/myData.js';

window.addEventListener("load", filterData);

var notebookDataObject = document.getElementById("notebookData");

var onDiscountChecked = document.getElementById('onDiscount');
onDiscountChecked.addEventListener('click', filterData);

var notOnDiscountChecked = document.getElementById('notOnDiscount');
notOnDiscountChecked.addEventListener('click', filterData);

function filterData() {
    var tmpString = "";

    for (let i = 0; i < notebookData.length; i++) {
        if (onDiscountChecked.checked & notebookData[i].PriceOld != notebookData[i].PriceNew) {
            tmpString += createHTMLData(notebookData[i]);
        }
        else if (notOnDiscountChecked.checked & notebookData[i].PriceOld == notebookData[i].PriceNew) {
            tmpString += createHTMLData(notebookData[i]);
        }
    }
    if (tmpString != "") {
        //console.log(tmpString);
        notebookDataObject.innerHTML = tmpString;
    }
    else {
        tmpString = `<div class="display-1">Nema takvih laptopova!</div>`;
        //console.log(tmpString);
        notebookDataObject.innerHTML = tmpString;
    }
}

function createHTMLData(notebookItem) {
    return `<div class="col-12 col-md-4 col-lg-3 mb-5">
        <div class="card h-100">
        <div class="card-header text-center text-uppercase h3">
            ${notebookItem.brandName}
        </div>
        <img src="${notebookItem.ThumbImage}" class="card-img-top" alt="${notebookItem.brandName}">
        <div class="card-body">
            <h5 class="card-title">Model: ${notebookItem.modelName}</h5>
            <p class="card-text">RAM: ${notebookItem.ramMemory}</p>
            <p class="card-text">SSD: ${notebookItem.SSD}</p>
            <p class="card-text">Ekran: ${notebookItem.ScreenDiagonal}</p>
            <p class="card-text">Rezolucija: ${notebookItem.ScreenResolution}</p>
            <p class="card-text">Tip ekrana: ${notebookItem.ScreenType}</p>
            <p class="card-text">Grafička: ${notebookItem.Graphics}</p>
            <p class="card-text">Cena: ${priceMarkup(notebookItem.PriceOld,notebookItem.PriceNew)}</p>
        </div>
        <div class="card-footer text-center">
            <button type="button" class="btn btn-lg btn-primary">Buy this item!</button>
        </div>
        </div>
    </div>`;
}

function priceMarkup(lowerPrice,higherPrice) {
    // if (lowerPrice == higherPrice) {
    //     return lowerPrice;
    // }
    // else {
    //     return `${lowerPrice} (<del>${higherPrice}</del>)`;
    // }

    // Može se napisati kraće koristeći ternarni operator
    return lowerPrice == higherPrice ? lowerPrice : `${lowerPrice} (<del>${higherPrice}</del>)`;
}