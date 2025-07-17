# Tattoo Styles API

*Estudo prático de criação de uma API REST funcional para alimentar um front‑end com os estilos de tatuagem mais comuns do mercado.*


---

## 🚀 Visão Geral

Este projeto é uma **API REST** desenvolvida com **Fastify** e **TypeScript**, cujo objetivo é:

* Criar um back‑end leve e rápido;
* Fornecer informações sobre os estilos de tatuagens mais populares no mercado;
* Servir de base para um front‑end consumir e exibir os dados.

Perfeito para fins de estudo e como boilerplate para projetos pessoais.

---

## 💠 Tecnologias

| Tecnologia     | Descrição                                             |
| -------------- | ----------------------------------------------------- |
| **Fastify**    | Framework Node.js de alta performance                 |
| **TypeScript** | Garantia de tipagem forte e autocompletar             |
| REST           | API baseada em rotas HTTP seguindo boas práticas REST |

---

## 📦 Estrutura

```
/
├── src/
│   ├── routes/         # Definição de rotas (GET, POST ...)
│   ├── controllers/    # Lógica de resposta da API
│   ├── services/       # Business logic (obtém dados de estilos)
│   └── models/         # Tipagens e interfaces TypeScript
├── tsconfig.json       # Config TypeScript
└── package.json        # Dependências e scripts
```

---

## ✨ Endpoints

* `GET /styles`
  Lista os estilos de tatuagens mais comuns.

* `GET /styles/:id`
  Detalhes de um estilo específico (ex.: 'realismo', 'old school').

*(Outros endpoints podem ser adicionados conforme evolução do projeto.)*

---

## 🧪 Como Executar

1. Clonar o repositório

   ```bash
   git clone https://github.com/simonntech/tattooStylesAPI.git
   ```

2. Instalar dependências

   ```bash
   npm install
   ```

3. Executar em modo desenvolvimento

   ```bash
   npm run dev
   ```

4. Build para produção

   ```bash
   npm run build
   npm start
   ```

---

## 🎯 Objetivo do Estudo

* Praticar arquitetura de uma **API REST** leve e tipada;
* Explorar o uso de **Fastify** e **TypeScript** em conjunto;
* Aprimorar habilidades de consumos de dados via front‑end (frameworks como React/Vue/etc.).

---


## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

*Feito com ❤️ por SimonnTech*

---

