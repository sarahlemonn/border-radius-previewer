const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const box = document.getElementById('box');

const cssCode = document.getElementById('css-code');

const copyBtn = document.getElementById('copy-btn');
const copied = document.getElementById('copied');

inputs = [topLeft, topRight, bottomLeft, bottomRight];

let cssTopLeft = 'border-top-left-radius: 0px; \n';
let cssTopRight = 'border-top-right-radius: 0px; \n';
let cssBottomLeft = 'border-bottom-left-radius: 0px; \n';
let cssBottomRight = 'border-bottom-right-radius: 0px; \n';

inputs.forEach(input => {

    input.addEventListener('input', () => {

        value = input.value;


        

        switch(input) {
            case inputs[0] :
                box.style.borderTopLeftRadius = value + 'px';
                cssTopLeft = 'border-top-left-radius: ' + value + 'px; \n';
                break;
            case inputs[1] :
                box.style.borderTopRightRadius = value + 'px';
                cssTopRight = 'border-top-right-radius: ' + value + 'px; \n';
                break;
            case inputs[2] :
                box.style.borderBottomLeftRadius = value + 'px';
                cssBottomLeft = 'border-bottom-left-radius: ' + value + 'px; \n';
                break;
            case inputs[3] :
                box.style.borderBottomRightRadius = value + 'px';
                cssBottomRight = 'border-bottom-right-radius: ' + value + 'px; \n';
                break;
        }
        
        cssCode.innerText = cssTopLeft + cssTopRight + cssBottomLeft + cssBottomRight;
 

    })

});

function removeNotif() {

    copied.style.display = 'none';

}

copyBtn.addEventListener('click', () => {

cssCode.select();
cssCode.setSelectionRange(0, 99999);
navigator.clipboard.writeText(cssCode.value);

    copied.style.display = 'block';
    setTimeout(removeNotif, 3000);

})
