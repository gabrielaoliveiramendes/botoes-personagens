# Display dinâmico interativo de personagens com botões
Este projeto demonstra uma forma interativa de exibir diferentes conteúdos dentro de uma mesma página web, utilizando HTML para a estrutura, CSS para a estilização e JavaScript para a manipulação dinâmica dos elementos.

## Funcionalidades
O projeto apresenta uma seção principal onde diferentes blocos de conteúdo são exibidos um por vez. A navegação entre esses conteúdos é feita através de uma lista de botões correspondentes.

**Funcionalidades JavaScript Utilizadas:**
* **`document.querySelectorAll()`:** Este método é utilizado para selecionar todos os elementos HTML que possuem uma classe CSS específica. No projeto, ele é usado para obter todos os botões de navegação (`.botao`) e todos os contêineres de conteúdo (`.personagem`). Isso retorna um `NodeList`, que pode ser iterado.
* **`NodeList.forEach()`:** Este método permite executar uma função para cada item dentro de um `NodeList`. No código, ele é usado para adicionar um "ouvinte de eventos" (event listener) a cada um dos botões.
* **`addEventListener("click", () => { ... })`:** Este método anexa um manipulador de eventos ao elemento alvo. No projeto, um "ouvinte" de clique é adicionado a cada botão. Quando um botão é clicado, a função dentro das chaves `{}` é executada.
* **`document.querySelector()`:** Este método retorna o primeiro elemento dentro do documento que corresponde a um seletor CSS especificado. Ele é usado para selecionar o botão que está atualmente com a classe `.selecionado` e o contêiner de conteúdo que também possui a classe `.selecionado`.
* **`Element.classList.remove("nome-da-classe")`:** Este método remove a classe CSS especificada da lista de classes do elemento. No projeto, ele é usado para remover a classe `.selecionado` do botão e do contêiner de conteúdo que estavam ativos antes do clique.
* **`Element.classList.add("nome-da-classe")`:** Este método adiciona a classe CSS especificada à lista de classes do elemento. Ele é usado para adicionar a classe `.selecionado` ao botão clicado e ao contêiner de conteúdo correspondente, tornando-os visíveis e estilizados como selecionados.
* **Índices de Array:** Ao iterar sobre os botões usando `forEach`, o `indice` de cada botão na `NodeList` é capturado. Este índice é então utilizado para acessar o elemento correspondente no array de contêineres de conteúdo (`personagens[indice]`), garantindo que o botão clicado controle a visibilidade do conteúdo correto.

**Funcionalidades CSS Utilizadas:**
* **`::after` Pseudo-elemento:** Este pseudo-elemento é usado para inserir conteúdo gerado (neste caso, uma decoração visual em forma de gradiente) após o conteúdo do elemento ao qual está aplicado (`main`). Ele é posicionado como fixo e ocupa uma parte da tela, criando um efeito visual de fundo que não interfere no fluxo do conteúdo principal.
* **`z-index`:** Esta propriedade CSS controla a ordem de empilhamento de elementos posicionados (elementos com `position: absolute`, `fixed`, `relative` ou `sticky`). No projeto, `z-index: 1` é aplicado ao `.conteudo` para garantir que o texto e as informações do personagem fiquem sobrepostos ao gradiente de fundo criado com `::after`.
* **`transition`:** Esta propriedade permite que as mudanças nos valores das propriedades CSS ocorram suavemente ao longo de um determinado período de tempo. No projeto, uma transição é aplicada à propriedade `transform` dos botões (`.botao`) para criar um efeito de "escala" suave quando o mouse interage com eles ou quando se tornam o botão selecionado.
* **`transform: scale(valor)`:** Esta propriedade CSS permite redimensionar um elemento. No projeto, `transform: scale(1.2)` é aplicado ao botão que está selecionado (`.botao.selecionado`), fazendo com que ele pareça ligeiramente maior, indicando visualmente qual conteúdo está sendo exibido.

## Aprendizados

**CSS:**
* Seletores de classe e pseudo-elementos (`::after`).
* Propriedades de posicionamento (`position: fixed`, `position: absolute`).
* Criação de layouts responsivos utilizando `@media` queries para adaptar o design a diferentes tamanhos de tela.
* Utilização de `z-index` para controlar a sobreposição de elementos.
* Implementação de transições suaves com a propriedade `transition`.
* Aplicação de transformações visuais com a propriedade `transform`.

**JavaScript:**
* Seleção de múltiplos elementos e elementos específicos no DOM (`document.querySelectorAll`, `document.querySelector`).
* Iteração sobre coleções de elementos (`forEach`).
* Manipulação de eventos do DOM (`addEventListener`).
* Modificação dinâmica de classes CSS (`Element.classList.add`, `Element.classList.remove`).
* Acesso a elementos em arrays utilizando seus índices.
