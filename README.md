# clone-tabnews

Clone do projeto do Felipe Deschamps, ensinado no curso.dev

## Dia 2 - Programas auxiliares

Node -> Utilizado para rodar JavaScript em qualquer lugar  
Docker -> Vamos usar ele para trabalhar com o postgres  
nvm -> Mudar a versão do node js para deixar igual a versão do servidor.

A principal vantagem de utilizar o codespace é o isolamento do projeto com os arquivos da sua máquina local.

## Dia 3 - Versões do programa a serem utilizadas

Node.js -> lts/hydrogen  
Next.js -> 13.1.6  
React -> 18.2.0  
React DOM -> 18.2.0

O primeiro passo é deixar o `node.js` na mesma versão da utilziada na aula com o `nvm`.  
`nvm ls` -> Mostra as versôes do node e qual está instalada. A versão recomendada é a a lts/hydrogen  
`nvm --help` -> Documentação nvm.  
`nvm alias default lts/hydrogen` -> Define como padrão essa versão do node para o shell.  
`*.nvmrc` -> arquivo que informa qual é a versão do node utilizada nesse projeto.  
O final rc significa run commands, quando existe uma instrução especifica para inicialização do projeto.  
`package.json` -> Arquivo que vai listar as depedências utilizadas no projeto.  
`npm init` -> Foi utilizado esse comando para criar o package.json, não vamos utilizar o vite por enqunato, cada passo do projeto vai ser construido de forma manual para entendermos como funciona.
Para fazer a instalação de uma versão especifica da dependência utilizamos o comando `npm i next@13.1.6`, dessa forma estamos pedido para o npm instalar uma dependência e o @x.x.x vai informar a versão especifica que queremos instalar.

Depois vai ter a explicação sobre `versionamento semantico`.

## Dia 4 - Explicando protocolos

`HTTP` -> Transferência de documentos que tem referência a outros documentos.  
`FTP` -> Protocolo para transferência de arquivos.  
`SMTP` -> Protocolo para transferência de emails.  
Protocolos são maneiras de criar padrões e processos para a realização de comunicação entre diferentes dispositivos.  
`TCP` -> Tem a garantia que o a informação vai chegar ao custo de possivelmente ser mais lenta a transmissão dos dados.  
`UDP` -> Cada pacote é autosuficente, a velocidade de entrega é mais importante que a garantia de 100% das informações entregues.

A instação do next foi feita de forma local no repositório do projeto, para fazer a execução do comando e criar o servidor web é necessário criar um script no package.json. Foi criado o `"dev": "next dev"`, e para executar usamos o comando `npm run dev`, as duas primeiras palavras são sinalizando para o npm executar e a ultima palavra diz qual o script deve ser usado.

O Next utiliza duas formas de fazer o roteamento das paginas utilizando uma pasta `pages` que vai possuir os arquivos que vão referenciar para uma página especifica quando a rota for realizada e o `app` que foi implementado a partir da versão 13. Vamos utilizar o pages.  
A estrutra fica `pages/index.js` que vai encaminhar para home do site `site.com` ou `pages/produtos/index.js` que vai levar para `site.com/produtos`. Também é possível fazer a nomeclatura de um arquivo de forma diferente como `pages/sobre.js` que vai virar uma rota `site.com/sobre`

Fazendo a configuração da porta é possível que um usuário que esteja fora da rede possa olhar o que estamos desenvolvendo, o processo é ir em ports no vsCode, definir a porta que é utilizada em `add port`, next -> 3000 | angular -> 4200 e em seguida clicar no link gerado e definir como público para que usuário de fora da internet possam acessar a página que estamos criando.

## Dia 5 - Comandos iniciais git - offline

Comandos abordados

- `git log` -> listar os commits do repositório.
- `git add` -> sobe alterações para a staging area.
- `git commit -m""` -> Realiza novos commits com uma mensagem.
- `git commit --amend` -> Substitui o commit anterior por um novo, mas aproveita as alterações dele.
- `git diff` -> calcula a difenreça entre as versões/alterações dos arquivos.

