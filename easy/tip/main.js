function getInputs() {
    const cost = document.getElementById("cost").value;
    const people = document.getElementById("people").value;
    const tax = document.getElementById("tax").value;
    const tip = document.getElementById("tip").value;
    return {
        cost,
        people,
        tax,
        tip
    }

}


const calculateTax = (cost, tax) => {
    return cost * tax * 0.01;
}

const calculateTip = (cost, tip) => {
    return cost * tip * 0.01;
}

const calculateTotalCost = () => {
    let {cost, people, tax, tip} = getInputs();
    const taxAmount = calculateTax(cost, tax);
    const tipAmount = calculateTax(cost, tip);
    const total = parseInt(cost) + parseInt(taxAmount) + parseInt(tipAmount);
    return Math.round(total * 100) / 100;
}

const costPerPerson = () => {
    let {cost, people, tax, tip} = getInputs();
    const totalCost = calculateTotalCost()
    return Math.round((totalCost/people) * 100) / 100
}

const updateInfo = () => {
    const totalCost = calculateTotalCost();
    const costPer = costPerPerson();
    const string = `The total bill is $${totalCost}, costing $${costPer} per person`
    const info = document.getElementById("info");
    info.innerHTML = string
}
    