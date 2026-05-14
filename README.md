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
* `git log` -> listar os commits do repositório.  
* `git add` -> sobe alterações para a staging area.  
* `git commit -m""` -> Realiza novos commits com uma mensagem.
* `git commit --amend` -> Substitui o commit anterior por um novo, mas aproveita as alterações dele.
* `git diff` -> calcula a difenreça entre as versões/alterações dos arquivos.  

O VsCode tem o localHistory, um linha do tempo que salva de forma automática com todas as alterações realizadas no projeto, onde podemos acompanhar os arquivos adicionados e o que mudou. `timeline`

Merge conflit é quando existe um conflito de diferentes alterações feitas em um mesmo trecho de código ou quando um arquivo é deletado ou algo que foi uma alteração mais profunda entre a versão base e a que estamos fazendo a alteração, no passado a edição de arquivo era bloqueada por pessoa, para que não acontecesse esses conflitos em repositórios centralizados, hoje existem algoritmos que tentam fazer a união das diferentes versões e quando ocorre esse conflito cabe ao programador resolver.

Texto referência para entender como funciona o git
<a>https://dev.to/leandronsp/pt-br-fundamentos-do-git-um-guia-completo-2djh?s=09</a>

O Git vai fazendo snapshots do projeto, pegando os arquivos e criando um indentificar e salvando em blobs, a partir do momento que existe uma alteração no projeto ele vai criando outro snapshot do projeto, só que ele só vai salvar como novo as alterações, o que permanece igual ele só vai fazer referência na memória oa que foi salvo anteriormente.

Blob -> Binary large object

#### Estágios que um arquivo possui:
* Untracked -> Arquivo que não está sendo acompanhado pelo repositório. Para o git não existe.  
* Modified -> Arquivo modificado.  
* Staged -> Arquivo modificado que é preparado para ser registrado.  
* Commit -> Arquivo modificado é registrado no repositório.  

`.gitignore` -> arquivo que vamos criar para sinalizar os arquivos e pastas que não queremos acompanhar no repositório.

## Dia 6 - Comandos iniciais git - online
Comandos abordados
* git commit -m "mensagem" - atalho para fazer novos commits.
* git push - empurrar alterações locais para o origin.
* git push --force - empurrar de forma forçada alterações locais para o origin.
* git push -f - a forma comprimida do comando anterior.

Na primeira pista lenta foi abordado a diferença entre o repositório local e remoto, como podemos fazer a comparação dos dois com o `git status` para ver como está em relação ao repositório remoto e os status do arquivo de forma local, vem qual o estágio que cada um está no repositório.  

`git restore --staged nome-do-arquivo.js` -> Dessa forma consegumos tirar do stage um arquivo que fizemos o add por engano, antes de ser realizado o commit. 

`git add -A` -> Adiciona todos os arquivos modificados, novos e deletados.
`git add .` -> Adiciona todos os arquivos do diretório atual.
`git add package*` -> Adiciona todos os arquivos que começam com `package`.
`git add pages/*` -> Adiciona todos os arquivos dentro de uma pasta especifica.