O VsCode tem o localHistory, um linha do tempo que salva de forma automática com todas as alterações realizadas no projeto, onde podemos acompanhar os arquivos adicionados e o que mudou. `timeline`

Merge conflit é quando existe um conflito de diferentes alterações feitas em um mesmo trecho de código ou quando um arquivo é deletado ou algo que foi uma alteração mais profunda entre a versão base e a que estamos fazendo a alteração, no passado a edição de arquivo era bloqueada por pessoa, para que não acontecesse esses conflitos em repositórios centralizados, hoje existem algoritmos que tentam fazer a união das diferentes versões e quando ocorre esse conflito cabe ao programador resolver.

Texto referência para entender como funciona o git
<a>https://dev.to/leandronsp/pt-br-fundamentos-do-git-um-guia-completo-2djh?s=09</a>

O Git vai fazendo snapshots do projeto, pegando os arquivos e criando um indentificar e salvando em blobs, a partir do momento que existe uma alteração no projeto ele vai criando outro snapshot do projeto, só que ele só vai salvar como novo as alterações, o que permanece igual ele só vai fazer referência na memória oa que foi salvo anteriormente.

Blob -> Binary large object

#### Estágios que um arquivo possui:

- Untracked -> Arquivo que não está sendo acompanhado pelo repositório. Para o git não existe.
- Modified -> Arquivo modificado.
- Staged -> Arquivo modificado que é preparado para ser registrado.
- Commit -> Arquivo modificado é registrado no repositório.

`.gitignore` -> arquivo que vamos criar para sinalizar os arquivos e pastas que não queremos acompanhar no repositório.

## Dia 6 - Comandos iniciais git - online

Comandos abordados

- git commit -m "mensagem" - atalho para fazer novos commits.
- git push - empurrar alterações locais para o origin.
- git push --force - empurrar de forma forçada alterações locais para o origin.
- git push -f - a forma comprimida do comando anterior.

Na primeira pista lenta foi abordado a diferença entre o repositório local e remoto, como podemos fazer a comparação dos dois com o `git status` para ver como está em relação ao repositório remoto e os status do arquivo de forma local, vem qual o estágio que cada um está no repositório.

`git restore --staged nome-do-arquivo.js` -> Dessa forma consegumos tirar do stage um arquivo que fizemos o add por engano, antes de ser realizado o commit.

`git add -A` -> Adiciona todos os arquivos modificados, novos e deletados.  
`git add .` -> Adiciona todos os arquivos do diretório atual.  
`git add package*` -> Adiciona todos os arquivos que começam com `package`.  
`git add pages/*` -> Adiciona todos os arquivos dentro de uma pasta especifica.

Caso tenha feito algum erro no commit é possível fazer um amend para realizar uma alteração no commit antes do push, mas se o push já foi realizado vai ter um problema na hora de tentar fazer o push de forma tradicioinal porque vai ter uma divergência entre o histórico do repositório local e do remoto, para resolver essa situação é necessário fazer `git push --force` ou `git push -f` para forçar a sincronização do local do remoto e sobrescrever o que está online.

`git commit -am "mensagem"` -> Faz o git add . junto com commit.
`git rm -rf --cached` -> Limpar o cache de forma local caso o .gitingore não esteja ignorando os arquivos.

Não é recomendado usar o `git push -f` porque ele pode sobrescrever o trabalho dos outros, um comando recomendado é usar `git oush --force-with-lease` que confere se o repositório lcoal está sincronizado com o online e evita de apagar o trabalho dos outros se fizer o `git push -f` direto.

## Dia 7 - Deploy | Client | Server

1. Conexão com a Vercel
2. Importação do repositório
3. Primeira versão no ar
4. URLs permanentes e unicas

Continous Deployment -> Automatização do Deploy (CD)  
Relação Client - Server.

