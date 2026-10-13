# Évora Dev AI — protótipo do painel

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Limitações atuais
- Projetos e missões ficam no localStorage de cada navegador, sem sincronização entre celular e notebook.
- Os botões de status são controles manuais, não executam código.
- Não há login, integração de IA, fila ou execução autônoma nesta etapa.
- Não publique o painel com dados sensíveis antes de adicionar autenticação e persistência segura.

## Próxima etapa
Integrar Supabase Auth + banco de dados com RLS e depois um executor isolado com pull requests e aprovações.
