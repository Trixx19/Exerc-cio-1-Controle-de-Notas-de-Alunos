document.addEventListener('DOMContentLoaded', function() {

    
    const studentForm = document.getElementById('studentForm');
    const nomeInput = document.getElementById('nomeAluno');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const studentList = document.getElementById('studentList');
    const limparListaBtn = document.getElementById('limparLista');

 
    studentForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        const nome = nomeInput.value;
        const nota1 = parseFloat(nota1Input.value);
        const nota2 = parseFloat(nota2Input.value);

        if (!nome || isNaN(nota1) || isNaN(nota2)) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

       
        const media = (nota1 + nota2) / 2;

       
        const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';
        const className = media >= 7 ? 'aprovado' : 'reprovado';

        const newRow = document.createElement('tr');
        newRow.className = className;

        
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${nota1.toFixed(1)}</td>
            <td>${nota2.toFixed(1)}</td>
            <td>${media.toFixed(2)}</td>
            <td>${situacao}</td>
        `;

      
        studentList.appendChild(newRow);

        studentForm.reset();
        
        nomeInput.focus();
    });

    limparListaBtn.addEventListener('click', function() {
    
        studentList.innerHTML = '';
    });

    studentList.addEventListener('click', function(event) {
        const row = event.target.closest('tr');
        
        if (confirm('Deseja realmente remover este aluno da lista?')) {
            row.remove();
        }
    });

});