Cliente pede algo, servidor entrega algo.  
A distância geografica entre cliente e servidor é importante ser pensada porque a partir da distância podem ter dificuldades ou perdas de informação na hora de realizar a comunicação.

proxy é um servidor intermediário na comunicação entre um cliente e um servidor.

Continuos Integration -> Uma ferramenta especializada para fazer conferências no código e testes, se tudo aprovado faz o envio para o build e deploy do projeto.

Ensinou a criar a conta na vercel sincronizando com o github e autorizando a instação do programa da vercel. Para fazer o deploy do projeto é só clicar no repositório e importar, já como estamos utilizando o next não é preciso fazer nenhuma configuração.

Principle of Least Privilege -> Principio do privilégio minimo, é quando damos somente o necessário de permissão para uma aplicação funcionar, isso faz parte da segurança para evitar de expor dados e servir como um vetor de ataque ao sistema.

Permitir que a Vercel leia todos os repositórios ou escolher quais vão estar disponíveis de forma manual, escolhendo essa segunda opção é necessário ir nas configurações do github e ir selecionando novos repositórios quando eles forem criados.

A vercel é interessante porque ela deixa disponível de forma permanente todas as versões que fizemos deploy com uma url única, a última da lista de urls, então quando fazemos alterações é possível ver como estava antes.

O link centralizado ou o primeiro se for de um deploy antigo é uma url especifica para a branch que vai ser explicada no futuro.

## Dia 8 - Preparando o cérebro

Programação Orgânica -> Fazer o projeto aos poucos, dando espaço ao aprendizado, erro e descobertas.

Programção Impressora 3d -> Tudo ou nada, geralmente um método que acaba desmotivando as pessoas porque muitas vezes vão ter falhas e problemas no meio do caminho, dando a impressão que nós não concluimos nada.

Eu tenho que ter cudiado com o over engenireng porque se eu ficar complicando demias as coisas nunca vou colher um resultado, isso me faz refletir sobre om eu projeto do sistema de gerenciamento, querendo fazer todas as entidades já completas, isso acaba sendo bem complicado, tentar diminuir o escopo pra ver se sai alguma coisa do papel.

## Dia 9 - Tornar a programação divertida

### Como organizar tarefas?

Fazer muito com pouco é o caminho, agora vamos entender o porque.

Vai envolver a questão da eficiênica, fazer poucos movimentos ou processos para atingir os objetivos, dessa forma vamos ter um sentimento de boa recompensa por fazer a ação.

Um fator importante dessa questão é ter o acompanhamento das atividades, ter definido o que quer fazer do dia e ir marcando as atividades como concluidas quando tiver finalizado.

### Niveis de organização de tarefas:

Nível 1: Ser lembrado individualmente  
Fase com o menor custo de produção, energia gasta para fazer algo e aquecimento, tempo que demora para ver e definir o que precisa ser feito.

Nível 2: Ser lembrado em grupo  
Por exemplo quando se usa um kanban para que um grupo de pessoas acompanhe as tarefas a serem feitas.

Nível 3: Expandir conhecimento  
Desenvolver de uma forma detalhada o que e como algo deve ser feito, ferramentas de exemplo Trello | GitHub, cuidado com os cusots de tempo, energia gastos para fazer isso.

Nível 4: Gerar méticas  
Mensurar a produtivdade é um processo que vai demandar mais tempo e energia o que torna a tarefa cansativa e dificil já antes de inicia-la.

### Tudo ou nada

Trabalhar pouco e ganhar pouco, pode parecer estranha essa frase, mas é o processo de ir fazendo as coisas aos poucos para que não fique enfadadom alkgo fundamental para que consiga executar projetos maiores.

Issue de insception. `Issue` é um recurso do GitHub para apontar problemas ou criar tarefas dentro de um repositíorio. Exsite uma série de detalhamentos para questão da issue, explorar isso depois.

