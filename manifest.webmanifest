<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Projeto X - Organizador Pessoal</title>
  <meta name="description" content="Organizador pessoal de vídeos com avaliação, histórico, watchlist e dashboard." />
  <meta name="theme-color" content="#020617" />
  <style>
:root{
      --bg:#0f172a;
      --card:#111827;
      --card-2:#1f2937;
      --text:#e5e7eb;
      --muted:#94a3b8;
      --accent:#3b82f6;
      --accent-2:#2563eb;
      --border:#334155;
      --ok:#22c55e;
      --warn:#f59e0b;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:Arial, Helvetica, sans-serif;
      background:linear-gradient(180deg,#020617,#0f172a 30%,#111827);
      color:var(--text);
    }
    .container{
      width:100%;
      max-width:1200px;
      display:flex;
      flex-direction:column;
      gap:16px;
      margin:0 auto;
      padding:24px;
    }
    .section-card{
      width:100%;
      max-width:100%;
    }
    .section-body{
      width:100%;
    }
    .equal-grid{
      align-items:stretch;
    }
    .equal-grid > .card{
      height:100%;
    }
    h1,h2,h3{margin:0 0 12px}
    .grid{display:grid; gap:16px; width:100%;}
    .grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}
    .grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}
    .grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}
    .card{
      background:rgba(17,24,39,.9);
      border:1px solid var(--border);
      border-radius:16px;
      padding:18px;
      box-shadow:0 8px 24px rgba(0,0,0,.25);
    }
    .muted{color:var(--muted)}
    label{
      display:block;
      font-size:14px;
      color:#cbd5e1;
      margin-bottom:6px;
      font-weight:700;
    }
    input{
      width:100%;
      padding:10px 12px;
      border-radius:12px;
      border:1px solid var(--border);
      background:#0b1220;
      color:var(--text);
      outline:none;
    }
    input:focus{border-color:var(--accent)}
    button{
      padding:10px 14px;
      border-radius:12px;
      border:1px solid var(--border);
      background:var(--accent);
      color:white;
      cursor:pointer;
      font-weight:700;
    }
    button:hover{background:var(--accent-2)}
    .btn-secondary{
      background:#0b1220;
      color:var(--text);
    }
    .btn-secondary:hover{background:#162033}
    .row{display:flex; gap:10px; flex-wrap:wrap; align-items:center}
    .stats{
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:16px;
    }
    .stat-number{
      font-size:28px;
      font-weight:800;
    }
    .video-item{
      border:1px solid var(--border);
      border-radius:14px;
      padding:14px;
      background:rgba(31,41,55,.5);
    }
    .video-item.simple{
      padding:10px 14px;
    }
    .video-item.simple .link-block,
    .video-item.simple .atriz-block,
    .video-item.simple .history-details{
      display:none;
    }
    .video-item.simple .video-header{
      align-items:center;
    }
    .video-header{
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      gap:12px;
      flex-wrap:wrap;
    }
    .tag{
      display:inline-block;
      padding:4px 8px;
      border-radius:999px;
      border:1px solid var(--border);
      color:#cbd5e1;
      font-size:12px;
      margin-right:6px;
      margin-top:6px;
    }
    .history-grid{
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:8px;
      margin-top:10px;
      font-size:14px;
    }
    .bar-row{
      display:grid;
      grid-template-columns:220px 1fr 80px;
      gap:10px;
      align-items:center;
      margin-bottom:10px;
    }
    .bar-wrap{
      background:#0b1220;
      border:1px solid var(--border);
      border-radius:999px;
      height:16px;
      overflow:hidden;
    }
    .bar{
      height:100%;
      background:linear-gradient(90deg,#3b82f6,#60a5fa);
    }
    .small{font-size:13px}
    .top-gap{margin-top:14px}
    .link-text{
      color:#93c5fd;
      word-break:break-all;
      font-size:13px;
    }
    .score-field{position:relative}
    .score-help{
      display:none;
      margin-top:8px;
      padding:10px 12px;
      border-radius:12px;
      border:1px solid var(--border);
      background:#0b1220;
      color:#cbd5e1;
      font-size:13px;
      line-height:1.5;
    }
    .score-help strong{color:#fff}
    .score-field.active .score-help{display:block}
    .empty{
      padding:16px;
      border:1px dashed var(--border);
      border-radius:12px;
      color:var(--muted);
    }
    .section-header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      margin-bottom:12px;
      flex-wrap:wrap;
    }
    .section-body.hidden{
      display:none;
    }
    .section-card{
      width:100%;
      max-width:100%;
      min-height:140px;
    }
    #secCadastro,
    #secDashboard,
    #secWatchlist,
    #secHistorico,
    #secTags{
      min-height:120px;
    }
    .stats .card{
      min-height:110px;
    }
    #topStudios,
    #topAtrizes,
    #watchlist,
    #historico{
      min-height:80px;
    }
    .toggle-btn{
      min-width:110px;
    }
    .tabs{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin:4px 0 8px;
    }
    .tab-btn{
      background:#0b1220;
      color:var(--text);
      border:1px solid var(--border);
    }
    .tab-btn.active{
      background:var(--accent);
      color:#fff;
      border-color:var(--accent);
    }
    .main-section{
      display:none;
    }
    .main-section.active{
      display:block;
    }

    .main-section{
      width:100%;
    }
    .section-card{
      max-width:100%;
      width:100%;
    }

    .priority-tag{
      display:inline-block;
      padding:4px 8px;
      border-radius:999px;
      border:1px solid var(--border);
      font-size:12px;
      margin-top:6px;
      margin-right:6px;
    }
    .priority-muito-alta{background:rgba(220,38,38,.18); color:#fecaca;}
    .priority-alta{background:rgba(239,68,68,.15); color:#fca5a5;}
    .priority-media{background:rgba(245,158,11,.15); color:#fcd34d;}
    .priority-baixa{background:rgba(34,197,94,.15); color:#86efac;}
    .priority-muito-baixa{background:rgba(20,83,45,.25); color:#bbf7d0;}

    .guide-box{
      margin-top:14px;
      padding:16px;
      border-radius:16px;
      border:1px solid var(--border);
      background:rgba(15,23,42,.65);
    }
    .guide-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:12px;
      margin-top:12px;
    }
    .guide-item{
      border:1px solid var(--border);
      border-radius:14px;
      background:rgba(31,41,55,.45);
      padding:14px;
    }
    .guide-item h4{
      margin:0 0 8px;
      font-size:15px;
    }
    .guide-item ul{
      margin:0;
      padding-left:18px;
      color:#cbd5e1;
      line-height:1.45;
    }
    .guide-item li + li{
      margin-top:4px;
    }

    .advanced-filters{
      margin-top:12px;
      padding:14px;
      border-radius:16px;
      border:1px solid var(--border);
      background:rgba(15,23,42,.55);
    }
    .advanced-title{
      margin:0 0 10px;
      font-size:16px;
    }
    .note-badge{
      font-weight:800;
      border-width:2px;
    }
    .note-low{
      background:rgba(239,68,68,.12);
      border-color:rgba(239,68,68,.45);
      color:#fecaca;
    }
    .note-mid{
      background:rgba(245,158,11,.12);
      border-color:rgba(245,158,11,.45);
      color:#fde68a;
    }
    .note-good{
      background:rgba(59,130,246,.12);
      border-color:rgba(59,130,246,.45);
      color:#bfdbfe;
    }
    .note-top{
      background:rgba(34,197,94,.12);
      border-color:rgba(34,197,94,.45);
      color:#bbf7d0;
    }
    .video-item.note-low{
      border-color:rgba(239,68,68,.35);
      box-shadow:0 0 0 1px rgba(239,68,68,.10) inset;
    }
    .video-item.note-mid{
      border-color:rgba(245,158,11,.35);
      box-shadow:0 0 0 1px rgba(245,158,11,.10) inset;
    }
    .video-item.note-good{
      border-color:rgba(59,130,246,.35);
      box-shadow:0 0 0 1px rgba(59,130,246,.10) inset;
    }
    .video-item.note-top{
      border-color:rgba(34,197,94,.35);
      box-shadow:0 0 0 1px rgba(34,197,94,.10) inset;
    }
    .shortcut-box{
      margin-top:14px;
      padding:12px 14px;
      border-radius:14px;
      border:1px solid var(--border);
      background:rgba(11,18,32,.55);
    }
    .shortcut-box kbd{
      display:inline-block;
      min-width:28px;
      padding:4px 8px;
      border-radius:8px;
      border:1px solid var(--border);
      background:#020617;
      color:#fff;
      font-size:12px;
      font-weight:700;
      text-align:center;
      margin:0 4px 4px 0;
    }


    .dashboard-shell{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .dashboard-hero{
      position:relative;
      overflow:hidden;
      padding:22px;
      border-radius:18px;
      border:1px solid rgba(96,165,250,.28);
      background:
        radial-gradient(circle at top right, rgba(59,130,246,.22), transparent 34%),
        radial-gradient(circle at bottom left, rgba(37,99,235,.18), transparent 28%),
        linear-gradient(180deg, rgba(15,23,42,.95), rgba(17,24,39,.92));
      box-shadow:0 14px 34px rgba(2,6,23,.28);
    }
    .dashboard-hero h3{
      margin:0 0 6px;
      font-size:22px;
    }
    .dashboard-hero .hero-subtitle{
      color:#cbd5e1;
      max-width:760px;
      line-height:1.5;
    }
    .dashboard-filter-card{
      border:1px solid rgba(59,130,246,.18);
      background:linear-gradient(180deg, rgba(15,23,42,.86), rgba(17,24,39,.72));
      box-shadow:0 10px 24px rgba(2,6,23,.18);
    }
    .dashboard-filter-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:14px;
      align-items:end;
    }
    .stats.dashboard-stats{
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:14px;
    }
    .stats.dashboard-stats .card{
      position:relative;
      overflow:hidden;
      border:1px solid rgba(59,130,246,.18);
      background:linear-gradient(180deg, rgba(15,23,42,.88), rgba(17,24,39,.92));
      box-shadow:0 10px 26px rgba(2,6,23,.18);
    }
    .stats.dashboard-stats .card::after{
      content:"";
      position:absolute;
      inset:auto -28px -28px auto;
      width:110px;
      height:110px;
      border-radius:999px;
      background:radial-gradient(circle, rgba(59,130,246,.12), transparent 70%);
      pointer-events:none;
    }
    .dashboard-panel{
      border:1px solid rgba(59,130,246,.16);
      background:linear-gradient(180deg, rgba(15,23,42,.84), rgba(17,24,39,.92));
      box-shadow:0 10px 26px rgba(2,6,23,.16);
    }
    .dashboard-panel h2{
      margin-bottom:10px;
    }
    .histogram{
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:14px;
      align-items:end;
      min-height:220px;
      margin-top:12px;
    }
    .histogram-card{
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      gap:10px;
      min-height:220px;
      padding:14px 12px;
      border-radius:16px;
      border:1px solid var(--border);
      background:rgba(11,18,32,.55);
    }
    .histogram-bar-wrap{
      height:150px;
      display:flex;
      align-items:flex-end;
      justify-content:center;
    }
    .histogram-bar{
      width:100%;
      max-width:72px;
      min-height:8px;
      border-radius:14px 14px 8px 8px;
      background:linear-gradient(180deg, rgba(96,165,250,.95), rgba(37,99,235,.72));
      box-shadow:0 10px 20px rgba(37,99,235,.18);
      transition:height .2s ease;
    }
    .histogram-card.low .histogram-bar{
      background:linear-gradient(180deg, rgba(248,113,113,.95), rgba(220,38,38,.72));
      box-shadow:0 10px 20px rgba(220,38,38,.18);
    }
    .histogram-card.mid .histogram-bar{
      background:linear-gradient(180deg, rgba(251,191,36,.95), rgba(217,119,6,.72));
      box-shadow:0 10px 20px rgba(217,119,6,.18);
    }
    .histogram-card.good .histogram-bar{
      background:linear-gradient(180deg, rgba(96,165,250,.95), rgba(37,99,235,.72));
    }
    .histogram-card.top .histogram-bar{
      background:linear-gradient(180deg, rgba(74,222,128,.95), rgba(22,163,74,.72));
      box-shadow:0 10px 20px rgba(22,163,74,.18);
    }
    .histogram-value{
      font-size:24px;
      font-weight:800;
      line-height:1;
    }
    .histogram-label{
      font-size:13px;
      color:#cbd5e1;
    }
    .histogram-caption{
      font-size:12px;
      color:var(--muted);
    }

    
    .video-item h3{
      word-break: break-word;
      overflow-wrap: anywhere;
      line-height:1.3;
    }
    .video-item .row{
      flex-wrap: wrap;
      gap:6px;
    }
    .video-item .row button{
      flex: 1 1 auto;
      min-width:120px;
      white-space:nowrap;
    }


    .video-title{
      display:block;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      max-width:100%;
      cursor:default;
    }


    .video-header > div:first-child{
      flex:1 1 auto;
      min-width:0;
    }
    .video-header > .row{
      flex:0 0 auto;
      justify-content:flex-end;
    }
    .watch-title{
      display:block;
      width:100%;
      min-width:0;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      overflow-wrap:normal;
      word-break:normal;
      line-height:1.3;
    }


    .video-item.simple .video-header{
      display:grid;
      grid-template-columns:minmax(0,1fr) auto;
      align-items:start;
      gap:12px;
    }
    .video-item.simple .video-header > div:first-child{
      min-width:0;
    }
    .video-item.simple .video-header > .row{
      display:flex;
      flex-wrap:nowrap;
      justify-content:flex-end;
      align-items:center;
      gap:8px;
      white-space:nowrap;
    }
    .video-item.simple .video-header > .row button{
      flex:0 0 auto;
      min-width:140px;
    }
    .watch-title{
      display:block;
      max-width:100%;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    
    .video-item.simple .video-header > .row button{
      padding:8px 10px;
      min-width:100px;
      font-size:14px;
      border-radius:10px;
    }
    @media (max-width: 1100px){
      .video-item.simple .video-header > .row button{
        min-width:120px;
        font-size:13px;
      }
    }

    .tag-selector{
      display:flex;
      gap:8px;
      align-items:center;
      flex-wrap:wrap;
    }
    .tag-selector input{
      flex:1 1 220px;
    }
    .selected-tags{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:10px;
      min-height:20px;
    }
    .selected-tag-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:7px 10px;
      border-radius:999px;
      border:1px solid var(--border);
      background:rgba(59,130,246,.12);
      color:#dbeafe;
      font-size:13px;
      font-weight:700;
    }
    .selected-tag-chip button{
      padding:2px 6px;
      min-width:auto;
      border-radius:999px;
      background:#0b1220;
      color:#fff;
      font-size:12px;
      line-height:1;
    }
    .tag-help-text{
      margin-top:8px;
      font-size:12px;
      color:var(--muted);
    }


    .tag-library-box{
      margin-top:12px;
      padding:14px;
      border-radius:14px;
      border:1px solid var(--border);
      background:rgba(11,18,32,.45);
    }
    .tag-library-grid{
      display:grid;
      grid-template-columns:1fr auto auto;
      gap:8px;
      align-items:end;
      margin-bottom:10px;
    }
    .tag-library-list{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:10px;
    }
    .tag-library-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:7px 10px;
      border-radius:999px;
      border:1px solid var(--border);
      background:rgba(148,163,184,.08);
      color:#e5e7eb;
      font-size:13px;
      font-weight:700;
    }
    .tag-library-chip button{
      padding:2px 6px;
      min-width:auto;
      border-radius:999px;
      background:#0b1220;
      color:#fff;
      font-size:12px;
      line-height:1;
    }


    /* Destaque para tags no Histórico */
    #section-historico .tag{
      background:linear-gradient(180deg, rgba(59,130,246,.25), rgba(37,99,235,.25));
      border:1px solid rgba(96,165,250,.5);
      color:#dbeafe;
      font-weight:700;
      padding:6px 10px;
      border-radius:999px;
      box-shadow:0 4px 10px rgba(37,99,235,.15);
    }
    #section-historico .tag:hover{
      background:linear-gradient(180deg, rgba(96,165,250,.35), rgba(37,99,235,.35));
      transform:translateY(-1px);
    }


    .library-sections{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .library-box{
      margin-top:0;
      padding:14px;
      border-radius:14px;
      border:1px solid var(--border);
      background:rgba(11,18,32,.45);
    }
    .library-grid{
      display:grid;
      grid-template-columns:1fr auto auto;
      gap:8px;
      align-items:end;
      margin-bottom:10px;
    }
    .library-list{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:10px;
    }
    .library-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:7px 10px;
      border-radius:999px;
      border:1px solid var(--border);
      background:rgba(148,163,184,.08);
      color:#e5e7eb;
      font-size:13px;
      font-weight:700;
    }
    .library-chip button{
      padding:2px 6px;
      min-width:auto;
      border-radius:999px;
      background:#0b1220;
      color:#fff;
      font-size:12px;
      line-height:1;
    }
    .studio-groups-wrap{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:12px;
      margin-top:12px;
    }
    .studio-group-card{
      border:1px solid var(--border);
      border-radius:14px;
      background:rgba(17,24,39,.55);
      padding:12px;
    }
    .studio-group-card h4{
      margin:0 0 8px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:8px;
      flex-wrap:wrap;
    }
    .studio-group-meta{
      font-size:12px;
      color:var(--muted);
      margin-bottom:8px;
    }
    .studio-checklist{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:8px 12px;
      margin-top:10px;
      max-height:240px;
      overflow:auto;
      padding-right:4px;
    }
    .studio-checklist label{
      display:flex;
      align-items:center;
      gap:8px;
      margin:0;
      font-size:13px;
      font-weight:500;
    }
    .studio-checklist input{
      width:auto;
    }


    .group-filter-box{
      margin-top:10px;
      padding:12px;
      border-radius:14px;
      border:1px solid rgba(59,130,246,.18);
      background:rgba(11,18,32,.35);
    }
    .group-filter-list{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:8px;
    }
    .group-filter-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:7px 10px;
      border-radius:999px;
      border:1px solid var(--border);
      background:rgba(148,163,184,.08);
      color:#e5e7eb;
      font-size:13px;
      font-weight:700;
      cursor:pointer;
      user-select:none;
    }
    .group-filter-chip input{
      width:auto;
      margin:0;
    }


    .library-page{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .library-hero{
      position:relative;
      overflow:hidden;
      padding:20px 22px;
      border-radius:18px;
      border:1px solid rgba(96,165,250,.22);
      background:
        radial-gradient(circle at top right, rgba(59,130,246,.20), transparent 34%),
        radial-gradient(circle at bottom left, rgba(14,165,233,.14), transparent 30%),
        linear-gradient(180deg, rgba(15,23,42,.96), rgba(17,24,39,.90));
      box-shadow:0 14px 30px rgba(2,6,23,.22);
    }
    .library-hero h3{
      margin:0 0 6px;
      font-size:22px;
    }
    .library-hero .muted{
      max-width:760px;
      line-height:1.5;
    }
    .library-panel{
      margin-top:0;
      padding:16px;
      border-radius:18px;
      border:1px solid rgba(59,130,246,.14);
      background:linear-gradient(180deg, rgba(15,23,42,.82), rgba(17,24,39,.92));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .library-panel-header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      flex-wrap:wrap;
      margin-bottom:10px;
    }
    .library-panel-header h3{
      margin:0;
      font-size:18px;
    }
    .library-panel-subtitle{
      color:var(--muted);
      font-size:13px;
      margin-top:4px;
    }
    .library-box{
      border:1px solid rgba(148,163,184,.16);
      background:rgba(2,6,23,.18);
      box-shadow:0 6px 18px rgba(2,6,23,.10);
    }
    .tag-library-box{
      border:1px solid rgba(148,163,184,.16);
      background:rgba(2,6,23,.18);
      box-shadow:0 6px 18px rgba(2,6,23,.10);
    }
    .library-chip,
    .tag-library-chip{
      background:linear-gradient(180deg, rgba(59,130,246,.16), rgba(37,99,235,.10));
      border-color:rgba(96,165,250,.28);
      color:#dbeafe;
      box-shadow:0 4px 10px rgba(37,99,235,.10);
    }
    .studio-group-card{
      border:1px solid rgba(96,165,250,.18);
      background:linear-gradient(180deg, rgba(15,23,42,.76), rgba(17,24,39,.92));
      box-shadow:0 8px 20px rgba(2,6,23,.14);
    }
    .studio-group-card h4{
      margin-bottom:10px;
    }
    .studio-group-card .btn-secondary{
      padding:7px 10px;
      border-radius:10px;
    }
    .studio-checklist{
      padding:10px;
      border-radius:12px;
      background:rgba(2,6,23,.18);
      border:1px solid rgba(148,163,184,.12);
    }
    .studio-checklist label{
      padding:6px 8px;
      border-radius:10px;
      background:rgba(255,255,255,.02);
      border:1px solid transparent;
    }
    .studio-checklist label:hover{
      border-color:rgba(96,165,250,.22);
      background:rgba(59,130,246,.06);
    }


    .studio-group-actions{
      display:flex;
      align-items:center;
      gap:8px;
      flex-wrap:wrap;
    }
    .studio-group-body.hidden{
      display:none;
    }
    .studio-group-toggle{
      min-width:96px;
    }


    .favorite-check{
      display:flex;
      align-items:center;
      gap:8px;
      margin:0;
      font-size:13px;
      color:#e5e7eb;
      font-weight:700;
    }
    .favorite-check input{
      width:auto;
      margin:0;
      accent-color:#f59e0b;
    }
    .atriz-fav-badge{
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding:4px 10px;
      border-radius:999px;
      border:1px solid rgba(245,158,11,.35);
      background:rgba(245,158,11,.14);
      color:#fde68a;
      font-size:12px;
      font-weight:800;
      margin-top:8px;
    }
    .atriz-card{
      display:flex;
      align-items:center;
      gap:16px;
      padding:14px 16px;
      border-radius:18px;
      border:1px solid rgba(96,165,250,.25);
      background:linear-gradient(180deg, rgba(59,130,246,.14), rgba(37,99,235,.08));
      min-width:300px;
      position:relative;
    }
    .atriz-card img{
      width:72px;
      height:72px;
      border-radius:50%;
      object-fit:cover;
      border:2px solid rgba(96,165,250,.40);
      flex:0 0 auto;
    }
    .atriz-card-body{
      min-width:0;
      flex:1 1 auto;
    }
    .atriz-card-name{
      font-weight:800;
      color:#eff6ff;
      line-height:1.2;
    }
    .atriz-card-meta{
      font-size:12px;
      color:#cbd5e1;
      margin-top:4px;
    }
    .atriz-card .btn-secondary{
      padding:6px 10px;
      min-width:auto;
      border-radius:10px;
      flex:0 0 auto;
    }


    .atriz-card{
      cursor:pointer;
      transition:transform .15s ease, box-shadow .15s ease, border-color .15s ease;
    }
    .atriz-card:hover{
      transform:translateY(-1px);
      box-shadow:0 8px 18px rgba(2,6,23,.16);
      border-color:rgba(96,165,250,.32);
    }
    .atriz-card.favorita{
      border-color:rgba(245,158,11,.42);
      background:linear-gradient(180deg, rgba(245,158,11,.16), rgba(59,130,246,.08));
      box-shadow:0 10px 24px rgba(245,158,11,.10);
    }
    .modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(2,6,23,.72);
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  overflow:auto;
  z-index:9999;
}
    .modal-overlay.active{
      display:flex;
    }
    .modal-card::-webkit-scrollbar{
  width:6px;
}
.modal-card::-webkit-scrollbar-thumb{
  background:rgba(148,163,184,.4);
  border-radius:999px;
}
.modal-card{
  width:min(520px, 100%);
  max-height:90vh;
  overflow-y:auto;
  border-radius:18px;
  border:1px solid rgba(96,165,250,.24);
  background:linear-gradient(180deg, rgba(15,23,42,.98), rgba(17,24,39,.96));
  box-shadow:0 18px 36px rgba(2,6,23,.34);
  padding:18px;
}
    .modal-header{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      margin-bottom:14px;
    }
    .modal-header h3{
      margin:0;
      font-size:20px;
    }
    .modal-preview{
      display:flex;
      align-items:center;
      gap:14px;
      margin-bottom:14px;
    }
    .modal-preview img,
    .modal-preview .avatar-fallback{
      width:72px;
      height:72px;
      border-radius:50%;
      object-fit:cover;
      border:1px solid rgba(96,165,250,.28);
      background:rgba(2,6,23,.45);
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      color:#dbeafe;
      font-size:24px;
      flex:0 0 auto;
    }
    .modal-actions{
      display:flex;
      justify-content:flex-end;
      gap:10px;
      flex-wrap:wrap;
      margin-top:14px;
    }


    .atriz-stats-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:10px;
      margin-top:14px;
      width:100%;
    }
    .atriz-stat-card{
      padding:14px 12px;
      border-radius:14px;
      text-align:center;
      border:1px solid var(--border);
      background:rgba(11,18,32,.55);
      box-shadow:0 6px 16px rgba(2,6,23,.14);
    }
    .atriz-stat-number{
      font-size:24px;
      font-weight:800;
      line-height:1;
      color:#fff;
    }
    .atriz-stat-label{
      font-size:12px;
      color:#cbd5e1;
      margin-top:6px;
      font-weight:700;
      letter-spacing:.02em;
      text-transform:uppercase;
    }
    .stat-historico{
      border-color:rgba(59,130,246,.35);
      background:linear-gradient(180deg, rgba(59,130,246,.16), rgba(37,99,235,.10));
    }
    .stat-watchlist{
      border-color:rgba(245,158,11,.35);
      background:linear-gradient(180deg, rgba(245,158,11,.16), rgba(217,119,6,.10));
    }
    .stat-total{
      border-color:rgba(34,197,94,.35);
      background:linear-gradient(180deg, rgba(34,197,94,.16), rgba(22,163,74,.10));
    }


    .cropper-box{
      margin-top:14px;
      padding:14px;
      border-radius:14px;
      border:1px solid rgba(96,165,250,.18);
      background:rgba(2,6,23,.18);
    }
    .cropper-zoom-row{
      display:grid;
      grid-template-columns:auto 1fr auto;
      gap:10px;
      align-items:center;
      margin-top:12px;
    }
    .cropper-zoom-label{
      margin:0;
      font-size:13px;
      color:#cbd5e1;
      font-weight:700;
    }
    .cropper-zoom-input{
      width:100%;
      padding:0;
      border:none;
      background:transparent;
      accent-color:#3b82f6;
    }
    .cropper-zoom-value{
      min-width:52px;
      text-align:right;
      font-size:12px;
      color:#cbd5e1;
      font-weight:700;
    }
    .cropper-stage{
      position:relative;
      width:220px;
      height:220px;
      margin:10px auto 0;
      overflow:hidden;
      border-radius:18px;
      border:1px solid rgba(96,165,250,.24);
      background:rgba(15,23,42,.9);
      cursor:grab;
      user-select:none;
      touch-action:none;
    }
    .cropper-stage.dragging{
      cursor:grabbing;
    }
    .cropper-image{
      position:absolute;
      left:0;
      top:0;
      max-width:none;
      max-height:none;
      will-change:transform, width, height;
      pointer-events:none;
    }
    .cropper-mask{
      position:absolute;
      inset:0;
      border-radius:18px;
      box-shadow:inset 0 0 0 2px rgba(255,255,255,.08);
      pointer-events:none;
    }
    .cropper-help{
      margin-top:10px;
      font-size:12px;
      color:var(--muted);
      text-align:center;
    }

    .watchlist-shell{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .watchlist-hero{
      position:relative;
      overflow:hidden;
      padding:22px;
      border-radius:18px;
      border:1px solid rgba(245,158,11,.24);
      background:
        radial-gradient(circle at top right, rgba(245,158,11,.18), transparent 32%),
        radial-gradient(circle at bottom left, rgba(59,130,246,.14), transparent 28%),
        linear-gradient(180deg, rgba(15,23,42,.96), rgba(17,24,39,.92));
      box-shadow:0 14px 32px rgba(2,6,23,.24);
    }
    .watchlist-hero h3{
      margin:0 0 6px;
      font-size:22px;
    }
    .watchlist-hero .muted{
      max-width:780px;
      line-height:1.55;
    }
    .watchlist-stat-grid{
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:14px;
    }
    .watchlist-stat-card{
      position:relative;
      overflow:hidden;
      padding:16px 18px;
      border-radius:18px;
      border:1px solid rgba(245,158,11,.16);
      background:linear-gradient(180deg, rgba(15,23,42,.86), rgba(17,24,39,.94));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .watchlist-stat-card::after{
      content:"";
      position:absolute;
      inset:auto -24px -24px auto;
      width:96px;
      height:96px;
      border-radius:999px;
      background:radial-gradient(circle, rgba(245,158,11,.14), transparent 70%);
      pointer-events:none;
    }
    .watchlist-stat-label{
      font-size:13px;
      color:var(--muted);
    }
    .watchlist-stat-value{
      font-size:28px;
      font-weight:800;
      line-height:1.1;
      margin-top:6px;
    }
    .watchlist-form-card,
    .watchlist-filter-card{
      border:1px solid rgba(245,158,11,.14);
      background:linear-gradient(180deg, rgba(15,23,42,.82), rgba(17,24,39,.92));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .watchlist-panel-header{
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      gap:12px;
      flex-wrap:wrap;
      margin-bottom:14px;
    }
    .watchlist-panel-header h3{
      margin:0 0 4px;
      font-size:18px;
    }
    .watchlist-panel-subtitle{
      color:var(--muted);
      font-size:13px;
      line-height:1.45;
    }
    .watchlist-form-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:14px;
    }
    .watchlist-form-grid .full-width{
      grid-column:1 / -1;
    }
    .watchlist-form-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:14px;
    }
    .watchlist-form-actions button{
      flex:1 1 180px;
    }
    .watchlist-status-card{
      padding:10px 12px;
      border-radius:14px;
      border:1px solid rgba(59,130,246,.22);
      background:rgba(59,130,246,.08);
      color:#dbeafe;
      font-size:13px;
      font-weight:700;
    }
    .watchlist-filter-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:14px;
    }
    .watchlist-filter-grid .full-width{
      grid-column:1 / -1;
    }
    .watchlist-filter-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:14px;
    }
    .watchlist-filter-actions button{
      flex:1 1 220px;
    }
    .watchlist-sorted-card{
      padding:16px 18px;
      border-radius:18px;
      border:1px solid rgba(59,130,246,.24);
      background:linear-gradient(180deg, rgba(59,130,246,.14), rgba(17,24,39,.92));
      box-shadow:0 12px 28px rgba(2,6,23,.18);
    }
    .watchlist-sorted-title{
      font-size:22px;
      font-weight:800;
      line-height:1.2;
      margin-top:6px;
    }
    .watchlist-list-grid{
      display:grid;
      gap:14px;
    }
    .watchlist-item-card{
      border:1px solid rgba(148,163,184,.18);
      border-radius:18px;
      padding:16px;
      background:linear-gradient(180deg, rgba(15,23,42,.78), rgba(17,24,39,.92));
      box-shadow:0 10px 24px rgba(2,6,23,.14);
    }
    .watchlist-item-top{
      display:grid;
      grid-template-columns:minmax(0,1fr) auto;
      gap:14px;
      align-items:start;
    }
    .watchlist-item-title{
      margin:0;
      font-size:20px;
      font-weight:800;
      line-height:1.25;
      color:#f8fafc;
      word-break:break-word;
    }
    .watchlist-item-meta{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:10px;
    }
    .watchlist-meta-line{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:7px 10px;
      border-radius:999px;
      border:1px solid rgba(148,163,184,.16);
      background:rgba(2,6,23,.20);
      color:#dbeafe;
      font-size:12px;
      font-weight:700;
    }
    .watchlist-item-actions{
      display:flex;
      flex-wrap:wrap;
      justify-content:flex-end;
      gap:8px;
    }
    .watchlist-item-actions button{
      min-width:120px;
      padding:8px 10px;
      border-radius:10px;
    }
    .watch-favorite-badge{
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding:6px 10px;
      border-radius:999px;
      border:1px solid rgba(250,204,21,.34);
      background:linear-gradient(180deg, rgba(250,204,21,.18), rgba(234,179,8,.10));
      color:#fef3c7;
      font-size:12px;
      font-weight:800;
    }
    .watch-recommendation-note{
      margin-top:14px;
      padding:12px 14px;
      border-radius:14px;
      border:1px solid rgba(250,204,21,.24);
      background:rgba(250,204,21,.08);
      color:#fde68a;
      font-size:13px;
      line-height:1.45;
    }

    .watchlist-link-row{
      margin-top:14px;
      padding-top:14px;
      border-top:1px solid rgba(148,163,184,.14);
    }
    .watchlist-empty{
      padding:18px;
      border:1px dashed rgba(148,163,184,.28);
      border-radius:16px;
      background:rgba(2,6,23,.14);
      color:var(--muted);
    }



    .historico-shell{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .historico-hero{
      position:relative;
      overflow:hidden;
      padding:22px;
      border-radius:18px;
      border:1px solid rgba(96,165,250,.22);
      background:
        radial-gradient(circle at top right, rgba(34,197,94,.16), transparent 30%),
        radial-gradient(circle at bottom left, rgba(59,130,246,.16), transparent 32%),
        linear-gradient(180deg, rgba(15,23,42,.96), rgba(17,24,39,.92));
      box-shadow:0 14px 32px rgba(2,6,23,.24);
    }
    .historico-hero h3{margin:0 0 6px;font-size:22px;}
    .historico-hero .muted{max-width:800px;line-height:1.55;}
    .historico-stat-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;}
    .historico-stat-card{
      position:relative;overflow:hidden;padding:16px 18px;border-radius:18px;
      border:1px solid rgba(96,165,250,.16);background:linear-gradient(180deg, rgba(15,23,42,.86), rgba(17,24,39,.94));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .historico-stat-card::after{content:"";position:absolute;inset:auto -24px -24px auto;width:96px;height:96px;border-radius:999px;background:radial-gradient(circle, rgba(34,197,94,.14), transparent 70%);pointer-events:none;}
    .historico-stat-label{font-size:13px;color:var(--muted);}
    .historico-stat-value{font-size:28px;font-weight:800;line-height:1.1;margin-top:6px;}
    .historico-panel,.historico-sort-card,.historico-filter-card,.historico-toolbar-card{
      border:1px solid rgba(96,165,250,.14);
      background:linear-gradient(180deg, rgba(15,23,42,.82), rgba(17,24,39,.92));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .historico-panel-header{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:14px;}
    .historico-panel-header h3{margin:0 0 4px;font-size:18px;}
    .historico-panel-subtitle{color:var(--muted);font-size:13px;line-height:1.45;}
    .historico-status-card{padding:10px 12px;border-radius:14px;border:1px solid rgba(34,197,94,.22);background:rgba(34,197,94,.08);color:#dcfce7;font-size:13px;font-weight:700;}
    .historico-filter-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}
    .historico-advanced-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;}
    .historico-toolbar{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;}
    .historico-toolbar-left,.historico-toolbar-right{display:flex;flex-wrap:wrap;align-items:center;gap:10px;}
    .historico-toolbar .btn-secondary{min-width:180px;}
    .historico-results-grid{display:grid;gap:14px;}
    .historico-item-card{border:1px solid rgba(148,163,184,.18);border-radius:18px;padding:18px;background:linear-gradient(180deg, rgba(15,23,42,.78), rgba(17,24,39,.92));box-shadow:0 10px 24px rgba(2,6,23,.14);}
    .historico-item-card.note-low{border-color:rgba(239,68,68,.30);}
    .historico-item-card.note-mid{border-color:rgba(245,158,11,.30);}
    .historico-item-card.note-good{border-color:rgba(59,130,246,.30);}
    .historico-item-card.note-top{border-color:rgba(34,197,94,.30);}
    .historico-item-top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:start;}
    .historico-item-title{margin:0;font-size:21px;font-weight:800;line-height:1.25;color:#f8fafc;word-break:break-word;}
    .historico-item-subtitle{color:var(--muted);margin-top:6px;}
    .historico-item-meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;}
    .historico-meta-chip{display:inline-flex;align-items:center;gap:8px;padding:7px 10px;border-radius:999px;border:1px solid rgba(148,163,184,.16);background:rgba(2,6,23,.20);color:#dbeafe;font-size:12px;font-weight:700;}
    .historico-item-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;}
    .historico-item-actions button{min-width:128px;}
    .historico-content-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:14px;margin-top:14px;}
    .historico-info-box,.historico-score-box,.historico-link-box{padding:14px;border-radius:16px;border:1px solid rgba(148,163,184,.14);background:rgba(2,6,23,.20);}
    .historico-box-title{margin:0 0 10px;font-size:13px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#cbd5e1;}
    .historico-info-line + .historico-info-line{margin-top:10px;}
    .historico-score-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
    .historico-score-chip{padding:10px 12px;border-radius:14px;border:1px solid rgba(148,163,184,.12);background:rgba(255,255,255,.02);}
    .historico-score-chip strong{display:block;font-size:16px;margin-top:4px;color:#fff;}
    .historico-link-box .link-text{margin-top:8px;}

@media (max-width: 900px){
      .video-item.simple .video-header{
        grid-template-columns:1fr;
      }
      .video-item.simple .video-header > .row{
        flex-wrap:wrap;
        justify-content:flex-start;
      }
      .watchlist-item-top{
        grid-template-columns:1fr;
      }
      .watchlist-item-actions{
        justify-content:flex-start;
      }
    }

@media (max-width: 900px){
      .grid-2,.grid-3,.grid-4,.stats,.history-grid,.guide-grid,.dashboard-filter-grid,.histogram,.tag-library-grid,.library-grid,.studio-groups-wrap,.studio-checklist,.atriz-stats-grid,.watchlist-stat-grid,.watchlist-form-grid,.watchlist-filter-grid{grid-template-columns:1fr}
      .bar-row{grid-template-columns:1fr}
    }
  

    html{
      -webkit-text-size-adjust:100%;
      text-size-adjust:100%;
      scroll-behavior:smooth;
    }
    body{
      overflow-x:hidden;
      padding-bottom:max(12px, env(safe-area-inset-bottom));
    }
    input, button, select, textarea{
      font:inherit;
      min-height:44px;
    }
    input, select, textarea{
      font-size:16px;
    }
    button{
      touch-action:manipulation;
    }
    .tabs{
      position:sticky;
      top:0;
      z-index:50;
      padding:8px 0 10px;
      margin:0;
      overflow-x:auto;
      flex-wrap:nowrap;
      scrollbar-width:none;
      background:linear-gradient(180deg, rgba(2,6,23,.98), rgba(2,6,23,.88));
      backdrop-filter:blur(10px);
    }
    .tabs::-webkit-scrollbar{display:none;}
    .tab-btn{
      flex:0 0 auto;
      white-space:nowrap;
      min-height:44px;
    }
    .section-header .toggle-btn{
      min-height:40px;
    }
    .video-item,
    .library-chip,
    .tag-library-chip,
    .selected-tag-chip,
    .group-filter-chip,
    .atriz-card{
      overflow:hidden;
    }

    @media (max-width: 768px){
      body{
        background:linear-gradient(180deg,#020617,#0f172a 24%,#111827);
      }
      .container{
        padding:12px;
        gap:12px;
      }
      .card,
      .section-card,
      .dashboard-hero,
      .library-hero,
      .library-panel,
      .tag-library-box,
      .library-box,
      .watchlist-hero,
      .watchlist-form-card,
      .watchlist-filter-card,
      .watchlist-draw-card,
      .watchlist-summary-card{
        border-radius:14px;
      }
      .card{
        padding:14px;
      }
      h1{
        font-size:26px;
        line-height:1.2;
      }
      h2{
        font-size:22px;
      }
      h3{
        font-size:18px;
      }
      .section-header{
        align-items:flex-start;
      }
      .section-header h2{
        margin-bottom:4px;
      }
      .row{
        gap:8px;
      }
      .row button,
      .row .btn-secondary,
      .row input[type="file"]{
        width:100%;
      }
      .stats.dashboard-stats,
      .stats{
        gap:10px;
      }
      .stat-number{
        font-size:24px;
      }
      .dashboard-filter-grid,
      .guide-grid,
      .studio-groups-wrap,
      .atriz-stats-grid,
      .histogram,
      .grid-2,
      .grid-3,
      .grid-4,
      .history-grid{
        grid-template-columns:1fr !important;
      }
      .video-header,
      .video-item.simple .video-header{
        display:flex;
        flex-direction:column;
        align-items:stretch;
      }
      .video-item .row,
      .video-item.simple .video-header > .row{
        width:100%;
        justify-content:stretch;
        flex-wrap:wrap;
      }
      .video-item .row button,
      .video-item.simple .video-header > .row button{
        width:100%;
        min-width:0;
      }
      .bar-row{
        grid-template-columns:1fr;
      }
      .histogram-card{
        min-height:160px;
      }
      .histogram-bar-wrap{
        height:100px;
      }
      .studio-checklist{
        grid-template-columns:1fr;
        max-height:none;
      }
      .library-grid,
      .tag-library-grid{
        grid-template-columns:1fr;
      }
      .atriz-card{
        min-width:0;
        width:100%;
      }
      .modal-overlay{
        align-items:flex-end;
        padding:10px;
      }
      .modal-card{
        width:100%;
        max-height:92vh;
        border-radius:18px 18px 0 0;
        padding:16px;
      }
      .modal-preview{
        align-items:flex-start;
      }
      .cropper-stage{
        width:min(260px, 100%);
        height:min(260px, 70vw);
      }
      .shortcut-box .small{
        line-height:1.6;
      }
      .watch-title,
      .video-title{
        white-space:normal;
        overflow:visible;
        text-overflow:unset;
      }
    }

    @media (max-width: 480px){
      .container{
        padding:10px;
      }
      .tabs{
        padding-top:6px;
      }
      .tab-btn{
        padding:10px 12px;
        font-size:13px;
      }
      .card{
        padding:12px;
      }
      .dashboard-hero,
      .library-hero{
        padding:16px;
      }
      .guide-item,
      .video-item,
      .histogram-card,
      .studio-group-card,
      .library-box,
      .tag-library-box{
        padding:12px;
      }
      .selected-tags,
      .tag-library-list,
      .library-list,
      .group-filter-list{
        gap:6px;
      }
      .selected-tag-chip,
      .tag-library-chip,
      .library-chip,
      .group-filter-chip{
        width:100%;
        justify-content:space-between;
      }
      .modal-header{
        flex-direction:column;
        align-items:flex-start;
      }
      .modal-actions{
        flex-direction:column;
      }
      .modal-actions button{
        width:100%;
      }
      .histogram-value{
        font-size:20px;
      }
      .cropper-stage{
        height:min(260px, 72vw);
      }
    }


    .mobile-bottom-nav,
    .mobile-fab-top{
      display:none;
    }

    @media (max-width: 768px){
      body{
        padding-bottom:calc(92px + env(safe-area-inset-bottom));
      }
      .tabs{
        display:none;
      }
      .mobile-bottom-nav{
        display:grid;
        grid-template-columns:repeat(7,minmax(0,1fr));
        gap:8px;
        position:fixed;
        left:10px;
        right:10px;
        bottom:calc(10px + env(safe-area-inset-bottom));
        z-index:120;
        padding:8px;
        border:1px solid rgba(96,165,250,.20);
        border-radius:20px;
        background:rgba(2,6,23,.88);
        backdrop-filter:blur(14px);
        box-shadow:0 16px 34px rgba(2,6,23,.35);
      }
      .mobile-bottom-nav .tab-btn{
        min-height:58px;
        padding:8px 6px;
        border-radius:14px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:4px;
        font-size:11px;
        line-height:1.15;
        text-align:center;
        background:transparent;
        border-color:transparent;
      }
      .mobile-bottom-nav .tab-btn .icon{
        font-size:18px;
        line-height:1;
      }
      .mobile-bottom-nav .tab-btn.active{
        background:linear-gradient(180deg, rgba(59,130,246,.28), rgba(37,99,235,.22));
        border-color:rgba(96,165,250,.30);
        box-shadow:inset 0 0 0 1px rgba(96,165,250,.15);
      }
      .container > div:first-child{
        position:sticky;
        top:0;
        z-index:40;
        margin:-12px -12px 0;
        padding:14px 12px 10px;
        background:linear-gradient(180deg, rgba(2,6,23,.98), rgba(2,6,23,.78));
        backdrop-filter:blur(12px);
      }
      .container > div:first-child h1{
        font-size:24px;
        margin:0;
      }
      .main-section.active{
        animation:mobileSectionFade .18s ease;
      }
      .section-card{
        border-radius:18px;
        border:1px solid rgba(96,165,250,.14);
        box-shadow:0 10px 24px rgba(2,6,23,.16);
      }
      .section-header{
        position:sticky;
        top:62px;
        z-index:30;
        margin:-14px -14px 12px;
        padding:14px;
        background:linear-gradient(180deg, rgba(15,23,42,.98), rgba(15,23,42,.90));
        backdrop-filter:blur(10px);
        border-bottom:1px solid rgba(148,163,184,.10);
        border-radius:18px 18px 0 0;
      }
      .section-header h2{
        font-size:20px;
      }
      .section-header .toggle-btn{
        min-width:96px;
      }
      .watchlist-item-actions,
      .video-item .row,
      .modal-actions,
      .row{
        gap:10px;
      }
      .mobile-fab-top{
        display:flex;
        position:fixed;
        right:14px;
        bottom:calc(102px + env(safe-area-inset-bottom));
        z-index:130;
        width:48px;
        height:48px;
        border:none;
        border-radius:999px;
        align-items:center;
        justify-content:center;
        background:linear-gradient(180deg, rgba(59,130,246,.95), rgba(37,99,235,.92));
        box-shadow:0 12px 24px rgba(37,99,235,.30);
        opacity:0;
        pointer-events:none;
        transform:translateY(10px);
        transition:opacity .18s ease, transform .18s ease;
      }
      .mobile-fab-top.visible{
        opacity:1;
        pointer-events:auto;
        transform:translateY(0);
      }
    }

    @media (max-width: 420px){
      .mobile-bottom-nav{
        left:8px;
        right:8px;
        gap:6px;
        padding:7px;
      }
      .mobile-bottom-nav .tab-btn{
        min-height:56px;
        font-size:10px;
        padding:8px 4px;
      }
      .mobile-bottom-nav .tab-btn .icon{
        font-size:17px;
      }
      .section-header{
        top:58px;
      }
      .mobile-fab-top{
        right:12px;
        width:46px;
        height:46px;
      }
    }

    @keyframes mobileSectionFade{
      from{opacity:.65; transform:translateY(6px);}
      to{opacity:1; transform:translateY(0);}
    }

  

    .sr-only{
      position:absolute;
      width:1px;
      height:1px;
      padding:0;
      margin:-1px;
      overflow:hidden;
      clip:rect(0,0,0,0);
      white-space:nowrap;
      border:0;
    }

    @media (prefers-reduced-motion: reduce){
      *, *::before, *::after{
        animation-duration:.01ms !important;
        animation-iteration-count:1 !important;
        scroll-behavior:auto !important;
        transition-duration:.01ms !important;
      }
    }
  

    .pwa-install-card{
      display:none;
      margin-top:14px;
      padding:12px 14px;
      border-radius:14px;
      border:1px solid rgba(96,165,250,.24);
      background:rgba(59,130,246,.10);
      color:#dbeafe;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      flex-wrap:wrap;
    }
    .pwa-install-card.visible{display:flex;}
    .pwa-install-card .small{color:#bfdbfe;}
    .pwa-install-actions{display:flex;gap:8px;flex-wrap:wrap;}
    .pwa-install-actions button{min-width:120px;}

  

    /* Hero visual da página detalhada da atriz */
    .atriz-hero-premium{
      position:relative;
      overflow:hidden;
      padding:24px;
      border-radius:22px;
      border:1px solid rgba(96,165,250,.26);
      background:
        radial-gradient(circle at 10% 0%, rgba(59,130,246,.24), transparent 34%),
        radial-gradient(circle at 92% 18%, rgba(245,158,11,.14), transparent 30%),
        linear-gradient(135deg, rgba(15,23,42,.98), rgba(17,24,39,.92));
      box-shadow:0 18px 42px rgba(2,6,23,.32);
    }
    .atriz-hero-layout{
      display:grid;
      grid-template-columns:auto minmax(0,1fr) auto;
      gap:20px;
      align-items:center;
    }
    .atriz-hero-avatar{
      width:150px;
      height:150px;
      border-radius:34px;
      overflow:hidden;
      border:2px solid rgba(96,165,250,.42);
      background:rgba(2,6,23,.45);
      box-shadow:0 16px 34px rgba(2,6,23,.28);
      display:flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
    }
    .atriz-hero-avatar img{
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    }
    .atriz-hero-fallback{
      font-size:58px;
      font-weight:900;
      color:#dbeafe;
    }
    .atriz-hero-kicker{
      color:#bfdbfe;
      font-size:13px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.08em;
    }
    .atriz-hero-title{
      margin:8px 0 8px;
      font-size:42px;
      line-height:.98;
      letter-spacing:-.05em;
    }
    .atriz-hero-subtitle{
      color:#cbd5e1;
      line-height:1.5;
    }
    .atriz-hero-badges{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:12px;
    }
    .atriz-hero-actions{
      display:flex;
      flex-direction:column;
      gap:10px;
      min-width:170px;
    }
    .atriz-hero-stats{
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:12px;
      margin-top:18px;
    }
    .atriz-hero-stat{
      padding:14px;
      border-radius:16px;
      border:1px solid rgba(148,163,184,.16);
      background:rgba(2,6,23,.24);
    }
    .atriz-hero-stat-label{
      color:var(--muted);
      font-size:12px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.05em;
    }
    .atriz-hero-stat-value{
      margin-top:6px;
      font-size:26px;
      font-weight:900;
      line-height:1.05;
      color:#fff;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }

    .atriz-detail-priority-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:16px;
      align-items:start;
    }
    .atriz-detail-insights-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:16px;
      align-items:start;
    }
    .atriz-rank-list{
      display:grid;
      gap:10px;
      margin-top:12px;
    }
    .atriz-rank-item{
      display:grid;
      grid-template-columns:34px minmax(0,1fr) auto;
      gap:10px;
      align-items:center;
      padding:10px 12px;
      border-radius:14px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.22);
    }
    .atriz-rank-position{
      width:28px;
      height:28px;
      border-radius:999px;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(59,130,246,.18);
      color:#bfdbfe;
      font-size:12px;
      font-weight:900;
    }
    .atriz-rank-name{
      min-width:0;
      color:#f8fafc;
      font-weight:800;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .atriz-rank-count{
      color:#cbd5e1;
      font-size:12px;
      font-weight:800;
      white-space:nowrap;
    }
    .atriz-editor-bottom{
      margin-top:0;
    }

    .atriz-detail-image-editor{
      margin-top:12px;
      padding:14px;
      border-radius:16px;
      border:1px solid rgba(96,165,250,.18);
      background:rgba(2,6,23,.18);
    }
    .atriz-detail-cropper-stage{
      width:280px;
      height:280px;
      border-radius:26px;
    }
    .atriz-detail-cropper-stage .cropper-mask{
      border-radius:26px;
    }
    @media (max-width: 900px){
      .atriz-hero-layout{grid-template-columns:1fr;}
      .atriz-hero-actions{flex-direction:row;flex-wrap:wrap;min-width:0;}
      .atriz-hero-actions button{flex:1 1 160px;}
      .atriz-hero-title{font-size:32px;}
      .atriz-hero-stats{grid-template-columns:repeat(2,minmax(0,1fr));}
      .atriz-detail-priority-grid,.atriz-detail-insights-grid{grid-template-columns:1fr;}
      .atriz-detail-cropper-stage{width:min(280px, 100%);height:min(280px, 74vw);}
    }
    @media (max-width: 520px){
      .atriz-hero-premium{padding:16px;}
      .atriz-hero-avatar{width:118px;height:118px;border-radius:26px;}
      .atriz-hero-title{font-size:28px;}
      .atriz-hero-stats{grid-template-columns:1fr;}
      .atriz-rank-item{grid-template-columns:30px minmax(0,1fr);}
      .atriz-rank-count{grid-column:2 / -1;}
    }


    /* Página individual do vídeo + configurações visuais */
    body.theme-compact .card,
    body.theme-compact .section-card,
    body.theme-compact .watchlist-item-card,
    body.theme-compact .historico-item-card{
      padding:12px;
      border-radius:14px;
    }
    body.theme-compact .grid,
    body.theme-compact .dashboard-shell,
    body.theme-compact .historico-shell,
    body.theme-compact .watchlist-shell,
    body.theme-compact .library-page{
      gap:10px;
    }
    body.theme-large-font{
      font-size:17px;
    }
    body.theme-large-font h1{font-size:34px;}
    body.theme-large-font h2{font-size:28px;}
    body.theme-large-font h3{font-size:22px;}
    body.theme-reduced-motion *,
    body.theme-reduced-motion *::before,
    body.theme-reduced-motion *::after{
      animation:none !important;
      transition:none !important;
      scroll-behavior:auto !important;
    }
    .video-detail-shell,
    .settings-shell{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .video-detail-hero,
    .settings-hero{
      position:relative;
      overflow:hidden;
      padding:22px;
      border-radius:20px;
      border:1px solid rgba(96,165,250,.22);
      background:
        radial-gradient(circle at top right, rgba(59,130,246,.20), transparent 34%),
        radial-gradient(circle at bottom left, rgba(34,197,94,.12), transparent 28%),
        linear-gradient(180deg, rgba(15,23,42,.96), rgba(17,24,39,.92));
      box-shadow:0 14px 32px rgba(2,6,23,.24);
    }
    .video-detail-title{
      margin:10px 0 6px;
      font-size:34px;
      line-height:1.05;
      letter-spacing:-.04em;
    }
    .video-detail-subtitle{
      color:#cbd5e1;
      font-size:15px;
      line-height:1.5;
    }
    .video-detail-grid{
      display:grid;
      grid-template-columns:1.1fr .9fr;
      gap:16px;
      align-items:start;
    }
    .video-detail-panel,
    .settings-panel{
      border:1px solid rgba(96,165,250,.14);
      background:linear-gradient(180deg, rgba(15,23,42,.82), rgba(17,24,39,.94));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .video-detail-kpi-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
      margin-top:16px;
    }
    .video-detail-kpi{
      padding:14px;
      border-radius:16px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.24);
    }
    .video-detail-kpi-label{
      color:var(--muted);
      font-size:12px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.05em;
    }
    .video-detail-kpi-value{
      margin-top:6px;
      font-size:26px;
      font-weight:900;
      line-height:1;
    }
    .video-detail-score-list{
      display:grid;
      gap:10px;
    }
    .video-detail-score-row{
      display:grid;
      grid-template-columns:150px 1fr 42px;
      gap:10px;
      align-items:center;
    }
    .video-detail-score-track{
      height:12px;
      border-radius:999px;
      overflow:hidden;
      border:1px solid rgba(148,163,184,.18);
      background:rgba(2,6,23,.38);
    }
    .video-detail-score-fill{
      height:100%;
      border-radius:999px;
      background:linear-gradient(90deg,#3b82f6,#60a5fa);
    }
    .video-detail-meta-list{
      display:grid;
      gap:12px;
    }
    .video-detail-meta-item{
      padding:12px 14px;
      border-radius:14px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.20);
    }
    .video-detail-meta-label{
      color:var(--muted);
      font-size:12px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.05em;
      margin-bottom:6px;
    }
    .settings-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:16px;
    }
    .setting-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      padding:14px;
      border-radius:16px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.20);
    }
    .setting-row select,
    .setting-row input[type="color"]{
      min-width:160px;
      padding:10px 12px;
      border-radius:12px;
      border:1px solid var(--border);
      background:#0b1220;
      color:var(--text);
    }
    .setting-row input[type="checkbox"]{
      width:auto;
      min-height:auto;
      transform:scale(1.15);
    }
    .settings-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:14px;
    }
    @media (max-width: 900px){
      .video-detail-grid,
      .settings-grid,
      .video-detail-kpi-grid{
        grid-template-columns:1fr;
      }
      .video-detail-score-row{
        grid-template-columns:1fr;
      }
      .video-detail-title{font-size:28px;}
    }

  

    /* Lista limpa + detalhes completos na página individual */
    .summary-card{
      position:relative;
      overflow:hidden;
    }
    .summary-card::before{
      content:"";
      position:absolute;
      left:0;
      top:0;
      bottom:0;
      width:5px;
      background:var(--accent);
      opacity:.8;
    }
    .summary-card.note-low::before{background:#ef4444;}
    .summary-card.note-mid::before{background:#f59e0b;}
    .summary-card.note-good::before{background:#3b82f6;}
    .summary-card.note-top::before{background:#22c55e;}
    .summary-card .historico-item-top,
    .summary-card .watchlist-item-top{
      align-items:center;
    }
    .summary-main-line{
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:8px;
      margin-top:8px;
    }
    .summary-muted-line{
      color:var(--muted);
      font-size:13px;
      margin-top:4px;
      line-height:1.4;
    }
    .summary-tags{
      display:flex;
      flex-wrap:wrap;
      gap:6px;
      margin-top:10px;
    }
    .summary-chip{
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding:6px 9px;
      border-radius:999px;
      border:1px solid rgba(148,163,184,.18);
      background:rgba(2,6,23,.22);
      color:#dbeafe;
      font-size:12px;
      font-weight:700;
      line-height:1;
    }
    .summary-chip.more{
      color:#cbd5e1;
      background:rgba(148,163,184,.08);
    }
    .summary-primary-action{
      background:var(--accent);
      color:#fff;
      border-color:var(--accent);
    }
    .summary-secondary-actions{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      justify-content:flex-end;
    }
    .summary-secondary-actions button{
      min-width:96px;
    }
    body.list-compact-view .history-details,
    body.list-compact-view .link-block,
    body.list-compact-view .atriz-block,
    body.list-compact-view .historico-content-grid,
    body.list-compact-view .watchlist-link-row,
    body.list-compact-view .list-detail-only{
      display:none !important;
    }
    body.list-compact-view .historico-item-card,
    body.list-compact-view .watchlist-item-card{
      padding:16px 18px;
    }
    .video-detail-section-title{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin-bottom:12px;
    }
    .video-detail-section-title h3{
      margin:0;
    }
    .video-detail-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:14px;
    }
    .video-detail-tags{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:8px;
    }

    @media (max-width: 768px){
      .summary-card .historico-item-top,
      .summary-card .watchlist-item-top{
        grid-template-columns:1fr;
        align-items:stretch;
      }
      .summary-secondary-actions{
        justify-content:stretch;
      }
      .summary-secondary-actions button{
        flex:1 1 120px;
      }
    }

  </style>

  <!-- PWA -->
  <meta name="theme-color" content="#0f172a" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Projeto X" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="apple-touch-icon" href="icons/icon-192.png" />

<style>
.atriz-selector{
  display:flex;
  gap:8px;
  align-items:center;
  flex-wrap:wrap;
}
.atriz-selector input{
  flex:1 1 220px;
}
.selected-atrizes{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:10px;
  min-height:20px;
}
.selected-atriz-chip{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:7px 10px;
  border-radius:999px;
  border:1px solid #334155;
  background:rgba(236,72,153,.12);
  color:#fbcfe8;
  font-size:13px;
  font-weight:700;
}
.selected-atriz-chip button{
  padding:2px 6px;
  min-width:auto;
  border-radius:999px;
  background:#0b1220;
  color:#fff;
  font-size:12px;
  line-height:1;
}


/* === UI upgrade: sidebar desktop, tipografia e cores por nota === */
body{
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif;
  line-height:1.55;
}
.app-topbar{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:18px;
  margin-bottom:2px;
}
.app-kicker{
  color:#93c5fd;
  font-size:12px;
  font-weight:900;
  letter-spacing:.14em;
  text-transform:uppercase;
  margin-bottom:6px;
}
.app-subtitle{
  color:#94a3b8;
  font-size:15px;
  max-width:640px;
  margin-top:-4px;
}
h1{
  font-size:clamp(30px, 4vw, 46px);
  line-height:1.05;
  letter-spacing:-.045em;
  margin-bottom:8px;
}
h2{
  font-size:clamp(22px, 2.4vw, 30px);
  line-height:1.15;
  letter-spacing:-.03em;
}
h3{
  line-height:1.22;
  letter-spacing:-.018em;
}
.section-header{
  padding-bottom:10px;
  border-bottom:1px solid rgba(148,163,184,.10);
}
.section-header h2::after{
  content:"";
  display:block;
  width:42px;
  height:3px;
  border-radius:999px;
  margin-top:8px;
  background:linear-gradient(90deg,#3b82f6,rgba(96,165,250,.16));
}
.card,
.section-card,
.dashboard-panel,
.historico-panel,
.watchlist-form-card,
.watchlist-filter-card,
.library-panel{
  backdrop-filter: blur(10px);
}
.desktop-sidebar{
  display:none;
}
@media (min-width: 769px){
  body{
    display:grid;
    grid-template-columns:280px minmax(0,1fr);
    min-height:100vh;
  }
  .desktop-sidebar{
    display:flex;
    position:sticky;
    top:0;
    height:100vh;
    flex-direction:column;
    gap:18px;
    padding:22px 18px;
    border-right:1px solid rgba(96,165,250,.16);
    background:
      radial-gradient(circle at top left, rgba(59,130,246,.18), transparent 34%),
      linear-gradient(180deg, rgba(2,6,23,.98), rgba(15,23,42,.96));
    box-shadow:12px 0 30px rgba(2,6,23,.22);
    z-index:80;
  }
  .container{
    max-width:1280px;
    padding:28px 32px 40px;
  }
  .tabs{
    display:none;
  }
  .desktop-sidebar-brand{
    display:flex;
    align-items:center;
    gap:12px;
    padding:8px 8px 18px;
    border-bottom:1px solid rgba(148,163,184,.14);
  }
  .desktop-sidebar-logo{
    width:44px;
    height:44px;
    display:grid;
    place-items:center;
    border-radius:16px;
    background:linear-gradient(180deg,#3b82f6,#1d4ed8);
    color:#fff;
    font-weight:900;
    letter-spacing:-.05em;
    box-shadow:0 14px 28px rgba(37,99,235,.28);
  }
  .desktop-sidebar-title{
    font-size:18px;
    font-weight:900;
    letter-spacing:-.03em;
    color:#f8fafc;
    line-height:1.1;
  }
  .desktop-sidebar-subtitle{
    font-size:12px;
    color:#94a3b8;
    margin-top:3px;
  }
  .desktop-sidebar-nav{
    display:flex;
    flex-direction:column;
    gap:8px;
  }
  .desktop-nav-btn{
    width:100%;
    justify-content:flex-start;
    display:flex;
    align-items:center;
    gap:10px;
    min-height:48px;
    padding:12px 14px;
    border-radius:14px;
    background:transparent;
    color:#cbd5e1;
    border:1px solid transparent;
    text-align:left;
  }
  .desktop-nav-btn .icon{
    width:24px;
    text-align:center;
    font-size:17px;
  }
  .desktop-nav-btn:hover{
    background:rgba(59,130,246,.10);
    border-color:rgba(96,165,250,.18);
  }
  .desktop-nav-btn.active{
    background:linear-gradient(180deg, rgba(59,130,246,.24), rgba(37,99,235,.16));
    border-color:rgba(96,165,250,.32);
    color:#fff;
    box-shadow:inset 3px 0 0 #60a5fa, 0 10px 20px rgba(37,99,235,.12);
  }
  .desktop-sidebar-footer{
    margin-top:auto;
    padding:14px;
    border-radius:16px;
    border:1px solid rgba(148,163,184,.14);
    background:rgba(2,6,23,.28);
  }
  .sidebar-score-legend{
    display:grid;
    grid-template-columns:auto 1fr;
    gap:6px 8px;
    align-items:center;
    margin-top:10px;
    color:#cbd5e1;
    font-size:12px;
    font-weight:700;
  }
  .legend-dot{
    width:10px;
    height:10px;
    border-radius:999px;
    display:inline-block;
  }
  .legend-dot.low{background:#ef4444;}
  .legend-dot.mid{background:#f59e0b;}
  .legend-dot.good{background:#3b82f6;}
  .legend-dot.top{background:#22c55e;}
}
.note-badge{
  position:relative;
  font-size:13px;
  padding:7px 11px;
  border-radius:999px;
  letter-spacing:.01em;
}
.historico-item-card,
.watchlist-item-card{
  position:relative;
  overflow:hidden;
}
.historico-item-card::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:5px;
  background:rgba(148,163,184,.28);
}
.historico-item-card.note-low::before{background:linear-gradient(180deg,#f87171,#dc2626);}
.historico-item-card.note-mid::before{background:linear-gradient(180deg,#fbbf24,#d97706);}
.historico-item-card.note-good::before{background:linear-gradient(180deg,#60a5fa,#2563eb);}
.historico-item-card.note-top::before{background:linear-gradient(180deg,#4ade80,#16a34a);}
.note-low.note-badge,
.tag.note-low,
.note-low .note-badge{
  background:rgba(239,68,68,.15);
  border-color:rgba(248,113,113,.42);
  color:#fecaca;
  box-shadow:0 0 0 1px rgba(239,68,68,.08) inset;
}
.note-mid.note-badge,
.tag.note-mid,
.note-mid .note-badge{
  background:rgba(245,158,11,.15);
  border-color:rgba(251,191,36,.42);
  color:#fde68a;
  box-shadow:0 0 0 1px rgba(245,158,11,.08) inset;
}
.note-good.note-badge,
.tag.note-good,
.note-good .note-badge{
  background:rgba(59,130,246,.15);
  border-color:rgba(96,165,250,.42);
  color:#bfdbfe;
  box-shadow:0 0 0 1px rgba(59,130,246,.08) inset;
}
.note-top.note-badge,
.tag.note-top,
.note-top .note-badge{
  background:rgba(34,197,94,.15);
  border-color:rgba(74,222,128,.42);
  color:#bbf7d0;
  box-shadow:0 0 0 1px rgba(34,197,94,.08) inset;
}
.historico-item-card.note-low{background:linear-gradient(180deg, rgba(239,68,68,.08), rgba(17,24,39,.94));}
.historico-item-card.note-mid{background:linear-gradient(180deg, rgba(245,158,11,.08), rgba(17,24,39,.94));}
.historico-item-card.note-good{background:linear-gradient(180deg, rgba(59,130,246,.08), rgba(17,24,39,.94));}
.historico-item-card.note-top{background:linear-gradient(180deg, rgba(34,197,94,.08), rgba(17,24,39,.94));}
.historico-item-title,
.watchlist-item-title{
  font-size:clamp(19px, 2vw, 24px);
  letter-spacing:-.03em;
}
.historico-item-subtitle,
.watchlist-item-card .muted{
  font-size:14px;
  color:#a7b3c7;
}
.historico-box-title{
  color:#93c5fd;
}
.historico-score-chip strong{
  font-size:20px;
}
@media (max-width: 768px){
  .app-topbar{
    display:block;
  }
  .app-kicker,
  .app-subtitle{
    display:none;
  }
  .section-header h2::after{
    width:34px;
  }
}


    /* Página individual do vídeo + configurações visuais */
    body.theme-compact .card,
    body.theme-compact .section-card,
    body.theme-compact .watchlist-item-card,
    body.theme-compact .historico-item-card{
      padding:12px;
      border-radius:14px;
    }
    body.theme-compact .grid,
    body.theme-compact .dashboard-shell,
    body.theme-compact .historico-shell,
    body.theme-compact .watchlist-shell,
    body.theme-compact .library-page{
      gap:10px;
    }
    body.theme-large-font{
      font-size:17px;
    }
    body.theme-large-font h1{font-size:34px;}
    body.theme-large-font h2{font-size:28px;}
    body.theme-large-font h3{font-size:22px;}
    body.theme-reduced-motion *,
    body.theme-reduced-motion *::before,
    body.theme-reduced-motion *::after{
      animation:none !important;
      transition:none !important;
      scroll-behavior:auto !important;
    }
    .video-detail-shell,
    .settings-shell{
      display:flex;
      flex-direction:column;
      gap:16px;
    }
    .video-detail-hero,
    .settings-hero{
      position:relative;
      overflow:hidden;
      padding:22px;
      border-radius:20px;
      border:1px solid rgba(96,165,250,.22);
      background:
        radial-gradient(circle at top right, rgba(59,130,246,.20), transparent 34%),
        radial-gradient(circle at bottom left, rgba(34,197,94,.12), transparent 28%),
        linear-gradient(180deg, rgba(15,23,42,.96), rgba(17,24,39,.92));
      box-shadow:0 14px 32px rgba(2,6,23,.24);
    }
    .video-detail-title{
      margin:10px 0 6px;
      font-size:34px;
      line-height:1.05;
      letter-spacing:-.04em;
    }
    .video-detail-subtitle{
      color:#cbd5e1;
      font-size:15px;
      line-height:1.5;
    }
    .video-detail-grid{
      display:grid;
      grid-template-columns:1.1fr .9fr;
      gap:16px;
      align-items:start;
    }
    .video-detail-panel,
    .settings-panel{
      border:1px solid rgba(96,165,250,.14);
      background:linear-gradient(180deg, rgba(15,23,42,.82), rgba(17,24,39,.94));
      box-shadow:0 10px 24px rgba(2,6,23,.16);
    }
    .video-detail-kpi-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
      margin-top:16px;
    }
    .video-detail-kpi{
      padding:14px;
      border-radius:16px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.24);
    }
    .video-detail-kpi-label{
      color:var(--muted);
      font-size:12px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.05em;
    }
    .video-detail-kpi-value{
      margin-top:6px;
      font-size:26px;
      font-weight:900;
      line-height:1;
    }
    .video-detail-score-list{
      display:grid;
      gap:10px;
    }
    .video-detail-score-row{
      display:grid;
      grid-template-columns:150px 1fr 42px;
      gap:10px;
      align-items:center;
    }
    .video-detail-score-track{
      height:12px;
      border-radius:999px;
      overflow:hidden;
      border:1px solid rgba(148,163,184,.18);
      background:rgba(2,6,23,.38);
    }
    .video-detail-score-fill{
      height:100%;
      border-radius:999px;
      background:linear-gradient(90deg,#3b82f6,#60a5fa);
    }
    .video-detail-meta-list{
      display:grid;
      gap:12px;
    }
    .video-detail-meta-item{
      padding:12px 14px;
      border-radius:14px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.20);
    }
    .video-detail-meta-label{
      color:var(--muted);
      font-size:12px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.05em;
      margin-bottom:6px;
    }
    .settings-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:16px;
    }
    .setting-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      padding:14px;
      border-radius:16px;
      border:1px solid rgba(148,163,184,.14);
      background:rgba(2,6,23,.20);
    }
    .setting-row select,
    .setting-row input[type="color"]{
      min-width:160px;
      padding:10px 12px;
      border-radius:12px;
      border:1px solid var(--border);
      background:#0b1220;
      color:var(--text);
    }
    .setting-row input[type="checkbox"]{
      width:auto;
      min-height:auto;
      transform:scale(1.15);
    }
    .settings-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:14px;
    }
    @media (max-width: 900px){
      .video-detail-grid,
      .settings-grid,
      .video-detail-kpi-grid{
        grid-template-columns:1fr;
      }
      .video-detail-score-row{
        grid-template-columns:1fr;
      }
      .video-detail-title{font-size:28px;}
    }

  

    /* Lista limpa + detalhes completos na página individual */
    .summary-card{
      position:relative;
      overflow:hidden;
    }
    .summary-card::before{
      content:"";
      position:absolute;
      left:0;
      top:0;
      bottom:0;
      width:5px;
      background:var(--accent);
      opacity:.8;
    }
    .summary-card.note-low::before{background:#ef4444;}
    .summary-card.note-mid::before{background:#f59e0b;}
    .summary-card.note-good::before{background:#3b82f6;}
    .summary-card.note-top::before{background:#22c55e;}
    .summary-card .historico-item-top,
    .summary-card .watchlist-item-top{
      align-items:center;
    }
    .summary-main-line{
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:8px;
      margin-top:8px;
    }
    .summary-muted-line{
      color:var(--muted);
      font-size:13px;
      margin-top:4px;
      line-height:1.4;
    }
    .summary-tags{
      display:flex;
      flex-wrap:wrap;
      gap:6px;
      margin-top:10px;
    }
    .summary-chip{
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding:6px 9px;
      border-radius:999px;
      border:1px solid rgba(148,163,184,.18);
      background:rgba(2,6,23,.22);
      color:#dbeafe;
      font-size:12px;
      font-weight:700;
      line-height:1;
    }
    .summary-chip.more{
      color:#cbd5e1;
      background:rgba(148,163,184,.08);
    }
    .summary-primary-action{
      background:var(--accent);
      color:#fff;
      border-color:var(--accent);
    }
    .summary-secondary-actions{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      justify-content:flex-end;
    }
    .summary-secondary-actions button{
      min-width:96px;
    }
    body.list-compact-view .history-details,
    body.list-compact-view .link-block,
    body.list-compact-view .atriz-block,
    body.list-compact-view .historico-content-grid,
    body.list-compact-view .watchlist-link-row,
    body.list-compact-view .list-detail-only{
      display:none !important;
    }
    body.list-compact-view .historico-item-card,
    body.list-compact-view .watchlist-item-card{
      padding:16px 18px;
    }
    .video-detail-section-title{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin-bottom:12px;
    }
    .video-detail-section-title h3{
      margin:0;
    }
    .video-detail-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:14px;
    }
    .video-detail-tags{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:8px;
    }

    @media (max-width: 768px){
      .summary-card .historico-item-top,
      .summary-card .watchlist-item-top{
        grid-template-columns:1fr;
        align-items:stretch;
      }
      .summary-secondary-actions{
        justify-content:stretch;
      }
      .summary-secondary-actions button{
        flex:1 1 120px;
      }
    }
\n  </style>

</head>
<body>
  <aside class="desktop-sidebar" aria-label="Navegação principal desktop">
    <div class="desktop-sidebar-brand">
      <div class="desktop-sidebar-logo">PX</div>
      <div>
        <div class="desktop-sidebar-title">Projeto X</div>
        <div class="desktop-sidebar-subtitle">Biblioteca pessoal</div>
      </div>
    </div>
    <nav class="desktop-sidebar-nav">
      <button class="tab-btn desktop-nav-btn active" type="button" data-section="cadastro" onclick="showMainSection('cadastro', this)"><span class="icon">✍️</span><span>Cadastrar / Editar</span></button>
      <button class="tab-btn desktop-nav-btn" type="button" data-section="dashboard" onclick="showMainSection('dashboard', this)"><span class="icon">📊</span><span>Dashboard</span></button>
      <button class="tab-btn desktop-nav-btn" type="button" data-section="watchlist" onclick="showMainSection('watchlist', this)"><span class="icon">🕒</span><span>Watchlist</span></button>
      <button class="tab-btn desktop-nav-btn" type="button" data-section="historico" onclick="showMainSection('historico', this)"><span class="icon">🎬</span><span>Histórico</span></button>
      <button class="tab-btn desktop-nav-btn" type="button" data-section="atrizes" onclick="showMainSection('atrizes', this)"><span class="icon">⭐</span><span>Atrizes</span></button>
      <button class="tab-btn desktop-nav-btn" type="button" data-section="tags" onclick="showMainSection('tags', this)"><span class="icon">📚</span><span>Biblioteca</span></button>
      <button class="tab-btn desktop-nav-btn" type="button" data-section="configuracoes" onclick="showMainSection('configuracoes', this)"><span class="icon">⚙️</span><span>Configurações</span></button>
    </nav>
    <div class="desktop-sidebar-footer">
      <div class="small muted">Notas com cores automáticas</div>
      <div class="sidebar-score-legend">
        <span class="legend-dot low"></span><span>0–4,99</span>
        <span class="legend-dot mid"></span><span>5–6,99</span>
        <span class="legend-dot good"></span><span>7–8,49</span>
        <span class="legend-dot top"></span><span>8,5–10</span>
      </div>
    </div>
  </aside>

  <main class="container grid">
    <div class="app-topbar">
      <div>
        <div class="app-kicker">Painel pessoal</div>
        <h1>Projeto X</h1>
        <div class="app-subtitle">Organize, avalie e encontre rapidamente seus vídeos salvos.</div>
      </div>

      <div id="pwaInstallCard" class="pwa-install-card" role="status" aria-live="polite">
        <div>
          <strong>Instalar Projeto X</strong>
          <div class="small">Use como aplicativo e mantenha os dados disponíveis offline neste dispositivo.</div>
        </div>
        <div class="pwa-install-actions">
          <button id="pwaInstallBtn" type="button">Instalar</button>
          <button id="pwaDismissBtn" class="btn-secondary" type="button">Agora não</button>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab-btn active" type="button" onclick="showMainSection('cadastro', this)">Cadastrar / Editar Vídeo</button>
      <button class="tab-btn" type="button" onclick="showMainSection('dashboard', this)">Dashboard</button>
      <button class="tab-btn" type="button" onclick="showMainSection('watchlist', this)">Lista Para Ver No Futuro</button>
      <button class="tab-btn" type="button" onclick="showMainSection('historico', this)">Histórico de Vídeos</button>
      <button class="tab-btn" type="button" onclick="showMainSection('atrizes', this)">Atrizes</button>
      <button class="tab-btn" type="button" onclick="showMainSection('tags', this)">Biblioteca</button>
      <button class="tab-btn" type="button" onclick="showMainSection('configuracoes', this)">Configurações</button>
    </div>


    <div class="mobile-bottom-nav" aria-label="Navegação principal">
      <button class="tab-btn active" type="button" data-section="cadastro" onclick="showMainSection('cadastro', this)"><span class="icon">✍️</span><span>Cadastro</span></button>
      <button class="tab-btn" type="button" data-section="dashboard" onclick="showMainSection('dashboard', this)"><span class="icon">📊</span><span>Dashboard</span></button>
      <button class="tab-btn" type="button" data-section="watchlist" onclick="showMainSection('watchlist', this)"><span class="icon">🕒</span><span>Fila</span></button>
      <button class="tab-btn" type="button" data-section="historico" onclick="showMainSection('historico', this)"><span class="icon">🎬</span><span>Histórico</span></button>
      <button class="tab-btn" type="button" data-section="atrizes" onclick="showMainSection('atrizes', this)"><span class="icon">⭐</span><span>Atrizes</span></button>
      <button class="tab-btn" type="button" data-section="tags" onclick="showMainSection('tags', this)"><span class="icon">📚</span><span>Biblioteca</span></button>
      <button class="tab-btn" type="button" data-section="configuracoes" onclick="showMainSection('configuracoes', this)"><span class="icon">⚙️</span><span>Ajustes</span></button>
    </div>

    <div class="card section-card main-section active" id="section-cadastro">
      <div class="section-header">
        <h2>Cadastrar / Editar Vídeo</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secCadastro')">Minimizar</button>
      </div>
      <div class="section-body" id="secCadastro">
      <div class="grid grid-2 equal-grid">
        <div>
          <label>Nome</label>
          <input id="nome" placeholder="Nome do vídeo" />
        </div>
        <div>
          <label>Studio</label>
          <input id="studio" list="sugestoesStudiosCadastro" placeholder="Nome do studio ou grupo" />
          <datalist id="sugestoesStudiosCadastro"></datalist>
        </div>
        <div>
          <label>Atrizes</label>
          <input id="atriz" placeholder="Ex.: Atriz 1, Atriz 2" />
        </div>
        <div>
          <label>Tags</label>
          <input id="tags" type="hidden" />
          <div class="tag-selector">
            <input id="tagInput" list="sugestoesTagsCadastro" placeholder="Selecione uma tag padronizada" />
            <datalist id="sugestoesTagsCadastro"></datalist>
            <button id="addTagBtn" type="button">Adicionar Tag</button>
          </div>
          <div id="selectedTags" class="selected-tags"></div>
          <div class="tag-help-text"></div>
        </div>
        <div>
          <label>Link do Vídeo</label>
          <input id="link" placeholder="https://..." />
        </div>
      </div>
      <div class="grid grid-4 top-gap">
        <div class="score-field">
          <label>Cenas de Sexo</label>
          <input id="sexo" data-score-field="sexo" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-sexo"></div>
        </div>
        <div class="score-field">
          <label>Performance</label>
          <input id="performance" data-score-field="performance" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-performance"></div>
        </div>
        <div class="score-field">
          <label>Casting</label>
          <input id="casting" data-score-field="casting" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-casting"></div>
        </div>
        <div class="score-field">
          <label>Tema</label>
          <input id="tema" data-score-field="tema" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-tema"></div>
        </div>
        <div class="score-field">
          <label>Produção</label>
          <input id="producao" data-score-field="producao" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-producao"></div>
        </div>
        <div class="score-field">
          <label>Estética</label>
          <input id="estetica" data-score-field="estetica" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-estetica"></div>
        </div>
        <div class="score-field">
          <label>Roteiro</label>
          <input id="roteiro" data-score-field="roteiro" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-roteiro"></div>
        </div>
        <div class="score-field">
          <label>Reassistibilidade</label>
          <input id="reassist" data-score-field="reassist" type="number" min="0" max="10" step="1" value="0" />
          <div class="score-help" id="help-reassist"></div>
        </div>
      </div>

      <div class="card top-gap" style="padding:14px;background:rgba(59,130,246,.12);border-color:#3b82f6;">

        <div class="small muted">Prévia da Nota Final</div>
        <div id="notaPreview" style="font-size:28px;font-weight:800;margin-top:6px">0.00</div>
        <div class="small muted" id="notaPreviewDetalhe">Atualiza automaticamente enquanto você preenche as notas.</div>
      </div>


      <div class="guide-box">
        <h3 style="margin-bottom:6px">Guia de Avaliação das Categorias</h3>
        <div class="small muted">Use este resumo como referência rápida na hora de atribuir as notas.</div>

        <div class="guide-grid">
          <div class="guide-item">
            <h4>Cenas de Sexo (25%)</h4>
            <ul>
              <li>Química entre os participantes</li>
              <li>Naturalidade da cena</li>
              <li>Variedade e dinâmica</li>
              <li>Ritmo e envolvimento geral</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Performance (10%)</h4>
            <ul>
              <li>Expressividade corporal e facial</li>
              <li>Energia e intensidade</li>
              <li>Convencimento da atuação</li>
              <li>Consistência ao longo do vídeo</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Casting (10%)</h4>
            <ul>
              <li>Escolha das atrizes de acordo com seu gosto</li>
              <li>Combinação entre perfis</li>
              <li>Carisma e presença em cena</li>
              <li>Adequação ao tipo de vídeo</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Tema (15%)</h4>
            <ul>
              <li>Alinhamento com sua preferência pessoal</li>
              <li>Coerência do tema proposto</li>
              <li>Entrega do que o vídeo promete</li>
              <li>Nível de interesse gerado pelo contexto</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Produção (15%)</h4>
            <ul>
              <li>Qualidade de imagem e iluminação</li>
              <li>Qualidade de áudio</li>
              <li>Edição e fluidez dos cortes</li>
              <li>Ângulos e acabamento técnico</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Estética (5%)</h4>
            <ul>
              <li>Beleza visual geral</li>
              <li>Cenário e ambientação</li>
              <li>Figurino e composição da cena</li>
              <li>Apelo visual do conjunto</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Roteiro (5%)</h4>
            <ul>
              <li>Existência de contexto mínimo</li>
              <li>Coerência da introdução</li>
              <li>Integração com o tema</li>
              <li>Organização da progressão da cena</li>
            </ul>
          </div>
          <div class="guide-item">
            <h4>Reassistibilidade (15%)</h4>
            <ul>
              <li>Vontade real de assistir novamente</li>
              <li>Potencial de virar favorito</li>
              <li>Capacidade de manter interesse no tempo</li>
              <li>Valor de replay do vídeo</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="shortcut-box">
        <div class="small muted" style="margin-bottom:8px;">Atalhos rápidos</div>
        <div class="small">
          <kbd>Ctrl</kbd> + <kbd>S</kbd> Salvar na aba atual &nbsp; • &nbsp;
          <kbd>Esc</kbd> Limpar formulário da aba atual &nbsp; • &nbsp;
          <kbd>Ctrl</kbd> + <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd>/<kbd>4</kbd>/<kbd>5</kbd>/<kbd>6</kbd> Trocar de aba
        </div>
      </div>

      <div class="row top-gap">
        <button id="saveBtn">Adicionar</button>
        <button class="btn-secondary" id="clearBtn" type="button">Limpar</button>
        <button class="btn-secondary" id="exportBtn" type="button">Exportar Backup</button>
        <input id="importFile" type="file" accept=".json" style="max-width:260px" />
      </div>
      </div>
    </div>

    <div class="card section-card main-section" id="section-dashboard">
      <div class="section-header">
        <h2>Dashboard</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secDashboard')">Minimizar</button>
      </div>
      <div class="section-body" id="secDashboard">
      <div class="dashboard-shell">
        <div class="card dashboard-filter-card">
          <h3 style="margin-top:0">Filtros do Dashboard</h3>
          <div class="dashboard-filter-grid">
            <div>
              <label>Filtrar por Studio ou Grupo</label>
              <input id="filtroStudio" list="sugestoesStudiosDashboard" placeholder="Digite parte do nome do studio ou grupo" />
              <datalist id="sugestoesStudiosDashboard"></datalist>
            </div>
            <div>
              <label>Filtrar por Atriz</label>
              <input id="filtroAtriz" list="sugestoesAtrizesDashboard" placeholder="Pesquisar atriz" />
              <datalist id="sugestoesAtrizesDashboard"></datalist>
            </div>
            <div>
              <label>&nbsp;</label>
              <button class="btn-secondary" id="limparFiltros">Limpar Filtros</button>
            </div>
          </div>

        </div>

        <div class="stats equal-grid dashboard-stats">
          <div class="card"><div class="muted">Vídeos no Dashboard</div><div class="stat-number" id="statVideos">0</div></div>
          <div class="card"><div class="muted">Nota Média</div><div class="stat-number" id="statMedia">0.00</div></div>
          <div class="card"><div class="muted">Favoritos</div><div class="stat-number" id="statFavoritos">0</div></div>
          <div class="card"><div class="muted">Total Cadastrado</div><div class="stat-number" id="statTotal">0</div></div>
        </div>

        <div class="card dashboard-panel">
          <div class="section-header" style="margin-bottom:0">
            <div>
              <h2 style="margin-bottom:6px">Histograma de Notas</h2>
              <div class="small muted">Distribuição dos vídeos filtrados por faixa de nota.</div>
            </div>
          </div>
          <div id="histogramaNotas"></div>
        </div>

        <div class="grid grid-2">
          <div class="card dashboard-panel">
            <h2>Top Studios</h2>
            <div id="topStudios"></div>
          </div>
          <div class="card dashboard-panel">
            <h2>Top Atrizes</h2>
            <div class="small muted" style="margin-bottom:10px;">Score calculado por Performance, Tema, Reassistibilidade, Casting e Cenas de Sexo.</div>
            <div id="topAtrizes"></div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="card section-card main-section" id="section-watchlist">
      <div class="section-header">
        <h2>Lista Para Ver No Futuro</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secWatchlist')">Minimizar</button>
      </div>
      <div class="section-body" id="secWatchlist">
        <div class="watchlist-shell">
          <div class="watchlist-hero">
            <h3>Planeje o próximo vídeo da sua fila</h3>
            <div class="muted">Cadastre rapidamente novos itens, organize a prioridade e use os filtros para decidir o que assistir depois. A recomendação da fila agora considera a prioridade e também dá peso extra para vídeos com atrizes marcadas como favoritas.</div>
          </div>

          <div class="watchlist-stat-grid">
            <div class="watchlist-stat-card">
              <div class="watchlist-stat-label">Total na Watchlist</div>
              <div class="watchlist-stat-value" id="watchStatTotal">0</div>
            </div>
            <div class="watchlist-stat-card">
              <div class="watchlist-stat-label">Itens Visíveis</div>
              <div class="watchlist-stat-value" id="watchStatFiltered">0</div>
            </div>
            <div class="watchlist-stat-card">
              <div class="watchlist-stat-label">Prioridade Alta / Muito Alta</div>
              <div class="watchlist-stat-value" id="watchStatPriority">0</div>
            </div>
            <div class="watchlist-stat-card">
              <div class="watchlist-stat-label">Com Atriz Favorita</div>
              <div class="watchlist-stat-value" id="watchStatLinks">0</div>
            </div>
          </div>

          <div class="grid grid-2">
            <div class="card watchlist-form-card">
              <div class="watchlist-panel-header">
                <div>
                  <h3>Cadastro Rápido</h3>
                  <div class="watchlist-panel-subtitle">Adicione novos vídeos à fila ou edite um item já salvo.</div>
                </div>
                <div id="watchFormStatus" class="watchlist-status-card">Modo atual: Novo item</div>
              </div>

              <div class="watchlist-form-grid">
                <div>
                  <label>Nome do Vídeo</label>
                  <input id="watchNome" placeholder="Nome do vídeo" />
                </div>
                <div>
                  <label>Studio</label>
                  <input id="watchStudio" list="sugestoesStudiosCadastroWatchlist" placeholder="Digite parte do nome" />
                  <datalist id="sugestoesStudiosCadastroWatchlist"></datalist>
                </div>
                <div>
                  <label>Atrizes</label>
                  <input id="watchAtrizes" placeholder="Ex.: Atriz 1, Atriz 2" />
                </div>
                <div>
                  <label>Prioridade</label>
                  <select id="watchPrioridade" style="width:100%;padding:10px 12px;border-radius:12px;background:#0b1220;color:white;border:1px solid #334155">
                    <option value="Muito Alta">Muito Alta</option>
                    <option value="Alta">Alta</option>
                    <option value="Média" selected>Média</option>
                    <option value="Baixa">Baixa</option>
                    <option value="Muito Baixa">Muito Baixa</option>
                  </select>
                </div>
                <div class="full-width">
                  <label>Link do Vídeo</label>
                  <input id="watchLink" placeholder="https://..." />
                </div>
              </div>

              <div class="watchlist-form-actions">
                <button id="addWatchBtn" type="button">Adicionar à Lista</button>
                <button id="clearWatchBtn" class="btn-secondary" type="button">Limpar</button>
              </div>
            </div>

            <div class="card watchlist-filter-card">
              <div class="watchlist-panel-header">
                <div>
                  <h3>Filtros da Fila</h3>
                  <div class="watchlist-panel-subtitle">Refine a visualização por texto, prioridade ou studio/grupo antes de sortear ou editar.</div>
                </div>
                <div id="watchFilterStatus" class="watchlist-status-card">Nenhum filtro ativo</div>
              </div>

              <div class="watchlist-filter-grid">
                <div class="full-width">
                  <label>Buscar na Lista</label>
                  <input id="watchFiltroBusca" placeholder="Nome, studio, grupo ou atriz" />
                </div>
                <div>
                  <label>Filtrar por Prioridade</label>
                  <select id="watchFiltroPrioridade" style="width:100%;padding:10px 12px;border-radius:12px;background:#0b1220;color:white;border:1px solid #334155">
                    <option value="">Todas</option>
                    <option value="Muito Alta">Muito Alta</option>
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                    <option value="Muito Baixa">Muito Baixa</option>
                  </select>
                </div>
                <div>
                  <label>Filtrar por Studio ou Grupo</label>
                  <input id="watchFiltroStudio" list="sugestoesStudiosFiltroWatchlist" placeholder="Digite parte do nome" />
                  <datalist id="sugestoesStudiosFiltroWatchlist"></datalist>
                </div>
              </div>

              <div class="watchlist-filter-actions">
                <button id="sortearWatchBtn" type="button">Sortear Vídeo</button>
                <button id="clearWatchFiltrosBtn" class="btn-secondary" type="button">Limpar Filtros</button>
              </div>
            </div>
          </div>

          <div id="watchSorteado"></div>
          <div id="watchlist"></div>
        </div>
      </div>
    </div>

    <div class="card section-card main-section" id="section-historico">
      <div class="section-header">
        <h2>Histórico de Vídeos</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secHistorico')">Minimizar</button>
      </div>
      <div class="section-body" id="secHistorico">
        <div class="historico-shell">
          <div class="historico-hero">
            <h3>Arquivo de Avaliações</h3>
            <div class="muted">Explore seu histórico com filtros avançados, destaque seus favoritos e encontre rapidamente os melhores vídeos salvos pela sua nota final, tema ou elenco.</div>
          </div>

          <div class="historico-stat-grid">
            <div class="historico-stat-card">
              <div class="historico-stat-label">Total no Histórico</div>
              <div class="historico-stat-value" id="historicoStatTotal">0</div>
            </div>
            <div class="historico-stat-card">
              <div class="historico-stat-label">Resultados Visíveis</div>
              <div class="historico-stat-value" id="historicoStatFiltered">0</div>
            </div>
            <div class="historico-stat-card">
              <div class="historico-stat-label">Favoritos Visíveis</div>
              <div class="historico-stat-value" id="historicoStatFavorites">0</div>
            </div>
            <div class="historico-stat-card">
              <div class="historico-stat-label">Nota Média Atual</div>
              <div class="historico-stat-value" id="historicoStatAverage">0.00</div>
            </div>
          </div>

          <div class="card historico-filter-card">
            <div class="historico-panel-header">
              <div>
                <h3>Filtros do Histórico</h3>
                <div class="historico-panel-subtitle">Busque por texto, tag e ordem de classificação para localizar rapidamente o conteúdo que mais importa.</div>
              </div>
              <div id="historicoFilterStatus" class="historico-status-card">Nenhum filtro ativo</div>
            </div>
            <div class="historico-filter-grid">
              <div>
                <label>Pesquisar no Histórico</label>
                <input id="buscaHistorico" list="sugestoesHistorico" placeholder="Buscar por nome do vídeo, studio, grupo, atriz ou tag" />
                <datalist id="sugestoesHistorico"></datalist>
              </div>
              <div>
                <label>Filtrar Diretamente por Tag</label>
                <input id="filtroTagHistorico" list="sugestoesTagsHistorico" placeholder="Escolha ou digite uma tag" />
                <datalist id="sugestoesTagsHistorico"></datalist>
              </div>
              <div>
                <label>Ordenar por</label>
                <select id="ordenacao" style="width:100%;padding:10px 12px;border-radius:12px;background:#0b1220;color:white;border:1px solid #334155">
                  <option value="nota_desc">Nota (maior → menor)</option>
                  <option value="nota_asc">Nota (menor → maior)</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
              </div>
            </div>
          </div>

          <div class="card historico-panel">
            <div class="historico-panel-header">
              <div>
                <h3>Busca Avançada</h3>
                <div class="historico-panel-subtitle">Refine por faixa de nota, studio/grupo, atriz favorita e modo de visualização.</div>
              </div>
            </div>
            <div class="historico-advanced-grid">
              <div>
                <label>Nota Mínima</label>
                <input id="notaMinHistorico" type="number" min="0" max="10" step="0.01" placeholder="Ex.: 7.5" />
              </div>
              <div>
                <label>Nota Máxima</label>
                <input id="notaMaxHistorico" type="number" min="0" max="10" step="0.01" placeholder="Ex.: 10" />
              </div>
              <div>
                <label>Filtrar por Studio ou Grupo</label>
                <input id="filtroStudioHistorico" list="sugestoesStudiosDashboard" placeholder="Studio ou grupo" />
              </div>
              <div>
                <label>Filtrar por Atriz</label>
                <input id="filtroAtrizHistorico" list="sugestoesAtrizesDashboard" placeholder="Atriz" />
              </div>
            </div>
          </div>

          <div class="card historico-toolbar-card">
            <div class="historico-toolbar">
              <div class="historico-toolbar-left">
                <button class="btn-secondary" id="limparBuscaHistorico" type="button">Limpar Busca do Histórico</button>
                <label class="small" style="display:flex;align-items:center;gap:8px;margin:0;cursor:pointer">
                  <input id="somenteFavoritosHistorico" type="checkbox" style="width:auto" />
                  Mostrar Apenas Favoritos
                </label>
              </div>
              <div class="historico-toolbar-right">
                <label class="small" style="display:flex;align-items:center;gap:8px;margin:0;">
                  Visualização
                  <select id="modoVisualizacaoHistorico" style="padding:8px;border-radius:10px;background:#0b1220;color:white;border:1px solid #334155">
                    <option value="completa">Completa</option>
                    <option value="simplificada">Simplificada</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div class="card historico-sort-card">
            <div class="historico-panel-header" style="margin-bottom:0;">
              <div>
                <h3>Sorteio Inteligente</h3>
                <div class="historico-panel-subtitle">Use Reassistibilidade e Nota Final como pesos para encontrar algo excelente para rever.</div>
              </div>
              <button id="sortearHistoricoBtn" class="btn-secondary" type="button">Sortear do Histórico</button>
            </div>
          </div>

          <div id="historicoSorteado"></div>
          <div id="historico" class="historico-results-grid"></div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>


    <div class="card section-card main-section" id="section-tags">
      <div class="section-header">
        <h2>Biblioteca</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secTags')">Minimizar</button>
      </div>
      <div class="section-body" id="secTags">
        <div class="library-page">
          <div class="library-hero">
            <h3>Centro de Organização</h3>
            <div class="muted">Organize sua biblioteca em um só lugar: mantenha tags padronizadas, visualize rapidamente os studios cadastrados e monte grupos reutilizáveis para filtros e sorteios.</div>
          </div>

          <div class="library-sections">
            <div class="tag-library-box library-panel" style="margin-top:0;">
              <div class="library-panel-header">
                <div>
                  <h3>Tags Padronizadas</h3>
                  <div class="library-panel-subtitle">Adicione, remova ou restaure a lista padrão de tags.</div>
                </div>
              </div>
              <div class="tag-library-grid">
                <div>
                  <label>Nova Tag</label>
                  <input id="newLibraryTag" placeholder="Ex.: Exhibitionism" />
                </div>
                <button id="addLibraryTagBtn" type="button">Adicionar à Biblioteca</button>
                <button id="resetLibraryTagsBtn" class="btn-secondary" type="button">Restaurar Padrão</button>
              </div>
              <div class="tag-help-text">As alterações ficam salvas no navegador.</div>
              <div id="tagLibraryList" class="tag-library-list"></div>
            </div>

            <div class="library-box library-panel">
              <div class="library-panel-header">
                <div>
                  <h3>Studios Cadastrados</h3>
                  <div class="library-panel-subtitle">Lista consolidada de studios vindos do histórico e da watchlist.</div>
                </div>
              </div>
              <div class="library-list" id="studioLibraryList"></div>
            </div>

            <div class="library-box library-panel">
              <div class="library-panel-header">
                <div>
                  <h3>Grupos de Studios</h3>
                  <div class="library-panel-subtitle">Crie grupos para organizar coleções, temas ou preferências.</div>
                </div>
              </div>
              <div class="library-grid">
                <div>
                  <label>Novo Grupo</label>
                  <input id="newStudioGroupName" placeholder="Ex.: Favoritos VR" />
                </div>
                <button id="addStudioGroupBtn" type="button">Criar Grupo</button>
                <button id="resetStudioGroupsBtn" class="btn-secondary" type="button">Limpar Grupos</button>
              </div>
              <div class="tag-help-text">Os grupos criados aqui podem ser usados depois nos filtros e no sorteio.</div>
              <div id="studioGroupsList" class="studio-groups-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div class="card section-card main-section" id="section-atrizes">
      <div class="section-header">
        <h2>Atrizes</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secAtrizes')">Minimizar</button>
      </div>
      <div class="section-body" id="secAtrizes">

        <div class="library-box">
          <div class="library-panel-header">
            <div>
              <h3>Cadastro de Atrizes</h3>
              <div class="library-panel-subtitle">Adicione uma foto de perfil para cada atriz.</div>
            </div>
          </div>

          <div class="library-grid">
            <div>
              <label>Nome da Atriz</label>
              <input id="atrizNomeInput" list="sugestoesAtrizesCadastroSistema" placeholder="Ex.: Angela White" />
              <datalist id="sugestoesAtrizesCadastroSistema"></datalist>
            </div>
            <div>
              <label>Foto</label>
              <input id="atrizFotoInput" type="file" accept="image/*" />
            </div>
            <div style="display:flex;align-items:flex-end;">
              <label class="favorite-check"><input id="atrizFavoritaInput" type="checkbox" /> Marcar como favorita</label>
            </div>
            <button id="addAtrizBtn" type="button">Salvar</button>
          </div>

        </div>

        <div class="library-box">
          <div class="library-panel-header">
            <div>
              <h3>Lista de Atrizes</h3>
              <div class="library-panel-subtitle">Visualize atrizes cadastradas e a nota média calculada a partir dos vídeos salvos.</div>
            </div>
          </div>
          <div class="grid grid-3" style="margin-bottom:12px;">
            <div>
              <label>Buscar Atriz</label>
              <input id="atrizBuscaInput" list="sugestoesAtrizesCadastroSistema" placeholder="Digite nome da atriz" />
            </div>
            <div>
              <label>Ordenar por</label>
              <select id="atrizOrdenacao" style="width:100%;padding:10px 12px;border-radius:12px;background:#0b1220;color:white;border:1px solid #334155">
                <option value="alfabeta_asc">Nome (A → Z)</option>
                <option value="alfabeta_desc">Nome (Z → A)</option>
                <option value="nota_desc">Nota média (maior → menor)</option>
                <option value="nota_asc">Nota média (menor → maior)</option>
                <option value="favoritas_primeiro">Favoritas primeiro</option>
              </select>
            </div>
            <div class="row" style="align-items:flex-end;justify-content:space-between;gap:12px;flex-wrap:wrap;">
              <label class="favorite-check"><input id="somenteFavoritasAtrizes" type="checkbox" /> Mostrar apenas favoritas</label>
              <button id="limparFiltroAtrizesBtn" class="btn-secondary" type="button">Limpar Filtros</button>
            </div>
          </div>
          <div id="atrizList" class="library-list"></div>
        </div>

      </div>
    </div>




    <div class="card section-card main-section" id="section-detalhe-video">
      <div class="section-header">
        <h2>Página do Vídeo</h2>
        <button class="btn-secondary" type="button" onclick="voltarDaPaginaVideo()">Voltar</button>
      </div>
      <div class="section-body" id="videoDetailContent">
        <div class="empty">Selecione um vídeo no Histórico ou na Watchlist para ver os detalhes.</div>
      </div>
    </div>

    <div class="card section-card main-section" id="section-detalhe-atriz">
      <div class="section-header">
        <h2>Página da Atriz</h2>
        <button class="btn-secondary" type="button" onclick="voltarDaPaginaAtriz()">Voltar</button>
      </div>
      <div class="section-body" id="atrizDetailContent">
        <div class="empty">Selecione uma atriz na lista de Atrizes para ver os detalhes.</div>
      </div>
    </div>

    <div class="card section-card main-section" id="section-configuracoes">
      <div class="section-header">
        <h2>Configurações Visuais</h2>
        <button class="btn-secondary toggle-btn" type="button" onclick="toggleSection('secConfiguracoes')">Minimizar</button>
      </div>
      <div class="section-body" id="secConfiguracoes">
        <div class="settings-shell">
          <div class="settings-hero">
            <h3>Personalização da interface</h3>
            <div class="muted">Ajuste densidade, fonte, animações e cor de destaque. As preferências ficam salvas neste navegador.</div>
          </div>
          <div class="card settings-panel">
            <div class="settings-grid">
              <div class="setting-row">
                <div>
                  <strong>Densidade da interface</strong>
                  <div class="small muted">Compacta mostra mais itens; confortável preserva mais respiro visual.</div>
                </div>
                <select id="visualDensity">
                  <option value="comfortable">Confortável</option>
                  <option value="compact">Compacta</option>
                </select>
              </div>
              <div class="setting-row">
                <div>
                  <strong>Modo das listas</strong>
                  <div class="small muted">Compacto mostra apenas resumo; detalhado mostra mais informações direto nos cards.</div>
                </div>
                <select id="visualListMode">
                  <option value="compact">Compacto</option>
                  <option value="detailed">Detalhado</option>
                </select>
              </div>
              <div class="setting-row">
                <div>
                  <strong>Tamanho da fonte</strong>
                  <div class="small muted">Aumente a leitura geral da interface.</div>
                </div>
                <select id="visualFontSize">
                  <option value="normal">Normal</option>
                  <option value="large">Grande</option>
                </select>
              </div>
              <div class="setting-row">
                <div>
                  <strong>Cor de destaque</strong>
                  <div class="small muted">Afeta botões, foco de campos e elementos principais.</div>
                </div>
                <input id="visualAccentColor" type="color" value="#3b82f6" />
              </div>
              <div class="setting-row">
                <div>
                  <strong>Reduzir animações</strong>
                  <div class="small muted">Útil para uma experiência mais direta e leve.</div>
                </div>
                <input id="visualReducedMotion" type="checkbox" />
              </div>
            </div>
            <div class="settings-actions">
              <button id="saveVisualSettingsBtn" type="button">Salvar Configurações</button>
              <button id="resetVisualSettingsBtn" class="btn-secondary" type="button">Restaurar Padrão</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-overlay" id="atrizModal">
      <div class="modal-card">
        <div class="modal-header">
          <h3>Editar Atriz</h3>
          <button class="btn-secondary" type="button" id="closeAtrizModalBtn">Fechar</button>
        </div>
        <div class="modal-preview" id="atrizModalPreview"></div>
        <div>
          <label>Nome da Atriz</label>
          <input id="atrizModalNome" readonly />
        </div>
        <div class="grid grid-2 top-gap">
          <div>
            <label>Data de Nascimento</label>
            <input id="atrizModalDataNascimento" type="date" />
          </div>
          <div>
            <label>Local de Nascimento</label>
            <input id="atrizModalLocalNascimento" placeholder="Ex.: Los Angeles, California, USA" />
          </div>
        </div>
        <div class="top-gap">
          <label>Nova Foto</label>
          <input id="atrizModalFotoInput" type="file" accept="image/*" />
        </div>
        <div class="top-gap">
          <label class="favorite-check"><input id="atrizModalFavorita" type="checkbox" /> Marcar atriz como favorita</label>
        </div>
        <div class="cropper-box">
          <div class="small muted">Posicionamento do recorte</div>
          <div class="cropper-zoom-row">
            <label for="atrizCropZoom" class="cropper-zoom-label">Zoom</label>
            <input id="atrizCropZoom" class="cropper-zoom-input" type="range" min="1" max="3" step="0.01" value="1" />
            <div id="atrizCropZoomValue" class="cropper-zoom-value">100%</div>
          </div>
          <div id="atrizCropStage" class="cropper-stage">
            <img id="atrizCropImage" class="cropper-image" alt="Prévia do recorte" />
            <div class="cropper-mask"></div>
          </div>
          <div class="cropper-help">Arraste a imagem para posicionar o recorte e use o zoom antes de salvar.</div>
        </div>
        <div class="modal-actions">
          <button class="btn-secondary" type="button" id="removeAtrizFotoBtn">Remover Foto</button>
          <button type="button" id="saveAtrizModalBtn">Salvar Alterações</button>
        </div>
      </div>
    </main>

  <button class="mobile-fab-top" id="mobileFabTop" type="button" aria-label="Voltar ao topo">↑</button>
  <script>
const pesos = {
  producao: 0.15,
  performance: 0.10,
  roteiro: 0.05,
  estetica: 0.05,
  tema: 0.15,
  reassist: 0.15,
  casting: 0.10,
  sexo: 0.25
};

    const descricoesNotas = {
      producao: {
        titulo: "Produção",
        texto: "<strong>1:</strong> Péssima, com falhas graves em imagem, áudio ou edição.<br><strong>2:</strong> Muito ruim, difícil de assistir pela baixa qualidade técnica.<br><strong>3:</strong> Ruim, com vários problemas perceptíveis.<br><strong>4:</strong> Abaixo da média, mas ainda utilizável.<br><strong>5:</strong> Mediana, aceitável sem se destacar.<br><strong>6:</strong> Boa, com poucos problemas técnicos.<br><strong>7:</strong> Muito boa, consistente na maior parte do vídeo.<br><strong>8:</strong> Alta qualidade, bem produzida.<br><strong>9:</strong> Excelente, nível quase premium.<br><strong>10:</strong> Produção premium, impecável."
      },
      performance: {
        titulo: "Performance",
        texto: "<strong>1:</strong> Péssima, muito artificial ou sem envolvimento.<br><strong>2:</strong> Muito fraca, pouco convincente.<br><strong>3:</strong> Fraca, com pouca naturalidade.<br><strong>4:</strong> Abaixo da média, limitada em entrega.<br><strong>5:</strong> Mediana, aceitável.<br><strong>6:</strong> Boa, com momentos convincentes.<br><strong>7:</strong> Muito boa, natural na maior parte do tempo.<br><strong>8:</strong> Ótima, bastante convincente.<br><strong>9:</strong> Excelente, muito expressiva e natural.<br><strong>10:</strong> Excepcional, totalmente envolvente."
      },
      roteiro: {
        titulo: "Roteiro",
        texto: "<strong>1:</strong> Inexistente ou totalmente sem sentido.<br><strong>2:</strong> Muito confuso ou mal construído.<br><strong>3:</strong> Fraco, sem contexto relevante.<br><strong>4:</strong> Abaixo da média, pouco interessante.<br><strong>5:</strong> Básico, cumpre o mínimo.<br><strong>6:</strong> Funcional, com algum contexto útil.<br><strong>7:</strong> Bom, ajuda na construção do vídeo.<br><strong>8:</strong> Muito bom, bem organizado.<br><strong>9:</strong> Excelente, envolvente e coerente.<br><strong>10:</strong> Excepcional, muito bem construído."
      },
      estetica: {
        titulo: "Estética",
        texto: "<strong>1:</strong> Muito feia ou desagradável visualmente.<br><strong>2:</strong> Ruim, pouco atrativa.<br><strong>3:</strong> Fraca, com apelo visual baixo.<br><strong>4:</strong> Abaixo da média, sem destaque.<br><strong>5:</strong> Neutra, ok visualmente.<br><strong>6:</strong> Agradável, com boa apresentação.<br><strong>7:</strong> Boa, visualmente interessante.<br><strong>8:</strong> Muito bonita, bem composta.<br><strong>9:</strong> Excelente, com forte apelo visual.<br><strong>10:</strong> Excepcional, estética impecável."
      },
      tema: {
        titulo: "Tema / Preferência",
        texto: "<strong>1:</strong> Totalmente fora do seu gosto.<br><strong>2:</strong> Muito pouco alinhado à sua preferência.<br><strong>3:</strong> Pouco interessante para você.<br><strong>4:</strong> Abaixo do que você costuma gostar.<br><strong>5:</strong> Neutro, nem bom nem ruim para seu gosto.<br><strong>6:</strong> Relativamente alinhado ao que você gosta.<br><strong>7:</strong> Bom alinhamento com sua preferência.<br><strong>8:</strong> Muito alinhado ao seu gosto.<br><strong>9:</strong> Quase perfeito para sua preferência.<br><strong>10:</strong> Perfeito para o que você busca."
      },
      reassist: {
        titulo: "Reassistibilidade",
        texto: "<strong>1:</strong> Não veria de novo de jeito nenhum.<br><strong>2:</strong> Quase nenhum interesse em rever.<br><strong>3:</strong> Muito pouco replay value.<br><strong>4:</strong> Abaixo da média em vontade de rever.<br><strong>5:</strong> Talvez reveria, sem grande vontade.<br><strong>6:</strong> Veria novamente em alguma ocasião.<br><strong>7:</strong> Boa chance de rever.<br><strong>8:</strong> Alto interesse em reassistir.<br><strong>9:</strong> Muito alto replay value.<br><strong>10:</strong> Reassistiria várias vezes com certeza."
      },
      casting: {
        titulo: "Casting",
        texto: "<strong>1:</strong> Totalmente desalinhado com seu gosto.<br><strong>2:</strong> Muito fraco para sua preferência.<br><strong>3:</strong> Fraco, pouco interessante.<br><strong>4:</strong> Abaixo da média, sem muito apelo.<br><strong>5:</strong> Ok, aceitável.<br><strong>6:</strong> Bom, com algum destaque.<br><strong>7:</strong> Muito bom, alinhado ao seu gosto.<br><strong>8:</strong> Ótimo, bem escolhido.<br><strong>9:</strong> Excelente, muito atrativo para você.<br><strong>10:</strong> Perfeito, exatamente o que você procura."
      },
      sexo: {
        titulo: "Cenas de Sexo",
        texto: "<strong>1:</strong> Muito ruim, artificial e desconfortável de assistir.<br><strong>2:</strong> Ruim, com pouca química e baixa excitação visual.<br><strong>3:</strong> Abaixo do esperado, pouco envolvente e mal executado.<br><strong>4:</strong> Fraco, básico e previsível.<br><strong>5:</strong> Mediano, cumpre o básico sem se destacar.<br><strong>6:</strong> Bom, com execução sólida e alguns momentos interessantes.<br><strong>7:</strong> Muito bom, com química evidente e boa variedade.<br><strong>8:</strong> Excelente, natural, envolvente e agradável de assistir.<br><strong>9:</strong> Quase perfeito, muito marcante em intensidade, fluidez e dinâmica.<br><strong>10:</strong> Perfeito, química excepcional, autenticidade alta e impacto memorável."
      }
    };

    const STORAGE_KEYS = Object.freeze({
      videos: "meu_imdb_videos",
      watchlist: "meu_imdb_watchlist",
      atrizes: "meu_imdb_atrizes",
      tagCatalog: "meu_imdb_tag_catalog",
      studioGroups: "meu_imdb_studio_groups",
      collapsedStudioGroups: "meu_imdb_collapsed_studio_groups",
      visualSettings: "meu_imdb_visual_settings"
    });

    const IMAGE_DB_CONFIG = Object.freeze({
      name: "projeto_x_images_db",
      version: 1,
      store: "atrizImages"
    });

    let imageDbPromise = null;

    function openImageDb(){
      if(!("indexedDB" in window)){
        return Promise.reject(new Error("IndexedDB não está disponível neste navegador."));
      }
      if(imageDbPromise) return imageDbPromise;

      imageDbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open(IMAGE_DB_CONFIG.name, IMAGE_DB_CONFIG.version);

        request.onupgradeneeded = function(event){
          const db = event.target.result;
          if(!db.objectStoreNames.contains(IMAGE_DB_CONFIG.store)){
            db.createObjectStore(IMAGE_DB_CONFIG.store, { keyPath: "id" });
          }
        };

        request.onsuccess = function(event){
          resolve(event.target.result);
        };

        request.onerror = function(){
          reject(request.error || new Error("Não foi possível abrir o IndexedDB."));
        };
      });

      return imageDbPromise;
    }

    function normalizeImageId(nome){
      const cleanName = String(nome || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return `atriz-${cleanName || Date.now()}`;
    }

    async function saveImageToIndexedDb(id, dataUrl){
      if(!id || !dataUrl) return;
      const db = await openImageDb();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_DB_CONFIG.store, "readwrite");
        transaction.objectStore(IMAGE_DB_CONFIG.store).put({
          id,
          dataUrl,
          updatedAt: new Date().toISOString()
        });
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error("Erro ao salvar imagem no IndexedDB."));
      });
    }

    async function readImageFromIndexedDb(id){
      if(!id) return "";
      const db = await openImageDb();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_DB_CONFIG.store, "readonly");
        const request = transaction.objectStore(IMAGE_DB_CONFIG.store).get(id);
        request.onsuccess = () => resolve(request.result?.dataUrl || "");
        request.onerror = () => reject(request.error || new Error("Erro ao ler imagem no IndexedDB."));
      });
    }

    async function deleteImageFromIndexedDb(id){
      if(!id) return;
      const db = await openImageDb();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_DB_CONFIG.store, "readwrite");
        transaction.objectStore(IMAGE_DB_CONFIG.store).delete(id);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error("Erro ao remover imagem do IndexedDB."));
      });
    }

    function getAtrizStoragePayload(){
      return atrizLibrary.map(item => ({
        nome: String(item.nome || "").trim(),
        imageId: item.imageId || (item.img ? normalizeImageId(item.nome) : ""),
        dataNascimento: String(item.dataNascimento || ""),
        localNascimento: String(item.localNascimento || ""),
        favorita: !!item.favorita,
        // Fallback opcional: mantém a foto recuperável em navegadores onde o IndexedDB falhar.
        // Em uso normal, a imagem principal continua sendo salva no IndexedDB.
        img: item.img || ""
      })).filter(item => item.nome);
    }

    function upsertAtrizCadastro(dados){
      const nome = String(dados?.nome || "").trim();
      if(!nome) return null;

      const atual = getAtrizCadastro(nome) || {};
      const atualizado = {
        nome,
        imageId: dados.imageId !== undefined ? dados.imageId : (atual.imageId || ""),
        img: dados.img !== undefined ? dados.img : (atual.img || ""),
        dataNascimento: dados.dataNascimento !== undefined ? String(dados.dataNascimento || "") : String(atual.dataNascimento || ""),
        localNascimento: dados.localNascimento !== undefined ? String(dados.localNascimento || "") : String(atual.localNascimento || ""),
        favorita: dados.favorita !== undefined ? !!dados.favorita : !!atual.favorita
      };

      atrizLibrary = atrizLibrary.filter(a => String(a.nome || "").trim().toLowerCase() !== nome.toLowerCase());
      atrizLibrary.push(atualizado);
      atrizLibrary.sort((a,b)=>a.nome.localeCompare(b.nome));
      saveAtrizes();
      return atualizado;
    }

    async function hydrateAtrizImagesFromIndexedDb(){
      let changed = false;
      try{
        for(const item of atrizLibrary){
          if(item.img && !item.imageId){
            item.imageId = normalizeImageId(item.nome);
            await saveImageToIndexedDb(item.imageId, item.img);
            changed = true;
          }

          if(item.imageId){
            const storedImage = await readImageFromIndexedDb(item.imageId);
            if(storedImage){
              item.img = storedImage;
            }
          }
        }

        if(changed){
          saveAtrizes();
        }
      } catch(error){
        console.warn("Não foi possível carregar/migrar imagens do IndexedDB.", error);
      }
    }

    function readJsonStorage(key, fallback){
      try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch(error){
        console.warn(`Dados inválidos no localStorage: ${key}`, error);
        return fallback;
      }
    }

    function writeJsonStorage(key, value){
      try{
        localStorage.setItem(key, JSON.stringify(value));
      } catch(error){
        console.error(`Não foi possível salvar no localStorage: ${key}`, error);
        alert("Não foi possível salvar os dados neste navegador. Exporte um backup e verifique o espaço disponível.");
      }
    }

    let videos = readJsonStorage(STORAGE_KEYS.videos, []);
    if(!Array.isArray(videos)) videos = [];

    let watchlist = readJsonStorage(STORAGE_KEYS.watchlist, []);
    if(!Array.isArray(watchlist)) watchlist = [];

    let editingIndex = null;
    let watchEditingIndex = null;
    let selectedTags = [];

    let atrizLibrary = readJsonStorage(STORAGE_KEYS.atrizes, null);
    if(!Array.isArray(atrizLibrary)){
      atrizLibrary = [];
    }
    atrizLibrary = atrizLibrary.map(item => ({
      nome: String(item.nome || "").trim(),
      imageId: item.imageId || (item.img ? normalizeImageId(item.nome) : ""),
      img: item.img || "",
      dataNascimento: item.dataNascimento || "",
      localNascimento: item.localNascimento || "",
      favorita: !!item.favorita
    })).filter(item => item.nome);
    let atrizModalAtual = "";
    let atrizDetailAtual = "";
    let atrizDetailTempImg = "";

    const atrizDetailCropState = {
      src: "",
      naturalWidth: 0,
      naturalHeight: 0,
      baseScale: 1,
      zoom: 1,
      displayWidth: 0,
      displayHeight: 0,
      x: 0,
      y: 0,
      dragging: false,
      startX: 0,
      startY: 0,
      originX: 0,
      originY: 0
    };

    const atrizCropState = {
      src: "",
      naturalWidth: 0,
      naturalHeight: 0,
      baseScale: 1,
      zoom: 1,
      displayWidth: 0,
      displayHeight: 0,
      x: 0,
      y: 0,
      dragging: false,
      startX: 0,
      startY: 0,
      originX: 0,
      originY: 0
    };

    function saveAtrizes(){
      writeJsonStorage(STORAGE_KEYS.atrizes, getAtrizStoragePayload());
    }

    function addAtriz(){
      const nome = String(byId("atrizNomeInput").value || "").trim();
      const file = byId("atrizFotoInput").files[0];
      const favorita = !!byId("atrizFavoritaInput")?.checked;

      if(!nome){
        alert("Digite o nome da atriz.");
        return;
      }

      if(!file){
        alert("Selecione uma imagem.");
        return;
      }

      const reader = new FileReader();
      reader.onload = async function(e){
        const img = e.target.result;
        const imageId = normalizeImageId(nome);

        try{
          await saveImageToIndexedDb(imageId, img);
        } catch(error){
          console.error("Erro ao salvar imagem no IndexedDB", error);
          alert("Não foi possível salvar a imagem no IndexedDB deste navegador.");
          return;
        }

        const existente = atrizLibrary.find(a => String(a.nome || "").trim().toLowerCase() === nome.toLowerCase());
        atrizLibrary = atrizLibrary.filter(a => String(a.nome || "").trim().toLowerCase() !== nome.toLowerCase());
        atrizLibrary.push({
          nome,
          imageId,
          img,
          dataNascimento: existente?.dataNascimento || "",
          localNascimento: existente?.localNascimento || "",
          favorita
        });
        atrizLibrary.sort((a,b)=>a.nome.localeCompare(b.nome));

        saveAtrizes();
        renderAtrizes();

        byId("atrizNomeInput").value = "";
        byId("atrizFotoInput").value = "";
        if(byId("atrizFavoritaInput")) byId("atrizFavoritaInput").checked = false;
      };
      reader.readAsDataURL(file);
    }

    async function removeAtriz(nome){
      const existente = atrizLibrary.find(a => a.nome === nome);
      if(existente?.imageId){
        try{ await deleteImageFromIndexedDb(existente.imageId); } catch(error){ console.warn("Não foi possível remover imagem do IndexedDB.", error); }
      }
      atrizLibrary = atrizLibrary.filter(a => a.nome !== nome);
      saveAtrizes();
      renderAtrizes();
    }

    function renderAtrizes(){
      const el = byId("atrizList");
      if(!el) return;

      if(!atrizLibrary.length){
        el.innerHTML = '<div class="empty">Nenhuma atriz cadastrada.</div>';
        return;
      }

      el.innerHTML = atrizLibrary.map(a => `
        <div class="library-chip" style="align-items:center;">
          ${a.img ? `<img src="${escapeAttr(a.img)}" alt="${escapeAttr(a.nome)}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">` : ""}
          <span>${escapeHtml(a.nome)}</span>
          <button type="button" onclick="removeAtriz(${jsString(a.nome)})">×</button>
        </div>
      `).join("");
    }

    let dashboardSelectedGroups = [];
    let watchlistSelectedGroups = [];
    let historicoSelectedGroups = [];


    const defaultTagCatalog = [
      "Anal","Big Ass","Big Tits","Blowjob","Casting","Cheating","College","Cosplay","Cougar","Creampie",
      "Feet","Freeuse","Gaming","Goth","Group","Hardcore","Interracial","Lesbian","Massage","Milf",
      "Natural Tits","Office","Outdoor","Pov","Roleplay","Romance","Sneaky","Step Family","Stuck","Tattoo",
      "Threesome","Vr"
    ];

    let tagCatalog = readJsonStorage(STORAGE_KEYS.tagCatalog, null);
    if(!Array.isArray(tagCatalog) || !tagCatalog.length){
      tagCatalog = [...defaultTagCatalog];
    }

    let studioGroups = readJsonStorage(STORAGE_KEYS.studioGroups, null);
    if(!Array.isArray(studioGroups)){
      studioGroups = [];
    }

    let collapsedStudioGroups = readJsonStorage(STORAGE_KEYS.collapsedStudioGroups, null);
    if(!Array.isArray(collapsedStudioGroups)){
      collapsedStudioGroups = [];
    }

    const ids = [
      "nome","studio","atriz","tags","link",
      "producao","performance","roteiro","estetica","tema","reassist","casting"
    ];

    function byId(id){ return document.getElementById(id); }

    function escapeHtml(value){
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function escapeAttr(value){
      return escapeHtml(value);
    }

    function jsString(value){
      return JSON.stringify(String(value ?? ""));
    }

    function openExternalLink(url){
      const safeUrl = String(url || "").trim();
      if(!safeUrl) return;
      window.open(safeUrl, "_blank", "noopener,noreferrer");
    }

    let previousSectionBeforeDetail = "historico";

    const defaultVisualSettings = {
      density: "comfortable",
      listMode: "compact",
      fontSize: "normal",
      accentColor: "#3b82f6",
      reducedMotion: false
    };

    let visualSettings = {
      ...defaultVisualSettings,
      ...(readJsonStorage(STORAGE_KEYS.visualSettings, {}) || {})
    };

    function getAccentHover(hex){
      const value = String(hex || "#3b82f6").replace("#", "");
      if(value.length !== 6) return "#2563eb";
      const r = Math.max(0, parseInt(value.slice(0,2),16) - 24);
      const g = Math.max(0, parseInt(value.slice(2,4),16) - 24);
      const b = Math.max(0, parseInt(value.slice(4,6),16) - 24);
      return `#${[r,g,b].map(n => n.toString(16).padStart(2,"0")).join("")}`;
    }

    function applyVisualSettings(){
      document.body.classList.toggle("theme-compact", visualSettings.density === "compact");
      document.body.classList.toggle("list-compact-view", (visualSettings.listMode || "compact") === "compact");
      document.body.classList.toggle("theme-large-font", visualSettings.fontSize === "large");
      document.body.classList.toggle("theme-reduced-motion", !!visualSettings.reducedMotion);
      document.documentElement.style.setProperty("--accent", visualSettings.accentColor || defaultVisualSettings.accentColor);
      document.documentElement.style.setProperty("--accent-2", getAccentHover(visualSettings.accentColor));
      if(byId("visualDensity")) byId("visualDensity").value = visualSettings.density;
      if(byId("visualListMode")) byId("visualListMode").value = visualSettings.listMode || defaultVisualSettings.listMode;
      if(byId("visualFontSize")) byId("visualFontSize").value = visualSettings.fontSize;
      if(byId("visualAccentColor")) byId("visualAccentColor").value = visualSettings.accentColor;
      if(byId("visualReducedMotion")) byId("visualReducedMotion").checked = !!visualSettings.reducedMotion;
    }

    function saveVisualSettings(){
      visualSettings = {
        density: byId("visualDensity")?.value || defaultVisualSettings.density,
        listMode: byId("visualListMode")?.value || defaultVisualSettings.listMode,
        fontSize: byId("visualFontSize")?.value || defaultVisualSettings.fontSize,
        accentColor: byId("visualAccentColor")?.value || defaultVisualSettings.accentColor,
        reducedMotion: !!byId("visualReducedMotion")?.checked
      };
      writeJsonStorage(STORAGE_KEYS.visualSettings, visualSettings);
      applyVisualSettings();
      if(typeof render === "function") render();
    }

    function resetVisualSettings(){
      visualSettings = {...defaultVisualSettings};
      writeJsonStorage(STORAGE_KEYS.visualSettings, visualSettings);
      applyVisualSettings();
      if(typeof render === "function") render();
    }



    function splitListText(text){
      return String(text || "")
        .split(",")
        .map(item => item.trim())
        .filter(Boolean);
    }

    function buildLimitedChips(text, limit = 3, extraClass = ""){
      const items = Array.isArray(text) ? text.filter(Boolean) : splitListText(text);
      if(!items.length) return "";
      const visible = items.slice(0, limit);
      const hidden = Math.max(0, items.length - visible.length);
      return `<div class="summary-tags ${extraClass}">${visible.map(item => `<span class="summary-chip">${escapeHtml(item)}</span>`).join("")}${hidden ? `<span class="summary-chip more">+${hidden}</span>` : ""}</div>`;
    }

    function getPrimaryPeopleLine(text, limit = 2){
      const items = splitListText(text);
      if(!items.length) return "Sem atrizes informadas";
      const visible = items.slice(0, limit).join(", ");
      const hidden = items.length - Math.min(items.length, limit);
      return hidden > 0 ? `${visible} +${hidden}` : visible;
    }

    function getListMode(){
      return (visualSettings && visualSettings.listMode) || "compact";
    }

    function isCompactListMode(){
      return getListMode() === "compact";
    }

    function getVideoSourceCollection(source){
      return source === "watchlist" ? watchlist : videos;
    }

    function abrirPaginaVideo(source, index){
      const collection = getVideoSourceCollection(source);
      const item = collection[index];
      if(!item){
        alert("Não foi possível localizar este vídeo.");
        return;
      }
      previousSectionBeforeDetail = source === "watchlist" ? "watchlist" : "historico";
      renderVideoDetail(source, index);
      showMainSection("detalhe-video");
      window.scrollTo({top:0, behavior:"smooth"});
    }

    function voltarDaPaginaVideo(){
      showMainSection(previousSectionBeforeDetail || "historico");
    }

    function getScoreRowsForVideo(item){
      return [
        ["Cenas de Sexo", item.sexo],
        ["Performance", item.performance],
        ["Casting", item.casting],
        ["Tema", item.tema],
        ["Produção", item.producao],
        ["Estética", item.estetica],
        ["Roteiro", item.roteiro],
        ["Reassistibilidade", item.reassist]
      ].map(([label, value]) => [label, Math.max(0, Math.min(10, Number(value || 0)))]);
    }

    function renderVideoDetail(source, index){
      const collection = getVideoSourceCollection(source);
      const item = collection[index];
      const el = byId("videoDetailContent");
      if(!el || !item) return;
      const isHistorico = source !== "watchlist";
      const nota = Number(item.nota || 0);
      const notaClasse = getNotaClasse(nota);
      const scoreRows = getScoreRowsForVideo(item);
      const atrizText = isHistorico ? item.atriz : item.atrizes;
      const scoreHtml = isHistorico ? scoreRows.map(([label, value]) => `
        <div class="video-detail-score-row">
          <div class="small"><strong>${escapeHtml(label)}</strong></div>
          <div class="video-detail-score-track"><div class="video-detail-score-fill" style="width:${value * 10}%"></div></div>
          <div class="small" style="text-align:right;font-weight:800;">${value}</div>
        </div>
      `).join("") : '<div class="empty">Este item ainda está na Watchlist. Mova para avaliação para ver as notas detalhadas.</div>';
      const tagsHtml = buildLimitedChips(item.tags, 99, "video-detail-tags") || '<div class="muted">—</div>';

      el.innerHTML = `
        <div class="video-detail-shell">
          <div class="video-detail-hero ${notaClasse}">
            <div class="row" style="justify-content:space-between;align-items:flex-start;">
              <div>
                <div class="small muted">${isHistorico ? "Histórico de vídeos" : "Watchlist"}</div>
                <h3 class="video-detail-title">${escapeHtml(item.nome || "Sem nome")}</h3>
                <div class="video-detail-subtitle">${escapeHtml(item.studio || "Sem studio")}</div>
              </div>
              <div class="row">
                ${isHistorico ? `<button class="btn-secondary" type="button" onclick="editVideo(${index})">Editar</button>` : `<button class="btn-secondary" type="button" onclick="editWatchItem(${index})">Editar</button>`}
                ${item.link ? `<button type="button" onclick="openExternalLink(${jsString(item.link)})">Abrir Link</button>` : ""}
              </div>
            </div>
            <div class="video-detail-kpi-grid">
              <div class="video-detail-kpi"><div class="video-detail-kpi-label">Nota Final</div><div class="video-detail-kpi-value">${isHistorico ? nota.toFixed(2) : "—"}</div></div>
              <div class="video-detail-kpi"><div class="video-detail-kpi-label">Status</div><div class="video-detail-kpi-value" style="font-size:20px;">${isHistorico ? "Avaliado" : "Na fila"}</div></div>
              <div class="video-detail-kpi"><div class="video-detail-kpi-label">Favorito</div><div class="video-detail-kpi-value" style="font-size:20px;">${item.favorito ? "Sim" : "Não"}</div></div>
            </div>
          </div>
          <div class="video-detail-grid">
            <div class="card video-detail-panel">
              <div class="video-detail-section-title"><h3>Resumo</h3>${!isHistorico ? `<span class="priority-tag ${getPrioridadeClasse(item.prioridade)}">${escapeHtml(item.prioridade || "Média")}</span>` : ""}</div>
              <div class="video-detail-meta-list">
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Studio</div>${escapeHtml(item.studio || "—")}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Atrizes</div>${escapeHtml(atrizText || "—")}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Tags</div>${tagsHtml}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Link completo</div>${item.link ? `<div class="link-text">${escapeHtml(item.link)}</div>` : "—"}</div>
              </div>
              <div class="video-detail-actions">
                ${item.link ? `<button type="button" onclick="openExternalLink(${jsString(item.link)})">Abrir Link</button>` : ""}
                ${isHistorico ? `<button class="btn-secondary" type="button" onclick="toggleFavorito(${index}); renderVideoDetail('${source}', ${index});">${item.favorito ? "Remover Favorito" : "Favoritar"}</button>` : `<button class="btn-secondary" type="button" onclick="moveWatchToHistory(${index})">Mover para Avaliação</button>`}
              </div>
            </div>
            <div class="card video-detail-panel">
              <div class="video-detail-section-title"><h3>Avaliação completa</h3>${isHistorico ? `<span class="tag note-badge ${notaClasse}">Nota ${nota.toFixed(2)}</span>` : ""}</div>
              <div class="video-detail-score-list top-gap">${scoreHtml}</div>
            </div>
          </div>
        </div>
      `;
    }



    function abrirPaginaAtriz(nomeAtriz){
      const nome = String(nomeAtriz || "").trim();
      if(!nome){
        alert("Não foi possível localizar esta atriz.");
        return;
      }
      previousSectionBeforeDetail = "atrizes";
      renderAtrizDetail(nome);
      showMainSection("detalhe-atriz");
      window.scrollTo({top:0, behavior:"smooth"});
    }

    function voltarDaPaginaAtriz(){
      showMainSection(previousSectionBeforeDetail || "atrizes");
    }

    function getAtrizRelatedItems(nomeAtriz){
      const nomeAlvo = String(nomeAtriz || "").trim().toLowerCase();
      const hasAtriz = (text) => String(text || "")
        .split(",")
        .map(x => x.trim().toLowerCase())
        .includes(nomeAlvo);

      return {
        historico: videos
          .map((item, index) => ({...item, __originalIndex:index}))
          .filter(item => hasAtriz(item.atriz)),
        watchlist: watchlist
          .map((item, index) => ({...item, __originalIndex:index}))
          .filter(item => hasAtriz(item.atrizes))
      };
    }

    function getAtrizScoreStats(nomeAtriz){
      const related = getAtrizRelatedItems(nomeAtriz);
      const notas = related.historico.map(item => Number(calcularNotaAtriz(item) || 0)).filter(n => Number.isFinite(n));
      const geral = related.historico.map(item => Number(item.nota || 0)).filter(n => Number.isFinite(n));
      const avg = arr => arr.length ? arr.reduce((acc, n) => acc + n, 0) / arr.length : null;
      const best = related.historico.length
        ? [...related.historico].sort((a,b) => Number(b.nota || 0) - Number(a.nota || 0))[0]
        : null;
      const studios = [...new Set(related.historico.map(item => String(item.studio || "").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
      const tags = [...new Set(related.historico.flatMap(item => splitListText(item.tags)))].sort((a,b)=>a.localeCompare(b));

      return {
        mediaAtriz: avg(notas),
        mediaGeral: avg(geral),
        melhorVideo: best,
        studios,
        tags,
        related
      };
    }


    function countByName(items){
      const map = new Map();
      items.forEach(raw => {
        const name = String(raw || "").trim();
        if(!name) return;
        const key = name.toLowerCase();
        const current = map.get(key) || { name, count: 0 };
        current.count += 1;
        map.set(key, current);
      });
      return [...map.values()].sort((a,b) => b.count - a.count || a.name.localeCompare(b.name));
    }

    function getAtrizTopInsights(nomeAtriz){
      const nomeAlvo = String(nomeAtriz || "").trim().toLowerCase();
      const related = getAtrizRelatedItems(nomeAtriz);
      const allItems = [
        ...related.historico.map(item => ({...item, __source:"historico", __atrizesField:item.atriz || ""})),
        ...related.watchlist.map(item => ({...item, __source:"watchlist", __atrizesField:item.atrizes || ""}))
      ];

      const studios = countByName(allItems.map(item => item.studio));
      const coatrizes = countByName(allItems.flatMap(item => splitListText(item.__atrizesField)).filter(nome => nome.toLowerCase() !== nomeAlvo));
      const tags = countByName(related.historico.flatMap(item => splitListText(item.tags)));

      return {
        topStudios: studios.slice(0, 5),
        topCoatrizes: coatrizes.slice(0, 5),
        topTags: tags.slice(0, 5)
      };
    }

    function renderAtrizRankList(items, emptyText, singularLabel = "vídeo", pluralLabel = "vídeos"){
      if(!items || !items.length) return `<div class="empty">${escapeHtml(emptyText)}</div>`;
      return `<div class="atriz-rank-list">${items.map((item, index) => `
        <div class="atriz-rank-item">
          <div class="atriz-rank-position">${index + 1}</div>
          <div class="atriz-rank-name" title="${escapeAttr(item.name)}">${escapeHtml(item.name)}</div>
          <div class="atriz-rank-count">${item.count} ${item.count === 1 ? singularLabel : pluralLabel}</div>
        </div>
      `).join("")}</div>`;
    }

    function renderAtrizRelatedCards(items, source, emptyText){
      if(!items.length) return `<div class="empty">${escapeHtml(emptyText)}</div>`;
      return items.map(item => {
        const isHistorico = source === "historico";
        const nota = Number(item.nota || 0);
        const notaClasse = isHistorico ? getNotaClasse(nota) : getPrioridadeClasse(item.prioridade || "Média");
        const subtitle = isHistorico
          ? `${escapeHtml(item.studio || "Sem studio")} • Nota ${nota.toFixed(2)} • Nota atriz ${Number(calcularNotaAtriz(item) || 0).toFixed(2)}`
          : `${escapeHtml(item.studio || "Sem studio")} • Prioridade ${escapeHtml(item.prioridade || "Média")}`;
        return `
          <div class="historico-item-card summary-card ${notaClasse}">
            <div class="historico-item-top">
              <div>
                <h3 class="historico-item-title">${escapeHtml(item.nome || "Sem nome")}</h3>
                <div class="summary-muted-line">${subtitle}</div>
                ${isHistorico ? buildLimitedChips(item.tags, 6, "top-gap") : ""}
              </div>
              <div class="historico-item-actions">
                <button class="btn-secondary" type="button" onclick="abrirPaginaVideo('${source}', ${item.__originalIndex})">Ver vídeo</button>
                ${item.link ? `<button type="button" onclick="openExternalLink(${jsString(item.link)})">Abrir Link</button>` : ""}
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    function renderAtrizDetail(nomeAtriz){
      const el = byId("atrizDetailContent");
      if(!el) return;
      const nome = String(nomeAtriz || "").trim();
      atrizDetailAtual = nome;
      atrizDetailTempImg = "";
      resetAtrizDetailCropState();
      if(!nome){
        el.innerHTML = '<div class="empty">Selecione uma atriz na lista de Atrizes para ver os detalhes.</div>';
        return;
      }

      const cadastro = getAtrizCadastro(nome);
      const counts = getAtrizVideoCounts(nome);
      const stats = getAtrizScoreStats(nome);
      const insights = getAtrizTopInsights(nome);
      const mediaPonderada = getMediaAtrizPorNome(nome);
      const mediaAtriz = stats.mediaAtriz;
      const mediaGeral = stats.mediaGeral;
      const notaBase = mediaAtriz ?? mediaPonderada ?? 0;
      const notaClasse = getNotaClasse(notaBase);
      const melhorVideo = stats.melhorVideo;
      const studioPrincipal = insights.topStudios?.[0]?.name || stats.studios?.[0] || "—";
      const primeiraLetra = nome.charAt(0).toUpperCase();
      const avatarHeroHtml = cadastro?.img
        ? `<img src="${escapeAttr(cadastro.img)}" alt="${escapeAttr(nome)}">`
        : `<div class="atriz-hero-fallback">${escapeHtml(primeiraLetra)}</div>`;
      const avatarPreviewHtml = cadastro?.img
        ? `<img src="${escapeAttr(cadastro.img)}" alt="${escapeAttr(nome)}" style="width:110px;height:110px;border-radius:50%;object-fit:cover;border:2px solid rgba(96,165,250,.40);">`
        : `<div class="avatar-fallback" style="width:110px;height:110px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,.45);border:1px solid rgba(96,165,250,.24);font-size:36px;font-weight:900;color:#dbeafe;">${escapeHtml(primeiraLetra)}</div>`;
      const periodoInfo = cadastro?.dataNascimento || cadastro?.localNascimento
        ? `${cadastro?.dataNascimento ? "Nascimento: " + escapeHtml(cadastro.dataNascimento) : "Nascimento não informado"}${cadastro?.localNascimento ? " • " + escapeHtml(cadastro.localNascimento) : ""}`
        : "Perfil ainda sem dados biográficos cadastrados.";

      el.innerHTML = `
        <div class="video-detail-shell atriz-detail-shell">
          <div class="atriz-hero-premium ${notaClasse}">
            <div class="atriz-hero-layout">
              <div class="atriz-hero-avatar" id="atrizDetailHeroAvatar">${avatarHeroHtml}</div>
              <div>
                <div class="atriz-hero-kicker">Perfil da atriz</div>
                <h3 class="atriz-hero-title">${escapeHtml(nome)}</h3>
                <div class="atriz-hero-subtitle">${periodoInfo}</div>
                <div class="atriz-hero-badges" id="atrizDetailFavoritePreview">
                  ${cadastro?.favorita ? '<span class="atriz-fav-badge">★ Favorita</span>' : '<span class="tag">Não favorita</span>'}
                  <span class="tag note-badge ${notaClasse}">${mediaAtriz !== null ? "Nota atriz " + mediaAtriz.toFixed(2) : "Sem nota da atriz"}</span>
                  <span class="tag">${counts.historico} no histórico</span>
                  <span class="tag">${counts.watchlist} na watchlist</span>
                </div>
              </div>
              <div class="atriz-hero-actions">
                <button class="btn-secondary" type="button" onclick="showMainSection('atrizes')">Lista de Atrizes</button>
                <button type="button" onclick="scrollToAtrizDetailEditor()">Editar Perfil</button>
              </div>
            </div>
            <div class="atriz-hero-stats">
              <div class="atriz-hero-stat"><div class="atriz-hero-stat-label">Histórico</div><div class="atriz-hero-stat-value">${counts.historico}</div></div>
              <div class="atriz-hero-stat"><div class="atriz-hero-stat-label">Watchlist</div><div class="atriz-hero-stat-value">${counts.watchlist}</div></div>
              <div class="atriz-hero-stat"><div class="atriz-hero-stat-label">Nota Atriz</div><div class="atriz-hero-stat-value">${mediaAtriz !== null ? mediaAtriz.toFixed(2) : "—"}</div></div>
              <div class="atriz-hero-stat"><div class="atriz-hero-stat-label">Studio Principal</div><div class="atriz-hero-stat-value" title="${escapeAttr(studioPrincipal)}">${escapeHtml(studioPrincipal)}</div></div>
            </div>
          </div>

          <div class="atriz-detail-priority-grid">
            <div class="card video-detail-panel">
              <h3>Informações da atriz</h3>
              <div class="video-detail-meta-list top-gap">
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Nome</div>${escapeHtml(nome)}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Status</div>${cadastro?.favorita ? "★ Favorita" : "Não favorita"}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Data de nascimento</div>${escapeHtml(cadastro?.dataNascimento || "—")}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Local de nascimento</div>${escapeHtml(cadastro?.localNascimento || "—")}</div>
              </div>
            </div>

            <div class="card video-detail-panel">
              <h3>Resumo dos vídeos</h3>
              <div class="video-detail-meta-list top-gap">
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Vídeos no histórico</div>${counts.historico} vídeo(s) avaliado(s)</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Vídeos na watchlist</div>${counts.watchlist} item(ns) planejado(s)</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Total registrado</div>${counts.total} item(ns)</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Média geral dos vídeos</div>${mediaGeral !== null ? mediaGeral.toFixed(2) : "—"}</div>
                <div class="video-detail-meta-item"><div class="video-detail-meta-label">Melhor vídeo no histórico</div>${melhorVideo ? `${escapeHtml(melhorVideo.nome || "Sem nome")} — Nota ${Number(melhorVideo.nota || 0).toFixed(2)}` : "—"}</div>
              </div>
            </div>
          </div>

          <div class="atriz-detail-insights-grid">
            <div class="card video-detail-panel">
              <h3>Top 5 estúdios</h3>
              ${renderAtrizRankList(insights.topStudios, "Nenhum estúdio relacionado encontrado.")}
            </div>
            <div class="card video-detail-panel">
              <h3>Top 5 coatrizes</h3>
              ${renderAtrizRankList(insights.topCoatrizes, "Nenhuma coatriz relacionada encontrada.")}
            </div>
            <div class="card video-detail-panel">
              <h3>Top 5 tags</h3>
              ${renderAtrizRankList(insights.topTags, "Nenhuma tag relacionada encontrada.", "ocorrência", "ocorrências")}
            </div>
          </div>

          <div class="card video-detail-panel">
            <div class="video-detail-section-title"><h3>Vídeos no Histórico</h3><span class="tag note-badge ${notaClasse}">${counts.historico} item(ns)</span></div>
            <div class="historico-results-grid top-gap">
              ${renderAtrizRelatedCards(stats.related.historico, "historico", "Nenhum vídeo do histórico está associado a esta atriz.")}
            </div>
          </div>

          <div class="card video-detail-panel">
            <div class="video-detail-section-title"><h3>Itens na Watchlist</h3><span class="tag">${counts.watchlist} item(ns)</span></div>
            <div class="historico-results-grid top-gap">
              ${renderAtrizRelatedCards(stats.related.watchlist, "watchlist", "Nenhum item da watchlist está associado a esta atriz.")}
            </div>
          </div>

          <div class="card video-detail-panel atriz-editor-bottom" id="atrizDetailEditor">
            <div class="section-header" style="position:static;margin:0 0 12px;padding:0;border:0;background:transparent;">
              <div>
                <h3>Editar informações da atriz</h3>
                <div class="small muted">Área de manutenção do perfil. As informações principais ficam exibidas acima.</div>
              </div>
            </div>
            <div class="video-detail-meta-list top-gap">
              <div>
                <label>Nome</label>
                <input type="text" value="${escapeAttr(nome)}" disabled />
                <div class="tag-help-text">O nome é usado para relacionar a atriz aos vídeos. Para evitar quebra de vínculo, ele não é alterado nesta tela.</div>
              </div>
              <div class="grid grid-2">
                <div>
                  <label>Data de nascimento</label>
                  <input id="atrizDetailDataNascimento" type="date" value="${escapeAttr(cadastro?.dataNascimento || "")}" />
                </div>
                <div>
                  <label>Local de nascimento</label>
                  <input id="atrizDetailLocalNascimento" type="text" placeholder="Ex.: São Paulo, Brasil" value="${escapeAttr(cadastro?.localNascimento || "")}" />
                </div>
              </div>
              <label class="favorite-check">
                <input id="atrizDetailFavorita" type="checkbox" ${cadastro?.favorita ? "checked" : ""} /> Marcar como favorita
              </label>
              <div>
                <label>Foto da atriz</label>
                <input id="atrizDetailFotoInput" type="file" accept="image/*" onchange="handleAtrizDetailFotoChange(event)" />
                <div class="tag-help-text">Selecione uma imagem e ajuste o enquadramento abaixo. O recorte será salvo no perfil.</div>
              </div>
              <div class="atriz-detail-image-editor">
                <div class="modal-preview" style="margin-bottom:12px;">
                  <div id="atrizDetailAvatarPreview">${avatarPreviewHtml}</div>
                  <div>
                    <strong>Prévia do avatar</strong>
                    <div class="small muted">Use zoom e arraste a imagem para definir o enquadramento.</div>
                  </div>
                </div>
                <div class="cropper-zoom-row">
                  <label for="atrizDetailCropZoom" class="cropper-zoom-label">Zoom</label>
                  <input id="atrizDetailCropZoom" class="cropper-zoom-input" type="range" min="1" max="3" step="0.01" value="1" oninput="applyAtrizDetailCropZoom(this.value, true)" />
                  <div id="atrizDetailCropZoomValue" class="cropper-zoom-value">100%</div>
                </div>
                <div id="atrizDetailCropStage" class="cropper-stage atriz-detail-cropper-stage">
                  <img id="atrizDetailCropImage" class="cropper-image" alt="Prévia do recorte da atriz" />
                  <div class="cropper-mask"></div>
                </div>
                <div class="cropper-help">Arraste a imagem para posicionar e use o controle de zoom antes de salvar.</div>
              </div>
            </div>
            <div class="modal-actions">
              <button id="atrizDetailSaveBtn" type="button" onclick='saveAtrizDetailFromPage(${jsString(nome)})'>Salvar Alterações</button>
              <button class="btn-secondary" type="button" onclick='removeAtrizDetailFoto(${jsString(nome)})'>Remover Foto</button>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        loadAtrizDetailCropSource(cadastro?.img || "");
        initAtrizDetailCropEvents();
      }, 0);
    }

    function resetAtrizDetailCropState(){
      Object.assign(atrizDetailCropState, {
        src: "",
        naturalWidth: 0,
        naturalHeight: 0,
        baseScale: 1,
        zoom: 1,
        displayWidth: 0,
        displayHeight: 0,
        x: 0,
        y: 0,
        dragging: false,
        startX: 0,
        startY: 0,
        originX: 0,
        originY: 0
      });
    }

    function getAtrizDetailCropElements(){
      return {
        stage: byId("atrizDetailCropStage"),
        image: byId("atrizDetailCropImage"),
        zoomInput: byId("atrizDetailCropZoom"),
        zoomValue: byId("atrizDetailCropZoomValue")
      };
    }

    function updateAtrizDetailCropZoomLabel(){
      const { zoomValue } = getAtrizDetailCropElements();
      if(zoomValue) zoomValue.textContent = `${Math.round((Number(atrizDetailCropState.zoom || 1)) * 100)}%`;
    }

    function applyAtrizDetailCropZoom(nextZoom, preserveCenter = true){
      const { stage } = getAtrizDetailCropElements();
      if(!stage || !atrizDetailCropState.src) return;

      const prevWidth = atrizDetailCropState.displayWidth || (atrizDetailCropState.naturalWidth * atrizDetailCropState.baseScale * atrizDetailCropState.zoom);
      const prevHeight = atrizDetailCropState.displayHeight || (atrizDetailCropState.naturalHeight * atrizDetailCropState.baseScale * atrizDetailCropState.zoom);
      const centerX = (stage.clientWidth || 280) / 2;
      const centerY = (stage.clientHeight || 280) / 2;
      let imageRatioX = 0.5;
      let imageRatioY = 0.5;

      if(preserveCenter && prevWidth > 0 && prevHeight > 0){
        imageRatioX = (centerX - atrizDetailCropState.x) / prevWidth;
        imageRatioY = (centerY - atrizDetailCropState.y) / prevHeight;
      }

      atrizDetailCropState.zoom = Math.min(3, Math.max(1, Number(nextZoom) || 1));
      atrizDetailCropState.displayWidth = atrizDetailCropState.naturalWidth * atrizDetailCropState.baseScale * atrizDetailCropState.zoom;
      atrizDetailCropState.displayHeight = atrizDetailCropState.naturalHeight * atrizDetailCropState.baseScale * atrizDetailCropState.zoom;

      if(preserveCenter){
        atrizDetailCropState.x = centerX - (imageRatioX * atrizDetailCropState.displayWidth);
        atrizDetailCropState.y = centerY - (imageRatioY * atrizDetailCropState.displayHeight);
      } else {
        atrizDetailCropState.x = (stage.clientWidth - atrizDetailCropState.displayWidth) / 2;
        atrizDetailCropState.y = (stage.clientHeight - atrizDetailCropState.displayHeight) / 2;
      }

      clampAtrizDetailCropPosition();
      renderAtrizDetailCrop();
      updateAtrizDetailCropZoomLabel();
    }

    function clampAtrizDetailCropPosition(){
      const { stage } = getAtrizDetailCropElements();
      if(!stage) return;
      const minX = Math.min(0, stage.clientWidth - atrizDetailCropState.displayWidth);
      const minY = Math.min(0, stage.clientHeight - atrizDetailCropState.displayHeight);
      atrizDetailCropState.x = Math.min(0, Math.max(minX, atrizDetailCropState.x));
      atrizDetailCropState.y = Math.min(0, Math.max(minY, atrizDetailCropState.y));
    }

    function renderAtrizDetailCrop(){
      const { image } = getAtrizDetailCropElements();
      if(!image) return;
      if(!atrizDetailCropState.src){
        image.style.display = "none";
        image.removeAttribute("src");
        updateAtrizDetailCropZoomLabel();
        return;
      }
      image.style.display = "block";
      image.src = atrizDetailCropState.src;
      image.style.width = `${atrizDetailCropState.displayWidth}px`;
      image.style.height = `${atrizDetailCropState.displayHeight}px`;
      image.style.transform = `translate(${atrizDetailCropState.x}px, ${atrizDetailCropState.y}px)`;
      updateAtrizDetailCropZoomLabel();
    }

    function loadAtrizDetailCropSource(src){
      const { stage, zoomInput } = getAtrizDetailCropElements();
      if(!stage) return;
      if(!src){
        resetAtrizDetailCropState();
        if(zoomInput) zoomInput.value = "1";
        renderAtrizDetailCrop();
        return;
      }
      const img = new Image();
      img.onload = function(){
        atrizDetailCropState.src = src;
        atrizDetailCropState.naturalWidth = img.naturalWidth;
        atrizDetailCropState.naturalHeight = img.naturalHeight;
        const stageW = stage.clientWidth || 280;
        const stageH = stage.clientHeight || stageW;
        atrizDetailCropState.baseScale = Math.max(stageW / img.naturalWidth, stageH / img.naturalHeight);
        atrizDetailCropState.zoom = 1;
        if(zoomInput) zoomInput.value = "1";
        applyAtrizDetailCropZoom(1, false);
      };
      img.src = src;
    }

    function initAtrizDetailCropEvents(){
      const { stage } = getAtrizDetailCropElements();
      if(!stage || stage.dataset.cropEventsBound === "1") return;
      stage.dataset.cropEventsBound = "1";

      const startDrag = (clientX, clientY) => {
        if(!atrizDetailCropState.src) return;
        atrizDetailCropState.dragging = true;
        atrizDetailCropState.startX = clientX;
        atrizDetailCropState.startY = clientY;
        atrizDetailCropState.originX = atrizDetailCropState.x;
        atrizDetailCropState.originY = atrizDetailCropState.y;
        stage.classList.add("dragging");
      };
      const moveDrag = (clientX, clientY) => {
        if(!atrizDetailCropState.dragging) return;
        atrizDetailCropState.x = atrizDetailCropState.originX + (clientX - atrizDetailCropState.startX);
        atrizDetailCropState.y = atrizDetailCropState.originY + (clientY - atrizDetailCropState.startY);
        clampAtrizDetailCropPosition();
        renderAtrizDetailCrop();
      };
      const endDrag = () => {
        atrizDetailCropState.dragging = false;
        stage.classList.remove("dragging");
      };

      stage.addEventListener("mousedown", (e) => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
      });
      window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
      window.addEventListener("mouseup", endDrag);

      stage.addEventListener("touchstart", (e) => {
        const t = e.touches[0];
        if(!t) return;
        startDrag(t.clientX, t.clientY);
      }, { passive: true });
      window.addEventListener("touchmove", (e) => {
        const t = e.touches[0];
        if(!t) return;
        moveDrag(t.clientX, t.clientY);
      }, { passive: true });
      window.addEventListener("touchend", endDrag);
    }

    function getAtrizDetailCroppedImageData(){
      if(!atrizDetailCropState.src) return "";
      const { stage, image } = getAtrizDetailCropElements();
      if(!stage || !image || !image.complete) return atrizDetailCropState.src;
      const canvas = document.createElement("canvas");
      const size = 400;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const scaleX = atrizDetailCropState.naturalWidth / atrizDetailCropState.displayWidth;
      const scaleY = atrizDetailCropState.naturalHeight / atrizDetailCropState.displayHeight;
      const sx = Math.max(0, -atrizDetailCropState.x * scaleX);
      const sy = Math.max(0, -atrizDetailCropState.y * scaleY);
      const sw = Math.min(atrizDetailCropState.naturalWidth - sx, stage.clientWidth * scaleX);
      const sh = Math.min(atrizDetailCropState.naturalHeight - sy, stage.clientHeight * scaleY);
      try{
        ctx.drawImage(image, sx, sy, sw, sh, 0, 0, size, size);
        return canvas.toDataURL("image/jpeg", 0.92);
      } catch(error){
        console.warn("Não foi possível gerar o recorte da atriz.", error);
        return atrizDetailCropState.src;
      }
    }

    function updateAtrizDetailImagePreviews(src, nome){
      const safeNome = String(nome || atrizDetailAtual || "Atriz");
      const preview = byId("atrizDetailAvatarPreview");
      const hero = byId("atrizDetailHeroAvatar");
      const fallback = `<div class="atriz-hero-fallback">${escapeHtml(safeNome.charAt(0).toUpperCase())}</div>`;
      if(preview){
        preview.innerHTML = src
          ? `<img src="${escapeAttr(src)}" alt="${escapeAttr(safeNome)}" style="width:110px;height:110px;border-radius:50%;object-fit:cover;border:2px solid rgba(96,165,250,.40);">`
          : `<div class="avatar-fallback" style="width:110px;height:110px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,.45);border:1px solid rgba(96,165,250,.24);font-size:36px;font-weight:900;color:#dbeafe;">${escapeHtml(safeNome.charAt(0).toUpperCase())}</div>`;
      }
      if(hero){
        hero.innerHTML = src ? `<img src="${escapeAttr(src)}" alt="${escapeAttr(safeNome)}">` : fallback;
      }
    }

    function handleAtrizDetailFotoChange(event){
      const file = event?.target?.files?.[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        atrizDetailTempImg = String(reader.result || "");
        loadAtrizDetailCropSource(atrizDetailTempImg);
        updateAtrizDetailImagePreviews(atrizDetailTempImg, atrizDetailAtual || "Atriz");
      };
      reader.readAsDataURL(file);
    }

    function scrollToAtrizDetailEditor(){
      const el = byId("atrizDetailEditor");
      if(el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    async function getAtrizDetailCroppedImageDataAsync(){
      const { stage } = getAtrizDetailCropElements();
      if(!stage || !atrizDetailCropState.src) return "";

      const img = new Image();
      img.src = atrizDetailCropState.src;
      try{
        if(img.decode) await img.decode();
        else await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      } catch(error){
        console.warn("Não foi possível carregar a imagem para recorte. Salvando imagem original como fallback.", error);
        return atrizDetailCropState.src;
      }

      const canvas = document.createElement("canvas");
      const size = 420;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if(!ctx) return atrizDetailCropState.src;

      const displayWidth = atrizDetailCropState.displayWidth || img.naturalWidth || stage.clientWidth;
      const displayHeight = atrizDetailCropState.displayHeight || img.naturalHeight || stage.clientHeight;
      const naturalWidth = atrizDetailCropState.naturalWidth || img.naturalWidth || displayWidth;
      const naturalHeight = atrizDetailCropState.naturalHeight || img.naturalHeight || displayHeight;

      const scaleX = naturalWidth / displayWidth;
      const scaleY = naturalHeight / displayHeight;
      const sx = Math.max(0, -atrizDetailCropState.x * scaleX);
      const sy = Math.max(0, -atrizDetailCropState.y * scaleY);
      const sw = Math.max(1, Math.min(naturalWidth - sx, stage.clientWidth * scaleX));
      const sh = Math.max(1, Math.min(naturalHeight - sy, stage.clientHeight * scaleY));

      try{
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);
        return canvas.toDataURL("image/jpeg", 0.92);
      } catch(error){
        console.warn("Não foi possível gerar o recorte. Salvando imagem original como fallback.", error);
        return atrizDetailCropState.src;
      }
    }

    function persistAtrizLibraryDireto(){
      try{
        const payload = atrizLibrary.map(item => ({
          nome: String(item.nome || "").trim(),
          imageId: String(item.imageId || ""),
          img: String(item.img || ""),
          dataNascimento: String(item.dataNascimento || ""),
          localNascimento: String(item.localNascimento || ""),
          favorita: !!item.favorita
        })).filter(item => item.nome);
        localStorage.setItem(STORAGE_KEYS.atrizes, JSON.stringify(payload));
        return true;
      } catch(error){
        console.error("Falha ao gravar atrizes no localStorage.", error);
        return false;
      }
    }

    async function saveAtrizDetailFromPage(nomeAtriz){
      const nome = String(nomeAtriz || atrizDetailAtual || "").trim();
      if(!nome){
        alert("Não foi possível identificar a atriz para salvar.");
        return;
      }

      const dataNascimento = String(byId("atrizDetailDataNascimento")?.value || "").trim();
      const localNascimento = String(byId("atrizDetailLocalNascimento")?.value || "").trim();
      const favorita = !!byId("atrizDetailFavorita")?.checked;
      const cadastroAtual = getAtrizCadastro(nome) || {};

      let imgFinal = String(cadastroAtual.img || "");
      let imageId = String(cadastroAtual.imageId || "");

      if(atrizDetailCropState.src){
        imgFinal = await getAtrizDetailCroppedImageDataAsync();
        imageId = imageId || normalizeImageId(nome);
        try{
          await saveImageToIndexedDb(imageId, imgFinal);
        } catch(error){
          console.warn("Não foi possível salvar a imagem no IndexedDB. A imagem será mantida como fallback no localStorage.", error);
        }
      }

      const normalizado = nome.toLowerCase();
      atrizLibrary = Array.isArray(atrizLibrary) ? atrizLibrary : [];
      atrizLibrary = atrizLibrary.filter(a => String(a.nome || "").trim().toLowerCase() !== normalizado);
      atrizLibrary.push({
        nome,
        imageId,
        img: imgFinal,
        dataNascimento,
        localNascimento,
        favorita
      });
      atrizLibrary.sort((a,b)=>String(a.nome || "").localeCompare(String(b.nome || "")));

      const persistiu = persistAtrizLibraryDireto();
      const salvoAgora = readJsonStorage(STORAGE_KEYS.atrizes, []);
      const confirmado = Array.isArray(salvoAgora) && salvoAgora.some(a =>
        String(a.nome || "").trim().toLowerCase() === normalizado &&
        String(a.dataNascimento || "") === dataNascimento &&
        String(a.localNascimento || "") === localNascimento &&
        !!a.favorita === favorita &&
        (!imgFinal || !!a.img || !!a.imageId)
      );

      if(!persistiu || !confirmado){
        alert("Não foi possível confirmar o salvamento no navegador. Verifique se o armazenamento local está habilitado e se há espaço disponível.");
        return;
      }

      atrizDetailTempImg = "";
      resetAtrizDetailCropState();
      renderAtrizes();
      renderAtrizDetail(nome);
      render();
      alert("Perfil da atriz salvo com sucesso.");
    }

    async function removeAtrizDetailFoto(nomeAtriz){
      const nome = String(nomeAtriz || atrizDetailAtual || "").trim();
      if(!nome) return;
      const cadastroAtual = getAtrizCadastro(nome);
      if(cadastroAtual?.imageId){
        try{ await deleteImageFromIndexedDb(cadastroAtual.imageId); } catch(error){ console.warn("Não foi possível remover imagem do IndexedDB.", error); }
      }
      atrizDetailTempImg = "";
      upsertAtrizCadastro({
        nome,
        imageId: "",
        img: "",
        dataNascimento: cadastroAtual?.dataNascimento || "",
        localNascimento: cadastroAtual?.localNascimento || "",
        favorita: !!cadastroAtual?.favorita
      });
      renderAtrizes();
      renderAtrizDetail(nome);
    }

    function capitalize(text){
      if(!text) return "";
      return String(text)
        .split(" ")
        .filter(Boolean)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
    }

    function normalizeUrl(url){
      if(!url) return "";
      const trimmed = String(url).trim();
      if(!trimmed) return "";
      if(/^https?:\/\//i.test(trimmed)) return trimmed;
      if(/^\/\//.test(trimmed)) return "https:" + trimmed;
      return "https://" + trimmed;
    }

    function normalizeUrlForComparison(url){
      const normalized = normalizeUrl(url);
      if(!normalized) return "";

      try{
        const parsed = new URL(normalized);
        parsed.protocol = parsed.protocol.toLowerCase();
        parsed.hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
        parsed.hash = "";

        const trackingParams = [
          "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
          "fbclid", "gclid", "ref", "ref_src"
        ];
        trackingParams.forEach(param => parsed.searchParams.delete(param));

        parsed.pathname = parsed.pathname.replace(/\/+$|^\s+|\s+$/g, "");
        if(parsed.pathname === "") parsed.pathname = "/";

        const search = parsed.searchParams.toString();
        return `${parsed.hostname}${parsed.pathname}${search ? "?" + search : ""}`.toLowerCase();
      } catch(error){
        return String(normalized)
          .trim()
          .replace(/^https?:\/\//i, "")
          .replace(/^www\./i, "")
          .replace(/#.*$/, "")
          .replace(/\/+$|^\s+|\s+$/g, "")
          .toLowerCase();
      }
    }

    function findDuplicateByLink(collection, link, ignoredIndex = null){
      const comparableLink = normalizeUrlForComparison(link);
      if(!comparableLink) return -1;

      return collection.findIndex((item, index) => {
        if(ignoredIndex !== null && index === ignoredIndex) return false;
        return normalizeUrlForComparison(item && item.link) === comparableLink;
      });
    }

    function buildDuplicateMessage(tipo, duplicateItem){
      const nome = duplicateItem && duplicateItem.nome ? `\n\nVídeo já cadastrado: ${duplicateItem.nome}` : "";
      const area = tipo === "watchlist" ? "watchlist" : "histórico";
      return `Este link já existe no ${area}. Para evitar duplicidade, o vídeo não será adicionado novamente.${nome}`;
    }

    function saveStorage(){
      writeJsonStorage(STORAGE_KEYS.videos, videos);
      writeJsonStorage(STORAGE_KEYS.watchlist, watchlist);
    }

    function toggleSection(sectionId){
      const body = byId(sectionId);
      if(!body) return;
      body.classList.toggle("hidden");

      const btn = document.querySelector(`button[onclick="toggleSection('${sectionId}')"]`);
      if(btn){
        btn.textContent = body.classList.contains("hidden") ? "Expandir" : "Minimizar";
      }
    }

    function showMainSection(sectionName, btn){
      document.querySelectorAll(".main-section").forEach(el => el.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach(el => {
        el.classList.remove("active");
        el.removeAttribute("aria-current");
      });

      const target = byId(`section-${sectionName}`);
      if(target) target.classList.add("active");

      document.querySelectorAll(`.tab-btn[onclick*="showMainSection('${sectionName}'"]`).forEach(el => {
        el.classList.add("active");
        el.setAttribute("aria-current", "page");
      });
      document.querySelectorAll(`.tab-btn[data-section="${sectionName}"]`).forEach(el => {
        el.classList.add("active");
        el.setAttribute("aria-current", "page");
      });
      if(btn){
        btn.classList.add("active");
        btn.setAttribute("aria-current", "page");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }





    function getSelectedStudiosFromGroups(selectedGroupNames){
      if(!Array.isArray(selectedGroupNames) || !selectedGroupNames.length) return [];
      const groups = studioGroups.filter(group => selectedGroupNames.includes(group.name));
      const studios = groups.flatMap(group => Array.isArray(group.studios) ? group.studios : []);
      return [...new Set(studios.map(item => String(item).trim().toLowerCase()).filter(Boolean))];
    }

    function getAllGroupNamesUnicos(){
      return studioGroups
        .map(group => String(group.name || "").trim())
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
    }


    function expandSingleStudioFromGroup(rawValue){
      const terms = getStudiosFromInputOrGroups(rawValue);
      if(!terms.length) return String(rawValue || "").trim();
      if(terms.length === 1) return terms[0];
      return terms.join(", ");
    }

    function getStudiosFromInputOrGroups(rawValue){
      const terms = String(rawValue || "")
        .split(",")
        .map(item => item.trim().toLowerCase())
        .filter(Boolean);

      if(!terms.length) return [];

      const allStudios = [...new Set([...getStudiosUnicos(), ...getWatchStudiosUnicos()])]
        .map(item => String(item).trim().toLowerCase())
        .filter(Boolean);

      const matchedStudios = allStudios.filter(studio =>
        terms.some(term => studio.includes(term))
      );

      const matchedGroups = studioGroups.filter(group => {
        const groupName = String(group.name || "").trim().toLowerCase();
        return terms.some(term => groupName.includes(term));
      });

      const groupStudios = matchedGroups.flatMap(group =>
        Array.isArray(group.studios) ? group.studios : []
      ).map(item => String(item).trim().toLowerCase()).filter(Boolean);

      return [...new Set([...matchedStudios, ...groupStudios])];
    }


    function toggleGroupSelection(listName, groupName, checked){
      const map = {
        dashboard: dashboardSelectedGroups,
        watchlist: watchlistSelectedGroups,
        historico: historicoSelectedGroups
      };
      let arr = map[listName] || [];
      if(checked){
        if(!arr.includes(groupName)) arr.push(groupName);
      } else {
        arr = arr.filter(item => item !== groupName);
      }
      arr.sort((a,b) => a.localeCompare(b));
      if(listName === "dashboard") dashboardSelectedGroups = arr;
      if(listName === "watchlist") watchlistSelectedGroups = arr;
      if(listName === "historico") historicoSelectedGroups = arr;
      renderAtrizes();
render();
    }

    function renderGroupFilters(targetId, listName, selectedNames){
      const el = byId(targetId);
      if(!el) return;
      if(!studioGroups.length){
        el.innerHTML = '<div class="empty" style="width:100%;">Nenhum grupo criado ainda.</div>';
        return;
      }
      el.innerHTML = studioGroups.map(group => `
        <label class="group-filter-chip">
          <input type="checkbox" ${selectedNames.includes(group.name) ? "checked" : ""} onchange="toggleGroupSelection('${listName}', '${String(group.name).replace(/'/g, "\\'")}', this.checked)" />
          <span>${escapeHtml(group.name)}</span>
        </label>
      `).join("");
    }

    function getAllStudiosUnicos() {
      return [...new Set(
        [...videos, ...watchlist]
          .map(item => String(item.studio || "").trim())
          .filter(Boolean)
      )].sort((a, b) => a.localeCompare(b));
    }

    function saveStudioGroups(){
      writeJsonStorage(STORAGE_KEYS.studioGroups, studioGroups);
    }

    function renderStudioLibrary(){
      const el = byId("studioLibraryList");
      if(!el) return;
      const studios = getAllStudiosUnicos();
      if(!studios.length){
        el.innerHTML = '<div class="empty" style="width:100%;">Nenhum studio cadastrado ainda.</div>';
        return;
      }
      el.innerHTML = studios.map(studio => `<span class="library-chip">${escapeHtml(studio)}</span>`).join("");
    }

    function addStudioGroup(){
      const input = byId("newStudioGroupName");
      if(!input) return;
      const nome = String(input.value || "").trim().replace(/\s+/g, " ");
      if(!nome){
        alert("Digite um nome para o grupo.");
        return;
      }
      if(studioGroups.some(group => String(group.name || "").toLowerCase() === nome.toLowerCase())){
        alert("Já existe um grupo com esse nome.");
        return;
      }
      studioGroups.push({ name: nome, studios: [] });
      studioGroups.sort((a,b) => a.name.localeCompare(b.name));
      saveStudioGroups();
      input.value = "";
      renderStudioGroups();
    }

    function removeStudioGroup(name){
      studioGroups = studioGroups.filter(group => String(group.name || "").toLowerCase() !== String(name || "").toLowerCase());
      saveStudioGroups();
      renderStudioGroups();
    }

    function toggleStudioInGroup(groupName, studioName, checked){
      studioGroups = studioGroups.map(group => {
        if(String(group.name || "").toLowerCase() !== String(groupName || "").toLowerCase()){
          return group;
        }
        const current = Array.isArray(group.studios) ? group.studios : [];
        let next = current.slice();
        const exists = next.some(item => item.toLowerCase() == String(studioName || "").toLowerCase());
        if(checked && !exists){
          next.push(studioName);
        } else if(!checked){
          next = next.filter(item => item.toLowerCase() !== String(studioName || "").toLowerCase());
        }
        next.sort((a,b) => a.localeCompare(b));
        return { ...group, studios: next };
      });
      saveStudioGroups();
      renderStudioGroups();
    }

    function resetStudioGroups(){
      if(!studioGroups.length) return;
      if(!confirm("Deseja remover todos os grupos de studios?")) return;
      studioGroups = [];
      saveStudioGroups();
      renderStudioGroups();
    }


    function saveCollapsedStudioGroups(){
      writeJsonStorage(STORAGE_KEYS.collapsedStudioGroups, collapsedStudioGroups);
    }

    function toggleStudioGroupCollapse(name){
      const key = String(name || "");
      if(collapsedStudioGroups.includes(key)){
        collapsedStudioGroups = collapsedStudioGroups.filter(item => item !== key);
      } else {
        collapsedStudioGroups.push(key);
        collapsedStudioGroups.sort((a,b) => a.localeCompare(b));
      }
      saveCollapsedStudioGroups();
      renderStudioGroups();
    }

    function renderStudioGroups(){
      const el = byId("studioGroupsList");
      if(!el) return;

      if(!studioGroups.length){
        el.innerHTML = '<div class="empty" style="width:100%;">Nenhum grupo de studios criado ainda.</div>';
        return;
      }

      const studios = getAllStudiosUnicos();
      el.innerHTML = studioGroups.map(group => {
        const selected = Array.isArray(group.studios) ? group.studios : [];
        const checkboxes = studios.length
          ? studios.map(studio => `
              <label>
                <input type="checkbox" ${selected.some(item => item.toLowerCase() === studio.toLowerCase()) ? "checked" : ""} onchange="toggleStudioInGroup('${String(group.name).replace(/'/g, "\\'")}', '${String(studio).replace(/'/g, "\\'")}', this.checked)" />
                <span>${escapeHtml(studio)}</span>
              </label>
            `).join("")
          : '<div class="empty" style="width:100%;">Cadastre studios em vídeos ou watchlist para começar.</div>';

        const isCollapsed = collapsedStudioGroups.includes(group.name);

        return `
          <div class="studio-group-card">
            <h4>
              <span>${escapeHtml(group.name)}</span>
              <div class="studio-group-actions">
                <button class="btn-secondary studio-group-toggle" type="button" onclick="toggleStudioGroupCollapse('${String(group.name).replace(/'/g, "\\'")}')">${isCollapsed ? "Editar" : "Minimizar"}</button>
                <button class="btn-secondary" type="button" onclick="removeStudioGroup('${String(group.name).replace(/'/g, "\\'")}')">Remover</button>
              </div>
            </h4>
            <div class="studio-group-meta">${selected.length} studio(s) no grupo</div>
            <div class="studio-group-body ${isCollapsed ? "hidden" : ""}">
              <div class="studio-checklist">${checkboxes}</div>
            </div>
          </div>
        `;
      }).join("");
    }

    function saveTagCatalog(){
      writeJsonStorage(STORAGE_KEYS.tagCatalog, tagCatalog);
    }

    function normalizeLibraryTag(tag){
      const clean = String(tag || "").trim().replace(/\s+/g, " ");
      if(!clean) return "";
      return clean
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    }

    function renderTagLibrary(){
      const el = byId("tagLibraryList");
      if(!el) return;
      const sorted = [...tagCatalog].sort((a,b) => a.localeCompare(b));
      el.innerHTML = sorted.map(tag => `
        <span class="tag-library-chip">
          ${tag}
          <button type="button" onclick="removeLibraryTag('${tag.replace(/'/g, "\\'")}')">×</button>
        </span>
      `).join("");
      fillTagSuggestions();
    }

    function addLibraryTag(){
      const input = byId("newLibraryTag");
      if(!input) return;
      const tag = normalizeLibraryTag(input.value);
      if(!tag){
        alert("Digite uma tag válida.");
        return;
      }
      if(tagCatalog.some(item => item.toLowerCase() === tag.toLowerCase())){
        input.value = "";
        return;
      }
      tagCatalog.push(tag);
      tagCatalog.sort((a,b) => a.localeCompare(b));
      saveTagCatalog();
      renderTagLibrary();
      input.value = "";
    }

    function removeLibraryTag(tag){
      if(!tagCatalog.some(item => item.toLowerCase() === String(tag).toLowerCase())) return;
      tagCatalog = tagCatalog.filter(item => item.toLowerCase() !== String(tag).toLowerCase());
      selectedTags = selectedTags.filter(item => item.toLowerCase() !== String(tag).toLowerCase());
      saveTagCatalog();
      renderSelectedTags();
      renderTagLibrary();
      renderAtrizes();
render();
    }

    function resetLibraryTags(){
      tagCatalog = [...defaultTagCatalog];
      saveTagCatalog();
      selectedTags = selectedTags.filter(tag => tagCatalog.some(item => item.toLowerCase() === tag.toLowerCase()));
      renderSelectedTags();
      renderTagLibrary();
      renderAtrizes();
render();
    }

    function normalizeTagName(tag){
      const clean = String(tag || "").trim().replace(/\s+/g, " ");
      if(!clean) return "";
      const found = tagCatalog.find(item => item.toLowerCase() === clean.toLowerCase());
      return found || "";
    }

    function syncTagsField(){
      if(byId("tags")){
        byId("tags").value = selectedTags.join(", ");
      }
    }

    function renderSelectedTags(){
      const el = byId("selectedTags");
      if(!el) return;
      if(!selectedTags.length){
        el.innerHTML = "";
        syncTagsField();
        return;
      }
      el.innerHTML = selectedTags.map((tag, index) => `
        <span class="selected-tag-chip">
          ${tag}
          <button type="button" onclick="removeSelectedTag(${index})">×</button>
        </span>
      `).join("");
      syncTagsField();
    }

    function addSelectedTag(rawTag){
      const tag = normalizeTagName(rawTag);
      if(!tag){
        alert("Selecione uma tag válida da lista padronizada.");
        return;
      }
      if(selectedTags.some(item => item.toLowerCase() === tag.toLowerCase())){
        byId("tagInput").value = "";
        return;
      }
      selectedTags.push(tag);
      selectedTags.sort((a,b) => a.localeCompare(b));
      byId("tagInput").value = "";
      renderSelectedTags();
    }

    function removeSelectedTag(index){
      selectedTags.splice(index, 1);
      renderSelectedTags();
    }

    function setSelectedTagsFromString(value){
      selectedTags = String(value || "")
        .split(",")
        .map(item => normalizeTagName(item))
        .filter(Boolean);

      selectedTags = [...new Set(selectedTags.map(item => item.toLowerCase()))]
        .map(lower => tagCatalog.find(item => item.toLowerCase() === lower))
        .filter(Boolean)
        .sort((a,b) => a.localeCompare(b));

      renderSelectedTags();
    }

    function fillTagSuggestions(){
      preencherDatalist("sugestoesTagsCadastro", tagCatalog);
    }


    function titleCaseFromSlug(value){
      return String(value || "")
        .replace(/\.[a-z0-9]{2,5}$/i, "")
        .replace(/[-_+.]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean)
        .map(word => {
          const clean = word.trim();
          if(!clean) return "";
          if(/^[A-Z0-9]{2,}$/.test(clean)) return clean;
          return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
        })
        .join(" ");
    }

    function getCleanHostName(hostname){
      const parts = String(hostname || "")
        .toLowerCase()
        .replace(/^www\./, "")
        .replace(/^m\./, "")
        .split(".")
        .filter(Boolean);
      if(!parts.length) return "";
      const twoPartTlds = ["com.br", "net.br", "org.br", "co.uk", "com.au"];
      const host = parts.join(".");
      let base = parts.length >= 2 ? parts[parts.length - 2] : parts[0];
      if(twoPartTlds.some(tld => host.endsWith(tld)) && parts.length >= 3){
        base = parts[parts.length - 3];
      }
      return titleCaseFromSlug(base);
    }

    function extractCandidateFromQuery(params, keys){
      for(const key of keys){
        const value = params.get(key);
        if(value && value.trim()) return titleCaseFromSlug(value);
      }
      return "";
    }

    function extractMetadataFromLink(rawLink){
      const normalized = normalizeUrl(String(rawLink || "").trim());
      if(!normalized) return { nome:"", studio:"", atrizes:"" };

      try{
        const url = new URL(normalized);
        const params = url.searchParams;
        const segments = url.pathname
          .split("/")
          .map(segment => decodeURIComponent(segment || "").trim())
          .filter(Boolean)
          .filter(segment => !/^\d+$/.test(segment));

        const metadata = {
          nome: extractCandidateFromQuery(params, ["title", "nome", "name", "video", "v"]),
          studio: extractCandidateFromQuery(params, ["studio", "site", "channel"]),
          atrizes: extractCandidateFromQuery(params, ["atriz", "atrizes", "actress", "actor", "actors", "model", "models", "performer", "performers", "star", "stars"])
        };

        if(!metadata.studio){
          const studioMarkers = ["studio", "studios", "channel", "channels"];
          for(const marker of studioMarkers){
            const idx = segments.findIndex(segment => segment.toLowerCase() === marker);
            if(idx >= 0 && segments[idx + 1]){
              metadata.studio = titleCaseFromSlug(segments[idx + 1]);
              break;
            }
          }
        }

        if(!metadata.atrizes){
          const personMarkers = ["model", "models", "actress", "actresses", "actor", "actors", "performer", "performers", "star", "stars"];
          for(const marker of personMarkers){
            const idx = segments.findIndex(segment => segment.toLowerCase() === marker);
            if(idx >= 0 && segments[idx + 1]){
              metadata.atrizes = titleCaseFromSlug(segments[idx + 1]);
              break;
            }
          }
        }

        if(!metadata.nome){
          const ignored = new Set(["video", "videos", "watch", "scene", "scenes", "movie", "movies", "embed", "view", "models", "model", "actress", "actresses", "actor", "actors", "performer", "performers", "studio", "studios", "channel", "channels"]);
          const titleSegment = [...segments].reverse().find(segment => {
            const clean = segment.toLowerCase();
            return clean && !ignored.has(clean) && !/^\d+$/.test(clean);
          });
          metadata.nome = titleCaseFromSlug(titleSegment || "");
        }

        if(!metadata.studio){
          metadata.studio = getCleanHostName(url.hostname);
        }

        return metadata;
      } catch(err){
        const fallback = titleCaseFromSlug(String(rawLink || "").split("/").filter(Boolean).pop() || "");
        return { nome: fallback, studio: "", atrizes: "" };
      }
    }

    function fillEmptyField(id, value, force = false){
      const el = byId(id);
      if(!el || !value) return false;
      if(force || !String(el.value || "").trim()){
        el.value = value;
        return true;
      }
      return false;
    }

    function preencherCamposPorLink(tipo = "historico", force = false){
      const isWatch = tipo === "watchlist";
      const linkId = isWatch ? "watchLink" : "link";
      const linkValue = byId(linkId)?.value || "";
      const meta = extractMetadataFromLink(linkValue);

      let changed = false;
      if(isWatch){
        changed = fillEmptyField("watchNome", meta.nome, force) || changed;
        changed = fillEmptyField("watchStudio", meta.studio, force) || changed;
        changed = fillEmptyField("watchAtrizes", meta.atrizes, force) || changed;
        updateWatchFormStatus();
      } else {
        changed = fillEmptyField("nome", meta.nome, force) || changed;
        changed = fillEmptyField("studio", meta.studio, force) || changed;
        changed = fillEmptyField("atriz", meta.atrizes, force) || changed;
      }
      return changed;
    }

    function getForm(){
      return {
        nome: byId("nome").value.trim(),
        studio: expandSingleStudioFromGroup(byId("studio").value.trim()),
        atriz: byId("atriz").value.trim(),
        tags: byId("tags") ? byId("tags").value.trim() : "",
        link: byId("link").value.trim(),
        producao: Number(byId("producao").value) || 0,
        performance: Number(byId("performance").value) || 0,
        roteiro: Number(byId("roteiro").value) || 0,
        estetica: Number(byId("estetica").value) || 0,
        tema: Number(byId("tema").value) || 0,
        reassist: Number(byId("reassist").value) || 0,
        casting: Number(byId("casting").value) || 0,
        sexo: Number(byId("sexo").value) || 0,
      };
    }

    function setForm(v){
      byId("nome").value = v.nome || "";
      byId("studio").value = v.studio || "";
      byId("atriz").value = v.atriz || "";
      if(typeof window.atualizarAtrizesVisual === "function"){
        window.atualizarAtrizesVisual();
      }
      const atrizManualInput = byId("atrizInputManual");
      if(atrizManualInput) atrizManualInput.value = "";
      setSelectedTagsFromString(v.tags || "");
      byId("link").value = v.link || "";
      byId("producao").value = v.producao ?? 0;
      byId("performance").value = v.performance ?? 0;
      byId("roteiro").value = v.roteiro ?? 0;
      byId("estetica").value = v.estetica ?? 0;
      byId("tema").value = v.tema ?? 0;
      byId("reassist").value = v.reassist ?? 0;
      byId("casting").value = v.casting ?? 0;
      byId("sexo").value = v.sexo ?? 0;
      updateNotaPreview();
    }

    function clearForm(){
      editingIndex = null;
      byId("saveBtn").textContent = "Adicionar";
      setForm({
        nome:"", studio:"", atriz:"", tags:"", link:"",
        producao:0, performance:0, roteiro:0, estetica:0, tema:0, reassist:0, casting:0, sexo:0
      });
    }

    function calcularNota(v){
      const nota =
        v.producao * pesos.producao +
        v.performance * pesos.performance +
        v.roteiro * pesos.roteiro +
        v.estetica * pesos.estetica +
        v.tema * pesos.tema +
        v.reassist * pesos.reassist +
        v.casting * pesos.casting +
        v.sexo * pesos.sexo;
      return nota.toFixed(2);
    }

    function calcularNotaAtriz(v){
      const performance = Number(v.performance || 0);
      const tema = Number(v.tema || 0);
      const reassist = Number(v.reassist || 0);
      const casting = Number(v.casting || 0);
      const sexo = Number(v.sexo || 0);

      const notaAtriz =
        performance * 0.20 +
        tema * 0.25 +
        reassist * 0.15 +
        casting * 0.20 +
        sexo * 0.20;

      return Number(notaAtriz.toFixed(2));
    }


    function getNotaClasse(nota){
      const n = Number(nota || 0);
      if(n < 5) return "note-low";
      if(n < 7) return "note-mid";
      if(n < 8.5) return "note-good";
      return "note-top";
    }

    function updateNotaPreview(){
      const f = getForm();
      const nota = calcularNota(f);
      const el = byId("notaPreview");
      const detalhe = byId("notaPreviewDetalhe");
      if(el) el.textContent = nota;
      if(detalhe){
        detalhe.textContent = "Cenas de Sexo 25% • Performance 10% • Casting 10% • Tema 15% • Produção 15% • Estética 5% • Roteiro 5% • Reassistibilidade 15%";
      }
    }

    function addOrUpdate(){
      preencherCamposPorLink("historico");
      const f = getForm();
      if(!f.nome){
        alert("Não consegui identificar automaticamente o nome do vídeo. Preencha o nome manualmente ou use um link com título na URL.");
        return;
      }

      const duplicateIndex = findDuplicateByLink(videos, f.link, editingIndex);
      if(duplicateIndex !== -1){
        alert(buildDuplicateMessage("historico", videos[duplicateIndex]));
        return;
      }

      const video = {
        nome: capitalize(f.nome),
        studio: capitalize(f.studio),
        atriz: String(f.atriz)
          .split(",")
          .map(n => capitalize(n.trim()))
          .filter(Boolean)
          .join(", "),
        tags: String(f.tags || "")
          .split(",")
          .map(n => normalizeTagName(n))
          .filter(Boolean)
          .join(", "),
        link: normalizeUrl(f.link),
        producao: f.producao,
        performance: f.performance,
        roteiro: f.roteiro,
        estetica: f.estetica,
        tema: f.tema,
        reassist: f.reassist,
        casting: f.casting,
        sexo: f.sexo,
        nota: calcularNota(f),
        favorito: editingIndex !== null ? !!videos[editingIndex].favorito : false
      };

      if(editingIndex !== null){
        videos[editingIndex] = video;
      } else {
        videos.push(video);
      }

      saveStorage();
      clearForm();
    renderAtrizes();
render();
    }

    function toggleFavorito(index){
      videos[index].favorito = !videos[index].favorito;
      saveStorage();
    renderAtrizes();
render();
    }

    function editVideo(index){
      const item = videos[index];
      if(!item) return;
      editingIndex = index;
      setForm(item);
      byId("saveBtn").textContent = "Atualizar";

      showMainSection("cadastro");

      const sec = byId("secCadastro");
      if(sec && sec.classList.contains("hidden")){
        toggleSection("secCadastro");
      }

      const container = byId("section-cadastro");
      if(container){
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function deleteVideo(index){
      if(!confirm("Deseja excluir este vídeo?")) return;
      videos.splice(index, 1);
      saveStorage();
      if(editingIndex === index) clearForm();
    renderAtrizes();
render();
    }

    function exportBackup(){
      const backupData = {
        versao: 3,
        exportadoEm: new Date().toISOString(),
        videos,
        watchlist,
        atrizLibrary,
        tagCatalog,
        studioGroups,
        collapsedStudioGroups
      };
      const blob = new Blob([JSON.stringify(backupData, null, 2)], {type:"application/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "backup_meu_imdb_pessoal_completo.json";
      a.click();
      URL.revokeObjectURL(url);
    }

    function importBackup(file){
      const reader = new FileReader();
      reader.onload = async function(e){
        try{
          const data = JSON.parse(e.target.result);

          if(Array.isArray(data)){
            videos = data;
            watchlist = [];
            atrizLibrary = [];
            tagCatalog = [...defaultTagCatalog];
            studioGroups = [];
            collapsedStudioGroups = [];
          } else if(data && typeof data === "object"){
            if(!Array.isArray(data.videos)) throw new Error("Formato inválido.");
            videos = Array.isArray(data.videos) ? data.videos : [];
            watchlist = Array.isArray(data.watchlist) ? data.watchlist : [];

            atrizLibrary = Array.isArray(data.atrizLibrary)
              ? data.atrizLibrary.map(item => ({
                  nome: String(item.nome || "").trim(),
                  imageId: item.imageId || (item.img ? normalizeImageId(item.nome) : ""),
                  img: item.img || "",
                  dataNascimento: item.dataNascimento || "",
                  localNascimento: item.localNascimento || "",
                  favorita: !!item.favorita
                })).filter(item => item.nome)
              : [];

            tagCatalog = Array.isArray(data.tagCatalog) && data.tagCatalog.length
              ? [...new Set(data.tagCatalog.map(item => normalizeLibraryTag(item)).filter(Boolean))].sort((a,b) => a.localeCompare(b))
              : [...defaultTagCatalog];

            studioGroups = Array.isArray(data.studioGroups)
              ? data.studioGroups
                  .map(group => ({
                    name: String(group.name || "").trim(),
                    studios: Array.isArray(group.studios)
                      ? [...new Set(group.studios.map(item => String(item || "").trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b))
                      : []
                  }))
                  .filter(group => group.name)
                  .sort((a,b) => a.name.localeCompare(b.name))
              : [];

            collapsedStudioGroups = Array.isArray(data.collapsedStudioGroups)
              ? [...new Set(data.collapsedStudioGroups.map(item => String(item || "").trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b))
              : [];
          } else {
            throw new Error("Formato inválido.");
          }

          for(const atriz of atrizLibrary){
            if(atriz.img){
              atriz.imageId = atriz.imageId || normalizeImageId(atriz.nome);
              try{
                await saveImageToIndexedDb(atriz.imageId, atriz.img);
              } catch(imageError){
                console.warn("Não foi possível salvar uma imagem do backup no IndexedDB.", imageError);
              }
            }
          }

          await hydrateAtrizImagesFromIndexedDb();

          localStorage.setItem("meu_imdb_videos", JSON.stringify(videos));
          localStorage.setItem("meu_imdb_watchlist", JSON.stringify(watchlist));
          saveAtrizes();
          writeJsonStorage(STORAGE_KEYS.tagCatalog, tagCatalog);
          writeJsonStorage(STORAGE_KEYS.studioGroups, studioGroups);
          writeJsonStorage(STORAGE_KEYS.collapsedStudioGroups, collapsedStudioGroups);

          renderTagLibrary();
          renderStudioGroups();
          renderStudioLibrary();
          renderAtrizes();
          render();
          alert("Backup importado com sucesso.");
        } catch(err){
          alert("Não foi possível importar o backup.");
        }
      };
      reader.readAsText(file);
    }

    function weightedRanking(baseVideos, extractor, scoreFn = (v) => Number(v.nota || 0)){
      const stats = {};
      const m = 5;
      baseVideos.forEach(v => {
        const score = Number(scoreFn(v) || 0);
        extractor(v).forEach(key => {
          if(!key) return;
          if(!stats[key]) stats[key] = { total:0, count:0 };
          stats[key].total += score;
          stats[key].count += 1;
        });
      });
      return Object.entries(stats)
        .map(([name, s]) => {
          const media = s.total / s.count;
          const ponderado = (s.count / (s.count + m)) * media;
          return { name, media, quantidade:s.count, score:ponderado };
        })
        .sort((a,b) => b.score - a.score)
        .slice(0, 10);
    }

    function renderBars(targetId, data, label){
      const el = byId(targetId);
      if(!data.length){
        el.innerHTML = '<div class="empty">Nenhum resultado para os filtros atuais.</div>';
        return;
      }
      el.innerHTML = data.map(item => `
        <div class="bar-row">
          <div>
            <div><strong>${escapeHtml(item.name)}</strong></div>
            <div class="small muted">Média: ${item.media.toFixed(2)} | Vídeos: ${item.quantidade}</div>
          </div>
          <div class="bar-wrap"><div class="bar" style="width:${Math.max(3, item.score * 10)}%"></div></div>
          <div><strong>${item.score.toFixed(2)}</strong></div>
        </div>
      `).join("");
    }


    function renderHistograma(targetId, baseVideos){
      const el = byId(targetId);
      if(!el) return;

      if(!baseVideos.length){
        el.innerHTML = '<div class="empty">Nenhum vídeo para exibir no histograma com os filtros atuais.</div>';
        return;
      }

      const faixas = [
        { label: "0.00 – 4.99", className: "low", min: 0, max: 5 },
        { label: "5.00 – 6.99", className: "mid", min: 5, max: 7 },
        { label: "7.00 – 8.49", className: "good", min: 7, max: 8.5 },
        { label: "8.50 – 10.00", className: "top", min: 8.5, max: 10.0001 }
      ];

      const contagens = faixas.map(faixa => {
        const total = baseVideos.filter(v => {
          const nota = Number(v.nota || 0);
          return nota >= faixa.min && nota < faixa.max;
        }).length;
        return { ...faixa, total };
      });

      const maxCount = Math.max(...contagens.map(item => item.total), 1);

      el.innerHTML = `
        <div class="histogram">
          ${contagens.map(item => `
            <div class="histogram-card ${item.className}">
              <div class="histogram-bar-wrap">
                <div class="histogram-bar" style="height:${Math.max(8, (item.total / maxCount) * 150)}px"></div>
              </div>
              <div class="histogram-value">${item.total}</div>
              <div class="histogram-label">${item.label}</div>
              <div class="histogram-caption">${item.total === 1 ? "vídeo" : "vídeos"}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    function getStudiosUnicos() {
      return [...new Set(
        videos
          .map(v => String(v.studio || "").trim())
          .filter(Boolean)
      )].sort((a, b) => a.localeCompare(b));
    }

    function getAtrizesUnicas() {
      return [...new Set(
        videos.flatMap(v =>
          String(v.atriz || "")
            .split(",")
            .map(x => x.trim())
            .filter(Boolean)
        )
      )].sort((a, b) => a.localeCompare(b));
    }

    function getTagsUnicas() {
      return [...new Set(
        videos.flatMap(v =>
          String(v.tags || "")
            .split(",")
            .map(x => x.trim())
            .filter(Boolean)
        )
      )].sort((a, b) => a.localeCompare(b));
    }

    function getSugestoesHistorico() {
      const studios = getStudiosUnicos();
      const atrizes = getAtrizesUnicas();
      const tags = getTagsUnicas();
      const nomesVideos = [...new Set(
        videos
          .map(v => String(v.nome || "").trim())
          .filter(Boolean)
      )].sort((a, b) => a.localeCompare(b));

      return [...new Set([...nomesVideos, ...studios, ...atrizes, ...tags])].sort((a, b) => a.localeCompare(b));
    }

    function preencherDatalist(id, itens) {
      const el = byId(id);
      if (!el) return;
      el.innerHTML = itens.map(item => `<option value="${escapeAttr(item)}"></option>`).join("");
    }

    function atualizarSugestoes() {
      const studiosMaisGrupos = [...new Set([...getStudiosUnicos(), ...getAllGroupNamesUnicos()])].sort((a, b) => a.localeCompare(b));
      const studiosWatchlistMaisGrupos = [...new Set([...getWatchStudiosUnicos(), ...getAllGroupNamesUnicos()])].sort((a, b) => a.localeCompare(b));
      preencherDatalist("sugestoesStudiosDashboard", studiosMaisGrupos);
      preencherDatalist("sugestoesStudiosCadastro", studiosMaisGrupos);
      preencherDatalist("sugestoesStudiosCadastroWatchlist", studiosWatchlistMaisGrupos);
      preencherDatalist("sugestoesStudiosFiltroWatchlist", studiosWatchlistMaisGrupos);
      preencherDatalist("sugestoesAtrizesDashboard", getAtrizesUnicas());
      preencherDatalist("sugestoesHistorico", getSugestoesHistorico());
      preencherDatalist("sugestoesTagsHistorico", getTagsUnicas());
      fillTagSuggestions();
    }




    function getAtrizesSistemaUnicas(){
      const doHistorico = videos.flatMap(v =>
        String(v.atriz || "")
          .split(",")
          .map(x => x.trim())
          .filter(Boolean)
      );
      const cadastradas = atrizLibrary.map(a => String(a.nome || "").trim()).filter(Boolean);
      return [...new Set([...doHistorico, ...cadastradas])].sort((a, b) => a.localeCompare(b));
    }

    function getMediaAtrizPorNome(nomeAtriz){
      const nomeAlvo = String(nomeAtriz || "").trim().toLowerCase();
      if(!nomeAlvo) return null;

      const relacionados = videos.filter(v =>
        String(v.atriz || "")
          .split(",")
          .map(x => x.trim().toLowerCase())
          .includes(nomeAlvo)
      );

      if(!relacionados.length) return null;

      const stats = { total: 0, count: 0 };
      const m = 5;
      relacionados.forEach(v => {
        stats.total += Number(calcularNotaAtriz(v) || 0);
        stats.count += 1;
      });
      const media = stats.total / stats.count;
      const ponderado = (stats.count / (stats.count + m)) * media;
      return Number(ponderado.toFixed(2));
    }


    function getAtrizCropElements(){
      return {
        stage: byId("atrizCropStage"),
        image: byId("atrizCropImage"),
        zoomInput: byId("atrizCropZoom"),
        zoomValue: byId("atrizCropZoomValue")
      };
    }

    function updateAtrizCropZoomLabel(){
      const { zoomValue } = getAtrizCropElements();
      if(!zoomValue) return;
      zoomValue.textContent = `${Math.round((Number(atrizCropState.zoom || 1)) * 100)}%`;
    }

    function applyAtrizCropZoom(nextZoom, preserveCenter = true){
      const { stage } = getAtrizCropElements();
      if(!stage || !atrizCropState.src) return;

      const prevWidth = atrizCropState.displayWidth || (atrizCropState.naturalWidth * atrizCropState.baseScale * atrizCropState.zoom);
      const prevHeight = atrizCropState.displayHeight || (atrizCropState.naturalHeight * atrizCropState.baseScale * atrizCropState.zoom);
      const centerX = (stage.clientWidth || 220) / 2;
      const centerY = (stage.clientHeight || 220) / 2;

      let imageRatioX = 0.5;
      let imageRatioY = 0.5;

      if(preserveCenter && prevWidth > 0 && prevHeight > 0){
        imageRatioX = (centerX - atrizCropState.x) / prevWidth;
        imageRatioY = (centerY - atrizCropState.y) / prevHeight;
      }

      atrizCropState.zoom = Math.min(3, Math.max(1, Number(nextZoom) || 1));
      atrizCropState.displayWidth = atrizCropState.naturalWidth * atrizCropState.baseScale * atrizCropState.zoom;
      atrizCropState.displayHeight = atrizCropState.naturalHeight * atrizCropState.baseScale * atrizCropState.zoom;

      if(preserveCenter){
        atrizCropState.x = centerX - (imageRatioX * atrizCropState.displayWidth);
        atrizCropState.y = centerY - (imageRatioY * atrizCropState.displayHeight);
      } else {
        atrizCropState.x = (stage.clientWidth - atrizCropState.displayWidth) / 2;
        atrizCropState.y = (stage.clientHeight - atrizCropState.displayHeight) / 2;
      }

      clampAtrizCropPosition();
      renderAtrizCrop();
      updateAtrizCropZoomLabel();
    }

    function clampAtrizCropPosition(){
      const { stage } = getAtrizCropElements();
      if(!stage) return;
      const minX = Math.min(0, stage.clientWidth - atrizCropState.displayWidth);
      const minY = Math.min(0, stage.clientHeight - atrizCropState.displayHeight);
      atrizCropState.x = Math.min(0, Math.max(minX, atrizCropState.x));
      atrizCropState.y = Math.min(0, Math.max(minY, atrizCropState.y));
    }

    function renderAtrizCrop(){
      const { image } = getAtrizCropElements();
      if(!image) return;
      if(!atrizCropState.src){
        image.style.display = "none";
        image.removeAttribute("src");
        updateAtrizCropZoomLabel();
        return;
      }
      image.style.display = "block";
      image.src = atrizCropState.src;
      image.style.width = `${atrizCropState.displayWidth}px`;
      image.style.height = `${atrizCropState.displayHeight}px`;
      image.style.transform = `translate(${atrizCropState.x}px, ${atrizCropState.y}px)`;
      updateAtrizCropZoomLabel();
    }

    function loadAtrizCropSource(src){
      const { stage, zoomInput } = getAtrizCropElements();
      if(!stage) return;
      if(!src){
        atrizCropState.src = "";
        atrizCropState.naturalWidth = 0;
        atrizCropState.naturalHeight = 0;
        atrizCropState.baseScale = 1;
        atrizCropState.zoom = 1;
        atrizCropState.displayWidth = 0;
        atrizCropState.displayHeight = 0;
        atrizCropState.x = 0;
        atrizCropState.y = 0;
        if(zoomInput) zoomInput.value = "1";
        renderAtrizCrop();
        return;
      }

      const img = new Image();
      img.onload = function(){
        atrizCropState.src = src;
        atrizCropState.naturalWidth = img.naturalWidth;
        atrizCropState.naturalHeight = img.naturalHeight;

        const stageSize = stage.clientWidth || 220;
        atrizCropState.baseScale = Math.max(stageSize / img.naturalWidth, stageSize / img.naturalHeight);
        atrizCropState.zoom = 1;
        if(zoomInput) zoomInput.value = "1";
        applyAtrizCropZoom(1, false);
      };
      img.src = src;
    }

    function getAtrizCroppedImageData(){
      if(!atrizCropState.src) return "";
      const { stage } = getAtrizCropElements();
      if(!stage) return atrizCropState.src;

      const canvas = document.createElement("canvas");
      const size = 300;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = atrizCropState.src;

      const scaleX = atrizCropState.naturalWidth / atrizCropState.displayWidth;
      const scaleY = atrizCropState.naturalHeight / atrizCropState.displayHeight;
      const sx = Math.max(0, -atrizCropState.x * scaleX);
      const sy = Math.max(0, -atrizCropState.y * scaleY);
      const sw = Math.min(atrizCropState.naturalWidth - sx, stage.clientWidth * scaleX);
      const sh = Math.min(atrizCropState.naturalHeight - sy, stage.clientHeight * scaleY);

      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);
      return canvas.toDataURL("image/jpeg", 0.92);
    }

    function getAtrizCadastro(nomeAtriz){
      return atrizLibrary.find(a => String(a.nome || "").trim().toLowerCase() === String(nomeAtriz || "").trim().toLowerCase()) || null;
    }

    function getAtrizVideoCounts(nomeAtriz){
      const nomeAlvo = String(nomeAtriz || "").trim().toLowerCase();
      if(!nomeAlvo){
        return { historico: 0, watchlist: 0, total: 0 };
      }

      const historico = videos.filter(v =>
        String(v.atriz || "")
          .split(",")
          .map(x => x.trim().toLowerCase())
          .includes(nomeAlvo)
      ).length;

      const listaFutura = watchlist.filter(v =>
        String(v.atrizes || "")
          .split(",")
          .map(x => x.trim().toLowerCase())
          .includes(nomeAlvo)
      ).length;

      return {
        historico,
        watchlist: listaFutura,
        total: historico + listaFutura
      };
    }

    function openAtrizModal(nomeAtriz){
      atrizModalAtual = String(nomeAtriz || "").trim();
      const modal = byId("atrizModal");
      const nomeInput = byId("atrizModalNome");
      const preview = byId("atrizModalPreview");
      const cadastro = getAtrizCadastro(atrizModalAtual);
      const media = getMediaAtrizPorNome(atrizModalAtual);
      const counts = getAtrizVideoCounts(atrizModalAtual);

      if(nomeInput) nomeInput.value = atrizModalAtual;
      if(byId("atrizModalDataNascimento")) byId("atrizModalDataNascimento").value = cadastro?.dataNascimento || "";
      if(byId("atrizModalLocalNascimento")) byId("atrizModalLocalNascimento").value = cadastro?.localNascimento || "";
      if(byId("atrizModalFavorita")) byId("atrizModalFavorita").checked = !!cadastro?.favorita;
      if(preview){
        const avatarHtml = cadastro && cadastro.img
          ? `<img src="${escapeAttr(cadastro.img)}" alt="${escapeAttr(atrizModalAtual)}">`
          : `<div class="avatar-fallback">${atrizModalAtual.charAt(0).toUpperCase()}</div>`;

        preview.innerHTML = `
          ${avatarHtml}
          <div style="min-width:0;flex:1 1 auto;">
            <div style="font-weight:800;line-height:1.2;">${escapeHtml(atrizModalAtual)}</div>
            ${cadastro?.favorita ? `<div class="atriz-fav-badge">★ Favorita</div>` : ""}
            <div class="small muted" style="margin-top:4px;">Nota média (Top Atrizes): <strong>${media !== null ? media.toFixed(2) : "—"}</strong></div>
            <div class="atriz-stats-grid">
              <div class="atriz-stat-card stat-historico">
                <div class="atriz-stat-number">${counts.historico}</div>
                <div class="atriz-stat-label">Histórico</div>
              </div>
              <div class="atriz-stat-card stat-watchlist">
                <div class="atriz-stat-number">${counts.watchlist}</div>
                <div class="atriz-stat-label">Lista futura</div>
              </div>
              <div class="atriz-stat-card stat-total">
                <div class="atriz-stat-number">${counts.total}</div>
                <div class="atriz-stat-label">Total</div>
              </div>
            </div>
          </div>
        `;
      }
      if(byId("atrizModalFotoInput")) byId("atrizModalFotoInput").value = "";
      loadAtrizCropSource(cadastro?.img || "");
      if(modal) modal.classList.add("active");
    }

    function closeAtrizModal(){
      atrizModalAtual = "";
      const modal = byId("atrizModal");
      if(modal) modal.classList.remove("active");
      if(byId("atrizModalFotoInput")) byId("atrizModalFotoInput").value = "";
      if(byId("atrizCropZoom")) byId("atrizCropZoom").value = "1";
      atrizCropState.dragging = false;
      updateAtrizCropZoomLabel();
    }

    async function saveAtrizFotoFromModal(){
      const nome = String(atrizModalAtual || "").trim();
      const dataNascimento = String(byId("atrizModalDataNascimento")?.value || "").trim();
      const localNascimento = String(byId("atrizModalLocalNascimento")?.value || "").trim();
      const favorita = !!byId("atrizModalFavorita")?.checked;
      if(!nome){
        alert("Nenhuma atriz selecionada.");
        return;
      }

      const cadastroAtual = getAtrizCadastro(nome);
      const imgCortada = getAtrizCroppedImageData();
      const imgFinal = imgCortada || cadastroAtual?.img || "";
      const imageId = cadastroAtual?.imageId || (imgFinal ? normalizeImageId(nome) : "");

      if(imgFinal && imageId){
        try{
          await saveImageToIndexedDb(imageId, imgFinal);
        } catch(error){
          console.error("Erro ao salvar imagem no IndexedDB", error);
          alert("Não foi possível salvar a imagem no IndexedDB deste navegador.");
          return;
        }
      }

      atrizLibrary = atrizLibrary.filter(a => String(a.nome || "").trim().toLowerCase() !== nome.toLowerCase());
      atrizLibrary.push({
        nome,
        imageId,
        img: imgFinal,
        dataNascimento,
        localNascimento,
        favorita
      });
      atrizLibrary.sort((a,b)=>a.nome.localeCompare(b.nome));
      saveAtrizes();
      renderAtrizes();
      if(atrizDetailAtual && atrizDetailAtual.toLowerCase() === nome.toLowerCase()) renderAtrizDetail(nome);
      openAtrizModal(nome);
    }

    async function removeAtrizFoto(){
      const nome = String(atrizModalAtual || "").trim();
      if(!nome) return;
      const existente = getAtrizCadastro(nome);
      if(existente?.imageId){
        try{ await deleteImageFromIndexedDb(existente.imageId); } catch(error){ console.warn("Não foi possível remover imagem do IndexedDB.", error); }
      }
      atrizLibrary = atrizLibrary.filter(a => String(a.nome || "").trim().toLowerCase() !== nome.toLowerCase());
      atrizLibrary.push({
        nome,
        imageId: "",
        img: "",
        dataNascimento: existente?.dataNascimento || "",
        localNascimento: existente?.localNascimento || "",
        favorita: !!existente?.favorita
      });
      atrizLibrary.sort((a,b)=>a.nome.localeCompare(b.nome));
      saveAtrizes();
      renderAtrizes();
      if(atrizDetailAtual && atrizDetailAtual.toLowerCase() === nome.toLowerCase()) renderAtrizDetail(nome);
      loadAtrizCropSource("");
      openAtrizModal(nome);
    }

    function renderAtrizes(){
      const el = byId("atrizList");
      if(!el) return;

      const busca = String(byId("atrizBuscaInput")?.value || "").trim().toLowerCase();
      const ordenacao = String(byId("atrizOrdenacao")?.value || "alfabeta_asc");
      const somenteFavoritas = !!byId("somenteFavoritasAtrizes")?.checked;

      const nomesSistema = getAtrizesSistemaUnicas();
      preencherDatalist("sugestoesAtrizesCadastroSistema", nomesSistema);

      let items = nomesSistema.map(nome => {
        const cadastro = atrizLibrary.find(a => String(a.nome || "").trim().toLowerCase() === nome.toLowerCase());
        const media = getMediaAtrizPorNome(nome);
        const counts = getAtrizVideoCounts(nome);
        return {
          nome,
          img: cadastro ? cadastro.img : "",
          media,
          counts,
          cadastrada: !!cadastro,
          favorita: !!cadastro?.favorita
        };
      });

      if(busca){
        items = items.filter(item => item.nome.toLowerCase().includes(busca));
      }

      if(somenteFavoritas){
        items = items.filter(item => item.favorita);
      }

      if(ordenacao === "alfabeta_asc"){
        items.sort((a,b) => a.nome.localeCompare(b.nome));
      } else if(ordenacao === "alfabeta_desc"){
        items.sort((a,b) => b.nome.localeCompare(a.nome));
      } else if(ordenacao === "nota_desc"){
        items.sort((a,b) => (b.media ?? -1) - (a.media ?? -1) || a.nome.localeCompare(b.nome));
      } else if(ordenacao === "nota_asc"){
        items.sort((a,b) => (a.media ?? 999) - (b.media ?? 999) || a.nome.localeCompare(b.nome));
      } else if(ordenacao === "favoritas_primeiro"){
        items.sort((a,b) => Number(b.favorita) - Number(a.favorita) || a.nome.localeCompare(b.nome));
      }

      if(!items.length){
        el.innerHTML = '<div class="empty">Nenhuma atriz encontrada com os filtros atuais.</div>';
        return;
      }

      el.innerHTML = items.map(a => `
        <div class="atriz-card ${a.favorita ? "favorita" : ""}" onclick='abrirPaginaAtriz(${jsString(a.nome)})'>
          ${a.img ? `<img src="${escapeAttr(a.img)}" alt="${escapeAttr(a.nome)}">` : `<div style="width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,.45);border:1px solid rgba(96,165,250,.20);font-weight:800;color:#dbeafe;">${escapeHtml(String(a.nome || "").charAt(0).toUpperCase())}</div>`}
          <div class="atriz-card-body">
            <div class="atriz-card-name">${escapeHtml(a.nome)}</div>
            ${a.favorita ? `<div class="atriz-fav-badge">★ Favorita</div>` : ""}
            <div class="atriz-card-meta">Nota média (Top Atrizes): <strong>${a.media !== null ? a.media.toFixed(2) : "—"}</strong></div>
            <div class="atriz-card-meta">Histórico: <strong>${a.counts.historico}</strong> • Watchlist: <strong>${a.counts.watchlist}</strong></div>
          </div>
          <div class="row" style="justify-content:flex-end;">
            <button class="btn-secondary" type="button" onclick='event.stopPropagation(); abrirPaginaAtriz(${jsString(a.nome)})'>Abrir Perfil</button>
            ${a.cadastrada ? `<button class="btn-secondary" type="button" onclick='event.stopPropagation(); removeAtriz(${jsString(a.nome)})'>×</button>` : ""}
          </div>
        </div>
      `).join("");
    }

    function getWatchStudiosUnicos() {
      return [...new Set(
        watchlist
          .map(v => String(v.studio || "").trim())
          .filter(Boolean)
      )].sort((a, b) => a.localeCompare(b));
    }

    function getWatchForm(){
      return {
        nome: byId("watchNome").value.trim(),
        studio: expandSingleStudioFromGroup(byId("watchStudio").value.trim()),
        atrizes: byId("watchAtrizes").value.trim(),
        prioridade: byId("watchPrioridade").value || "Média",
        link: byId("watchLink").value.trim()
      };
    }

    function setWatchForm(item){
      byId("watchNome").value = item.nome || "";
      byId("watchStudio").value = item.studio || "";
      byId("watchAtrizes").value = item.atrizes || "";
      byId("watchPrioridade").value = item.prioridade || "Média";
      byId("watchLink").value = item.link || "";
    }

    function clearWatchForm(){
      watchEditingIndex = null;
      byId("addWatchBtn").textContent = "Adicionar à Lista";
      setWatchForm({
        nome: "",
        studio: "",
        atrizes: "",
        prioridade: "Média",
        link: ""
      });
      updateWatchFormStatus();
    }

    function addToWatchlist(){
      preencherCamposPorLink("watchlist");
      const f = getWatchForm();
      if(!f.nome){
        alert("Não consegui identificar automaticamente o nome do vídeo. Preencha o nome manualmente ou use um link com título na URL.");
        return;
      }

      const duplicateIndex = findDuplicateByLink(watchlist, f.link, watchEditingIndex);
      if(duplicateIndex !== -1){
        alert(buildDuplicateMessage("watchlist", watchlist[duplicateIndex]));
        return;
      }

      const item = {
        nome: capitalize(f.nome),
        studio: capitalize(f.studio),
        atrizes: String(f.atrizes)
          .split(",")
          .map(n => capitalize(n.trim()))
          .filter(Boolean)
          .join(", "),
        prioridade: f.prioridade || "Média",
        link: normalizeUrl(f.link)
      };

      if(watchEditingIndex !== null){
        watchlist[watchEditingIndex] = item;
      } else {
        watchlist.push(item);
      }

      saveStorage();
      clearWatchForm();
      renderAtrizes();
render();
    }

    function editWatchItem(index){
      const item = watchlist[index];
      if(!item) return;
      watchEditingIndex = index;
      byId("addWatchBtn").textContent = "Atualizar Item";
      setWatchForm(item);
      updateWatchFormStatus();
      showMainSection("watchlist");
      const sec = byId("secWatchlist");
      if(sec && sec.classList.contains("hidden")){
        toggleSection("secWatchlist");
      }
      const container = sec ? sec.closest(".card") : null;
      if(container){
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function removeFromWatchlist(index){
      if(!confirm("Deseja remover este vídeo da lista futura?")) return;
      watchlist.splice(index, 1);
      if(watchEditingIndex === index){
        clearWatchForm();
      } else if(watchEditingIndex !== null && watchEditingIndex > index){
        watchEditingIndex -= 1;
      }
      saveStorage();
      renderAtrizes();
render();
    }

    function moveWatchToHistory(index){
      const item = watchlist[index];
      if(!item) return;

      const duplicateIndex = findDuplicateByLink(videos, item.link);
      if(duplicateIndex !== -1){
        alert(buildDuplicateMessage("historico", videos[duplicateIndex]));
        return;
      }

      if(watchEditingIndex === index){
        clearWatchForm();
      } else if(watchEditingIndex !== null && watchEditingIndex > index){
        watchEditingIndex -= 1;
      }

      setForm({
        nome: item.nome || "",
        studio: item.studio || "",
        atriz: item.atrizes || "",
        tags: item.tags || "",
        link: item.link || "",
        producao: 0,
        performance: 0,
        roteiro: 0,
        estetica: 0,
        tema: 0,
        reassist: 0,
        casting: 0,
        sexo: 0
      });

      watchlist.splice(index, 1);
      saveStorage();
      renderAtrizes();
render();

      showMainSection("cadastro");

      const sec = byId("secCadastro");
      if(sec && sec.classList.contains("hidden")){
        toggleSection("secCadastro");
      }

      const container = byId("section-cadastro");
      if(container){
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }


    function normalizeNameKey(value){
      return String(value || "").trim().toLowerCase();
    }

    function getAtrizesFromString(value){
      return String(value || "")
        .split(",")
        .map(item => String(item || "").trim())
        .filter(Boolean);
    }

    function getAtrizesFavoritasSet(){
      return new Set(
        atrizLibrary
          .filter(item => !!item.favorita)
          .map(item => normalizeNameKey(item.nome))
          .filter(Boolean)
      );
    }

    function getAtrizesFavoritasNoItem(item){
      const favoritasSet = getAtrizesFavoritasSet();
      return getAtrizesFromString(item?.atrizes || item?.atriz || "")
        .filter(nome => favoritasSet.has(normalizeNameKey(nome)));
    }

    function getBonusAtrizesFavoritas(item){
      const quantidade = getAtrizesFavoritasNoItem(item).length;
      if(!quantidade) return 0;
      return Math.min(8, quantidade * 4);
    }

    function getPesoRecomendacaoWatchItem(item){
      const prioridadePeso = getPrioridadePeso(item?.prioridade || "Média");
      const bonusFavoritas = getBonusAtrizesFavoritas(item);
      return prioridadePeso + bonusFavoritas;
    }

    function getResumoRecomendacaoWatchItem(item){
      const favoritas = getAtrizesFavoritasNoItem(item);
      const partes = [`Prioridade ${item?.prioridade || "Média"}`];
      if(favoritas.length){
        partes.push(`${favoritas.length} atriz${favoritas.length > 1 ? "es" : ""} favorita${favoritas.length > 1 ? "s" : ""}`);
      }
      return {
        favoritas,
        texto: partes.join(" • "),
        peso: getPesoRecomendacaoWatchItem(item)
      };
    }


    function getPrioridadePeso(prioridade){
      if(prioridade === "Muito Alta") return 10;
      if(prioridade === "Alta") return 6;
      if(prioridade === "Média") return 3;
      if(prioridade === "Baixa") return 2;
      return 0.5;
    }

    function getPrioridadeClasse(prioridade){
      const valor = String(prioridade || "Média");
      if(valor === "Muito Alta") return "priority-muito-alta";
      if(valor === "Alta") return "priority-alta";
      if(valor === "Média") return "priority-media";
      if(valor === "Baixa") return "priority-baixa";
      return "priority-muito-baixa";
    }

    function sortearIndicePonderado(){
      const pesosSorteio = watchlist.map(item => getPrioridadePeso(item.prioridade || "Média"));
      const soma = pesosSorteio.reduce((acc, n) => acc + n, 0);
      let alvo = Math.random() * soma;

      for(let i = 0; i < pesosSorteio.length; i++){
        alvo -= pesosSorteio[i];
        if(alvo < 0) return i;
      }
      return 0;
    }

    function getWatchlistFiltradaAtual(){
      const filtroBusca = String(byId("watchFiltroBusca")?.value || "").trim().toLowerCase();
      const filtroPrioridade = String(byId("watchFiltroPrioridade")?.value || "").trim();
      const filtroStudio = String(byId("watchFiltroStudio")?.value || "").trim().toLowerCase();
      const watchlistStudioTargets = getStudiosFromInputOrGroups(filtroStudio);

      return watchlist
        .map((item, index) => ({ ...item, __originalIndex: index }))
        .filter(item => {
          const nome = String(item.nome || "").toLowerCase();
          const studio = String(item.studio || "").toLowerCase();
          const atrizes = String(item.atrizes || "").toLowerCase();
          const gruposDoStudio = studioGroups
            .filter(group => Array.isArray(group.studios) && group.studios.some(st => String(st).trim().toLowerCase() === studio))
            .map(group => String(group.name || "").toLowerCase())
            .join(" ");

          const matchBusca = !filtroBusca || nome.includes(filtroBusca) || studio.includes(filtroBusca) || atrizes.includes(filtroBusca) || gruposDoStudio.includes(filtroBusca);
          const matchPrioridade = !filtroPrioridade || String(item.prioridade || "Média") === filtroPrioridade;
          const matchStudio = !watchlistStudioTargets.length || watchlistStudioTargets.some(target => studio.includes(target) || target.includes(studio));

          return matchBusca && matchPrioridade && matchStudio;
        });
    }

    function updateWatchFormStatus(){
      const el = byId("watchFormStatus");
      if(!el) return;
      if(watchEditingIndex !== null){
        const item = watchlist[watchEditingIndex];
        el.textContent = `Modo atual: Editando ${item?.nome || 'item selecionado'}`;
      } else {
        el.textContent = "Modo atual: Novo item";
      }
    }

    function updateWatchlistSummary(filtrados){
      const total = watchlist.length;
      const visible = filtrados.length;
      const altaPrioridade = filtrados.filter(item => ["Muito Alta", "Alta"].includes(String(item.prioridade || "Média"))).length;
      const comAtrizFavorita = filtrados.filter(item => getAtrizesFavoritasNoItem(item).length).length;

      if(byId("watchStatTotal")) byId("watchStatTotal").textContent = total;
      if(byId("watchStatFiltered")) byId("watchStatFiltered").textContent = visible;
      if(byId("watchStatPriority")) byId("watchStatPriority").textContent = altaPrioridade;
      if(byId("watchStatLinks")) byId("watchStatLinks").textContent = comAtrizFavorita;

      const filtroStatus = byId("watchFilterStatus");
      if(filtroStatus){
        const ativos = [];
        const busca = String(byId("watchFiltroBusca")?.value || "").trim();
        const prioridade = String(byId("watchFiltroPrioridade")?.value || "").trim();
        const studio = String(byId("watchFiltroStudio")?.value || "").trim();
        if(busca) ativos.push(`Busca: ${busca}`);
        if(prioridade) ativos.push(`Prioridade: ${prioridade}`);
        if(studio) ativos.push(`Studio/Grupo: ${studio}`);
        const comFavoritas = filtrados.filter(item => getAtrizesFavoritasNoItem(item).length).length;
        if(comFavoritas) ativos.push(`${comFavoritas} com atriz favorita`);
        filtroStatus.textContent = ativos.length ? ativos.join(" • ") : "Nenhum filtro ativo";
      }

      updateWatchFormStatus();
    }

    function sortearWatchlist(){
      if(!watchlist.length){
        alert("Não há vídeos na lista para ver no futuro.");
        return;
      }

      const candidatos = getWatchlistFiltradaAtual();

      if(!candidatos.length){
        alert("Nenhum vídeo encontrado com os filtros atuais para realizar o sorteio.");
        return;
      }

      const pesosSorteio = candidatos.map(item => getPesoRecomendacaoWatchItem(item));
      const soma = pesosSorteio.reduce((acc, n) => acc + n, 0);
      let alvo = Math.random() * soma;
      let indiceLocal = 0;

      for(let i = 0; i < pesosSorteio.length; i++){
        alvo -= pesosSorteio[i];
        if(alvo < 0){
          indiceLocal = i;
          break;
        }
      }

      const item = candidatos[indiceLocal];
      const el = byId("watchSorteado");
      const recomendacao = getResumoRecomendacaoWatchItem(item);

      el.innerHTML = `
        <div class="watchlist-sorted-card">
          <div class="small muted">Vídeo recomendado da fila</div>
          <div class="watchlist-sorted-title">${item.nome}</div>
          <div class="muted" style="margin-top:4px">${escapeHtml(item.studio || "Sem studio")}</div>
          <div class="watchlist-item-meta">
            <span class="priority-tag ${getPrioridadeClasse(item.prioridade)}">Prioridade: ${item.prioridade || "Média"}</span>
            ${item.atrizes ? `<span class="watchlist-meta-line">Atrizes: ${item.atrizes}</span>` : ""}
            ${recomendacao.favoritas.length ? `<span class="watch-favorite-badge">★ Favorita${recomendacao.favoritas.length > 1 ? 's' : ''}: ${recomendacao.favoritas.join(', ')}</span>` : ""}
          </div>
          <div class="watch-recommendation-note">
            Relevância da recomendação: <strong>${recomendacao.texto}</strong> • Peso final <strong>${recomendacao.peso.toFixed(1)}</strong>.
          </div>
          <div class="watchlist-form-actions" style="margin-top:16px;">
            ${item.link ? `<button class="btn-secondary" onclick="openExternalLink(${jsString(item.link)})">Abrir Vídeo</button>` : ""}
            <button class="btn-secondary" onclick="editWatchItem(${item.__originalIndex})">Editar</button>
            <button class="btn-secondary" onclick="moveWatchToHistory(${item.__originalIndex})">Mover para Avaliação</button>
          </div>
        </div>
      `;
    }

    function renderWatchlist(){
      const el = byId("watchlist");
      const sorteadoEl = byId("watchSorteado");
      const filtrados = getWatchlistFiltradaAtual();
      const compact = isCompactListMode();

      updateWatchlistSummary(filtrados);

      if(!watchlist.length){
        el.className = "watchlist-empty";
        el.innerHTML = 'Nenhum vídeo salvo para ver no futuro.';
        if(sorteadoEl) sorteadoEl.innerHTML = "";
        return;
      }

      if(!filtrados.length){
        el.className = "watchlist-empty";
        el.innerHTML = 'Nenhum item encontrado com os filtros atuais.';
        return;
      }

      el.className = "watchlist-list-grid";
      el.innerHTML = filtrados.map((v) => {
        const atrizesResumo = getPrimaryPeopleLine(v.atrizes, 2);
        const tagsResumo = buildLimitedChips(v.tags, compact ? 3 : 6);
        const favoritas = getAtrizesFavoritasNoItem(v);
        return `
        <div class="watchlist-item-card summary-card">
          <div class="watchlist-item-top">
            <div>
              <h3 class="watchlist-item-title">${escapeHtml(v.nome || "Sem nome")}</h3>
              <div class="summary-muted-line">${escapeHtml(v.studio || "Sem studio")} • ${escapeHtml(atrizesResumo)}</div>
              <div class="summary-main-line">
                <span class="priority-tag ${getPrioridadeClasse(v.prioridade)}">Prioridade: ${escapeHtml(v.prioridade || "Média")}</span>
                ${favoritas.length ? `<span class="watch-favorite-badge">★ ${escapeHtml(favoritas.slice(0,2).join(', '))}${favoritas.length > 2 ? ` +${favoritas.length - 2}` : ""}</span>` : ""}
                ${v.link ? `<span class="summary-chip">Link salvo</span>` : ""}
              </div>
              ${tagsResumo}
              ${compact ? "" : `
                <div class="list-detail-only top-gap">
                  ${v.link ? `<div class="link-text">${escapeHtml(v.link)}</div>` : ""}
                </div>
              `}
            </div>
            <div class="watchlist-item-actions summary-secondary-actions">
              <button class="summary-primary-action" onclick="abrirPaginaVideo('watchlist', ${v.__originalIndex})">Detalhes</button>
              <button class="btn-secondary" onclick="moveWatchToHistory(${v.__originalIndex})">Avaliar</button>
              ${compact ? `<button class="btn-secondary" onclick="editWatchItem(${v.__originalIndex})">Editar</button>` : `
                ${v.link ? `<button class="btn-secondary" onclick="openExternalLink(${jsString(v.link)})">Abrir</button>` : ""}
                <button class="btn-secondary" onclick="editWatchItem(${v.__originalIndex})">Editar</button>
                <button class="btn-secondary" onclick="removeFromWatchlist(${v.__originalIndex})">Remover</button>
              `}
            </div>
          </div>
        </div>`;
      }).join("");
    }


    function getHistoricoFiltradoAtual(){
      const termoHistorico = (byId("buscaHistorico")?.value || "").trim().toLowerCase();
      const filtroTagHistorico = (byId("filtroTagHistorico")?.value || "").trim().toLowerCase();
      const filtroStudioHistorico = (byId("filtroStudioHistorico")?.value || "").trim().toLowerCase();
      const filtroAtrizHistorico = (byId("filtroAtrizHistorico")?.value || "").trim().toLowerCase();
      const notaMinHistorico = parseFloat((byId("notaMinHistorico")?.value || "").replace(",", "."));
      const notaMaxHistorico = parseFloat((byId("notaMaxHistorico")?.value || "").replace(",", "."));
      const somenteFavoritosHistorico = !!byId("somenteFavoritosHistorico")?.checked;
      const historicoStudioTargets = getStudiosFromInputOrGroups(filtroStudioHistorico);

      return videos.filter(v => {
        const nome = String(v.nome || "").toLowerCase();
        const studio = String(v.studio || "").toLowerCase();
        const atrizes = String(v.atriz || "").toLowerCase();
        const tags = String(v.tags || "").toLowerCase();
        const nota = Number(v.nota || 0);
        const gruposDoStudio = studioGroups
          .filter(group => Array.isArray(group.studios) && group.studios.some(item => String(item).trim().toLowerCase() === studio))
          .map(group => String(group.name || "").toLowerCase())
          .join(" ");

        const matchBusca = !termoHistorico || nome.includes(termoHistorico) || studio.includes(termoHistorico) || atrizes.includes(termoHistorico) || tags.includes(termoHistorico) || gruposDoStudio.includes(termoHistorico);
        const matchTag = !filtroTagHistorico || tags.includes(filtroTagHistorico);
        const matchStudioHistorico = !historicoStudioTargets.length || historicoStudioTargets.some(target => studio.includes(target) || target.includes(studio));
        const matchAtrizHistorico = !filtroAtrizHistorico || atrizes.includes(filtroAtrizHistorico);
        const matchNotaMin = Number.isNaN(notaMinHistorico) ? true : nota >= notaMinHistorico;
        const matchNotaMax = Number.isNaN(notaMaxHistorico) ? true : nota <= notaMaxHistorico;
        const matchFavorito = !somenteFavoritosHistorico || !!v.favorito;

        return matchBusca && matchTag && matchStudioHistorico && matchAtrizHistorico && matchNotaMin && matchNotaMax && matchFavorito;
      });
    }

    function updateHistoricoSummary(filtrados){
      const total = videos.length;
      const visible = filtrados.length;
      const favoritos = filtrados.filter(item => !!item.favorito).length;
      const media = filtrados.length
        ? (filtrados.reduce((acc, item) => acc + Number(item.nota || 0), 0) / filtrados.length).toFixed(2)
        : "0.00";

      if(byId("historicoStatTotal")) byId("historicoStatTotal").textContent = total;
      if(byId("historicoStatFiltered")) byId("historicoStatFiltered").textContent = visible;
      if(byId("historicoStatFavorites")) byId("historicoStatFavorites").textContent = favoritos;
      if(byId("historicoStatAverage")) byId("historicoStatAverage").textContent = media;

      const status = byId("historicoFilterStatus");
      if(status){
        const ativos = [];
        const busca = String(byId("buscaHistorico")?.value || "").trim();
        const tag = String(byId("filtroTagHistorico")?.value || "").trim();
        const studio = String(byId("filtroStudioHistorico")?.value || "").trim();
        const atriz = String(byId("filtroAtrizHistorico")?.value || "").trim();
        const notaMin = String(byId("notaMinHistorico")?.value || "").trim();
        const notaMax = String(byId("notaMaxHistorico")?.value || "").trim();
        const somenteFav = !!byId("somenteFavoritosHistorico")?.checked;
        if(busca) ativos.push(`Busca: ${busca}`);
        if(tag) ativos.push(`Tag: ${tag}`);
        if(studio) ativos.push(`Studio/Grupo: ${studio}`);
        if(atriz) ativos.push(`Atriz: ${atriz}`);
        if(notaMin) ativos.push(`Nota mín.: ${notaMin}`);
        if(notaMax) ativos.push(`Nota máx.: ${notaMax}`);
        if(somenteFav) ativos.push("Somente favoritos");
        status.textContent = ativos.length ? ativos.join(" • ") : "Nenhum filtro ativo";
      }
    }

    function getPesoSorteioHistorico(item){
      const reassist = Number(item.reassist || 0);
      const nota = Number(item.nota || 0);
      return Math.max(0.1, (reassist * 0.6) + (nota * 0.4));
    }

    function sortearHistorico(){
      const candidatos = getHistoricoFiltradoAtual()
        .map((item, index) => ({ ...item, __originalIndex: videos.indexOf(item) }));

      if(!candidatos.length){
        alert("Nenhum vídeo do histórico encontrado com os filtros atuais.");
        return;
      }

      const pesos = candidatos.map(getPesoSorteioHistorico);
      const soma = pesos.reduce((acc, n) => acc + n, 0);
      let alvo = Math.random() * soma;
      let indiceLocal = 0;

      for(let i = 0; i < pesos.length; i++){
        alvo -= pesos[i];
        if(alvo < 0){
          indiceLocal = i;
          break;
        }
      }

      const item = candidatos[indiceLocal];
      const el = byId("historicoSorteado");
      if(!el) return;

      el.innerHTML = `
        <div class="card" style="padding:14px;background:rgba(59,130,246,.12);border-color:#3b82f6;">
          <div class="small muted">Vídeo Sorteado do Histórico</div>
          <div style="font-size:20px;font-weight:800;margin-top:6px">${escapeHtml(item.nome)}</div>
          <div class="muted" style="margin-top:4px">${escapeHtml(item.studio || "Sem studio")}</div>
          <div class="top-gap">
            <span class="tag note-badge ${getNotaClasse(item.nota)}">Nota Final: ${item.nota}</span>
            ${item.favorito ? '<span class="tag">Favorito</span>' : ''}
          </div>
          <div class="history-grid history-details top-gap">
            <div><strong>Reassistibilidade:</strong> ${item.reassist ?? 0}</div>
            <div><strong>Performance:</strong> ${item.performance ?? 0}</div>
            <div><strong>Casting:</strong> ${item.casting ?? 0}</div>
            <div><strong>Tema:</strong> ${item.tema ?? 0}</div>
          </div>
          ${item.atriz ? `<div class="top-gap"><strong>Atrizes:</strong> ${escapeHtml(item.atriz)}</div>` : ""}
          ${item.tags ? `<div class="top-gap"><strong>Tags:</strong> ${escapeHtml(item.tags)}</div>` : ""}
          <div class="row top-gap">
            ${item.link ? `<button class="btn-secondary" onclick="openExternalLink(${jsString(item.link)})">Abrir Vídeo</button>` : ""}
            <button class="btn-secondary" onclick="abrirPaginaVideo('historico', ${item.__originalIndex})">Detalhes</button>
            <button class="btn-secondary" onclick="editVideo(${item.__originalIndex})">Editar</button>
          </div>
        </div>
      `;
    }

    function renderHistorico(list){
      const ordem = document.getElementById("ordenacao")?.value || "nota_desc";
      const modoVisualizacao = document.getElementById("modoVisualizacaoHistorico")?.value || "completa";
      const compact = isCompactListMode() || modoVisualizacao === "simplificada";
      let sorted = [...list].map((v) => ({ ...v, __originalIndex: videos.indexOf(v) }));

      if(ordem === "nota_desc"){
        sorted.sort((a,b)=>Number(b.nota)-Number(a.nota));
      } else if(ordem === "nota_asc"){
        sorted.sort((a,b)=>Number(a.nota)-Number(b.nota));
      } else if(ordem === "az"){
        sorted.sort((a,b)=>a.nome.localeCompare(b.nome));
      } else if(ordem === "za"){
        sorted.sort((a,b)=>b.nome.localeCompare(a.nome));
      }

      const el = byId("historico");
      if(!videos.length){
        el.innerHTML = '<div class="historico-empty-state">Nenhum vídeo cadastrado ainda.</div>';
        return;
      }

      el.innerHTML = sorted.map((v) => {
        const nota = Number(v.nota || 0);
        const notaClasse = getNotaClasse(nota);
        const atrizesResumo = getPrimaryPeopleLine(v.atriz, 2);
        const tagsResumo = buildLimitedChips(v.tags, compact ? 3 : 6);
        return `
        <div class="historico-item-card summary-card ${notaClasse} ${compact ? "simple" : ""}">
          <div class="historico-item-top video-header">
            <div>
              <h3 class="historico-item-title ${compact ? "watch-title" : ""}">${escapeHtml(v.nome || "Sem nome")}</h3>
              <div class="summary-muted-line">${escapeHtml(v.studio || "Sem studio")} • ${escapeHtml(atrizesResumo)}</div>
              <div class="summary-main-line">
                <span class="tag note-badge ${notaClasse}">Nota Final: ${nota.toFixed(2)}</span>
                ${v.favorito ? '<span class="tag">★ Favorito</span>' : ''}
                ${v.link ? `<span class="summary-chip">Link salvo</span>` : ""}
              </div>
              ${tagsResumo}
            </div>
            <div class="historico-item-actions row summary-secondary-actions">
              <button class="summary-primary-action" onclick="abrirPaginaVideo('historico', ${v.__originalIndex})">Detalhes</button>
              <button class="btn-secondary" onclick="editVideo(${v.__originalIndex})">Editar</button>
              <button class="btn-secondary" onclick="toggleFavorito(${v.__originalIndex})">${v.favorito ? "★" : "☆"}</button>
              ${compact ? "" : `<button class="btn-secondary" onclick="deleteVideo(${v.__originalIndex})">Excluir</button>`}
            </div>
          </div>

          ${compact ? "" : `
            <div class="historico-content-grid history-details list-detail-only">
              <div>
                <div class="historico-info-box atriz-block">
                  <div class="historico-box-title">Resumo expandido</div>
                  <div class="historico-info-line"><strong>Atrizes:</strong> ${escapeHtml(v.atriz || "—")}</div>
                  <div class="historico-info-line"><strong>Tags:</strong> ${escapeHtml(v.tags || "—")}</div>
                </div>
                ${v.link ? `
                  <div class="historico-link-box link-block top-gap">
                    <div class="historico-box-title">Link Salvo</div>
                    <div class="link-text">${escapeHtml(v.link)}</div>
                  </div>
                ` : ""}
              </div>
              <div class="historico-score-box">
                <div class="historico-box-title">Principais notas</div>
                <div class="historico-score-grid">
                  <div class="historico-score-chip">Cenas de Sexo<strong>${v.sexo ?? 0}</strong></div>
                  <div class="historico-score-chip">Performance<strong>${v.performance ?? 0}</strong></div>
                  <div class="historico-score-chip">Casting<strong>${v.casting ?? 0}</strong></div>
                  <div class="historico-score-chip">Reassistibilidade<strong>${v.reassist ?? 0}</strong></div>
                </div>
              </div>
            </div>
          `}
        </div>`;
      }).join("");
    }

    function render(){
      const filtroStudio = byId("filtroStudio").value.trim().toLowerCase();
      const filtroAtriz = byId("filtroAtriz").value.trim().toLowerCase();

      const dashboardStudioTargets = getStudiosFromInputOrGroups(byId("filtroStudio")?.value || "");

      const dashboardVideos = videos.filter(v => {
        const studio = String(v.studio || "").toLowerCase();
        const okStudio = dashboardStudioTargets.length
          ? dashboardStudioTargets.some(target => studio.includes(target) || target.includes(studio))
          : true;
        const okAtriz = filtroAtriz
        ? String(v.atriz || "")
            .split(",")
            .map(x => x.trim().toLowerCase())
            .some(nome => nome.includes(filtroAtriz))
        : true;
        return okStudio && okAtriz;
      });

      atualizarSugestoes();
      renderStudioLibrary();
      renderStudioGroups();

      const total = videos.length;
      const media = dashboardVideos.length
        ? (dashboardVideos.reduce((acc,v) => acc + Number(v.nota || 0), 0) / dashboardVideos.length).toFixed(2)
        : "0.00";
      const favoritos = dashboardVideos.filter(v => v.favorito).length;

      byId("statVideos").textContent = dashboardVideos.length;
      byId("statMedia").textContent = media;
      byId("statFavoritos").textContent = favoritos;
      byId("statTotal").textContent = total;

      const topStudios = weightedRanking(dashboardVideos, v => [v.studio]);
      const topAtrizes = weightedRanking(
      dashboardVideos,
      v => {
        const nomes = String(v.atriz || "").split(",").map(x => x.trim()).filter(Boolean);
        if (filtroAtriz) {
          return nomes.filter(nome => nome.toLowerCase().includes(filtroAtriz));
        }
        return nomes;
      },
      calcularNotaAtriz
    );

      const historicoFiltrado = getHistoricoFiltradoAtual();
      updateHistoricoSummary(historicoFiltrado);

      renderHistograma("histogramaNotas", dashboardVideos);
      renderBars("topStudios", topStudios, "Studio");
      renderBars("topAtrizes", topAtrizes, "Atriz");
      renderWatchlist();
      renderHistorico(historicoFiltrado);
    }


    if(byId("link")){
      byId("link").addEventListener("input", () => preencherCamposPorLink("historico"));
      byId("link").addEventListener("blur", () => preencherCamposPorLink("historico"));
    }
    if(byId("watchLink")){
      byId("watchLink").addEventListener("input", () => preencherCamposPorLink("watchlist"));
      byId("watchLink").addEventListener("blur", () => preencherCamposPorLink("watchlist"));
    }


    applyVisualSettings();
    if(byId("saveVisualSettingsBtn")) byId("saveVisualSettingsBtn").addEventListener("click", saveVisualSettings);
    if(byId("resetVisualSettingsBtn")) byId("resetVisualSettingsBtn").addEventListener("click", resetVisualSettings);
    ["visualDensity", "visualListMode", "visualFontSize", "visualAccentColor", "visualReducedMotion"].forEach(id => {
      if(byId(id)) byId(id).addEventListener("change", saveVisualSettings);
    });

    byId("saveBtn").addEventListener("click", addOrUpdate);
    if(byId("addTagBtn")) byId("addTagBtn").addEventListener("click", () => addSelectedTag(byId("tagInput").value));
    if(byId("tagInput")) byId("tagInput").addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === ","){
        e.preventDefault();
        addSelectedTag(byId("tagInput").value);
      }
    });
    if(byId("addLibraryTagBtn")) byId("addLibraryTagBtn").addEventListener("click", addLibraryTag);
    if(byId("newLibraryTag")) byId("newLibraryTag").addEventListener("keydown", (e) => {
      if(e.key === "Enter"){
        e.preventDefault();
        addLibraryTag();
      }
    });
    if(byId("resetLibraryTagsBtn")) byId("resetLibraryTagsBtn").addEventListener("click", resetLibraryTags);
    if(byId("addStudioGroupBtn")) byId("addStudioGroupBtn").addEventListener("click", addStudioGroup);
    if(byId("newStudioGroupName")) byId("newStudioGroupName").addEventListener("keydown", (e) => {
      if(e.key === "Enter"){
        e.preventDefault();
        addStudioGroup();
      }
    });
    if(byId("resetStudioGroupsBtn")) byId("resetStudioGroupsBtn").addEventListener("click", resetStudioGroups);
    if(byId("addAtrizBtn")) byId("addAtrizBtn").addEventListener("click", addAtriz);
    if(byId("atrizBuscaInput")) byId("atrizBuscaInput").addEventListener("input", renderAtrizes);
    if(byId("atrizOrdenacao")) byId("atrizOrdenacao").addEventListener("change", renderAtrizes);
    if(byId("somenteFavoritasAtrizes")) byId("somenteFavoritasAtrizes").addEventListener("change", renderAtrizes);
    if(byId("limparFiltroAtrizesBtn")) byId("limparFiltroAtrizesBtn").addEventListener("click", () => {
      if(byId("atrizBuscaInput")) byId("atrizBuscaInput").value = "";
      if(byId("atrizOrdenacao")) byId("atrizOrdenacao").value = "alfabeta_asc";
      if(byId("somenteFavoritasAtrizes")) byId("somenteFavoritasAtrizes").checked = false;
      renderAtrizes();
    });
    if(byId("closeAtrizModalBtn")) byId("closeAtrizModalBtn").addEventListener("click", closeAtrizModal);
    if(byId("saveAtrizModalBtn")) byId("saveAtrizModalBtn").addEventListener("click", saveAtrizFotoFromModal);
    if(byId("removeAtrizFotoBtn")) byId("removeAtrizFotoBtn").addEventListener("click", removeAtrizFoto);
    if(byId("atrizModalFotoInput")) byId("atrizModalFotoInput").addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = function(evt){
        loadAtrizCropSource(evt.target.result);
      };
      reader.readAsDataURL(file);
    });
    if(byId("atrizCropZoom")) byId("atrizCropZoom").addEventListener("input", (e) => {
      applyAtrizCropZoom(e.target.value, true);
    });
    if(byId("atrizCropStage")) {
      const stage = byId("atrizCropStage");
      const startDrag = (clientX, clientY) => {
        if(!atrizCropState.src) return;
        atrizCropState.dragging = true;
        atrizCropState.startX = clientX;
        atrizCropState.startY = clientY;
        atrizCropState.originX = atrizCropState.x;
        atrizCropState.originY = atrizCropState.y;
        stage.classList.add("dragging");
      };
      const moveDrag = (clientX, clientY) => {
        if(!atrizCropState.dragging) return;
        atrizCropState.x = atrizCropState.originX + (clientX - atrizCropState.startX);
        atrizCropState.y = atrizCropState.originY + (clientY - atrizCropState.startY);
        clampAtrizCropPosition();
        renderAtrizCrop();
      };
      const endDrag = () => {
        atrizCropState.dragging = false;
        stage.classList.remove("dragging");
      };

      stage.addEventListener("mousedown", (e) => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
      });
      window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
      window.addEventListener("mouseup", endDrag);

      stage.addEventListener("touchstart", (e) => {
        const t = e.touches[0];
        if(!t) return;
        startDrag(t.clientX, t.clientY);
      }, { passive: true });
      window.addEventListener("touchmove", (e) => {
        const t = e.touches[0];
        if(!t) return;
        moveDrag(t.clientX, t.clientY);
      }, { passive: true });
      window.addEventListener("touchend", endDrag);
    }
    if(byId("atrizModal")) byId("atrizModal").addEventListener("click", (e) => {
      if(e.target === byId("atrizModal")) closeAtrizModal();
    });

    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape" && byId("atrizModal")?.classList.contains("active")){
        e.preventDefault();
        e.stopImmediatePropagation();
        closeAtrizModal();
      }
    });
    ["producao","performance","roteiro","estetica","tema","reassist","casting","sexo"].forEach((id) => {
      byId(id).addEventListener("input", updateNotaPreview);
      byId(id).addEventListener("change", updateNotaPreview);
    });
    byId("addWatchBtn").addEventListener("click", addToWatchlist);
    byId("clearWatchBtn").addEventListener("click", clearWatchForm);
    byId("sortearWatchBtn").addEventListener("click", sortearWatchlist);
    byId("watchFiltroBusca").addEventListener("input", render);
    byId("watchFiltroPrioridade").addEventListener("change", render);
    byId("watchFiltroStudio").addEventListener("input", render);
    byId("clearWatchFiltrosBtn").addEventListener("click", () => {
      byId("watchFiltroBusca").value = "";
      byId("watchFiltroPrioridade").value = "";
      byId("watchFiltroStudio").value = "";
      renderAtrizes();
render();
    });
    byId("clearBtn").addEventListener("click", clearForm);
    byId("exportBtn").addEventListener("click", exportBackup);
    byId("importFile").addEventListener("change", (e) => {
      if(e.target.files && e.target.files[0]) importBackup(e.target.files[0]);
      e.target.value = "";
    });

    ["filtroStudio","filtroAtriz","buscaHistorico","filtroTagHistorico","filtroStudioHistorico","filtroAtrizHistorico","notaMinHistorico","notaMaxHistorico"].forEach((id) => {
      const el = byId(id);
      if(el) el.addEventListener("input", render);
    });

    byId("ordenacao").addEventListener("change", render);
    byId("somenteFavoritosHistorico").addEventListener("change", render);
    byId("modoVisualizacaoHistorico").addEventListener("change", render);
    if(byId("sortearHistoricoBtn")) byId("sortearHistoricoBtn").addEventListener("click", sortearHistorico);
    byId("limparBuscaHistorico").addEventListener("click", () => {
      byId("buscaHistorico").value = "";
      if(byId("filtroTagHistorico")) byId("filtroTagHistorico").value = "";
      if(byId("filtroStudioHistorico")) byId("filtroStudioHistorico").value = "";
      if(byId("filtroAtrizHistorico")) byId("filtroAtrizHistorico").value = "";
      if(byId("notaMinHistorico")) byId("notaMinHistorico").value = "";
      if(byId("notaMaxHistorico")) byId("notaMaxHistorico").value = "";
      byId("somenteFavoritosHistorico").checked = false;
      byId("modoVisualizacaoHistorico").value = "completa";
      renderAtrizes();
render();
    });
    byId("limparFiltros").addEventListener("click", () => {
      byId("filtroStudio").value = "";
      byId("filtroAtriz").value = "";
      renderAtrizes();
render();
    });

    Object.entries(descricoesNotas).forEach(([key, info]) => {
      const helpEl = byId(`help-${key}`);
      if (helpEl) {
        helpEl.innerHTML = `<strong>${info.titulo}</strong><br>${info.texto}`;
      }
    });

    document.querySelectorAll("[data-score-field]").forEach((input) => {
      input.addEventListener("focus", () => {
        document.querySelectorAll(".score-field").forEach((field) => field.classList.remove("active"));
        const wrapper = input.closest(".score-field");
        if (wrapper) wrapper.classList.add("active");
      });

      input.addEventListener("click", () => {
        document.querySelectorAll(".score-field").forEach((field) => field.classList.remove("active"));
        const wrapper = input.closest(".score-field");
        if (wrapper) wrapper.classList.add("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".score-field")) {
        document.querySelectorAll(".score-field").forEach((field) => field.classList.remove("active"));
      }
    });

    document.getElementById("ordenacao")?.addEventListener("change", render);

    function getActiveSectionName(){
      const active = document.querySelector(".main-section.active");
      if(!active) return "cadastro";
      return active.id.replace("section-", "");
    }

    document.addEventListener("keydown", (e) => {
      const activeSection = getActiveSectionName();

      if(e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "s"){
        e.preventDefault();
        if(activeSection === "watchlist"){
          addToWatchlist();
        } else {
          addOrUpdate();
        }
        return;
      }

      if(e.key === "Escape"){
        if(activeSection === "watchlist"){
          clearWatchForm();
        } else if(activeSection === "cadastro"){
          clearForm();
        }
        return;
      }

      if(e.ctrlKey && !e.shiftKey && !e.altKey){
        if(e.key === "1"){
          e.preventDefault();
          showMainSection("cadastro");
        } else if(e.key === "2"){
          e.preventDefault();
          showMainSection("dashboard");
        } else if(e.key === "3"){
          e.preventDefault();
          showMainSection("watchlist");
        } else if(e.key === "4"){
          e.preventDefault();
          showMainSection("historico");
        } else if(e.key === "5"){
          e.preventDefault();
          showMainSection("atrizes");
        } else if(e.key === "6"){
          e.preventDefault();
          showMainSection("tags");
        }
      }
    });

    updateNotaPreview();
    fillTagSuggestions();
    renderSelectedTags();
    renderTagLibrary();
    renderStudioLibrary();
    renderStudioGroups();
    

    function setupMobileEnhancements(){
      const fab = byId("mobileFabTop");
      if(fab){
        fab.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      const updateFab = () => {
        if(!fab) return;
        if(window.innerWidth <= 768 && window.scrollY > 320){
          fab.classList.add("visible");
        } else {
          fab.classList.remove("visible");
        }
      };

      window.addEventListener("scroll", updateFab, { passive:true });
      window.addEventListener("resize", updateFab);
      updateFab();
    }


    hydrateAtrizImagesFromIndexedDb().then(() => {
      renderAtrizes();
      render();
    });

    renderAtrizes();
    render();
    setupMobileEnhancements();

    window.editVideo = editVideo;
    window.toggleFavorito = toggleFavorito;
    window.deleteVideo = deleteVideo;
    window.editWatchItem = editWatchItem;
    window.removeFromWatchlist = removeFromWatchlist;
    window.moveWatchToHistory = moveWatchToHistory;
    window.toggleSection = toggleSection;
    window.showMainSection = showMainSection;
    window.removeSelectedTag = removeSelectedTag;
    window.removeLibraryTag = removeLibraryTag;
    window.removeStudioGroup = removeStudioGroup;
    window.toggleStudioInGroup = toggleStudioInGroup;
    window.toggleStudioGroupCollapse = toggleStudioGroupCollapse;
    window.removeAtriz = removeAtriz;
    window.sortearHistorico = sortearHistorico;
    window.abrirPaginaAtriz = abrirPaginaAtriz;
    window.voltarDaPaginaAtriz = voltarDaPaginaAtriz;
    window.scrollToAtrizDetailEditor = scrollToAtrizDetailEditor;
    window.handleAtrizDetailFotoChange = handleAtrizDetailFotoChange;
    window.applyAtrizDetailCropZoom = applyAtrizDetailCropZoom;
    window.saveAtrizDetailFromPage = saveAtrizDetailFromPage;
    window.removeAtrizDetailFoto = removeAtrizDetailFoto;
  </script>


  <script>
    (function(){
      const isLocalFile = location.protocol === 'file:';
      const installCard = document.getElementById('pwaInstallCard');
      const installBtn = document.getElementById('pwaInstallBtn');
      const dismissBtn = document.getElementById('pwaDismissBtn');
      let deferredInstallPrompt = null;

      if ('serviceWorker' in navigator && !isLocalFile) {
        window.addEventListener('load', function(){
          navigator.serviceWorker.register('./sw.js').catch(function(error){
            console.warn('Service Worker não registrado:', error);
          });
        });
      }

      window.addEventListener('beforeinstallprompt', function(event){
        event.preventDefault();
        deferredInstallPrompt = event;
        if (localStorage.getItem('projetoXInstallDismissed') !== '1' && installCard) {
          installCard.classList.add('visible');
        }
      });

      if (installBtn) {
        installBtn.addEventListener('click', async function(){
          if (!deferredInstallPrompt) return;
          deferredInstallPrompt.prompt();
          try { await deferredInstallPrompt.userChoice; } catch(e) {}
          deferredInstallPrompt = null;
          if (installCard) installCard.classList.remove('visible');
        });
      }

      if (dismissBtn) {
        dismissBtn.addEventListener('click', function(){
          localStorage.setItem('projetoXInstallDismissed', '1');
          if (installCard) installCard.classList.remove('visible');
        });
      }

      window.addEventListener('appinstalled', function(){
        deferredInstallPrompt = null;
        if (installCard) installCard.classList.remove('visible');
      });
    })();
  </script>

<script>
function normalizarAtrizes(valor){
  if(!valor) return '';
  const vistas = new Set();
  return valor
    .split(',')
    .map(v => v.trim())
    .filter(v => {
      if(!v) return false;
      const chave = v.toLowerCase();
      if(vistas.has(chave)) return false;
      vistas.add(chave);
      return true;
    })
    .join(', ');
}

document.addEventListener('DOMContentLoaded', () => {
  const atrizInput = document.getElementById('atriz');
  if(atrizInput){
    atrizInput.addEventListener('blur', () => {
      atrizInput.value = normalizarAtrizes(atrizInput.value);
    });
  }
});
</script>

<script>
function normalizarNomeAtriz(nome){
  return nome.trim().replace(/\s+/g,' ');
}

function obterAtrizesArray(){
  const hidden = document.getElementById('atriz');
  if(!hidden) return [];
  return hidden.value
    .split(',')
    .map(v => normalizarNomeAtriz(v))
    .filter(Boolean);
}

function atualizarAtrizesVisual(){
  const hidden = document.getElementById('atriz');
  const wrap = document.getElementById('selectedAtrizes');
  if(!hidden || !wrap) return;

  const vistas = new Set();
  const atrizes = [];

  obterAtrizesArray().forEach(nome => {
    const chave = nome.toLowerCase();
    if(vistas.has(chave)) return;
    vistas.add(chave);
    atrizes.push(nome);
  });

  hidden.value = atrizes.join(', ');
  wrap.innerHTML = '';

  atrizes.forEach(nome => {
    const chip = document.createElement('div');
    chip.className = 'selected-atriz-chip';

    const label = document.createElement('span');
    label.textContent = nome;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '×';
    removeBtn.setAttribute('aria-label', `Remover ${nome}`);

    chip.appendChild(label);
    chip.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
      const atual = obterAtrizesArray().filter(v => v.toLowerCase() !== nome.toLowerCase());
      hidden.value = atual.join(', ');
      atualizarAtrizesVisual();
    });

    wrap.appendChild(chip);
  });
}

function adicionarAtrizManual(){
  const input = document.getElementById('atrizInputManual');
  const hidden = document.getElementById('atriz');

  if(!input || !hidden) return;

  const nome = normalizarNomeAtriz(input.value);
  if(!nome) return;

  const atual = obterAtrizesArray();

  const existe = atual.some(v => v.toLowerCase() === nome.toLowerCase());

  if(!existe){
    atual.push(nome);
    hidden.value = atual.join(', ');
  }

  input.value = '';
  atualizarAtrizesVisual();
}

document.addEventListener('DOMContentLoaded', () => {
  const campoOriginal = document.getElementById('atriz');

  if(campoOriginal && !document.getElementById('atrizInputManual')){
    campoOriginal.type = 'hidden';
    campoOriginal.setAttribute('aria-hidden', 'true');

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="atriz-selector">
        <input id="atrizInputManual" placeholder="Adicionar atriz manualmente" />
        <button id="addAtrizManualBtn" type="button">Adicionar Atriz</button>
      </div>
      <div id="selectedAtrizes" class="selected-atrizes"></div>
    `;

    campoOriginal.parentNode.appendChild(container);

    document.getElementById('addAtrizManualBtn').addEventListener('click', adicionarAtrizManual);

    document.getElementById('atrizInputManual').addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        e.preventDefault();
        adicionarAtrizManual();
      }
    });

    campoOriginal.addEventListener('change', atualizarAtrizesVisual);
    campoOriginal.addEventListener('input', atualizarAtrizesVisual);

    atualizarAtrizesVisual();
  }
});

window.atualizarAtrizesVisual = atualizarAtrizesVisual;
window.adicionarAtrizManual = adicionarAtrizManual;
</script>

</body>
</html>
