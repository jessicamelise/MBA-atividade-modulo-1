## Atividade Módulo 1 - MBA XPE Front End - Enunciado

O objetivo é exercitar os seguintes conceitos vistos em sala de aula:
✔ HTML Semântico.
✔ CSS Estilos e Animações.
✔ Metodologias CSS.
✔ Pseudoelementos e pseudoclasses.
✔ CSS Pré-processadores.
✔ Layout CSS Moderno.


##### Enunciado
Desenvolver um site que seja:
* Semanticamente coerente de acordo com as regras do HTML semântico.
* Responsivo.
* Com as devidas animações pedidas.

O projeto deverá ser feito em HTML, SASS e JavaScript puro (Vanilla), e será usado Flexbox para
organização do posicionamento do conteúdo.

Desempenhar as seguintes atividades:
1. Pegar os dados da API de países (https://restcountries.com/) usando fetch().
2. Mostrar todos os países da lista em estilo de flip card, conforme design a seguir:

<img src="/src/assets/exercicio-modulo-1-img.png">

3. O tamanho do card é de width: 300px e height: 200px.
4. A cor de background depende do continente onde o país se encontra:

```
.Africa
    background-color: lightgreen

.Americas
    background-color: lightyellow

.Asia
    background-color: #ffcccb

.Europe
    background-color: lavender

.Oceania
    background-color: lightblue
```

5. Quando é passado o mouse sobre o card (hover), acontece a rotação de “flip” no card e mostra as informações do país de nome, nome nativo, capital, região e subregião: 

<img src="/src/assets/exercicio-modulo-1-img-pt-2.png">

6. A animação é uma transformação de rotação em 180º do eixo Y com a duração de ```0.8s```.
7. Os estilos devem ser feitos usando o SASS.
8. O design deve ser responsivo, de forma a se adequar a telas pequenas: 

<img src="/src/assets/exercicio-modulo-1-img-pt-3.png">

9. Criar as tags HTML e os seletores SASS para que eles se adequem à metodologia BEM (Block, Element, Modifier).

----

## Acesso a Interface

Desenvolvido uma tela estatica com a renderização dos países seguindo a orientação da tarefa quanto ao uso de HTML semantico, SASS, BEM, Javascript puro e responsividade.

[Clique aqui](https://jessicamelise.github.io/MBA-atividade-modulo-1/) para acessar a interface.

## Instalação do Projeto

Caso deseje baixar o projeto para sua máquina, basta clicar no botão de clonar e inserir no terminal: 

```
git clone <cole seu link após isso>
```

O repositório será completamente baixado em sua máquina, e caso use o visual studio code, basta entrar na pasta pelo terminal e digitar:

```
code .
```

* Necessário ter o Node e NPM instalados.

Assim que a instalação tiver sido concluída e estando na pasta do projeto, basta digitar em seu terminal:

```
npm install
``` 

Para rodar localmente, digite no terminal:

```
npm run start
```

Para rodar a compilação do SASS no arquivo css em modo watch, use o comando:

```
npm run watch:sass
```

E para fazer o deploy no github pages, use o comando:

```
npm run deploy
```

### Autores
Projeto desenvolvido por Jéssica Melise como primeiro projeto do MBA de front end da XPE.


