function listaPets(){
    window.location.href="listaPets.html";
}

function cardPets(){
    window.location.href="cardPet.html";
}

function voltar(){
    window.location.href="index.html";
}
// Mostrar ou esconder botão de voltar ao topo
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

