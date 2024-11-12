const usuarios = [
    {
    nome : 'Ana',
    idade : 20,
    cpf : '38908397489'
},
    {
    nome : 'Carla',
    idade : 37,
    cpf : '78357927899'
},
    {
    nome : 'João',
    idade : 28,
    cpf : '78768565423'
}
];

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputCpfElement = document.querySelector('#cpf');
    const inputIdadeElement = document.querySelector('#idade');
    
    const usuario = {
        nome: inputNomeElement.value,
        idade: inputIdadeElement.value,
        cpf: inputCpfElement.value
    };

    inserirUsuarioNaLista(usuario);

    inputNomeElement.value = '';
    inputIdadeElement.value = '';
    inputCpfElement.value = '';
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = `${usuario.nome} - ${usuario.idade} - ${usuario.cpf} `;

    spanElement.addEventListener('click', () => {
        const inputElement = document.createElement('input');
        inputElement.value = `${usuario.nome} - ${usuario.idade} - ${usuario.cpf}`;
        
        liElement.appendChild(inputElement);
        spanElement.remove();

        inputElement.addEventListener('blur', () => {
            const novosDados = inputElement.value.split(' - ');
            usuario.nome = novosDados[0];
            usuario.idade = novosDados[1];
            usuario.cpf = novosDados[2];

            spanElement.textContent = `${usuario.nome} - ${usuario.idade} - ${usuario.cpf} `;
            liElement.appendChild(spanElement);
            inputElement.remove();
        });
    });


    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaUsuariosElement.appendChild(liElement);
}



