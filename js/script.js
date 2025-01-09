function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const genero = document.getElementById('genero').value;

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || !genero) {
        alert('Por favor, insira valores válidos para peso, altura e gênero.');
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    const figura = document.getElementById('figura');

    let classificacao = '';
    let figuraSrc = '';
    let descricao = '';

    if (imc < 18.5) {
        classificacao = 'Baixo peso';
        figuraSrc = 'img/baixo-peso.png';
        descricao = 'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
        figuraSrc = 'img/peso-normal.png';
        descricao = 'Que bom que você está com o peso normal! O melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Excesso de peso';
        figuraSrc = 'img/excesso-peso.png';
        descricao = 'Ele é, na verdade, uma pré-obesidade, e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de entrar na faixa da obesidade.';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade de Classe 1';
        figuraSrc = 'img/obesidade-classe1.png';
        descricao = 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Inicie mudanças hoje! Cuide da alimentação e procure acompanhamento com um nutricionista e/ou endocrinologista.';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade de Classe 2';
        figuraSrc = 'img/obesidade-classe2.png';
        descricao = 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.';
    } else {
        classificacao = 'Obesidade de Classe 3';
        figuraSrc = 'img/obesidade-classe3.png';
        descricao = 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.';
    }

    resultado.innerHTML = `
        Seu IMC é ${imc.toFixed(2)} (${classificacao}).<br>
        Gênero: ${genero}<br><br>
        ${descricao}
    `;
    figura.src = figuraSrc;
    figura.alt = classificacao;
    figura.style.display = 'block';
}
