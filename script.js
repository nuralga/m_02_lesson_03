'use strict';

const getUserText = () => {
    return prompt('Введите текст');
}

const detectText = (userTxt) => {
    if (userTxt === null) {
        return;
    } else {
        let trimedTxt = userTxt.trim();
        if (trimedTxt === 'del'){
            deleteLastItem();
        } else if (trimedTxt === 'clear'){
            clearList();
        } else if (trimedTxt === 'exit'){
            console.log('here exit');
            return;
        } else {
            if (trimedTxt !== '') {
                appendLi(trimedTxt);
            }
            main();    
        }
    }
    
}

const deleteLastItem = () => {
    let list = document.querySelector('ul');
    list.removeChild(list.lastElementChild);
}

const clearList = () => {
    document.querySelector('ul').innerHTML = "";
    console.log('here clear');
}

const appendLi = (...userText) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.append(userText);
    if (ul.getElementsByTagName('li').length >= 1){
        let lastLi = document.querySelector('ul').lastElementChild;
        lastLi.insertAdjacentElement('afterend', li);
    }else {
        ul.insertAdjacentElement('afterbegin', li);
    }
}

const main = () => {
    const userTxt = getUserText();
    console.log('userTxt: ', userTxt);
    detectText(userTxt);
}

main();