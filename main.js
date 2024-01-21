const formAgenda = document.getElementById('formAgenda')
let linhas = '';


formAgenda.addEventListener('submit', function(e) {
    e.preventDefault()

    adcLinha()
    atualizaTabela()
})

function adcLinha() {
    const campoNome = document.getElementById('campoNome')
    const campoNum = document.getElementById('campoNum')

    let linha = '<tr>';
    linha += `<td class="cBorda">${campoNome.value}</td>`
    linha += `<td class="cBorda">${campoNum.value}</td>`
    linha += `<td><a href="https://web.whatsapp.com/send?phone=55${campoNum.value}" target="_blank"><img src="img/whatsapp.png" alt="WhatsApp Icon"></a></td>`
    linha += '</tr>' 
    
    linhas += linha
}

function atualizaTabela() {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = linhas;

}

