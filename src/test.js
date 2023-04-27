export const settings = {
    /* [..] Other settings */
    functionName: 'clickedOnItem'
    /* , [..] More settings */
};

export const clickedOnItem = (nodeId) => {
    alert("----")
}

var fn = window[settings.functionName];

if(typeof fn === 'function') {
    fn(t.parentNode.id);
}