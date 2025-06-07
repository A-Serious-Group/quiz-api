# Projeto Quiz,faculdade
Para rodar esse projeto do zero, siga esses passos, caso alguma coisa ja tiver instalada, pule e vai pro proximo

1 - baixar o node 22 -> https://nodejs.org/pt;

2 - Após instalar, abre o terminal e digite node -v, e veja se aparece algo assim v22.16.0, se aparecer foi instalado corretamente, caso o terminal ja estiver aberto, feche e abra de novo e execute o mesmo comando para ver se foi instalado, depois digite npm -v, e veja se tambem apareça algo como 10.9.2. Se isso tudo aparecer Ok

3 - PS se por a caso aparecer um erro ao executar o npm -v, no caso do windows tem que adicionar a politica, Set-ExecutionPolicy RemoteSigned,
no MAC não sei como funciona, ai joga no GPT e marcha.

4 - rode o comando npm i e espere concluir tudo.

5 - acesse o linear e pegue as variaveis de ambiente https://linear.app/login, coloque sem email e vai chegar um codigo nele, coloque e você irá entrar na org na task QUI-42 vai estar la no comentario.

6 - depois se voce tiver o docker rode o comando no terminal docker pull postgres espere baixar a imagem, logo após baixar, rode o comando no mesmo terminal, docker run -d --name queezy_postgres -e POSTGRES_USER=quezy -e POSTGRES_PASSWORD=quezy -e POSTGRES_DB=postgres -p 5472:5432 postgres
