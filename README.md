![Status](https://img.shields.io/badge/status-active-success)
![Mocha](https://img.shields.io/badge/tests-Mocha%20%2B%20Chai-blue)
![Supertest](https://img.shields.io/badge/API-Supertest-orange)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-green)
![Mochawesome](https://img.shields.io/badge/report-Mochawesome-purple)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## **🎯 Objetivo do Projeto**

Este projeto tem como finalidade assegurar a qualidade da **API Banco** por meio de testes automatizados, garantindo que funcionalidades críticas — como criação de transferências, autenticação e paginação — operem de forma consistente, segura e previsível.  
A solução foi estruturada seguindo padrões corporativos de QA, priorizando clareza, organização e escalabilidade.

---

## **🧰 Stack Utilizada**

- **Node.js** – Ambiente de execução  
- **Mocha** – Framework de testes  
- **Chai** – Biblioteca de asserções  
- **Supertest** – Testes de API via HTTP  
- **Dotenv** – Gerenciamento de variáveis de ambiente  
- **Mochawesome** – Relatórios HTML profissionais  

---

## **📁 Estrutura do Projeto**
banco-api-testes/
├── test/
│   └── transferencia.test.js
│
├── fixtures/
│   └── postTransferencias.json
│
├── helpers/
│   └── autenticacao.js
│
├── mochawesome-report/
│
├── package.json
├── .gitignore
└── README.md




Código

---

## **⚙️ Configuração do Ambiente**

### **1. Instalar dependências**

```bash
npm install
2. Criar arquivo .env
Código
BASE_URL=http://localhost:3000
Ajuste conforme o endereço da sua API.

🧪 Execução dos Testes
bash
npm test
Os testes validarão os principais fluxos da API, retornando logs detalhados no terminal.

📊 Geração do Relatório Mochawesome
Após rodar os testes:

bash
npm run report
O relatório será gerado em:

Código
/mochawesome-report/mochawesome.html
Abra o arquivo no navegador para visualizar métricas, gráficos e resultados consolidados.

📝 Cenários de Teste Implementados

✔ POST /transferencias
Criação de transferência válida

Validação de valor mínimo

Retorno de erro 422 para valores inválidos

✔ GET /transferencias/:id
Retorno correto dos dados da transferência

Validação de campos essenciais

✔ GET /transferencias?page=1&limit=10
Validação da paginação

Retorno de 10 registros

Status 200

👩‍💻 Autora
Camila Leite  
Quality Assurance | Testes Automatizados | API Testing
