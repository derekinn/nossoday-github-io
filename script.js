const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');

naoButton.addEventListener('mouseover', () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  naoButton.style.transform = `translate(${x}px, ${y}px)`;
});

simButton.addEventListener('click', () => {
  const container = document.querySelector('.container');

  const img = document.createElement('img');
  img.src = 'vtnc.jpg';
  img.alt = 'VTNC';
  container.appendChild(img);
  container.removeChild(document.querySelector('.botoes'));

  const audio = document.getElementById('myAudio');
  audio.play();

  const fecharButton = document.createElement('button');
  fecharButton.textContent = 'Fechar';
  container.appendChild(fecharButton);

  fecharButton.addEventListener('click', () => {
    container.removeChild(img);
    container.removeChild(fecharButton);
    audio.pause();
    audio.currentTime = 0;

    const originalBotoesDiv = document.createElement('div');
    originalBotoesDiv.classList.add('botoes');
    const originalSimButton = document.createElement('button');
    originalSimButton.id = 'sim';
    originalSimButton.textContent = 'Sim';
    const originalNaoButton = document.createElement('button');
    originalNaoButton.id = 'nao';
    originalNaoButton.textContent = 'Não';
    originalBotoesDiv.appendChild(originalSimButton);
    originalBotoesDiv.appendChild(originalNaoButton);
    container.appendChild(originalBotoesDiv);

    originalNaoButton.addEventListener('mouseover', () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      originalNaoButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    originalSimButton.addEventListener('click', () => {
      simButton.click(); 
    });
  });
});