let string=""
let memoryvalue=0
let buttons=document.querySelectorAll('.button');
const calcpow=(string)=>{
    let [base,expo]=string.split("^");
    return Math.pow(parseFloat(base),parseFloat(expo));
}
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if(string.includes("^")){
                string=calcpow(string);
            }
            else if(string.includes("√")){
                let num=string.split("√")[1];
                string=Math.sqrt(num);
            }
            else{
                string=eval(string);
            }
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="Mr"){
            memoryvalue=string;
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="Mc"){
            memoryvalue="";
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="M+"){
            memoryvalue=parseInt(memoryvalue)+parseInt(string);
            string=memoryvalue;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="M-"){
            memoryvalue=parseInt(memoryvalue)-parseInt(string);
            string=memoryvalue;
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})