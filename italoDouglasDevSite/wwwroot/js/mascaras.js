//Pendente Finalização 202301102100


//Remover formatacao
function RemoverFormatacao(texto) {
    texto = texto.replaceAll('(', '');
    texto = texto.replaceAll(')', '');
    texto = texto.replaceAll('-', '');
    texto = texto.replaceAll(' ', '');
    return texto;
}



//Escuta o evento de click na classe mascaraTelefone
document.body.addEventListener('keyup', function (e) {
    if (!e.target.classList.contains('mascaraTelefone')) return;

    //Bloqueia para que tecla não seja adicionada ao input
    e.preventDefault();

    var campo = e.target;
    var tecla = e.key;

    var telefone = RemoverFormatacao(campo.value);

    switch (telefone.length) {
        case 1:
            telefone = '(' + tecla; break;
        case 2:
            telefone = '(' + telefone + ') '; break;
        case 3:
            telefone = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, (telefone.length - 1)); break;
        case 4:
        case 5:
        case 6:
        case 7:
            telefone = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 1) + ' ' + telefone.substr(3, (telefone.length - 1)); break;
        case 8:
        case 9:
        case 10:
        case 11:
            telefone = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 1) + ' ' + telefone.substr(3, 4) + '-' + telefone.substr(7, (telefone.length - 1)); break;
        default: break;
    }

    campo.value = telefone;


});



