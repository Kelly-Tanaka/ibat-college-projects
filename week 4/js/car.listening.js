






function setUpCascadingList() {

    var selectMf = document.getElementById("selectMf");
    var selectModel = document.getElementById("selectModel")
    var selectVersion = document.getElementById("selectVersion")

    for(let mf in fleetSalesObject) {

        //selectMf.options[selectMf.options.length] = new Option(mf,mf);

        select 
    }

    selectMf.onchange = function () {
        
        selectModel.lenght = 0;

        for(let model in fleetSalesObject[this.value]) {
        
            selectModel.document.add(new Option(model,model));

        }
    }
}