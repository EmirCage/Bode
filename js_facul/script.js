function criarElemento(tipo, texto, atributo = {}, classe = "") {
    const el = document.createElement(tipo);
    el.textContent = texto;
    if (classe) el.className = classe;
    for (let attr in atributo) {
      el.setAttribute(attr, atributo[attr]);
    }
    document.body.appendChild(el);
    return el;
  }
  
  // (1) Mensagem Olá Mundo
  criarElemento("h2", "1. Mensagem Olá Mundo:");
  criarElemento("p", "Olá Mundo!");
  
  // (2) Soma de dois inteiros
  criarElemento("h2", "2. Soma de dois números inteiros:");
  const a = 7, b = 3;
  criarElemento("p", `A soma de ${a} + ${b} é: ${a + b}`);
  
  // (3) Alterando por ID
  criarElemento("h2", "3. Alterando elemento por ID:");
  const elId = criarElemento("p", "Texto original", { id: "meuElemento" });
  elId.style.color = "green";
  elId.textContent = "Texto alterado por ID!";
  
  // (4) Alterando por NAME
  criarElemento("h2", "4. Alterando elemento por NAME:");
  const inputName = document.createElement("input");
  inputName.name = "meuInput";
  inputName.value = "Valor original";
  document.body.appendChild(inputName);
  inputName.value = "Valor alterado por name";
  
  // (5) Alterando por CLASS
  criarElemento("h2", "5. Alterando elemento por CLASS:");
  const elClasse = criarElemento("p", "Classe original", {}, "minhaClasse");
  elClasse.style.fontWeight = "bold";
  elClasse.textContent = "Texto alterado por class!";