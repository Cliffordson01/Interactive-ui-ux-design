document.addEventListener('mousemove', function (e) {
    // Criar o rastro de aura
    const aura = document.createElement('div');
    aura.classList.add('cursor-aura');
  
    // Definir a posição da aura
    aura.style.left = `${e.pageX - 50}px`; // Centralizando o efeito em torno do cursor
    aura.style.top = `${e.pageY - 50}px`;
  
    // Adicionar a aura ao body
    document.body.appendChild(aura);
  
    // Remover a aura após o fim da animação (1 segundo)
    setTimeout(() => {
      aura.remove();
    }, 1000);
  });

  // Efeito de ondulação no clique
document.addEventListener('click', function (e) {
    // Criar a onda na posição do clique
    const wave = document.createElement('div');
    wave.classList.add('wave');
  
    // Definir a posição da onda com base no ponto do clique
    wave.style.left = `${e.pageX - 50}px`; // Centraliza a onda no ponto de clique
    wave.style.top = `${e.pageY - 50}px`;  // Centraliza a onda no ponto de clique
  
    // Adicionar a onda ao body
    document.body.appendChild(wave);
  
    // Remover a onda após o fim da animação (1.5 segundos)
    setTimeout(() => {
      wave.remove();
    }, 1500);
  });