export async function searchRecipe(id : string) {
  const resposta = await fetch(`http://10.92.198.12:8080/receitas/${id}`)

  if (!resposta.ok){
    throw new Error("Erro ao buscar receita")
  }

  return resposta.json();
}
