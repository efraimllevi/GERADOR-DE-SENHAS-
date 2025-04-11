function gerarSenha() {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const especiais = '@#$%&*!?.';
  
    // Garante pelo menos 1 de cada
    let senha = '';
    senha += letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
    senha += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += especiais[Math.floor(Math.random() * especiais.length)];
  
    // Mistura os demais caracteres aleatórios
    const todos = letrasMaiusculas + letrasMinusculas + numeros + especiais;
    for (let i = senha.length; i < 8; i++) {
      senha += todos[Math.floor(Math.random() * todos.length)];
    }
  
    // Embaralha a senha para não ficar previsível
    senha = senha.split('').sort(() => 0.5 - Math.random()).join('');
  
    // Exibe no input
    const campoSenha = document.getElementById('senha');
    campoSenha.value = senha;
    campoSenha.style.borderColor = '#28a745'; // feedback visual (verde)
    setTimeout(() => campoSenha.style.borderColor = '#dcdcdc', 1000);
  }
  