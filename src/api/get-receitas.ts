export async function searchRecipes() {
  const resposta = await fetch("http://10.92.198.12:8080/receitas");

  if(!resposta.ok){
    throw new Error("Erro ao buscar receita")
  }

  const json = await resposta.json();

  return json;
}
