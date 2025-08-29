##Passo a passo para a execução do projeto##

Resumo: O objetivo do projeto é criar um e-commerce de uma loja de petshop.

Passos a serem seguidos

1- Inicializar o vite com: npm create vite@latest

2- Instalar o tailwind com: npm install tailwindcss @tailwindcss/vite
    2.1- Configurar o tailwind dentro do vite.config
    2.2- Ir ate o css global e importar o tailwind
    2.3- Configurar o html para receber o tailwind como css

3- Instalar as libs que serao utilizadas: react-router, react-hot-toast

4- instalar a lib para consumir a fake api utilizando: npm install -g json-server
4.1 - consumir o json simulando uma api com o comando: json-server --watch db.json