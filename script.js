function responderPergunta() {
  const pergunta = document.getElementById('pergunta').value.toLowerCase();
  const respostaEl = document.getElementById('resposta');

  if (pergunta.includes('mitose')) {
    respostaEl.innerHTML = 'Mitose é a divisão celular que gera duas células idênticas, usadas para crescimento e reparo.';
  } else if (pergunta.includes('meiose')) {
    respostaEl.innerHTML = 'Meiose é a divisão celular que gera quatro gametas com variabilidade genética e metade dos cromossomos.';
  } else if (pergunta.includes('diferença')) {
    respostaEl.innerHTML = 'A mitose gera células iguais, enquanto a meiose gera células com metade dos cromossomos e diversidade genética.';
  } else {
    respostaEl.innerHTML = 'Hmm... ainda estou aprendendo! Tente perguntar algo sobre mitose ou meiose. 😊';
  }
}
