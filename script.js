const pets = [
    { nome: "Max", idade: "2 meses", sexo: "Macho", local: "São Paulo, SP", imagem: "./icons/img-pet-1.jpg"},
    { nome: "Bella", idade: "1 ano", sexo: "Fêmea", local: "Rio de Janeiro, RJ", imagem: "./icons/img-pet-2.jpg" },
    { nome: "Thor", idade: "3 anos", sexo: "Macho", local: "Belo Horizonte, MG", imagem: "./icons/img-pet-3.jpg" },
    { nome: "Luna", idade: "6 meses", sexo: "Fêmea", local: "Curitiba, PR", imagem: "./icons/img-pet-4.jpg" },
    { nome: "Charlie", idade: "4 anos", sexo: "Macho", local: "Porto Alegre, RS", imagem: "./icons/premium_photo-1723708857381-82e3b34187b5.avif" },
    { nome: "Mia", idade: "2 anos", sexo: "Fêmea", local: "Salvador, BA", imagem: "./icons/premium_photo-1723709060226-94c6d0a9b5d7.avif" },
    { nome: "Rocky", idade: "5 meses", sexo: "Macho", local: "Fortaleza, CE", imagem: "./icons/photo-1561495376-dc9c7c5b8726.avif" },
    { nome: "Daisy", idade: "1 ano", sexo: "Fêmea", local: "Recife, PE", imagem: "./icons/photo-1737309657220-025e96d413fe.avif" },
 
  ];
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('petsContainer');// Pega o container onde os cards serão inseridos
  
    if (!container) return;
  
    const maxPets = parseInt(container.dataset.maxPets);
  // Adiciona os cards dinamicamente
    for (let i = 0; i < maxPets && i < pets.length; i++) {
      const pet = pets[i];

    // Cria a div do card
      const card = document.createElement('div');
      card.className = 'card_pet';

     // Adiciona conteúdo HTML ao card
      card.innerHTML = `
        <img src="${pet.imagem}" alt="Pet ${pet.nome}" class="pet_image">
        <div class="pet_info">
          <h4>${pet.nome}</h4>
          <p>${pet.sexo} - ${pet.idade}</p>
          <p>${pet.local}</p>
          <button class="ver_button" onclick= "cardPets()" >Quero Adotar</button>
        </div>
      `;
  
      container.appendChild(card);
    }
     
    // Botão voltar ao topo
    const btnTopo = document.getElementById("btnTopo");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTopo.style.display = "block";
      } else {
        btnTopo.style.display = "none";
      }
    });
  // Rolagem suave para o topo
    btnTopo?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

   // Navegação entre páginas
   function listaPets() {
    window.location.href = "listaPets.html";
  }

  function cardPets() {
    console.log("Botão clicado");
    window.location.href = "formulario.html";
  }

  function voltar(){
      window.location.href="index.html";
  }

  function enviarFormulario(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    alert("Obrigado! Em breve entraremos em contato com você.");
  
    event.target.reset();
  }