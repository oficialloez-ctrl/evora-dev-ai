# Évora Dev AI — arquitetura inicial

## Objetivo
Agente de desenvolvimento para sites, sistemas e aplicativos, com execução assíncrona e supervisão humana.

## Componentes previstos
- Painel: Next.js, TypeScript, autenticação e acompanhamento de missões.
- Persistência: Supabase (projetos, tarefas, execuções, aprovações e auditoria).
- Orquestrador: API que planeja tarefas e despacha jobs para uma fila.
- Executor: ambiente isolado e temporário para clonar repositórios, programar e rodar testes.
- GitHub: branches por tarefa e pull requests para revisão.
- Vercel: hospedagem do painel e previews; não executar jobs longos em requisições web.
- Voz (futuro): transcrição de comandos com confirmação para ações críticas.

## Política de autonomia
O agente pode planejar, editar código em branch isolada, rodar testes e abrir pull requests. Exige aprovação explícita para merge, deploy de produção, exclusões, gastos e alterações de dados reais. Não armazenar tokens em código nem logs.

## Próximos passos
1. Criar painel responsivo com autenticação.
2. Modelar tabelas e políticas de acesso no Supabase.
3. Implementar fila e executor isolado.
4. Conectar GitHub com permissões mínimas e fluxo de pull request.
5. Adicionar relatórios de testes, aprovações e histórico.
