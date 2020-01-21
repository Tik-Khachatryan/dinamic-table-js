
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let btn = document.querySelector('button');


btn.onclick = () => {
    if(inp1.value !== '' && inp2.value !== ''){
        document.write(`<table border="1">`);
        for(let i = 0; i < +inp1.value; i++){
            for(let j = 0; j < +inp2.value; j++){
                document.write('<th style="width: 50px;height: 50px">');
                document.write('</th>')
            }
        document.write(`</tr>`)
        }
        document.write(`</table>`)
    }else{
        alert('inputs must be required');
    }

};
