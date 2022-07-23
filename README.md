Configurar o typescript de forma global no NodeJs
* npm i -g typescript
Iniciar o typescript para o projeto
* tsc --init

Isso criará o arquivo tsconfig.json
    Alterar conteudo original para
    {

        "compilerOptions": {

            "target": "es2015",

            "module": "es2015",

            "moduleResolution": "node",

        }

    }

Ativar o monitoramento de todos os arquivos .ts
* tsc -w

Incluir Jquery no Typescript
* npm i --save-dev @types/jquery
*   