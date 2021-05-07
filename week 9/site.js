let fleet = []

function init() {
}


function btnSave() {

    const carObject = {};
    carObject.mf = document.getElementById("tbCarMF").value;
    carObject.model = document.getElementById("tbCarModel").value;
    carObject.engine = document.getElementById("tbCarEngine").value;

    console.log({carObject});

    fleet.push(carObject)    

    const carObjectAsString = JSON.stringify(fleet);
    localStorage.setItem("fleet",carObjectAsString)

}

function btnRetrieve () {

    const carDataAsString = localStorage.getItem("fleet");

    if (carDataAsString === null || carDataAsString === undefined) {
        console.log(`No data found`);
        return;
    }

    const fleetAsObject = JSON.parse(carDataAsString);

    console.log(fleetAsObject);
}

function btnRetrieve()
const carDataAsString = localStorage.getItem("fleet");

if (carDataAsString === null || carDataAsString === undefined) {
    console.log(`No data found`);
    return;
}

const fleetAsObject = JSON.parse(carDataAsString);

console.log(fleetAsObject);

}

function renderData(fleet) {

    let listeningDiv = document.getElementById("tbodyCarData")

    listeningDiv.innerHTML = '';
    htmlString = [];

    for(const [index,currentCar] of fleet.entries()) {
        console.log(`${index}${currentCar.mf}${currentCar.model}${currentCar.engine}`);
        const removeButton = `button class='ntm btn-primary'> onclick='removeCar(${index})'>Remove ${index}</button>`;
        const rowItem =`<tr><td>${currentCar.mf}</td><td>${currentCar.model}<td><td>${currentCar.engine}</td><td>${removeButton}</td><td>`

        htmlString.push(rowItem);

    }

    listeningDiv.innerHTML=htmlString.join('');
}

function removeCar(indexOfCar) {
    
}
