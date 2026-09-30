# Projeto X — Auditoria e melhorias (v2.0)

Arquivos da entrega (substituem os originais, mesma pasta): `index.html`, `sw.js`, `manifest.webmanifest`, `icons/`.
O original em `projeto_x_backup_melhorado/` **não foi alterado**.

## A. Estado atual (antes)
- 7 telas (Cadastro, Dashboard, Watchlist, Histórico, Atrizes, Biblioteca, Configurações) + páginas de vídeo e atriz.
- Dados: `localStorage` (vídeos, watchlist, atrizes, tags, grupos, prefs) + fotos em IndexedDB.
- ~3.000 linhas de CSS (blocos inteiros duplicados 2–3×), JS com `onclick` inline, referências por **índice** de array, `render()` global a cada tecla.
- Código morto: modal de atriz (nunca aberto), `renderAtrizes` duplicada, `renderGroupFilters`, `toggleGroupSelection`, `sortearIndicePonderado`, cropper duplicado, barra de abas `.tabs` (sempre oculta), ~10 funções sem chamador.

## B. Bugs encontrados
| # | Sev. | Problema | Causa | Correção |
|---|------|----------|-------|----------|
| 1 | 🔴 | Backup **apaga todas as tags** (exportar e importar) | `sanitizeBackupVideo` tratava `tags` (texto) como array | Tags tratadas como texto; importador aceita texto **e** array (v1–v5) |
| 2 | 🔴 | "Mover para Avaliação" remove o item da fila **antes** de salvar e não zera `editingIndex` (podia sobrescrever outro vídeo) | `splice` imediato + estado de edição preso | O item só sai da fila ao **salvar** a avaliação; faixa "Avaliando item da watchlist" + cancelar |
| 3 | 🔴 | Service Worker nunca instalava e nunca atualizava | `cache.addAll` com ícones inexistentes; cache-first eterno | Instalação tolerante, rede-primeiro p/ páginas, ícones 192/512 criados |
| 4 | 🟠 | Nomes com apóstrofo/aspas (O'Hara) quebram botões; HTML injetado via nome/tag/studio/grupo (`sortearWatchlist`, tags, `onclick` com `'`) | `onclick` com strings montadas e sem escape | `data-*` + delegação de eventos + `esc()` em tudo |
| 5 | 🟠 | Sem botão de **excluir** no modo compacto (padrão) | Botão só existia no modo detalhado | Excluir sempre visível (+ confirmação + Desfazer) |
| 6 | 🟠 | Atriz/tag digitada e não "adicionada" some ao salvar | Só o campo oculto era lido | Texto pendente é confirmado ao salvar |
| 7 | 🟠 | Esc apagava o formulário sem perguntar; Ctrl+S fora do cadastro disparava alerta | Listener global | Esc pede confirmação se há dados; Ctrl+S só em Cadastro/Watchlist |
| 8 | 🟠 | Fotos gravadas também no `localStorage` (cota ~5 MB) → falhas de gravação | `img` no payload | Só IndexedDB; fotos antigas migradas; upload redimensionado |
| 9 | 🟠 | Importar substitui tudo sem confirmar e sem volta | — | Diálogo (Substituir / Mesclar), resumo e **Desfazer** |
| 10 | 🟡 | Studio digitado que é parte de outro ("Vixen" vs "Vixen Classic") virava o existente; campo podia virar lista de studios | `expandSingleStudioFromGroup` | Salva como digitado (só reaproveita a grafia de studio idêntico) |
| 11 | 🟡 | Filtro de studio sem correspondência mostrava **tudo**; vídeo sem studio aparecia em qualquer filtro | `targets.length==0` ignorava filtro; `includes("")` | Sem correspondência = lista vazia |
| 12 | 🟡 | Histórico sem estado vazio; classe `historico-empty-state` sem CSS | — | Estados vazios com ação em todas as listas |
| 13 | 🟡 | `capitalize` transformava "DP", "VR", "McDonald" | minúsculas forçadas | Só capitaliza palavras todas em minúsculas |
| 14 | 🟡 | Links inválidos aceitos ("abc" → https://abc); `javascript:` possível via backup | `normalizeUrl` sem validação | Validação http(s); abrir só http(s) |
| 15 | 🟡 | Notas fora de 0–10 | apenas `min/max` HTML | Limitadas a 0–10 |
| 16 | 🟡 | Cropper regravava JPEG a cada "Salvar" (perda de qualidade); cropper duplicado | dois componentes | Um componente; só recorta se a foto/enquadramento mudou |
| 17 | 🟡 | Tela inteira redesenhada a cada tecla; ranking/contagem O(atrizes×vídeos) | `render()` global | Render só da tela ativa, debounce, índice em cache, paginação (40 por vez) |
| 18 | 🟡 | Dados corrompidos eram sobrescritos; `localStorage` indisponível quebrava | `try` devolvia vazio e depois gravava | Cópia `…__corrompido`, aviso, fallback em memória |
| 19 | 🟢 | Labels sem `for`, sem foco visível, modal/alerts nativos, navegação mobile com 7 itens a 320 px, cartão de atriz clicável só por mouse | — | Acessibilidade e layout refeitos (ver abaixo) |

## C/D. Melhorias e prioridade
- **P0** bugs 1–3 · **P1** bugs 4–9, sistema de design, render eficiente, responsividade, acessibilidade · **P2** 10–19, filtros ativos com remoção, preferências lembradas · **P3** ordenação por recentes, "/" para buscar, backup mesclável.

## E. O que foi implementado
**Arquitetura (arquivo único, sem dependências):** CSS com tokens (cores, superfícies, raios, espaçamento, sombras, tipografia em `rem`, cores semânticas, acento configurável via `--accent-rgb`); JS dividido em seções (constantes → utilitários → armazenamento → normalização/migração → imagens → domínio → UI base → telas → ações → init); um único listener de clique (`data-action`); roteamento por hash (`#/historico`, botão Voltar do navegador funciona, recarregar mantém a tela).

**Dados e migração (nada é perdido):** mesmas chaves do `localStorage`. Na 1ª abertura: cópia bruta de vídeos/watchlist em `meu_imdb_premigracao_v1`, ids estáveis, datas, `nota` numérica, tags sempre texto, fotos movidas do `localStorage` para o IndexedDB.

**UX/UI:** confirmação (`<dialog>`) + Desfazer para exclusões; toasts; erros inline; barra de filtros ativos com × por filtro; estados vazios; menu inferior 4+"Mais" (cabe em 320 px); Esc/Ctrl+S seguros; Alt+1…7; "/" foca a busca; foco preservado ao favoritar; busca sem acento; seções recolhidas lembradas; contraste do botão se adapta à cor de destaque.

**Acessibilidade:** link "pular para o conteúdo", landmarks, `aria-current`/`aria-pressed`/`aria-expanded`, labels associados, foco visível, cropper com teclado, `prefers-reduced-motion`.

**Desempenho:** teste com 3.000 vídeos/560 atrizes sem tarefas longas (>50 ms) em filtro, troca de tela e ranking.

### Funcionalidades preservadas
Cadastro/edição com nota ponderada (mesmos pesos), preenchimento por link, guia e descrições 1–10, detecção de link duplicado, dashboard (filtros, histograma, top studios/atrizes), watchlist (prioridade, sorteio com bônus de atriz favorita), histórico (busca, tag, nota mín/máx, studio/grupo, atriz, favoritos, sorteio ponderado), atrizes (foto, recorte, favorita, nascimento, página com top 5), biblioteca (tags, studios, grupos com minimizar), configurações visuais, backup, PWA, atalhos, minimizar seções.

### Movido / removido (com justificativa)
- Exportar/Importar backup: do Cadastro para **Configurações → Dados e backup** (+ botão na lateral).
- Botão "Salvar Configurações": removido (as opções já salvavam ao mudar).
- Modal "Editar Atriz" e demais funções sem chamador: removidos (a página da atriz cobre tudo).
- "Modo de visualização" do histórico + "Modo das listas": unificados em um só controle.

### Novo (não existia)
Mesclar backup e desfazer importação; ordenação por recentes/antigos e ordenação da watchlist por prioridade (padrão); criar tag direto do cadastro; favoritar atriz na lista; foto da atriz opcional; contagem de uso nas tags/studios; atrizes só da watchlist agora aparecem na lista; "Último backup"; paginação; data de criação (`criadoEm`).

## Testes executados (navegador real, localStorage com dados no formato antigo)
Migração + fotos → IndexedDB; XSS (nome/tag/studio com HTML e aspas); apóstrofo em atriz; validações (nome, link inválido/duplicado, tag inexistente); atriz pendente; fluxo Avaliar (cancelar mantém a fila, salvar remove); excluir/desfazer; filtros (sem resultado, limpar, grupo); backup com tags, importar substituindo/mesclando/desfazendo, formato v4 com tags em array, JSON inválido; perfil da atriz com recorte e remoção de foto; atalhos; configurações; dados corrompidos; 3.000 vídeos; ausência de IDs duplicados e de controles sem rótulo; sem rolagem horizontal em 1366, 1024, 768, 390 e 320 px.

**Não verificado:** registro do Service Worker (o painel de teste bloqueia o registro; o arquivo é válido e servido) e uso em aparelho físico.

## Atenção
- Backups gerados pela versão **antiga** já estão sem tags (bug 1) e isso não é recuperável a partir deles. Seus dados **no navegador** ainda têm as tags: abra a v2 no **mesmo local/endereço** do app antigo (copie os arquivos por cima, na mesma pasta/URL) para que ela migre os dados, e então exporte um backup novo.
- `localStorage` é por endereço: abrir a v2 de outro caminho/URL mostrará dados vazios.

---

# v2.1 — Datas de avaliação, filtros com exclusão, modais, grupos e tags

## Alterações estruturais de dados (migração automática, schema 2 → 3)
| Estrutura | Antes | Depois |
|---|---|---|
| Vídeo | `criadoEm`, `atualizadoEm` | + `avaliadoEm` (1ª avaliação, ISO) e `reavaliadoEm` (última vez que uma nota mudou). `criadoEm` (data real gravada pela v2) é copiado para `avaliadoEm`; itens sem data ficam **vazios = "Data não registrada"**. Nada é inventado |
| Grupo de studios | `{name, studios[]}` | + `id` estável (renomear não quebra filtros); `collapsedStudioGroups` continua salvo mas não é mais usado |
| Preferências | — | + `tagSort`, `monthRange` |
| Backup | v5 | v6 (mesmo formato; importa v1–v6) |
Antes de migrar, uma cópia bruta (vídeos, watchlist, grupos) é guardada em `meu_imdb_premigracao_v3`.

**Por que dois campos de data:** `avaliadoEm` responde "quando assisti/avaliei"; `reavaliadoEm` só muda se uma nota mudar (favoritar ou corrigir o nome não "reavalia"). Você pode corrigir `avaliadoEm` no formulário (não aceita data futura). Gráficos agrupam por **ano+mês** (`2026-01`).

## Implementado
1. **Data da avaliação:** campo no cadastro (padrão hoje), chip "Avaliado em…" nos cartões, filtro "Avaliado de/até", ordenação por data.
2. **Dashboard — vídeos avaliados por mês:** colunas por ano+mês, meses vazios com 0, janela 12/24 meses/tudo, respeita os filtros do dashboard, leitura de mês/ano/quantidade ao passar o mouse **ou focar** (teclado), avisa quantos vídeos não têm data.
3. **Modal da atriz** (nome, foto, favorita, notas, contagens, tags, studios, vídeos relacionados, favoritar, "Ver no histórico", "Perfil completo") e 4. **modal do vídeo** (nota/prioridade, data, studio, atrizes, tags, link, avaliação completa, editar, favoritar, excluir, "Excluir deste sorteio", "Página completa"). Um único `<dialog>` com pilha e botão Voltar; Esc, clique fora e ✕ fecham; as páginas completas continuam existindo.
5. **Filtros:** busca de filtros com sugestões (só dados existentes: tags, studios, grupos, atrizes, vídeos) → **filtros ativos** em chips separados do campo; **incluir/excluir**; modo "Todas / Qualquer" para tags e atrizes; contadores "42 disponíveis para sorteio (47 encontrados · 5 excluídos de 100)"; "Limpar filtros", "Limpar exclusões", "Limpar tudo"; botão de sorteio mostra quantos entram. **Pipeline:** filtros → inclusões → exclusões → conjunto final → sorteio. Exclusão é só da lista atual (memória): não apaga nada nem persiste.
6. **Grupos:** gerenciador (lista + "Sem grupo — N" + busca de grupo/studio), seleção múltipla, "Selecionar visíveis", mover/manter nos dois ao haver conflito, sem duplicar studio no grupo, renomear/excluir grupo (não apaga studios nem vídeos), **renomear/mesclar studio** em todos os vídeos, grupos, e filtros; grupo usado em inclusão e exclusão.
7. **Tags:** busca, ordenação (nome/uso/sem uso), "mais usadas", contagem, **renomear/mesclar** (propaga para os vídeos), remover sem uso em lote, detectar tags usadas em vídeos mas fora da biblioteca (+ adicionar), duplicidade ignora caixa e acento, clicar na tag abre o histórico filtrado.

## ANTES → DEPOIS (alterações em funcionalidades existentes)
- Campos de texto "Tag", "Studio ou Grupo" e "Atriz" do histórico (e "Studio ou Grupo" da watchlist) → **seletor de filtros** (escolhe da lista; o campo "Pesquisar" continua buscando por texto em tudo). Motivo: permitir vários valores, exclusão e chips separados.
- "Detalhes" abria uma página → agora abre **modal** (a página continua via "Página completa"). Clicar numa atriz abre modal; "Perfil completo" leva à página.
- Grupos: caixas de marcação por grupo → gerenciador. Botão "Limpar Grupos" → "Remover todos os grupos" dentro do gerenciador.
- "Limpar filtros" não apaga mais as exclusões (há "Limpar exclusões"/"Limpar tudo").
- Voltar do navegador devolve a posição de rolagem da lista.

## Testes (navegador real, dados migrados do formato v2 e do formato antigo)
Datas (novo, futuro, legado sem data, editar nota/favorito, período, ordenação); gráfico (mês vazio, vários meses, anos diferentes, filtro de atriz); modais (abrir/voltar/fechar por ✕ e clique fora, favoritar dentro, filtros e ordenação preservados); filtros (1 e vários, E/OU, exclusão de vídeo e de studio, grupo incluído e grupo − studio, sorteio só entre restantes, limpar filtros/exclusões, resultado vazio); grupos (criar, renomear refletido no chip do filtro, mover com conflito, sem grupo, excluir sem perder vídeos); tags (duplicada sem acento, busca, ordenar, remover sem uso, mesclar, renomear, órfãs); studio mesclado; regressão do cadastro, Avaliar da watchlist, excluir/desfazer, sorteio, atrizes, configurações e backup v6. Sem rolagem horizontal em 1920, 390 e 320 px; modais cabem na tela.

## Limitações conhecidas
- O painel de teste não gera quadros de tela: não consegui validar **visualmente** os modais/seletor (validei por DOM, medidas e fluxos); o registro do Service Worker segue não verificado.
- Exclusões do sorteio vivem só na sessão (recarregar limpa) — por escolha, para não "esconder" vídeos sem você perceber.
- Um studio ainda pode estar em mais de um grupo se você escolher "Manter nos dois" (mantém compatibilidade com dados antigos).
- Itens antigos sem data só entram no gráfico se você informar a data real.

## Sugestões de próximas funcionalidades (NÃO implementadas)
| # | Sugestão | Resolve | Complex. | Vale agora? |
|---|---|---|---|---|
| 1 | Evolução da nota média por mês (linha) | ver se seu gosto/critério mudou | Baixa | Sim — usa `avaliadoEm` |
| 2 | Adicionados × avaliados por mês (watchlist que virou avaliação) | medir backlog | Média (precisa guardar data de saída da fila) | Depois |
| 3 | Tags/grupos/studios mais usados no dashboard | panorama do acervo | Baixa | Sim |
| 4 | Salvar combinações de filtros ("Favoritos 8+ de 2026") | repetir buscas | Média | Sim |
| 5 | Filtros persistentes entre sessões | recuperar contexto | Baixa | Sim |
| 6 | Exclusão permanente de sorteio ("nunca sortear") como marcador no vídeo | evitar repetições | Baixa (novo campo) | Talvez |
| 7 | Histórico de reavaliações (lista de notas por data) | acompanhar mudanças | Média | Depois |
| 8 | Lembrete de backup (>14 dias) | segurança dos dados | Baixa | Sim |
| 9 | Exportar CSV | planilhas | Baixa | Depois |
| 10 | Comparar dois vídeos / atrizes | decidir entre opções | Média | Depois |
| 11 | Sincronização entre dispositivos | usar em celular e PC | Alta (precisa de serviço externo) | Só se necessário |
| 12 | Metas mensais ("avaliar 10 por mês") | motivação | Baixa | Opcional |
