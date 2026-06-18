# project-x-pwa

Projeto X - PWA
Esta versão foi adaptada para Progressive Web App (PWA).
Como testar localmente
O PWA precisa rodar via servidor local ou HTTPS. Abrir o arquivo direto por `file://` permite usar o app, mas não ativa instalação/offline via Service Worker.
No Windows, dentro da pasta do projeto, rode uma das opções:
```bash
python -m http.server 8000
```
Depois acesse:
```text
http://localhost:8000
```
No Chrome/Edge aparecerá a opção de instalar o app.
Arquivos
`index.html`: aplicação principal
`manifest.webmanifest`: configuração do app instalável
`sw.js`: cache offline
`icons/`: ícones do aplicativo
Dados
Os dados continuam salvos no `localStorage` do navegador/dispositivo. Faça backup/exportação periodicamente.
