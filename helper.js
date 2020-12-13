module.exports = {
    getDate: getDateFunc
}

function getDateFunc() {
    return `Our Date is -- ${(new Date())}`;
}