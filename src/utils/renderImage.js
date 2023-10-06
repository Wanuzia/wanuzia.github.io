import locales from './locale.json';

export const getURL = (locale) => {
    const { image } = locales[locale];
    console.log(image);
}
// URL da imagem
const imageUrl = 'https://res.cloudinary.com/dc8mp7dgl/image/upload/v1694183400/desenvolve/foto_wan_baqftf.jpg';

// Cria uma requisição AJAX para a imagem
const xhr = new XMLHttpRequest();
xhr.open('GET', imageUrl, true);
xhr.responseType = 'blob';

xhr.onload = function() {
  if (this.status === 200) {
    // Cria um objeto Blob com a imagem
    const blob = new Blob([this.response], { type: 'image/jpg' });

    // Cria uma URL temporária para o objeto Blob
    const imageUrl = URL.createObjectURL(blob);

    // Insere a imagem no HTML
    const imageContainer = document.querySelector("#profile-pic");
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "foto de rosto de Wanuzia Braga, mulher negra sorrindo, com cabelos cacheados soltos na altura do ombro, veste blusa sem manga laranja."
    imageContainer.appendChild(img);

    // Revoga a URL temporária após a imagem ser carregada
    img.onload = function() {
      URL.revokeObjectURL(imageUrl);
    };
    img.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
  }
};

xhr.send();