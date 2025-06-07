# Projeto Quiz,faculdade
Para rodar esse projeto do zero, siga esses passos, caso alguma coisa ja tiver instalada, pule e vai pro proximo

1 - baixar o node 18 -> https://nodejs.org/pt/blog/release/v18.12.0;

2 - Após instalar, abre o terminal e digite node -v, e veja se aparece algo assim v22.16.0, se aparecer foi instalado corretamente, caso o terminal ja estiver aberto, feche e abra de novo e execute o mesmo comando para ver se foi instalado, depois digite npm -v, e veja se tambem apareça algo como 10.9.2. Se isso tudo aparecer Ok

3 - PS se por a caso aparecer um erro ao executar o npm -v, no caso do windows tem que adicionar a politica, Set-ExecutionPolicy RemoteSigned,
no MAC não sei como funciona, ai joga no GPT e marcha.

4 - rode o comando npm i e espere concluir tudo.

5 - acesse o linear e pegue as variaveis de ambiente https://linear.app/login, coloque sem email e vai chegar um codigo nele, coloque e você irá entrar na org na task QUI-42 vai estar la no comentario.

6 - Depois se voce tiver o docker rode o comando no terminal docker pull postgres espere baixar a imagem, logo após baixar, rode o comando no mesmo terminal, docker run -d --name queezy_postgres -e POSTGRES_USER=quezy -e POSTGRES_PASSWORD=quezy -e POSTGRES_DB=postgres -p 5472:5432 postgres

7 - Verifique se esta rodando com o comando docker ps, tem que aparecer algo como: 

CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS                                       NAMES
65ad9ab70b3e   postgres   "docker-entrypoint.s…"   26 minutes ago   Up 26 minutes   0.0.0.0:5472->5432/tcp, :::5472->5432/tcp   queezy_postgres

8 - Rode os seguintes comandos em ordem 
    npm run prisma:generate,
    npm run prisma:db-push,
    npm run prisma:db-pull,
    npm run prisma:studio -> Isso é opcional caso queira ver os dados e tabelas do banco no navegado, gerando rodando no http://localhost:5555

9 - Depois execute o comando para rodar o projeto em modo de desenvolvimento -> npm run start:dev, tem que aparecer algo como 

[Nest] 31621  - 06/06/2025, 22:42:59     LOG [NestApplication] Nest application successfully started +44ms
[Nest] 31621  - 06/06/2025, 22:42:59     LOG Server running on the port 3000
[Nest] 31621  - 06/06/2025, 22:42:59     LOG Date: 06/06/2025, 22:42:59

