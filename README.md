# VitaCare — Front-end

Interface web do **VitaCare**, sistema de gestão de clínica médica. Feita com **Vue 3** e consome a API REST do back-end em Django.

## Tecnologias

- **Vue 3** (Composition API com `<script setup>`)
- **Vue Router** para a navegação entre telas
- **Axios** para chamar a API
- **Vite** como servidor de desenvolvimento e build
- **Lucide** para os ícones

## Pré-requisitos

- Node.js 20.19+ ou 22.12+
- Back-end VitaCare rodando em `http://localhost:8000`

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Abre o build localmente |

## Estrutura

```
src/
├── assets/style.css     # tema global (cores, fontes, menu superior)
├── components/          # modal de confirmação, toast, seletor de status
├── composables/         # useToast e useConfirm
├── router/index.js      # rotas das telas
└── views/               # uma pasta por módulo (lista, formulário, detalhe)
```

## Módulos

| Módulo | Descrição |
|---|---|
| Consultas | Agendamento e registro de consultas |
| Exames | Solicitação e acompanhamento de exames |
| Receitas | Receitas com vários medicamentos |
| Pacientes | Cadastro e ficha do paciente |
| Médicos | Cadastro de médicos |
| CIDs | Códigos CID-10 |
| Medicamentos | Cadastro de medicamentos |
| Históricos | Histórico médico dos pacientes |

## Integrantes

- Lucas Veras Amui
- Vitor Mateus Alves de Souza