O objetivo é quebrar em pequenas tarefas o processo de desenvolvimento ao ponto de ser uma tarefa tão pequena que ela se torne fácil, não gerando o cansaço mental e dando o mesmo sentimento dos videogames de inconcientemente incentivar a fazer mais.

## Dia 10 - Lidando com a inseguraça

Tem que trabalhar as vertentes pessoais, profissionais e tecnicas.

Com o Settings Sync é possível sincronizar as configurações feitas no vsCode e espelhar nos codespaces.

Instalar duas extensões - EditorConfig e Prettier para a estilização do código.  
`.editorconfig` -> Arquivo que vai estilizar o código, é para ser comitado no repositíorio.

Ir nas configurações do vsCode e desabilitar o salvamento automatico, definir o prettier como formatador padrão, definir para o código ser formatado quando salvar.
Criar os scripts: `lint:check` e `lint:fix` para respectivamente verificar se existe algum arquivo não formatado de acordo com o prettier e fazer a formatação dos arquivos.

A partir da versão 3.0.0 do prettier não precisa mais fazer o `.prettierignore` se os arquivos que você quer ignorar estão no `.gitignore`, mas caso você não deseje formatar um arquivo que não não está no gitignore pode ser importante fazer ele.

## Dia 11 - Teoria DNS (Domains Name System)

Os dominios são só um "apelido", os computadores utilizam o endereço de ip do servidor para encaminhar ao site.  
Computador -> Servidor DNS -> Computador -> Servidor que hospeda o site.  
A pista rápida está abordado sobre os ataques ddos que os servidores DNS sofreram com o tempo.
Na primeira aula foi feita uma explicação mais grosseira falando como se o dns fosse um grande dicionairo, banco de dados, que tivesse o nome do site e seu respectivo endereço de ip, porém,na verdade usa uma estrutura diferente.  
Recursive Resolver é o que ajuda a descobrir o endereço de ip, junto com os root servers do DNS.

## Dia 12 - Prática DNS

Palavras chave: Root Server | TLD | Authoritative Server | Registrant | Registrador | Registry

Registrant - Somos nós que estamos registrando o dominio.  
Registrador - é serviço que vamos pagar para comprar o domninio do site. Nosso caso registro.br  
Registry - Responsável por acompanhar os dominios e serve como fonte para os registradores verem a disponibilidade. No Brasil `NIC.br` é o responsável.  
Serivodr autoritativo -> É onde o site está hospedado.  
TLD -> Tenho que buscar a defini

