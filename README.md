CEP Service
Um microserviço em Node.js que consulta dados de endereço usando a API ViaCep.

Configuração
Para configurar e executar o projeto, siga os passos abaixo:

1. Instalação de Dependências
Para instalar as dependências necessárias, execute o seguinte comando:


npm install
Este comando instalará todas as bibliotecas e pacotes listados no arquivo package.json, incluindo o Express e outras dependências necessárias para o funcionamento do microserviço.

Execução do Servidor
Para iniciar o servidor do CEP Service, utilize o seguinte comando:


node app.js
Isso iniciará o servidor na porta padrão 8080. Você pode alterar a porta editando a variável PORT no arquivo app.js.

Documentação da API
A API do CEP Service é documentada usando Swagger. Você pode acessar a documentação da API através da rota /api-docs quando o servidor estiver em execução.

Endpoints Disponíveis
Aqui estão os principais endpoints disponíveis no CEP Service:

Consulta de CEP

Endpoint: /cep/{cep}

Descrição: Retorna o nome da rua com base no CEP fornecido.

Gerenciamento de Histórico

Obter Tamanho Atual do Arquivo de Histórico

Endpoint: /history/size

Descrição: Retorna o tamanho atual do arquivo de histórico em bytes, kilobytes e megabytes.

Estrutura do Projeto
A estrutura de diretórios do projeto é a seguinte:

cep-service/
app.js            # Ponto de entrada do aplicativo
controllers/      # Controladores da lógica de negócio
models/           # Modelos de dados
routes/           # Rotas da aplicação
swagger.js        # Configuração do Swagger JSDoc
package.json      # Arquivo de configuração do Node.js

Dependências Principais
Express: Framework web para Node.js
Swagger UI Express: Middleware para servir a documentação Swagger
Swagger JSDoc: Ferramenta para gerar especificações Swagger a partir de comentários JSDoc
Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.