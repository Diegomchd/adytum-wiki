---
title: "Guia Prático: Automação com n8n"
description: "Resumo técnico sobre a ferramenta de workflow baseada em nós e como integrá-la."
pubDate: 2026-03-18
tags: ["automação", "low-code", "dev-ops"]
---

# n8n: O "Zapier" dos Desenvolvedores

O n8n é uma ferramenta de automação de fluxo de trabalho (workflow) que utiliza uma interface visual baseada em **nós**. Diferente de outras ferramentas, ele é focado em privacidade e liberdade técnica.

## Conceitos Chave
- **Nodes (Nós):** São as peças individuais do quebra-cabeça. Cada nó faz uma tarefa (ex: enviar e-mail, buscar no banco de dados).
- **Triggers (Gatilhos):** O evento que inicia o fluxo (ex: uma nova linha no Google Sheets ou um Webhook).
- **Workflows:** O caminho que os dados percorrem de um nó para o outro.

## Formas de Instalação
1. **Desktop:** App simples para Windows/Mac (bom para testes rápidos).
2. **Cloud:** Versão paga e gerenciada.
3. **Self-hosted (Onde o ADS brilha):** Usando Docker ou npm para rodar no seu próprio servidor.

### Instalando via NPM (para Devs):
```bash
npm install n8n -g
n8n start