[Site DNS](https://www.whatsmydns.net)

O processo para fazer o registro do site é acessar [registro.br](https://registro.br), verificar a disponibilidade do dominio, prosseguir com o login e em seguida com o pagamento.

`dig` -> Comando para fazer requisições diretas e manuais ao DNS, quando colocamos o endereço que atrelamos a vercel `tiadasviagens.com.br` ele vai retornar o ip aonde está armezado, diferente da aula não é mais usando o A 76.76.21.21 da vercel, agora estão usando address dinâmicos.

`GeoDNS` -> Levando em conta a nossa localização se conecta ao IP mais próximo.

## Dia 13 - Status page | SLA |

Teoria McDonalds -> Quebrar a inercia, sugerir qualquer coisa para que a partir disso tenha um debate e as pessoas participem mais.

Não acreditar que um serviço vai ficar acessivel por 100%, se preparar para tentar mitigar os danos.
SLA -> Service Level Agreement.  
Status Pages -> Paginas especializadas em acompanhar o funcionamento do serviço

## Dia 14 - Fundação

A arquitetura utilizada é a MVC (Model - View - Controller).  
PoC -> Prova de Conceito.  
Ver se é possível fazer, interface básica, não necessariamento com funcionalidades, mas só um estudo da ideia.

MVP -> Minimo produto viavel  
Avaliar se além de possível atrai algum usuário. Fazer a implementação de forma simples e bem feita da ideia.

Pode existir uma tecnologia perfeita para a solução, mas se não souber trabalhar com ela, criar e modificar de nada adianta, então quando for pesnar qual linguagem construir o software fazer um "custo-beneficio" entre o que a linguagem pode proporcionar e a capacidade das pessoas trabalhar nessa linguagem o ideal é que a pessoa saiba o que está fazendo então nem sempre a melhor stack é o melhor para a realização de um projeto.

O importante é o software ser modificável.

Arquitetura de Software DIFERENTE de Organização das pastas.  
O que vai definir a arquiteura de software é o escopo dos componentes e a forma de interação entre eles.

Arquitetura simples + Ótima modelagem = Sucesso.

### Estrutura das pastas

```
📦root/
├──📂pages/
│   └──📄index.js
├──📂models/
│   ├──📄users.js
│   ├──📄content.js
│   └──📄password.js
├──📂infra/
│   ├──📄database.js
│   ├──📂migrations/
│   └──📂provisioning/
│       ├──📂staging/
│       └──📂production/
└──📂tests/

```

### Milestones

#### Construção

- Criar siate num dominio .com.br

1. Registrar dominio próprio
2. Configurar servidor de DNS

- Definir estilização de código e configurar editor
- Programar página em construção

#### Fundação

- Proposta de arquitetura de pastas
- Testes automatizados
- Banco de dados (Local)
- Migrations
- Continuos Integration
- Linter de código
- Linter de Commits
- Banco de Dados (Homologação e Produção)
- Tipo de Licença

## Dia 15 - Testes automatizados

Criação de 3 sub-issues

- Instalar Test Runner
- Criar um Tesde de Teste
- Criar um Tesde de Verdade

Jest -> Test Runner escolhido para o Tabnews versão utilizada (29.6.2).  
Criação de dois scripts:

- "test": `jest`
- "test:watch": `jest --watch`

`npm i --save-dev jest@29.6.2` -> comando para instalar o jest na mesma versão do curso.

Nessa aula vamos abordar o TDD - Test Driven Development que é uma forma de escrever código onde os testes são feitos antes do código.

Os testes são para validar se o comportamento esperado da aplicação continua mesmo com as mudanças realizadas.

```js
test("nome do teste", () => {
  //função que vai ser executada e validar algo do projeto.
});

/*
Aqui é um test hardcode, mas o objetivo geral quando fazemos testes é ter uma estrutura onde
tenha uma valor gerado dinamicamente no expect() e o toBe um valor esperado hardcodede para ver se
o que foi executado está tendo como resultado algo que se espera. 

Espera que algo tenha um respectivo valor.
*/
test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
```

[Eloquent JavaScript](https://eloquentjavascript.net) -> Recomendação de livro.

[Curso Java e Ecma - Guanabara](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1) -> Recomendação de curso.

No primeiro momento fizemos primeiro a funcionalidade depois criamos o teste.

```js
// calcularadora.js
function somar(a1, a2) {
  return a1 + a2;
}

exports.somar = somar; // Fazendo exportação para tornar disponível em outras partes do código.

// calculadora.test.js
const calculadora = require("../models/calculadora.js"); // Fazendo importação para ser acessível no teste.

test("Espera que 2 + 2 seja 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
```

## Dia 16 - Testes + Protocolo HTTP

Em um primeiro momento existia a esturutra da piramide de testes:

Unitário -> Integração -> E2E

Só que a problemática desse modelo é que é possível ter 100% de cobertura dos testes unitários e ainda assim ter problemas no software, existem debates mais recentes sobre o aumento da importância dos testes de integração.

A cada passo que é dado em um teste que tenha um escopo maior mais tempo e energia se investe porque ao inves de um teste unitário onde é possível testar se funciona só executando um pequeno trecho de código, quando vamos avançando vamos interligar e testar diferentes partes juntas para ver se o todo funciona.

Em relação as pastas do projeto tiveram algumas alterações.

```
📦root/
├──📂pages/
│   └──📄index.js
│   └──📂/api
└──📂tests/
│   └──📂/unit
│   └──📂/integration

```

Para a criação de api´s usando o next é usando umas estrutura de pastas e arquivos para criar esses endopoints, em relação aos testes, dentro da pasta `tests` vão ser criadas as pastas `unit` e `integration` para lidar respectivamente com os testes unitários e de integração.

Quando vamos criar uma api vamos ter dois argumentos na função, o request, que é o que é solicitado pelo cliente e o response que é a resposta dada pelo servidor.

```js
function status(request, response) {
  response.status(200).json({ texto: "O curso.dev é muito bom :)" }); // Usando o JSON a resposta usa o UTF-8 como charset, usando o send a mensagem pode ficar mal foramtada.
}
```

`curl` -> Programa que faz contato com a api via terminal, mostrando mais informações sobre essa conexão.  
`curl http://localhost:3000/api/status` -> Faz a conexão com o endpoint que criamos a pouco. Adicionando ao final desse comando o `--verbose` ou `-v` vamos ver todas as requisições feitas.

API é composta somente por informação, sem um layout gráfico.
Vamos mudar a pasta que está salva a api para fazer um versionamento, porque apesar de ela não necessariamente mudar de layout como se muda interfaces visuais, é possível que ocorram mudanças das informações que são transmitidas. Existem dois tipos de alteração `Breaking Change` e `Non-breaking Change`, a diferença entre os dois é que quando ocorrem alterações na api que quebram a integração com o sistema é uma breaking change, quando continua funcionando normal é uma non-breaking change.

Existem duas formas de fazer o versionamento, uma com o URI que ficaria: `api/v1/contents` || `api/v2/contents` e a outra que o versionamento é feito pelo cabeçalho da comunicação, onde lá vai ser feita a definição.

## Dia 17 - Banco de Dados

Palavras chave: Banco de dados relacional, serveless, pool, PostgreSQL, MySQL, DBMS, Query, Migrations, Continuos Integration, Docker, Dockerfile, Image, Container, Dockerhub, Test Runners, Http codes, Exit codes, SQL, NoSQL, Temporal, Espacial, Transaction, Lambdas, AWS, Sequelize,

Foi escolhido o Postgres (DBMS) e os modulos pg(Query) e node-pg-migrate(Migrations).

A escolha do banco de dados envolve pensar no DBMS - Data Base Management System, como as Query vão ser feitas e organizar as Migrations.

Breve História sobre a execução de aplicações e da frase "na minha máquina funciona", nesse contexto vai abordado de como no passado os problemas aconteciam, por conta de ambientes diferentes estarem executando uma mesma aplicação o que gerava respostas diferentes para uma mesma ação e uma ´serie de divergências na execução e reprodução, os passos para se resolver esse problema foram seguindo na criação de máquians virtuais para criar ambientes isolados de forma replicaveis, para que facilitasse a repetição de ambiente, mas que acabava consumindo muitos recursos e tempo para a configuração, depois a criação de ferramentas que facilitavam a configuração por meio de um arquivo base que era compartilhado que ajuda na questão da configuração, mas que ainda causa um grande gasto de recursos pela necessidade de criar diferentes ambientes para a execução das aplicações, até que foi criado o Docker, que fez uma abstração de recursos existentes no linux os "namespaces" e "cgroups" que aproveitam o sistema operacional instalado no sistema e criavam compartimentos isolados de forma rápida, prática e eficiente, tornando o nivelamento de ambientes para execução de tarefas melhor e permitindo uma avanço nessa questão.

Vamos criar agora o Banco de Dados e no futuro o `Mailcatcher` que simula um servidor de emails.
`compose.yaml` -> Arquivo de configuração do Docker.

```yaml
# O yaml é baseado em json.
# Hierarquia definida por identação
# Serviços que vamos utilizar, aqui vamos dizer qual é vamos utilzar e de onde estamos retirnando ele.
services:
  database:
    image: "postgres:16.0-alpine3.18"
    environment:
      POSTGRES_PASSWORD: "local_password" # Única variável obrigatória para fazer rodar o postgres.
```

Quando vamos infomrar de onde o serviço do docker está sendo retirado, podemos fazer usando o Dockerfile ou Docker Hub para fornecer a imagem.
Dockerfile são os comandos que vão ser utilizados para gerar o ambiente virtual, para que ele seja executado é necessário compilar para gerar uma imagem. Container é o lugar onde a imagem está sendo executada. Dockerhub é o repositório onde fica as imagens.

Exit Codes -> `0`: Sucesso | `255`: Erro (Qualquer coisa acima de 0);

Comandos para instalar libpq no mac.

```
  brew doctor

    brew update

    brew install libpq

    brew link --force libpq
```

`porta 5433` -> Tive que trocar a porta do host pq eu tenho outra instância do postgres sendo utilizada na porta 5432.

`docker compose up` -> Comando para criar e iniciar um container.
`docker ps` -> Lista processos(containers) ativos no docker.
`docker ps -a` -> Lista processos no docker.
`docker logs <nome_container>` -> Ver logos do container
`docker compose up --detach | -d` -> Criar e iniciar container rodando em segundo plano.
`docker compose up -d --force-recreate` -> Forçar atualização do container.

`psql --host=localhost --username=postgres --port=5433 ` -> Comando para acessar nosso banco de dados via terminal com o psql.
`/q` -> Sair do psql

Criação da pasta infra para armazenar os arquivos relacionados a isso.
`docker compose -f infra/compose.yaml up -d` -> Criar ou iniciar container dentro de uma pasta especifica.

No futuro também vamos trocar o local da senha do banco para deixar a informação mais protegida e deixar mais eficiente o fluxo de trabalho com a integração das variáveis de ambiente.

## Dia 18 - Criação da database.js

`npm i pg@8.11.3` -> Instalação do pg para fazer a conexão com o postgres.
`npm run test:watch` -> Script executado foi alterado para `jest --watchAll` para que todos os testes sejam realizados, mesmo que não tenha nenhuma alteração no commit em relação ao último.

```js
// Estrutura básica para a conexão com o postgres
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    // Informações da database
    host: "localhost",
    port: 5433,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
```

É importante deixar as camadas da aplicação stateless.
Existe um módulo chamado `dotenv` que pega o que escrevemos no arquivo `.env` e passar para o process.env da aplicação, sem ter que passar para o terminal as informações.

## Dia 19 - Variáveis de ambiente

É recomendado não fazer o commit do `.env` pelo `dotenv`, mas o `next` em sua documentação incentiva que seja feito o commit, agora vamos começar a estudar e entender que existem vários tipos e precedências para os arquivos de variáveis de ambiente e como injetalos na aplicação.

Escala de prioridade:

1. process.env
2. .env.development
3. .env

É possível diretamente na vercel configurar as variáveis de ambiente que são utilizadas, tendo precedência sobre qualquer arquivo de variáveis de ambiente no projeto.

A grande questão é não colocar dados sensíveis nesses lugares, mas se você atribuir um valor padrão nessas variáveis que não sejam compostos por informações sensíveis é sucesso.

`git mv <nome_arquivo> <novo_nome>` -> Renomear arquivos e como estão registrados no git.
`code <nome_arquivo.tipo>` -> para criar um arquivo usando o terminal.

[Artigo para remover dados sensíveis](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

Root Path -> Definindo a localização da página raiz para não ter que trabalhar com caminhos relativos. Utilização do `jsconfig.json` nesse projeto para definir o caminho absoluto do projeto.
`import database from "../../../../infra/database.js";`

Configuração para o `jsconfig` e definir uma baseUrl

```js
{
  "compilerOptions": {
    "ignoreDeprecations": "6.0",
    "baseUrl": "."
  }
}

```
