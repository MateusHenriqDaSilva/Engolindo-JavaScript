const refeicaos = document.getElementById("refeicao");
getAleatorioLanche();
fetchRefeicao()

async function getAleatorioLanche() {
  const resposta = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respostaData = await resposta.json();
  const refeicaoAleatoria = respostaData.meals[0];
  adicionarRefeicao(refeicaoAleatoria, true);
}

async function getRefeicaoPorId(id) {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );

  const respData = await resp.json()
  const refeicao = respData.meals[0]

  return refeicao
}

async function getLanchePorPesquisa(pesquisa) {
  const todasRefeicao = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + pesquisa
  );
}

function adicionarRefeicao(refeicaoData, aleatorio = false) {
  console.log(refeicaoData)

  const refeicao = document.createElement("div");
  refeicao.classList.add("refeicao");

  refeicao.innerHTML = `<div class="lanche">
    <div class="refeicaoCabecalho">
        ${
          aleatorio
            ? `
            <span class="aleatorio">
            Recipiente Aleatorio
        </span>`
            : ""
        }
        <img src="${refeicaoData.strMealThumb}" alt="${refeicaoData.strMeal}">
    </div>
    <div class="lancheCorpo">
        <h4>${refeicaoData.strMeal}</h4> 
        <button class="lancheBotao onClick="">
            <i class="fas fa-heart">
            </i>
        </button>
    </div>
</div>`;
  const botao = refeicao.querySelector(".lancheCorpo .lancheBotao");
  botao.addEventListener("click", () => {
    if(botao.classList.contains('active')) {
      removeRefeicaoLs(refeicaoData.idRefeicao)
      botao.classList.remove("active");
    } else {
      addRefeicaoLs(refeicaoData.idRefeicao)
      botao.classList.add("active");
    }
  });
  refeicaos.appendChild(refeicao);
}

function addRefeicaoLs(refeicaoId){
    const refeicaoIds = getRefeicaoLs()

    localStorage.setItem('refeicaoIds', JSON.stringify([...refeicaoIds,refeicaoId]))
}

function removeRefeicaoLs(refeicaoId){
    const refeicaoIds = getRefeicaoLs()

    localStorage.setItem('refeicaoId', JSON.stringify(refeicaoIds.filter((id) => 
        id !== refeicaoId
    )))
}

function getRefeicaoLs(){
    const refeicaoIds = JSON.parse(localStorage.getItem('mealIds'))
    
    return refeicaoIds === null ? [] : refeicaoIds
}

async function fetchRefeicao(){
  const refeicaoIds = getRefeicaoLs()


  const refeicaos = []

  for(let i = 0; i< refeicaoIds.length; i++) {
    const refeicaoId = refeicaoIds[i]
    
    refeicao = await getRefeicaoPorId(refeicaoId)
    refeicaos.push(refeicao)
  }

  console.log(refeicaos)
}