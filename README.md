# 🕒 Pomodoro Tomatime

Aplicação baseada na técnica Pomodoro, construída com React. Suporte a tema
escuro/claro, histórico local de uso, timer com Web Worker.

## 🔧 Tecnologias Utilizadas

-   [React](https://reactjs.org/) com [Vite](https://vitejs.dev/)
-   [Lucide Icons](https://lucide.dev/) para ícones leves e modernos
-   [Toastify](https://fkhadra.github.io/react-toastify/) para notificações
-   [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
    para manter o timer mesmo com aba inativa
-   Armazenamento local com `localStorage`

## ⚙️ Funcionalidades

-   ⏱ Cronômetro funcional com lógica Pomodoro;
-   🌙 Alternância entre tema claro e escuro;
-   📊 Histórico de sessões de foco e descanso;
-   ⚙️ Tela de configurações com personalização de tempo;
-   📖 Página explicando o método Pomodoro;
-   🚫 Página de 404 para rotas inválidas;
-   🧠 Utilização de Web Worker para execução em segundo plano;
-   📦 Armazenamento dos dados com `localStorage`;

## Padrões de coloração

-   Tempo de foco - Amarelo
-   Tempo de descanso curto - Verde
-   Tempo de descanso longo - Azul

## 📦 Instalação

```bash
git clone https://github.com/Gui-ODSC/Tomatime.git
cd Tomatime

npm install
npm run dev
```
