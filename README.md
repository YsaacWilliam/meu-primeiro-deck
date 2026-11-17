# 🃏 Meu Primeiro Deck

![Pipeline](https://github.com/YsaacWilliam/meu-primeiro-deck/actions/workflows/pipe.yml/badge.svg)

Site para quem está começando no **Pokémon TCG**: regras básicas, vídeo para iniciantes e 7 decklists para conhecer.

🔗 **Acesse:** https://ysaacwilliam.github.io/meu-primeiro-deck/

## O que tem no site

- 📖 Regras básicas explicadas passo a passo
- ▶️ Vídeo para quem nunca jogou
- 🂠 7 decklists prontas para copiar

## 🔐 Pipeline de segurança (CI/CD)

A cada `push`, o GitHub Actions roda esta esteira:

| Etapa | Ferramenta | O que faz |
|-------|-----------|-----------|
| Verificar | Shell | Confere se os arquivos existem |
| Secrets Scan | Gitleaks | Procura senhas e tokens no código |
| **SAST** | Semgrep | Analisa o código sem executar |
| **DAST** | OWASP ZAP | Ataca o site rodando |
| Deploy | GitHub Actions | Só roda se tudo passar |

Se o SAST ou o DAST encontrar falha grave, a pipeline reprova e o deploy não acontece.

## 🛠️ Tecnologias

HTML • CSS • GitHub Actions • GitHub Pages

---

👤 **Ysaac William** • Atividade para o professor Israel da Costa

> Projeto acadêmico, sem fins comerciais. A Nintendo não apoia nem patrocina este projeto. Pokémon e Pokémon TCG pertencem aos seus respectivos proprietários.
