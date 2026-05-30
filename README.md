![Status](https://img.shields.io/badge/status-active-success)
![Mocha](https://img.shields.io/badge/tests-Mocha%20%2B%20Chai-blue)
![Supertest](https://img.shields.io/badge/API-Supertest-orange)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-green)
![Mochawesome](https://img.shields.io/badge/report-Mochawesome-purple)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## ** Objetivo do Projeto**

Este projeto tem como finalidade assegurar a qualidade da **API Banco** por meio de testes automatizados, garantindo que funcionalidades críticas — como criação de transferências, autenticação e paginação — operem de forma consistente, segura e previsível.  
A solução foi estruturada seguindo padrões corporativos de QA, priorizando clareza, organização e escalabilidade.

---

## ** Stack Utilizada**

- **Node.js** – Ambiente de execução  
- **Mocha** – Framework de testes  
- **Chai** – Biblioteca de asserções  
- **Supertest** – Testes de API via HTTP  
- **Dotenv** – Gerenciamento de variáveis de ambiente  
- **Mochawesome** – Relatórios HTML profissionais  

---

## 📁 Estrutura do Projeto

```text
banco-api-testes/
│
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
```

---

## ⚙️ Configuração do Ambiente

### 1. Instalar dependências

```bash
npm install
```

### 2. Criar arquivo `.env`

```env
BASE_URL=http://localhost:3000
```

Ajuste o valor conforme o endereço da sua API.

---

## ▶️ Execução dos Testes

Executar todos os testes:

```bash
npm test
```

Executar um teste específico:

```bash
npx mocha test/transferencia.test.js
```

---

## 📊 Relatórios

Gerar relatório Mochawesome:

```bash
npm test
```
---

## 🧪 Casos de Teste Cobertos

Este projeto valida os principais fluxos da API bancária:

- Criação de transferência com sucesso
- Validação de autenticação
- Validação de campos obrigatórios
- Tratamento de respostas de erro
- Validação de códigos HTTP
- Verificação da estrutura da resposta

---

## ✅ Boas Práticas Aplicadas

- Organização do projeto por responsabilidades
- Utilização de fixtures para dados de teste
- Reutilização de código através de helpers
- Separação entre dados, autenticação e testes
- Geração automática de relatórios com Mochawesome
- Versionamento com Git e GitHub

---

## 👩‍💻 Autor

Camila Leite

- Transição de carreira de Farmacêutica para Quality Assurance
- Projeto desenvolvido para estudo de Testes de API com Node.js

LinkedIn:
https://www.linkedin.com/in/camilaqueirozleite/

GitHub:
https://github.com/camilaqueirozleite

Após a execução, o relatório estará disponível em:

```text
mochawesome-report/
```
