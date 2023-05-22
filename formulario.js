let btn_enviar = document.querySelector('#btn_enviar')
let res = document.querySelector('#res')
let res2 = document.querySelector('#res2')
let prod_array = []
let qtde_array = []
let preco_laranja = 5.49, preco_limao = 3.99, preco_pera = 8.89

btn_enviar.addEventListener('click', ()=>{
    res.innerHTML = ''  //para atualizar e escrever na tela só o ultimo elemento selecionado
    let produto = document.querySelector('#produto').value
    let qtde = Number.document.querySelector('#qtde').value
    prod_array.push(produto)
    qtde_array.push(qtde)
    console.log(prod_array)
    console.log(qtde_array)
    res.innerHTML += '<br>' + 'Produto = ' + produto +  ' e quantidade = ' + qtde + 'kg'

    console.log(prod_array)
    console.log(qtde_array)
})

btn_calcular.addEventListener('click', ()=>{
    let toal = 0.0
    for(i=0;i<prod_array.length;i++){
        if(prod_array[i]== 'laranja'){
            total = total + preco_laranja*qtde_array[i]
        }
        if(prod_array[i]== 'limao'){
            total = total + preco_limao*qtde_array[i]
        }
        if(prod_array[i]== 'pera'){
            total = total + preco_pera*qtde_array[i]
        }
    }
    console.log(total)
    res2.innerHTML += '<br>' + 'Valor total R$ ' + total.toFixed(2)
    res2.style.color = 'darkblue'
    res2.style.fontWeight = 'bolder'
    res2.style.fontSize = '1.4rem'
})
