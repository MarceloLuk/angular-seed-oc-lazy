# `angular-seed-oc-lazy` — Projeto simples em angular utilizando ngRoute e ocLazyLoad

o projeto atualmente esta utilizando a verão do Angular 1.6.x

### Prerequisitos

é necessario um clone do projeto e ter o node instalado

### Clone `angular-seed-oc-lazy

Clone do projeto utilizando o git:

```
git clone https://github.com/MarceloLuk/angular-seed-oc-lazy.git
cd angular-seed-oc-lazy
```

### Instalando dependencias

Para instalar as dependencias do projeto entre na pasta do projeto e execute:

```
npm install
```

Bem seguida utilize o seguinte comando `bower install`, logo apos a instalação voce tera as seguintes pastas

* `node_modules` - contem todos os modulos instalados via npm
* `app/bower_components` - contem todos os componentes instalados via bower

### Rodando a aplicação
Para rodar a aplicaço caso não tenha um servidor web instalado utilize:

```
npm start
```

Agora no browser acesse [`localhost:8000/index.html`].


## Diretorio e layouts

```
app/                    --> Contem toda a estrutura da aplicação
  app.css               --> arquivo de estilo default
  components/           --> pasta para adicionar componentes que podem ser reutilizados
    version/              --> versão e release de diretivas filtros entre outros
      version.js                 
      version_test.js            
      version-directive.js       
      version-directive_test.js  
      interpolate-filter.js      
      interpolate-filter_test.js 
  view1/                --> Pasta do modulo
    view1.html            --> template da pagina
    init.js               --> arquivo responsavel pelas rotas e carregamentos de js necessario para o funcionamento da pagina
    view1.js              --> controller (contem a logica)
    view1_test.js         --> caso utilize testes
  view2/                --> Pasta do modulo
    view2.html            --> template da pagina
    init.js               --> arquivo responsavel pelas rotas e carregamentos de js necessario para o funcionamento da pagina
    view2.js              --> controller (contem a logica)
    view2_test.js         --> caso utilize testes
  app.js                --> Controller principal do projeto
  index.html            --> Pagina principal do projeto 
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
