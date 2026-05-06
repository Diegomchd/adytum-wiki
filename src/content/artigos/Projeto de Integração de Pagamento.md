---
title: "Implementação de Gateway de Pagamento: Segurança e Webhooks"
description: Como integrar checkouts externos com retorno de status via Webhook usando Python e Flask.
pubDate: 2026-05-06
---
Este projeto foca na criação de um **Proxy Seguro** para pagamentos, garantindo que chaves de API nunca fiquem expostas no frontend e tratando retornos assíncronos via Webhooks.

## 1. O Problema da Segurança
Ao integrar gateways (como Infinity Pay ou Stripe), expor a `API_KEY` no JavaScript do navegador é um risco crítico.
* **Solução:** O Backend (Python) atua como intermediário. O frontend solicita o pagamento ao nosso servidor, que se comunica com o gateway usando variáveis de ambiente protegidas.

## 2. Arquitetura do Projeto
A estrutura foi dividida para garantir a separação de responsabilidades:
* **Frontend:** Interface simples para o usuário.
* **Backend (Python/Flask):** Gerencia a lógica, protege as chaves e recebe confirmações.

## 3. Configuração do Ambiente (Setup)
Para este projeto, utilizamos um ambiente isolado para evitar conflitos de dependências:
```powershell
# Criação e ativação do ambiente virtual
python -m venv venv
.\venv\Scripts\activate

# Instalação das dependências necessárias
pip install flask requests python-dotenv flask-cors
```
### Manifesto de Dependências (requirements.txt)

- **Flask:** Servidor web.
- **Requests:** Para "telefonar" para a API do Gateway.
- **Python-dotenv:** Gestão de segredos (arquivo .env).
## 4. O Fluxo Assíncrono (Webhooks)

Como um pagamento pode demorar para ser processado, utilizamos Webhooks. O Gateway envia um `POST` para o nosso servidor assim que o status muda.

**Regras de Implementação:**

1. **Idempotência:** Garantir que o mesmo pagamento não seja processado duas vezes.
2. **Validação:** Verificar a assinatura da requisição para garantir que ela veio do Gateway oficial.
## 5. Exemplo de Código (Backend)

``` Python
@app.route('/create-checkout', methods=['POST'])
def create_checkout():
    headers = {"Authorization": f"Bearer {os.getenv('API_KEY')}"}
    payload = {
        "amount": request.json['total'],
        "currency": "BRL"
    }
    response = requests.post("[https://api.gateway.com/v1/payments](https://api.gateway.com/v1/payments)", json=payload, headers=headers)
    return response.json()
```

---

_Artigo documentado como parte dos meus estudos em Análise e Desenvolvimento de Sistemas._