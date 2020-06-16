class Calculator{
    static display(getNumber,){
        if (getNumber === '.' && curScreen.innerHTML.includes('.')){
            return;
        }else{
        curScreen.innerHTML += getNumber;
        }   
    }
    static displaySym(operationSym){
        let len = prevScreen.innerHTML.length; 
        let curLen = curScreen.innerHTML.length;
        if ((prevScreen.innerHTML.charAt(len-1)=== "/" ||
            prevScreen.innerHTML.charAt(len-1)=== "*" || 
            prevScreen.innerHTML.charAt(len-1)=== "-" ||
            prevScreen.innerHTML.charAt(len-1)=== "+") && 
            (curScreen.innerHTML === '')){
             exit(1);
        }
        if ((prevScreen.innerHTML.charAt(len-1)=== "/" ||
        prevScreen.innerHTML.charAt(len-1)=== "*" || 
        prevScreen.innerHTML.charAt(len-1)=== "-" ||
        prevScreen.innerHTML.charAt(len-1)=== "+") &&
        (curScreen.innerHTML.charAt(curLen-1)=== '.')){
            exit(1);
        }
        prevScreen.innerHTML += curScreen.innerHTML + 
        operationSym;
        this.clear();
    }
    static delete(){
        if (curScreen.innerHTML !== ''){
            let len = curScreen.innerHTML;
            let curText = curScreen.innerHTML;
            curScreen.innerHTML = 
            curScreen.innerHTML.substring(0, curText.length-1);
            console.log(curScreen.innerHTML);
        }
    }
    static clear(){
        curScreen.innerHTML = '';
    }
    static allClear(){
        curScreen.innerHTML = '';
        prevScreen.innerHTML = '';
    }
    static compute(){
        let result;
        if (prevScreen.innerHTML === ''){
            return;
        }
        if (curScreen.innerHTML === ''){
            return;
        }
        result = prevScreen.innerHTML + curScreen.innerHTML;
        console.log(result)
        let screen;
        screen = eval(result);
        console.log(screen);
        // screen = eval(result);
        prevScreen.innerHTML = '';
        curScreen.innerHTML = screen.toString();
    }

}
const prevScreen = document.querySelector("[data-previousScreen]");
const curScreen = document.querySelector("[data-currentScreen]");
const number = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const clearing = document.querySelector("[data-all-clear]");
const deleting = document.querySelector("[data-delete]");
const equalsTo = document.querySelector("[data-equals]");

number.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        Calculator.display(e.target.innerHTML);
    });
});
operation.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        Calculator.displaySym(e.target.innerHTML);
    });
});
clearing.addEventListener('click', (e)=>{
    Calculator.allClear();
});
deleting.addEventListener('click', (e)=>{
    Calculator.delete();
});
equalsTo.addEventListener('click', (e)=>{
    Calculator.compute();
});