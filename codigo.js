const botonCalc=document.getElementById('calcular')

botonCalc.addEventListener('click',calculo)

const botonRes=document.getElementById('reset')

botonRes.addEventListener('click',reset)
    
function calculo(){
    let cant=document.getElementById('Cantidad').value
    let categoria=document.getElementById('Categoría').value
    const precio=200

    let desc=0
    switch (categoria) {
        case 'Estudiante':
            desc=0.2
            break;
    
        case 'Trainee':
            desc=0.5
            break;
            case 'Junior':
                desc=0.85
                break;

    }
    console.log(desc)
    console.log(cant)
    if(cant>0){
        let valor=cant*desc*precio
        
        document.getElementById('Total').innerText='Total a pagar: $'+Math.floor(valor)
        
        
        
    }else
    document.getElementById('Total').innerText='Ingrese una cantidad mayor a "0" '
        //document.getElementById('Total').innerText('Ingrese la cantidad de tickets deseada')

}

function reset(){
    document.getElementById('Total').innerText='Total a pagar: $'
    
}

function altimg1(){
    document.getElementById("img-ba1img").src="https://github.com/maro9183/myPage/blob/main/Images/Looker.png?raw=true"

}