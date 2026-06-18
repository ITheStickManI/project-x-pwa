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
    watchlist = watchlist.map(item => {
      if(!('atriz' in item) && 'atrizes' in item){
        const migrated = Object.assign({}, item, { atriz: item.atrizes });
        delete migrated.atrizes;
        return migrated;
      }
      return item;
    });

    let editingIndex = null;
    let watchEditingIndex = null;
    let selectedTags = [];
    let watchSelectedTags = [];
    let formDirty = false;
    const skippedToday = new Set();
    let globalSearchFocusIndex = -1;

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
      const atrizText = item.atriz || "";
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
          ${isHistorico ? (() => {
            const log = Array.isArray(item.changelog) ? item.changelog : [];
            const dataAdicionado = item.data ? new Date(item.data).toLocaleDateString("pt-BR") : "—";
            const logHtml = log.length
              ? log.slice().reverse().map(e => `
                <div class="changelog-entry">
                  <div class="changelog-date">${new Date(e.data).toLocaleString("pt-BR")}</div>
                  <div class="changelog-field">${escapeHtml(e.campo)}</div>
                  <div class="changelog-change"><span class="changelog-de">${escapeHtml(e.de || "—")}</span><span class="changelog-arrow">→</span><span class="changelog-para">${escapeHtml(e.para || "—")}</span></div>
                </div>`).join("")
              : `<div class="small muted" style="padding:8px 0">Sem alterações registradas.</div>`;
            return `
              <div class="card changelog-card">
                <div class="changelog-header" onclick="this.parentElement.querySelector('.changelog-body').classList.toggle('changelog-open')">
                  <h3 style="margin:0">Histórico de alterações</h3>
                  <span class="small muted">Adicionado em ${dataAdicionado} • ${log.length} alteraç${log.length === 1 ? "ão" : "ões"} ▾</span>
                </div>
                <div class="changelog-body">${logHtml}</div>
              </div>`;
          })() : ""}
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
          .filter(item => hasAtriz(item.atriz))
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
        ...related.watchlist.map(item => ({...item, __source:"watchlist", __atrizesField:item.atriz || ""}))
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

      if(sectionName === "watchlist" && sectionDirty.watchlist){
        renderWatchlist();
        sectionDirty.watchlist = false;
      }
      if(sectionName === "historico" && sectionDirty.historico){
        const hf = getHistoricoFiltradoAtual();
        renderHistorico(hf);
        sectionDirty.historico = false;
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
      formDirty = false;
      const b = byId("editModeBanner");
      if(b) b.style.display = "none";
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

      const notaFinal = calcularNota(f);
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
        nota: notaFinal,
        favorito: editingIndex !== null ? !!videos[editingIndex].favorito : false
      };

      if(editingIndex !== null){
        const old = videos[editingIndex];
        video.data = old.data || new Date().toISOString();
        const camposRastreados = ["nome","studio","atriz","tags","nota"];
        const nomesPortugues = { nome:"Nome", studio:"Studio", atriz:"Atrizes", tags:"Tags", nota:"Nota" };
        const diffs = camposRastreados
          .map(c => ({ data: new Date().toISOString(), campo: nomesPortugues[c] || c, de: String(old[c] ?? ""), para: String(c === "nota" ? notaFinal : (video[c] ?? "")) }))
          .filter(d => d.de !== d.para);
        video.changelog = [...(old.changelog || []), ...diffs];
        videos[editingIndex] = video;
      } else {
        video.data = new Date().toISOString();
        video.changelog = [];
        videos.push(video);
      }

      saveStorage();
      formDirty = false;
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
      const b = byId("editModeBanner");
      const n = byId("editModeVideoName");
      if(b) b.style.display = "flex";
      if(n) n.textContent = item.nome || "";

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

    const BACKUP_SCHEMA_VERSION = 4;
    const BACKUP_APP_NAME = "Projeto X - Organizador Pessoal";

    function getSafeArray(value){
      return Array.isArray(value) ? value : [];
    }

    function sanitizeBackupVideo(item){
      if(!item || typeof item !== "object") return null;
      return {
        ...item,
        nome: String(item.nome || "").trim(),
        studio: String(item.studio || "").trim(),
        link: String(item.link || "").trim(),
        atriz: String(item.atriz || "").trim(),
        tags: getSafeArray(item.tags).map(tag => String(tag || "").trim()).filter(Boolean)
      };
    }

    function sanitizeBackupWatchItem(item){
      if(!item || typeof item !== "object") return null;
      const sanitized = {
        ...item,
        nome: String(item.nome || "").trim(),
        studio: String(item.studio || "").trim(),
        link: String(item.link || "").trim(),
        atriz: String(item.atriz || item.atrizes || "").trim(),
        tags: getSafeArray(item.tags).map(tag => String(tag || "").trim()).filter(Boolean)
      };
      delete sanitized.atrizes;
      return sanitized;
    }

    function sanitizeBackupAtriz(item){
      if(!item || typeof item !== "object") return null;
      const nome = String(item.nome || "").trim();
      if(!nome) return null;
      const imageId = item.imageId || normalizeImageId(nome);
      return {
        nome,
        imageId,
        img: item.img || "",
        dataNascimento: String(item.dataNascimento || ""),
        localNascimento: String(item.localNascimento || ""),
        favorita: !!item.favorita,
        imageMeta: {
          zoom: Number(item.imageMeta?.zoom || item.zoom || 1),
          x: Number(item.imageMeta?.x || item.cropX || 0),
          y: Number(item.imageMeta?.y || item.cropY || 0),
          updatedAt: item.imageMeta?.updatedAt || item.updatedAt || ""
        },
        metadata: {
          createdAt: item.metadata?.createdAt || item.createdAt || "",
          updatedAt: item.metadata?.updatedAt || item.updatedAt || ""
        }
      };
    }

    function sanitizeBackupPayload(data){
      const rawData = data && data.data && typeof data.data === "object" ? data.data : data;
      if(Array.isArray(rawData)){
        return {
          videos: rawData.map(sanitizeBackupVideo).filter(Boolean),
          watchlist: [],
          atrizLibrary: [],
          tagCatalog: [...defaultTagCatalog],
          studioGroups: [],
          collapsedStudioGroups: [],
          visualSettings: {...defaultVisualSettings}
        };
      }
      if(!rawData || typeof rawData !== "object") throw new Error("Formato inválido.");
      if(!Array.isArray(rawData.videos)) throw new Error("Backup sem lista de vídeos válida.");

      return {
        videos: getSafeArray(rawData.videos).map(sanitizeBackupVideo).filter(Boolean),
        watchlist: getSafeArray(rawData.watchlist).map(sanitizeBackupWatchItem).filter(Boolean),
        atrizLibrary: getSafeArray(rawData.atrizLibrary).map(sanitizeBackupAtriz).filter(Boolean),
        tagCatalog: getSafeArray(rawData.tagCatalog).length
          ? [...new Set(getSafeArray(rawData.tagCatalog).map(item => normalizeLibraryTag(item)).filter(Boolean))].sort((a,b) => a.localeCompare(b))
          : [...defaultTagCatalog],
        studioGroups: getSafeArray(rawData.studioGroups)
          .map(group => ({
            name: String(group?.name || "").trim(),
            studios: getSafeArray(group?.studios).map(item => String(item || "").trim()).filter(Boolean)
          }))
          .filter(group => group.name)
          .map(group => ({...group, studios:[...new Set(group.studios)].sort((a,b)=>a.localeCompare(b))}))
          .sort((a,b) => a.name.localeCompare(b.name)),
        collapsedStudioGroups: [...new Set(getSafeArray(rawData.collapsedStudioGroups).map(item => String(item || "").trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b)),
        visualSettings: {
          ...defaultVisualSettings,
          ...(rawData.visualSettings && typeof rawData.visualSettings === "object" ? rawData.visualSettings : {})
        }
      };
    }

    function dataUrlToImage(dataUrl){
      return new Promise((resolve, reject) => {
        if(!dataUrl || typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")){
          reject(new Error("Imagem inválida."));
          return;
        }
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Não foi possível carregar a imagem."));
        img.src = dataUrl;
      });
    }

    async function resizeDataUrlForBackup(dataUrl, maxSize = 720, quality = 0.82){
      try{
        if(!dataUrl || typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")) return dataUrl || "";
        if(dataUrl.length < 700000) return dataUrl;
        const img = await dataUrlToImage(dataUrl);
        const ratio = Math.min(1, maxSize / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * ratio));
        const height = Math.max(1, Math.round(img.height * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        return canvas.toDataURL("image/jpeg", quality);
      } catch(error){
        console.warn("Não foi possível compactar uma imagem para o backup.", error);
        return dataUrl || "";
      }
    }

    async function buildAtrizBackupPayload(){
      const payload = [];
      for(const item of atrizLibrary){
        const sanitized = sanitizeBackupAtriz(item);
        if(!sanitized) continue;
        let img = item.img || "";
        if(!img && item.imageId){
          try{
            img = await readImageFromIndexedDb(item.imageId);
          } catch(error){
            console.warn("Não foi possível ler imagem do IndexedDB durante o backup.", error);
          }
        }
        sanitized.img = await resizeDataUrlForBackup(img);
        sanitized.imageId = sanitized.imageId || normalizeImageId(sanitized.nome);
        sanitized.metadata.updatedAt = sanitized.metadata.updatedAt || new Date().toISOString();
        payload.push(sanitized);
      }
      return payload.sort((a,b)=>a.nome.localeCompare(b.nome));
    }

    function getBackupFileName(){
      const stamp = new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");
      return `backup_projeto_x_v${BACKUP_SCHEMA_VERSION}_${stamp}.json`;
    }

    async function exportBackup(){
      try{
        await hydrateAtrizImagesFromIndexedDb();
        const backupData = {
          app: BACKUP_APP_NAME,
          backupVersion: BACKUP_SCHEMA_VERSION,
          exportedAt: new Date().toISOString(),
          format: "json-single-file",
          data: {
            videos: getSafeArray(videos).map(sanitizeBackupVideo).filter(Boolean),
            watchlist: getSafeArray(watchlist).map(sanitizeBackupWatchItem).filter(Boolean),
            atrizLibrary: await buildAtrizBackupPayload(),
            tagCatalog: getSafeArray(tagCatalog),
            studioGroups: getSafeArray(studioGroups),
            collapsedStudioGroups: getSafeArray(collapsedStudioGroups),
            visualSettings: {...defaultVisualSettings, ...(visualSettings || {})}
          },
          integrity: {
            videosCount: getSafeArray(videos).length,
            watchlistCount: getSafeArray(watchlist).length,
            atrizCount: getSafeArray(atrizLibrary).length,
            tagCount: getSafeArray(tagCatalog).length,
            studioGroupCount: getSafeArray(studioGroups).length,
            includesImages: getSafeArray(atrizLibrary).some(item => !!item.img || !!item.imageId)
          }
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], {type:"application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = getBackupFileName();
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      } catch(error){
        console.error("Erro ao exportar backup.", error);
        alert("Não foi possível exportar o backup completo. Verifique o espaço disponível e tente novamente.");
      }
    }

    function importBackup(file){
      const reader = new FileReader();
      reader.onload = async function(e){
        try{
          const parsed = JSON.parse(e.target.result);
          const normalized = sanitizeBackupPayload(parsed);

          videos = normalized.videos;
          watchlist = normalized.watchlist;
          atrizLibrary = normalized.atrizLibrary;
          tagCatalog = normalized.tagCatalog;
          studioGroups = normalized.studioGroups;
          collapsedStudioGroups = normalized.collapsedStudioGroups;
          visualSettings = normalized.visualSettings;

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

          writeJsonStorage(STORAGE_KEYS.videos, videos);
          writeJsonStorage(STORAGE_KEYS.watchlist, watchlist);
          saveAtrizes();
          writeJsonStorage(STORAGE_KEYS.tagCatalog, tagCatalog);
          writeJsonStorage(STORAGE_KEYS.studioGroups, studioGroups);
          writeJsonStorage(STORAGE_KEYS.collapsedStudioGroups, collapsedStudioGroups);
          writeJsonStorage(STORAGE_KEYS.visualSettings, visualSettings);

          applyVisualSettings();
          renderTagLibrary();
          renderStudioGroups();
          renderStudioLibrary();
          renderAtrizes();
          render();
          alert(`Backup importado com sucesso.\n\nVídeos: ${videos.length}\nWatchlist: ${watchlist.length}\nAtrizes: ${atrizLibrary.length}`);
        } catch(err){
          console.error("Erro ao importar backup.", err);
          alert("Não foi possível importar o backup. Verifique se o arquivo JSON é um backup válido do Projeto X.");
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
      preencherDatalist("sugestoesTagsWatchlist", getTagsUnicas());
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
      if(!atrizCropState.src) return Promise.resolve("");
      const { stage } = getAtrizCropElements();
      if(!stage) return Promise.resolve(atrizCropState.src);

      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const size = 300;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        const draw = (img) => {
          const scaleX = atrizCropState.naturalWidth / atrizCropState.displayWidth;
          const scaleY = atrizCropState.naturalHeight / atrizCropState.displayHeight;
          const sx = Math.max(0, -atrizCropState.x * scaleX);
          const sy = Math.max(0, -atrizCropState.y * scaleY);
          const sw = Math.min(atrizCropState.naturalWidth - sx, stage.clientWidth * scaleX);
          const sh = Math.min(atrizCropState.naturalHeight - sy, stage.clientHeight * scaleY);
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);
          resolve(canvas.toDataURL("image/jpeg", 0.92));
        };

        const img = new Image();
        img.onload = () => draw(img);
        img.onerror = () => resolve(atrizCropState.src);
        img.src = atrizCropState.src;
      });
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
        String(v.atriz || "")
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
      const imgCortada = await getAtrizCroppedImageData();
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
        atriz: byId("watchAtrizes").value.trim(),
        tags: byId("watchTags")?.value.trim() || "",
        prioridade: byId("watchPrioridade").value || "Média",
        link: byId("watchLink").value.trim()
      };
    }

    function setWatchForm(item){
      byId("watchNome").value = item.nome || "";
      byId("watchStudio").value = item.studio || "";
      byId("watchAtrizes").value = item.atriz || "";
      byId("watchPrioridade").value = item.prioridade || "Média";
      byId("watchLink").value = item.link || "";
      setWatchSelectedTagsFromString(item.tags || "");
    }

    function clearWatchForm(){
      watchEditingIndex = null;
      byId("addWatchBtn").textContent = "Adicionar à Lista";
      setWatchForm({
        nome: "",
        studio: "",
        atriz: "",
        tags: "",
        prioridade: "Média",
        link: ""
      });
      watchSelectedTags = [];
      renderWatchSelectedTags();
      formDirty = false;
      const b = byId("watchEditModeBanner");
      if(b) b.style.display = "none";
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
        prioridade: f.prioridade || "Média",
        link: normalizeUrl(f.link)
      };

      if(watchEditingIndex !== null){
        watchlist[watchEditingIndex] = item;
      } else {
        watchlist.push(item);
      }

      saveStorage();
      formDirty = false;
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
      const b = byId("watchEditModeBanner");
      const n = byId("watchEditModeVideoName");
      if(b) b.style.display = "flex";
      if(n) n.textContent = item.nome || "";
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
        atriz: item.atriz || "",
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
      return getAtrizesFromString(item?.atriz || "")
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
          const atrizes = String(item.atriz || "").toLowerCase();
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

      const todosFiltered = getWatchlistFiltradaAtual();
      const candidatos = todosFiltered.filter(item => !skippedToday.has(item.__originalIndex));

      if(!todosFiltered.length){
        alert("Nenhum vídeo encontrado com os filtros atuais para realizar o sorteio.");
        return;
      }

      if(!candidatos.length){
        const el = byId("watchSorteado");
        el.innerHTML = `<div class="watchlist-sorted-card" style="border-color:rgba(245,158,11,.35)">
          <div class="small muted">Todos os itens foram pulados hoje</div>
          <div class="watchlist-sorted-title" style="font-size:18px">Nenhum candidato disponível</div>
          <div class="muted" style="margin-top:6px">Recarregue a página para resetar os itens pulados, ou remova filtros.</div>
        </div>`;
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
            ${item.atriz ? `<span class="watchlist-meta-line">Atrizes: ${escapeHtml(item.atriz)}</span>` : ""}
            ${recomendacao.favoritas.length ? `<span class="watch-favorite-badge">★ Favorita${recomendacao.favoritas.length > 1 ? 's' : ''}: ${recomendacao.favoritas.join(', ')}</span>` : ""}
          </div>
          <div class="watch-recommendation-note">
            Relevância da recomendação: <strong>${recomendacao.texto}</strong> • Peso final <strong>${recomendacao.peso.toFixed(1)}</strong>.
          </div>
          <div class="watchlist-form-actions" style="margin-top:16px;">
            ${item.link ? `<button class="btn-secondary" onclick="openExternalLink(${jsString(item.link)})">Abrir Vídeo</button>` : ""}
            <button class="btn-secondary" onclick="editWatchItem(${item.__originalIndex})">Editar</button>
            <button class="btn-secondary" onclick="moveWatchToHistory(${item.__originalIndex})">Mover para Avaliação</button>
            <button class="btn-secondary" onclick="pularHoje(${item.__originalIndex})" title="Remove este item do sorteio por esta sessão">Pular hoje</button>
          </div>
        </div>
      `;
    }

    function renderWatchlist(){
      const el = byId("watchlist");
      const sorteadoEl = byId("watchSorteado");
      let filtrados = getWatchlistFiltradaAtual();
      const compact = isCompactListMode();

      // Ordenação
      const ordem = byId("watchOrdenacao")?.value || "original";
      const prioridadePeso = (p) => ({ "Muito Alta":5, "Alta":4, "Média":3, "Baixa":2, "Muito Baixa":1 }[p] || 3);
      if(ordem === "nome_az") filtrados = [...filtrados].sort((a,b) => (a.nome||"").localeCompare(b.nome||""));
      else if(ordem === "prioridade_desc") filtrados = [...filtrados].sort((a,b) => prioridadePeso(b.prioridade) - prioridadePeso(a.prioridade));
      else if(ordem === "studio_az") filtrados = [...filtrados].sort((a,b) => (a.studio||"").localeCompare(b.studio||""));

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
        const atrizesResumo = getPrimaryPeopleLine(v.atriz, 2);
        const tagsResumo = buildLimitedChips(v.tags, compact ? 3 : 6);
        const favoritas = getAtrizesFavoritasNoItem(v);
        const pulado = skippedToday.has(v.__originalIndex);
        return `
        <div class="watchlist-item-card summary-card${pulado ? " skipped-today" : ""}">
          ${pulado ? `<div class="skipped-today-badge">Pulado hoje</div>` : ""}
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
      } else if(ordem === "data_desc"){
        sorted.sort((a,b) => (b.data || "") > (a.data || "") ? 1 : -1);
      } else if(ordem === "data_asc"){
        sorted.sort((a,b) => (a.data || "") > (b.data || "") ? 1 : -1);
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

    // ── Tags na Watchlist ─────────────────────────────────────────────
    function renderWatchSelectedTags(){
      const container = byId("watchSelectedTags");
      const hidden = byId("watchTags");
      if(!container) return;
      container.innerHTML = watchSelectedTags.map(tag =>
        `<span class="selected-tag">${escapeHtml(tag)}<button type="button" onclick="removeWatchTag(${jsString(tag)})">×</button></span>`
      ).join("");
      if(hidden) hidden.value = watchSelectedTags.join(",");
    }

    function addWatchSelectedTag(value){
      const tag = normalizeTagName(value);
      if(!tag) return;
      if(!watchSelectedTags.includes(tag)) watchSelectedTags.push(tag);
      const input = byId("watchTagInput");
      if(input) input.value = "";
      renderWatchSelectedTags();
    }

    function removeWatchTag(tag){
      watchSelectedTags = watchSelectedTags.filter(t => t !== tag);
      renderWatchSelectedTags();
    }

    function setWatchSelectedTagsFromString(tagsStr){
      watchSelectedTags = splitListText(tagsStr).map(normalizeTagName).filter(Boolean);
      renderWatchSelectedTags();
    }

    // ── Busca Global ──────────────────────────────────────────────────
    function abrirBuscaGlobal(){
      const overlay = byId("globalSearchOverlay");
      if(!overlay) return;
      overlay.style.display = "flex";
      globalSearchFocusIndex = -1;
      const input = byId("globalSearchInput");
      if(input){ input.value = ""; input.focus(); }
      byId("globalSearchResults").innerHTML = "";
    }

    function fecharBuscaGlobal(event){
      if(event && event.target !== byId("globalSearchOverlay")) return;
      const overlay = byId("globalSearchOverlay");
      if(overlay) overlay.style.display = "none";
    }

    function _fecharBuscaGlobalForced(){
      const overlay = byId("globalSearchOverlay");
      if(overlay) overlay.style.display = "none";
    }

    function executarBuscaGlobal(query){
      const q = String(query || "").trim().toLowerCase();
      const el = byId("globalSearchResults");
      if(!el) return;
      if(!q){ el.innerHTML = ""; return; }

      const match = (str) => String(str || "").toLowerCase().includes(q);

      const videoResults = videos
        .map((v, i) => ({ ...v, __idx: i }))
        .filter(v => match(v.nome) || match(v.studio) || match(v.atriz) || match(v.tags))
        .slice(0, 5);

      const watchResults = watchlist
        .map((v, i) => ({ ...v, __idx: i }))
        .filter(v => match(v.nome) || match(v.studio) || match(v.atriz))
        .slice(0, 5);

      const atrizResults = atrizLibrary
        .filter(a => match(a.nome))
        .slice(0, 5);

      let html = "";
      let hasSomething = false;

      if(videoResults.length){
        hasSomething = true;
        html += `<div class="global-search-group-title">Histórico (${videoResults.length})</div>`;
        html += videoResults.map(v => `
          <div class="global-search-item" onclick="_fecharBuscaGlobalForced(); abrirPaginaVideo('historico', ${v.__idx})">
            <div class="global-search-item-title">${escapeHtml(v.nome || "Sem nome")}</div>
            <div class="global-search-item-sub">${escapeHtml(v.studio || "—")} • Nota ${Number(v.nota || 0).toFixed(2)}</div>
          </div>`).join("");
      }

      if(watchResults.length){
        hasSomething = true;
        html += `<div class="global-search-group-title">Watchlist (${watchResults.length})</div>`;
        html += watchResults.map(v => `
          <div class="global-search-item" onclick="_fecharBuscaGlobalForced(); abrirPaginaVideo('watchlist', ${v.__idx})">
            <div class="global-search-item-title">${escapeHtml(v.nome || "Sem nome")}</div>
            <div class="global-search-item-sub">${escapeHtml(v.studio || "—")} • ${escapeHtml(v.prioridade || "Média")}</div>
          </div>`).join("");
      }

      if(atrizResults.length){
        hasSomething = true;
        html += `<div class="global-search-group-title">Atrizes (${atrizResults.length})</div>`;
        html += atrizResults.map(a => `
          <div class="global-search-item" onclick="_fecharBuscaGlobalForced(); abrirPaginaAtriz(${jsString(a.nome)})">
            <div class="global-search-item-title">${escapeHtml(a.nome)}</div>
            <div class="global-search-item-sub">${a.favorita ? "★ Favorita" : "Atriz"}</div>
          </div>`).join("");
      }

      if(!hasSomething){
        html = `<div class="global-search-empty">Nenhum resultado para "<strong>${escapeHtml(q)}</strong>"</div>`;
      }

      el.innerHTML = html;
    }

    // ── Gráfico Temporal ──────────────────────────────────────────────
    function renderGraficoTemporal(baseVideos){
      const el = byId("graficoTemporal");
      if(!el) return;

      const now = new Date();
      const meses = [];
      for(let i = 11; i >= 0; i--){
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        meses.push({ key: `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`, label: d.toLocaleString("pt-BR",{month:"short"}), count: 0 });
      }

      baseVideos.forEach(v => {
        if(!v.data) return;
        const key = v.data.slice(0, 7);
        const m = meses.find(m => m.key === key);
        if(m) m.count++;
      });

      const maxCount = Math.max(...meses.map(m => m.count), 1);
      const W = 560, H = 120, padL = 24, padR = 12, padT = 14, padB = 28;
      const chartW = W - padL - padR;
      const chartH = H - padT - padB;
      const step = chartW / (meses.length - 1);

      const points = meses.map((m, i) => ({
        x: padL + i * step,
        y: padT + chartH - (m.count / maxCount) * chartH,
        count: m.count,
        label: m.label
      }));

      const polyline = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
      const areaPoints = `${points[0].x},${(padT + chartH).toFixed(1)} ` +
        points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") +
        ` ${points[points.length-1].x},${(padT + chartH).toFixed(1)}`;

      el.innerHTML = `
        <svg viewBox="0 0 ${W} ${H}" class="temporal-chart-svg" role="img" aria-label="Vídeos por mês">
          <defs>
            <linearGradient id="temporalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <polygon points="${areaPoints}" class="temporal-chart-area"/>
          <polyline points="${polyline}" class="temporal-chart-line"/>
          ${points.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" class="temporal-chart-dot"/>`).join("")}
          ${points.map(p => `<text x="${p.x.toFixed(1)}" y="${(padT + chartH + 14).toFixed(1)}" class="temporal-chart-label">${escapeHtml(p.label)}</text>`).join("")}
          ${points.map(p => p.count > 0 ? `<text x="${p.x.toFixed(1)}" y="${(p.y - 7).toFixed(1)}" class="temporal-chart-value">${p.count}</text>` : "").join("")}
        </svg>`;
    }

    // ── Pular por hoje ────────────────────────────────────────────────
    function pularHoje(index){
      skippedToday.add(index);
      sortearWatchlist();
    }

    window.pularHoje = pularHoje;
    window._fecharBuscaGlobalForced = _fecharBuscaGlobalForced;
    window.removeWatchTag = removeWatchTag;

    const sectionDirty = { watchlist: false, historico: false };

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
      renderGraficoTemporal(dashboardVideos);
      renderBars("topStudios", topStudios, "Studio");
      renderBars("topAtrizes", topAtrizes, "Atriz");

      // Dias desde a última avaliação
      if(byId("statDias")){
        const comData = videos.filter(v => v.data).sort((a,b) => (b.data||"") > (a.data||"") ? 1 : -1);
        const fallbackUltimo = comData[0] || (videos.length ? videos[videos.length - 1] : null);
        if(fallbackUltimo?.data){
          const dias = Math.floor((Date.now() - new Date(fallbackUltimo.data).getTime()) / (1000*60*60*24));
          byId("statDias").textContent = dias === 0 ? "Hoje!" : `${dias}d atrás`;
        } else if(videos.length){
          byId("statDias").textContent = "—";
        } else {
          byId("statDias").textContent = "—";
        }
      }

      const activeId = document.querySelector(".main-section.active")?.id || "";
      if(activeId === "section-watchlist"){
        renderWatchlist();
        sectionDirty.watchlist = false;
      } else {
        sectionDirty.watchlist = true;
      }
      if(activeId === "section-historico"){
        renderHistorico(historicoFiltrado);
        sectionDirty.historico = false;
      } else {
        sectionDirty.historico = true;
      }
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

      if(e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "k"){
        e.preventDefault();
        abrirBuscaGlobal();
        return;
      }

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
        const overlay = byId("globalSearchOverlay");
        if(overlay && overlay.style.display === "flex"){
          _fecharBuscaGlobalForced();
          return;
        }
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

    if(byId("watchAddTagBtn")) byId("watchAddTagBtn").addEventListener("click", () => {
      const inp = byId("watchTagInput");
      if(inp) addWatchSelectedTag(inp.value);
    });
    if(byId("watchTagInput")) byId("watchTagInput").addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === ","){
        e.preventDefault();
        addWatchSelectedTag(e.target.value);
      }
    });
    if(byId("watchOrdenacao")) byId("watchOrdenacao").addEventListener("change", renderWatchlist);

    ["nome","studio","atriz","link"].forEach((id) => {
      const el = byId(id);
      if(el) el.addEventListener("input", () => { formDirty = true; });
    });
    ["watchNome","watchStudio","watchAtrizes","watchLink"].forEach((id) => {
      const el = byId(id);
      if(el) el.addEventListener("input", () => { formDirty = true; });
    });

    if(byId("globalSearchInput")) byId("globalSearchInput").addEventListener("input", (e) => {
      executarBuscaGlobal(e.target.value);
    });

    window.addEventListener("beforeunload", (e) => {
      if(formDirty){
        e.preventDefault();
        e.returnValue = "";
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