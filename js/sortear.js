const submeterFormulario = () => {
    const rangeInicial = document.getElementById('rangeInicial').value;
    const rangeFinal = document.getElementById('rangeFinal').value;
    const minhaAposta = document.getElementById('minhaAposta').value;

    realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}

const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta) => {

    if(!rangeInicial){
        alert('Informe o Range Inicial!');
        return;
    }

    if(!rangeFinal){
        alert('Informe o Range Final!');
        return;
    }

    if(!minhaAposta){
        alert('Informe a sua Aposta!');
        return;
    }

        const numeroSortear = novoSorteio(rangeInicial, rangeFinal);

        if(numeroSortear === minhaAposta) {
            alert('Parabéns! Você acertou !!')
            return;
        }

        alert(`Errou! O numéro sorteado foi ${numeroSortear}`);
    }


    const novoSorteio = (rangeInicial, rangeFinal) => {
        return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1)) + rangeInicial);
    } 

    