
const ActionResolver = (targetType, event) => {
    if (targetType === "blank") {
        targetBlank(event);
    }
    else if (targetType === "modal") {
        targetModal(event);
    } else {
        targetSame(event);
    }
}
const targetBlank = () => {

}

const targetModal = () => {

}

const targetSame = () => {

}