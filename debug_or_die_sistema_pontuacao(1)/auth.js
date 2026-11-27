const SUPABASE_URL = "https://nggaakknmpakjgpdesbj.supabase.co";
const SUPABASE_KEY = "sb_publishable_6Apvs1hf0fu-hGgKPFgmdw_Zp4QtkvM";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

/*audio*/
const somTrilha = new Audio("trilha_misterio.mp3");
somTrilha.loop = true;
somTrilha.volume = 0.4;

const somClique = new Audio("click_click.mp3");
somClique.volume = 0.6;

function tocarClique() {
    somClique.currentTime = 0;
    somClique.play().catch(() => {});
}

function iniciarMusicaFundo() {
    somTrilha.play().catch(() => {});
}

/*personagens*/
const masterCharactersDatabase = [
    {
        name: "Mathias",
        trait: "Backend Dev: Especialista em arquitetura e bancos de dados.",
        img: "imagens.png/Mathias.png"
    },
    {
        name: "Pablo",
        trait: "Bug Hunter: Caçador implacável de falhas de código.",
        img: "imagens.png/Pablo.png"
    },
    {
        name: "Pedro",
        trait: "Frontend Dev: Mestre em UI/UX e interfaces dinâmicas.",
        img: "imagens.png/Pedro.png"
    },
    {
        name: "Mayara",
        trait: "Data Sci: Analista de dados e lógica avançada.",
        img: "imagens.png/Mayara.png"
    },
    {
        name: "Daphnie",
        trait: "Fullstack: Domínio total de ponta a ponta no sistema.",
        img: "imagens.png/Daphnie.png"
    },
    {
        name: "Maria",
        trait: "Security Eng: Defensora contra invasões e exploits.",
        img: "imagens.png/Maria.png"
    },
    {
        name: "Marina",
        trait: "Mobile Dev: Criadora de aplicativos multiplataforma.",
        img: "imagens.png/Marina.png"
    },
    {
        name: "Renato",
        trait: "DevOps Eng: Especialista em pipelines, containers e deploy.",
        img: "imagens.png/Renato.png"
    },
    {
        name: "Leandro",
        trait: "QA Engineer: Mestre em testes automatizados e estabilidade.",
        img: "imagens.png/Leandro.png"
    },
    {
        name: "Madu",
        trait: "Cloud Arch: Arquiteta de sistemas distribuídos e alta disponibilidade.",
        img: "imagens.png/Madu.png"
    }
];

/* BANCO DE PALAVRAS */
const listaPalavras = [
    { dev: "REACT", impostor: "VUE" },
    { dev: "PYTHON", impostor: "RUBY" },
    { dev: "DOCKER", impostor: "KUBERNETES" },
    { dev: "MYSQL", impostor: "POSTGRES" },
    { dev: "GIT", impostor: "SVN" },
    { dev: "JAVASCRIPT", impostor: "TYPESCRIPT" },
    { dev: "HTML", impostor: "CSS" },
    { dev: "LINUX", impostor: "WINDOWS" },
    { dev: "SUPABASE", impostor: "FIREBASE" },
    { dev: "GITHUB", impostor: "GITLAB" },
    { dev: "ANGULAR", impostor: "SVELTE" },
    { dev: "NODEJS", impostor: "DENO" },
    { dev: "JAVA", impostor: "KOTLIN" },
    { dev: "SWIFT", impostor: "OBJECTIVE-C" },
    { dev: "MONGODB", impostor: "REDIS" },
    { dev: "AWS", impostor: "AZURE" },
    { dev: "NGINX", impostor: "APACHE" },
    { dev: "REST", impostor: "GRAPHQL" },
    { dev: "JSON", impostor: "XML" },
    { dev: "VSCODE", impostor: "SUBLIME" },
    { dev: "UBUNTU", impostor: "DEBIAN" },
    { dev: "ANDROID", impostor: "IOS" },
    { dev: "FLUTTER", impostor: "REACT NATIVE" },
    { dev: "TAILWIND", impostor: "BOOTSTRAP" },
    { dev: "SASS", impostor: "LESS" },
    { dev: "WEBPACK", impostor: "VITE" },
    { dev: "NPM", impostor: "YARN" },
    { dev: "FIGMA", impostor: "SKETCH" },
    { dev: "JIRA", impostor: "TRELLO" },
    { dev: "SLACK", impostor: "DISCORD" },
    { dev: "SCRUM", impostor: "KANBAN" },
    { dev: "FRONTEND", impostor: "BACKEND" },
    { dev: "API", impostor: "SDK" },
    { dev: "HTTP", impostor: "HTTPS" },
    { dev: "TCP", impostor: "UDP" },
    { dev: "IPV4", impostor: "IPV6" },
    { dev: "DNS", impostor: "DHCP" },
    { dev: "VPN", impostor: "PROXY" },
    { dev: "FIREWALL", impostor: "ANTIVIRUS" },
    { dev: "PHISHING", impostor: "MALWARE" },
    { dev: "RANSOMWARE", impostor: "SPYWARE" },
    { dev: "TOKEN", impostor: "COOKIE" },
    { dev: "JWT", impostor: "OAUTH" },
    { dev: "HASH", impostor: "CRIPTOGRAFIA" },
    { dev: "ARRAY", impostor: "LISTA" },
    { dev: "PILHA", impostor: "FILA" },
    { dev: "CLASSE", impostor: "OBJETO" },
    { dev: "FUNCAO", impostor: "METODO" },
    { dev: "VARIAVEL", impostor: "CONSTANTE" },
    { dev: "STRING", impostor: "CHAR" },
    { dev: "INTEGER", impostor: "FLOAT" },
    { dev: "BOOLEAN", impostor: "NULL" },
    { dev: "LOOP", impostor: "RECURSAO" },
    { dev: "COMPILADOR", impostor: "INTERPRETADOR" },
    { dev: "BUG", impostor: "FEATURE" },
    { dev: "COMMIT", impostor: "PUSH" },
    { dev: "MERGE", impostor: "REBASE" },
    { dev: "BRANCH", impostor: "FORK" },
    { dev: "DEPLOY", impostor: "ROLLBACK" },
    { dev: "SERVIDOR", impostor: "CLIENTE" },
    { dev: "CLOUD", impostor: "ON-PREMISE" },
    { dev: "SSD", impostor: "HD" },
    { dev: "RAM", impostor: "ROM" },
    { dev: "CPU", impostor: "GPU" },
    { dev: "BIOS", impostor: "UEFI" },
    { dev: "TERMINAL", impostor: "CONSOLE" },
    { dev: "BASH", impostor: "POWERSHELL" },
    { dev: "SQL", impostor: "NOSQL" },
    { dev: "PRIMARY KEY", impostor: "FOREIGN KEY" },
    { dev: "INNER JOIN", impostor: "LEFT JOIN" },
    { dev: "SELECT", impostor: "INSERT" },
    { dev: "UPDATE", impostor: "DELETE" },
    { dev: "FRAMEWORK", impostor: "BIBLIOTECA" },
    { dev: "ALGORITMO", impostor: "FLUXOGRAMA" },
    { dev: "BINARIO", impostor: "HEXADECIMAL" },
    { dev: "PIXEL", impostor: "VETOR" },
    { dev: "RGB", impostor: "CMYK" },
    { dev: "PNG", impostor: "JPG" },
    { dev: "SVG", impostor: "GIF" },
    { dev: "MP3", impostor: "WAV" },
    { dev: "MP4", impostor: "AVI" },
    { dev: "ZIP", impostor: "RAR" },
    { dev: "WIFI", impostor: "BLUETOOTH" },
    { dev: "USB", impostor: "HDMI" },
    { dev: "TECLADO", impostor: "MOUSE" },
    { dev: "MONITOR", impostor: "PROJETOR" },
    { dev: "NOTEBOOK", impostor: "DESKTOP" },
    { dev: "TABLET", impostor: "SMARTPHONE" },
    { dev: "INTELIGENCIA ARTIFICIAL", impostor: "MACHINE LEARNING" },
    { dev: "CHATGPT", impostor: "GEMINI" },
    { dev: "BLOCKCHAIN", impostor: "BITCOIN" },
    { dev: "VR", impostor: "AR" },
    { dev: "UNITY", impostor: "UNREAL" },
    { dev: "C++", impostor: "C#" },
    { dev: "PHP", impostor: "LARAVEL" },
    { dev: "DJANGO", impostor: "FLASK" },
    { dev: "SPRING", impostor: "HIBERNATE" },
    { dev: "ELASTICSEARCH", impostor: "SOLR" },
    { dev: "KAFKA", impostor: "RABBITMQ" },
    { dev: "TERRAFORM", impostor: "ANSIBLE" }
];

let indicesPalavrasUsadas = [];

function sortearParPalavrasSemRepeticao() {
    if (indicesPalavrasUsadas.length >= listaPalavras.length) {
        indicesPalavrasUsadas = [];
    }

    let indiceSorteado;
    do {
        indiceSorteado = Math.floor(Math.random() * listaPalavras.length);
    } while (indicesPalavrasUsadas.includes(indiceSorteado));

    indicesPalavrasUsadas.push(indiceSorteado);
    return listaPalavras[indiceSorteado];
}

/*VARIÁVEIS DO JOGO*/
let usuarioLogadoEmail = "";

let charactersDatabase = [];
let selectedPlayersList = [];

let currentPlayerIndex = 0;
let currentCharIndex = 0;
let totalPlayersCount = 4;

let totalRounds = 3;
let currentRound = 1;

let revealPlayerIndex = 0;
let estaMostrandoPalavra = false;

let parPalavrasAtual = null;
let indiceImpostorSorteado = -1;

let votos = [];
let votePlayerIndex = 0;
let selectedVoteIndex = null;

let roundResultType = null;
let guessSubmitted = false;
let isSaving = false;

/*GERENCIAMENTO DE TELAS E BOTÃO DE CONFIG */
function irParaTela(id) {
    const modal = document.getElementById("game-settings-modal");
    if (modal) {
        modal.classList.add("hidden");
    }

    const countdown = document.getElementById("countdown-overlay");
    if (countdown) {
        countdown.classList.add("hidden");
    }

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const tela = document.getElementById(id);

    if (tela) {
        tela.classList.add("active");
    }

    atualizarEstadoBotaoConfig(id);
}

function atualizarEstadoBotaoConfig(screenId) {
    let btnConfig = document.getElementById("settings-trigger-btn");

    if (!btnConfig) {
        btnConfig = document.createElement("button");
        btnConfig.id = "settings-trigger-btn";
        btnConfig.className = "settings-trigger-btn";
        btnConfig.innerHTML = "⚙️";
        btnConfig.onclick = abrirModalConfig;
        document.body.appendChild(btnConfig);
    }

    const loginScreen = document.getElementById("screen-login");
    const isLoginActive = loginScreen && (
        screenId === "screen-login" ||
        loginScreen.classList.contains("active") ||
        window.getComputedStyle(loginScreen).display !== "none"
    );

    if (isLoginActive) {
        btnConfig.style.display = "none";
        fecharModalConfig();
        return;
    }

    btnConfig.style.display = "flex";

    if (screenId === "screen-menu") {
        configurarMenuConfiguracoes("menu");
    } else {
        configurarMenuConfiguracoes("jogo");
    }
}

function configurarMenuConfiguracoes(tipo) {
    const modalMainView = document.getElementById("settings-main-view");
    if (!modalMainView) return;

    if (tipo === "menu") {
        modalMainView.innerHTML = `
            <h2>MENU DE PERFIL</h2>
            <p>Gerencie sua conta e histórico</p>
            <button type="button" class="pixel-btn btn-purple" onclick="abrirHistoricoNoModal()">VER HISTÓRICO</button>
            <button type="button" class="pixel-btn" onclick="fecharModalConfig()">[ FECHAR ]</button>
        `;
    } else {
        modalMainView.innerHTML = `
            <h2>MENU RÁPIDO</h2>
            <p>O QUE DESEJA FAZER?</p>
            <button type="button" class="pixel-btn" onclick="mostrarConfirmacaoSaida()">> VOLTAR AO MENU</button>
            <button type="button" class="pixel-btn btn-purple" onclick="fecharModalConfig()">[ RETORNAR AO JOGO ]</button>
        `;
    }
}

async function abrirHistoricoNoModal() {
    tocarClique();
    const modalMainView = document.getElementById("settings-main-view");
    if (!modalMainView) return;

    modalMainView.innerHTML = `
        <h2>HISTÓRICO</h2>
        <div style="max-height: 180px; overflow-y: auto; margin: 10px 0;">
            <table class="history-table" style="width:100%; border-collapse: collapse; font-size: 8px;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #3b2361; padding: 6px;">VENCEDOR</th>
                        <th style="border: 1px solid #3b2361; padding: 6px;">PONTOS</th>
                    </tr>
                </thead>
                <tbody id="modal-history-rows">
                    <tr><td colspan="2" style="border: 1px solid #3b2361; padding: 6px;">Carregando...</td></tr>
                </tbody>
            </table>
        </div>
        <button class="pixel-btn" onclick="configurarMenuConfiguracoes('menu')">[ VOLTAR ]</button>
    `;

    const tbody = document.getElementById("modal-history-rows");
    if (!tbody || !usuarioLogadoEmail) return;

    const { data, error } = await supabaseClient
        .from("historico_partidas")
        .select("*")
        .eq("usuario_email", usuarioLogadoEmail)
        .order("id", { ascending: false })
        .limit(6);

    if (error || !data || data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="2" style="border: 1px solid #3b2361; padding: 6px;">Nenhuma partida salva.</td></tr>`;
        return;
    }

    tbody.innerHTML = data.map(partida => `
        <tr>
            <td style="border: 1px solid #3b2361; padding: 6px; text-align: center;">${escapeHtml(partida.vencedor ?? "—")}</td>
            <td style="border: 1px solid #3b2361; padding: 6px; text-align: center;">${escapeHtml(String(partida.pontuacao ?? "—"))}</td>
        </tr>
    `).join("");
}

function abrirModalConfig() {
    tocarClique();
    const modal = document.getElementById("game-settings-modal");
    if (modal) {
        const mainView = document.getElementById("settings-main-view");
        const confirmView = document.getElementById("settings-confirm-view");
        if (mainView) {
            mainView.classList.remove("hidden");
            if (document.getElementById("screen-menu")?.classList.contains("active")) {
                configurarMenuConfiguracoes("menu");
            } else {
                configurarMenuConfiguracoes("jogo");
            }
        }
        if (confirmView) confirmView.classList.add("hidden");
        modal.classList.remove("hidden");
    }
}

function fecharModalConfig() {
    tocarClique();
    const modal = document.getElementById("game-settings-modal");
    if (modal) {
        modal.classList.add("hidden");
    }
}

function mostrarConfirmacaoSaida() {
    tocarClique();
    const modal = document.getElementById("game-settings-modal");
    if (modal) modal.classList.remove("hidden");
    const mainView = document.getElementById("settings-main-view");
    const confirmView = document.getElementById("settings-confirm-view");
    if (mainView) mainView.classList.add("hidden");
    if (confirmView) confirmView.classList.remove("hidden");
}

function voltarMenuPrincipalConfig() {
    tocarClique();
    const mainView = document.getElementById("settings-main-view");
    const confirmView = document.getElementById("settings-confirm-view");
    if (confirmView) confirmView.classList.add("hidden");
    if (mainView) mainView.classList.remove("hidden");
}

function retornarAoMenuPrincipal() {
    tocarClique();
    fecharModalConfig();
    irParaTela("screen-menu");
}

/*LOGIN E HISTÓRICO*/
async function fazerLogin() {
    tocarClique();
    iniciarMusicaFundo();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Preencha e-mail e senha.");
        return;
    }

    usuarioLogadoEmail = email;
    irParaTela("screen-menu");
}

function deslogar() {
    usuarioLogadoEmail = "";

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    irParaTela("screen-login");
}

/*CONFIGURAÇÃO DOS JOGADORES*/
function iniciarConfiguracaoPersonagens() {
    totalPlayersCount = Number(
        document.getElementById("select-qtd-jogadores").value
    );

    totalRounds = Number(
        document.getElementById("select-qtd-rodadas").value
    );

    charactersDatabase = [...masterCharactersDatabase];

    selectedPlayersList = [];

    currentPlayerIndex = 0;
    currentCharIndex = 0;

    irParaTela("screen-character-select");

    updateFifaCard();
}

function updateFifaCard() {
    if (charactersDatabase.length === 0) {
        return;
    }

    currentCharIndex =
        (currentCharIndex + charactersDatabase.length) %
        charactersDatabase.length;

    const character = charactersDatabase[currentCharIndex];

    document.getElementById("selection-header").innerText =
        `ESCOLHA DO JOGADOR ${currentPlayerIndex + 1}`;

    document.getElementById("fifa-char-name").innerText =
        character.name.toUpperCase();

    document.getElementById("custom-player-name").value =
        character.name;

    document.getElementById("fifa-char-trait").innerText =
        character.trait;

    const img = document.getElementById("fifa-char-img");

    img.onerror = function () {
        console.warn("Imagem não encontrada:", character.img);
    };

    img.src = character.img;
}

function atualizarNomeAoDigitar(valor) {
    document.getElementById("fifa-char-name").innerText =
        (valor.trim() || "PERSONAGEM").toUpperCase();
}

function nextChar() {
    if (!charactersDatabase.length) return;

    currentCharIndex =
        (currentCharIndex + 1) % charactersDatabase.length;

    updateFifaCard();
}

function prevChar() {
    if (!charactersDatabase.length) return;

    currentCharIndex =
        (currentCharIndex - 1 + charactersDatabase.length) %
        charactersDatabase.length;

    updateFifaCard();
}

function confirmarEscolhaPersonagem() {
    if (!charactersDatabase.length) return;

    const character = charactersDatabase[currentCharIndex];

    const name =
        document.getElementById("custom-player-name").value.trim() ||
        character.name;

    const nomeDuplicado = selectedPlayersList.some(player =>
        player.name.toLowerCase() === name.toLowerCase()
    );

    if (nomeDuplicado) {
        alert("Use nomes diferentes para cada jogador.");
        return;
    }

    selectedPlayersList.push({
        name,
        trait: character.trait,
        img: character.img,
        score: 0
    });

    charactersDatabase.splice(currentCharIndex, 1);

    currentPlayerIndex++;

    if (currentPlayerIndex < totalPlayersCount) {
        currentCharIndex %= charactersDatabase.length;
        updateFifaCard();
    } else {
        iniciarNovaRodada(true);
    }
}

function voltarEscolhaPersonagem() {
    if (currentPlayerIndex === 0) {
        irParaTela("screen-menu");
        return;
    }

    currentPlayerIndex--;
    const ultimoJogador = selectedPlayersList.pop();

    const personagemOriginal = masterCharactersDatabase.find(
        c => c.img === ultimoJogador.img
    );

    if (personagemOriginal) {
        charactersDatabase.unshift(personagemOriginal);
    }

    currentCharIndex = 0;
    updateFifaCard();

    document.getElementById("custom-player-name").value = ultimoJogador.name;
    document.getElementById("fifa-char-name").innerText =
        ultimoJogador.name.toUpperCase();
}

/* INÍCIO DE CADA RODADA */
function iniciarNovaRodada(primeira = false) {
    if (primeira) {
        currentRound = 1;

        selectedPlayersList.forEach(player => {
            player.score = 0;
        });
    }

    parPalavrasAtual = sortearParPalavrasSemRepeticao();

    indiceImpostorSorteado =
        Math.floor(Math.random() * selectedPlayersList.length);

    selectedPlayersList.forEach((player, index) => {
        player.isImpostor = index === indiceImpostorSorteado;

        player.word = player.isImpostor
            ? parPalavrasAtual.impostor
            : parPalavrasAtual.dev;
    });

    revealPlayerIndex = 0;
    estaMostrandoPalavra = false;

    votos = [];
    votePlayerIndex = 0;
    selectedVoteIndex = null;

    roundResultType = null;
    guessSubmitted = false;

    const guessInput = document.getElementById("impostor-guess");
    if (guessInput) guessInput.value = "";

    const guessFeedback = document.getElementById("guess-feedback");
    if (guessFeedback) {
        guessFeedback.innerText = "";
        guessFeedback.className = "";
    }

    const wordReveal = document.getElementById("word-reveal");
    if (wordReveal) wordReveal.classList.add("hidden");

    const btnGuess = document.getElementById("btn-guess");
    if (btnGuess) btnGuess.disabled = false;

    const btnContinue = document.getElementById("btn-continue-round");
    if (btnContinue) btnContinue.disabled = true;

    prepararRevelacaoJogador();

    irParaTela("screen-reveal");
}

/* REVELAÇÃO PRIVADA DAS PALAVRAS*/
function prepararRevelacaoJogador() {
    const player = selectedPlayersList[revealPlayerIndex];

    document.getElementById("reveal-player-title").innerText =
        `VEZ DE: ${player.name.toUpperCase()}`;

    document.getElementById("secret-word-box").innerText =
        "[ ÁREA SEGURA ]";

    document.getElementById("secret-word-box").style.color = "#ffffff";

    document.getElementById("btn-action-reveal").innerText =
        "VER PALAVRA";

    estaMostrandoPalavra = false;
}

function gerenciarCliqueRevelar() {
    const player = selectedPlayersList[revealPlayerIndex];

    const box = document.getElementById("secret-word-box");
    const button = document.getElementById("btn-action-reveal");

    if (!estaMostrandoPalavra) {
        box.innerText = player.word;

        box.style.color = player.isImpostor
            ? "#ff007f"
            : "#00ffcc";

        button.innerText = "OCULTAR E PASSAR";

        estaMostrandoPalavra = true;

    } else {
        revealPlayerIndex++;

        if (revealPlayerIndex < selectedPlayersList.length) {
            prepararRevelacaoJogador();
        } else {
            dispararContagemInicial();
        }
    }
}

/*CONTAGEM REGRESSIVA*/
function dispararContagemInicial() {
    document.getElementById("round-indicator").innerText =
        `RODADA ${currentRound} DE ${totalRounds}`;

    document.getElementById("chosen-starter").innerText =
        `RODADA ${currentRound} — BOA SORTE!`;

    const overlay = document.getElementById("countdown-overlay");
    const timer = document.getElementById("timer-number");

    overlay.classList.remove("hidden");

    let number = 3;

    timer.innerText = number;

    const interval = setInterval(() => {
        number--;

        timer.innerText = number > 0 ? number : "JÁ!";

        if (number <= 0) {
            clearInterval(interval);

            setTimeout(() => {
                overlay.classList.add("hidden");
                irParaTela("screen-game");
            }, 500);
        }
    }, 1000);
}

/* SISTEMA DE VOTAÇÃO CORRIGIDO*/
function abrirVotacao() {
    votos = [];
    votePlayerIndex = 0;
    selectedVoteIndex = null;

    atualizarTextoTelaPassar();
    irParaTela("screen-vote-pass");
}

function atualizarTextoTelaPassar() {
    const player = selectedPlayersList[votePlayerIndex];
    if (!player) return;

    const nomeMaiusculo = player.name.toUpperCase();

    const titleEl = document.getElementById("pass-voter-title-name");
    const boxEl = document.getElementById("pass-voter-box-name");

    if (titleEl) titleEl.innerText = nomeMaiusculo;
    if (boxEl) boxEl.innerText = nomeMaiusculo;
}

window.iniciarVotoDoJogadorAtual = function() {
    renderizarVotoAtual();
    irParaTela("screen-voting");
};

function renderizarVotoAtual() {
    const player = selectedPlayersList[votePlayerIndex];
    if (!player) return;

    const content = document.getElementById("voting-content");
    const button = document.getElementById("btn-confirm-vote");

    if (!content || !button) return;

    content.innerHTML = "";
    button.disabled = true;
    selectedVoteIndex = null;

    const title = document.createElement("p");
    title.className = "voting-player-title";
    title.textContent = `${player.name.toUpperCase()}, QUEM É O IMPOSTOR?`;
    content.appendChild(title);

    let alvosDisponiveis = selectedPlayersList
        .map((target, index) => ({ target, index }))
        .filter(item => item.index !== votePlayerIndex);

    const cards = document.createElement("div");
    cards.className = "voting-cards";
    cards.dataset.count = alvosDisponiveis.length;

    for (let i = alvosDisponiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alvosDisponiveis[i], alvosDisponiveis[j]] = [alvosDisponiveis[j], alvosDisponiveis[i]];
    }

    alvosDisponiveis.forEach(({ target, index }) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "vote-card";

        const img = document.createElement("img");
        img.src = target.img;
        img.alt = target.name;

        img.onerror = function () {
            this.style.display = "none";
        };

        const name = document.createElement("span");
        name.textContent = target.name.toUpperCase();

        card.appendChild(img);
        card.appendChild(name);

        card.addEventListener("click", () => {
            document.querySelectorAll(".vote-card").forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");
            selectedVoteIndex = index;
            button.disabled = false;
        });

        cards.appendChild(card);
    });

    content.appendChild(cards);

    const progressEl = document.getElementById("vote-progress");
    if (progressEl) {
        progressEl.innerText =
            `VOTO ${votePlayerIndex + 1} DE ${selectedPlayersList.length} | VOTOS REGISTRADOS: ${votos.length}`;
    }
}

function registrarVotoAtual() {
    if (selectedVoteIndex === null) {
        alert("Selecione um personagem para votar.");
        return;
    }

    const button = document.getElementById("btn-confirm-vote");
    if (button) button.disabled = true;

    selectedPlayersList[votePlayerIndex].votoAtual = selectedVoteIndex;

    votos.push({
        voter: votePlayerIndex,
        target: selectedVoteIndex
    });

    votePlayerIndex++;

    if (votePlayerIndex < selectedPlayersList.length) {
        atualizarTextoTelaPassar();
        irParaTela("screen-vote-pass");
    } else {
        calcularResultadoVotacao();
    }
}

/*LÓGICA DE PONTUAÇÃO (ATUALIZADA)*/
function calcularResultadoVotacao() {
    const totalJogadores = selectedPlayersList.length;
    const votosContagem = {};

    selectedPlayersList.forEach(p => {
        const votadoId = p.votoAtual;
        if (votadoId !== undefined && votadoId !== null) {
            votosContagem[votadoId] = (votosContagem[votadoId] || 0) + 1;
        }
    });

    let maxVotos = -1;
    let maisVotados = [];
    for (const [id, count] of Object.entries(votosContagem)) {
        if (count > maxVotos) {
            maxVotos = count;
            maisVotados = [Number(id)];
        } else if (count === maxVotos) {
            maisVotados.push(Number(id));
        }
    }

    const houveEmpate = maisVotados.length > 1;
    const maisVotadoId = maisVotados.length === 1 ? maisVotados[0] : null;

    const maioriaNecessaria = Math.floor(totalJogadores / 2) + 1;
    const impostorachado =
        !houveEmpate &&
        maisVotadoId === indiceImpostorSorteado &&
        (votosContagem[indiceImpostorSorteado] || 0) >= maioriaNecessaria;

    const impostor = selectedPlayersList[indiceImpostorSorteado];
    const resultBox = document.getElementById("round-result-text");
    const pointsBox = document.getElementById("round-points");
    let pontosLinhas = [];

    if (impostorachado) {
        selectedPlayersList.forEach((p, idx) => {
            if (idx !== indiceImpostorSorteado && p.votoAtual === indiceImpostorSorteado) {
                p.score += 4;
                pontosLinhas.push(`<p>${escapeHtml(p.name)}: +4 pontos por acertar o voto.</p>`);
            }
        });
        roundResultType = "caught";
        if (resultBox) {
            resultBox.innerHTML = `<p>O IMPOSTOR ERA:</p><h2>${escapeHtml(impostor.name.toUpperCase())}</h2><p class="text-success">A MAIORIA DESCOBRIU O IMPOSTOR!</p>`;
        }
    } else {
        selectedPlayersList[indiceImpostorSorteado].score += 5;
        pontosLinhas.push(`<p>${escapeHtml(impostor.name)}: +5 pontos por escapar da maioria.</p>`);

        selectedPlayersList.forEach((p, idx) => {
            if (idx !== indiceImpostorSorteado && p.votoAtual === indiceImpostorSorteado) {
                p.score += 2;
                pontosLinhas.push(`<p>${escapeHtml(p.name)}: +2 pontos pelo voto certeiro.</p>`);
            }
        });
        roundResultType = "escaped";
        if (resultBox) {
            resultBox.innerHTML = `<p>O IMPOSTOR ERA:</p><h2>${escapeHtml(impostor.name.toUpperCase())}</h2><p class="text-danger">O IMPOSTOR ENGANOU A MAIORIA!</p>`;
        }
    }

    if (pointsBox) {
        pointsBox.innerHTML =
            `<p class="points-title">PONTOS DA RODADA</p>` +
            (pontosLinhas.length ? pontosLinhas.join("") : `<p>Nenhum ponto distribuído nesta etapa.</p>`);
    }

    irParaTela("screen-result");
}

/* PALPITE DO IMPOSTOR */
function enviarPalpiteImpostor() {
    if (guessSubmitted) return;

    const input = document.getElementById("impostor-guess");
    if (!input) return;

    const guess = input.value.trim();

    if (!guess) {
        alert("Digite seu palpite.");
        return;
    }

    guessSubmitted = true;

    const impostor = selectedPlayersList[indiceImpostorSorteado];

    const limparTexto = texto => {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toUpperCase()
            .trim();
    };

    const acertou =
        limparTexto(guess) === limparTexto(parPalavrasAtual.dev);

    const feedback = document.getElementById("guess-feedback");

    if (acertou) {
        impostor.score += 3;

        if (feedback) {
            feedback.innerText = "ACERTOU! +3 PONTOS EXTRAS.";
            feedback.className = "text-success";
        }

        const roundPoints = document.getElementById("round-points");
        if (roundPoints) {
            roundPoints.innerHTML += `
                <p>${escapeHtml(impostor.name)}: +3 pontos pelo palpite correto.</p>
            `;
        }

    } else {
        if (feedback) {
            feedback.innerText = "NÃO FOI DESSA VEZ!";
            feedback.className = "text-danger";
        }
    }

    const devWordEl = document.getElementById("revealed-dev-word");
    if (devWordEl) devWordEl.innerText = parPalavrasAtual.dev;

    const wordRevealEl = document.getElementById("word-reveal");
    if (wordRevealEl) wordRevealEl.classList.remove("hidden");

    const btnGuess = document.getElementById("btn-guess");
    if (btnGuess) btnGuess.disabled = true;

    const btnContinue = document.getElementById("btn-continue-round");
    if (btnContinue) btnContinue.disabled = false;
}

/* PLACAR*/
function continuarAposRodada() {
    if (!guessSubmitted) return;

    renderizarPlacar(false);
}

function renderizarPlacar(final = false) {
    const sorted = [...selectedPlayersList].sort(
        (a, b) => b.score - a.score
    );

    document.getElementById("scoreboard-title").innerText =
        final ? "RESULTADO FINAL" : "PLACAR DA PARTIDA";

    document.getElementById("scoreboard-subtitle").innerText =
        final
            ? `CAMPEONATO ENCERRADO — ${totalRounds} RODADAS`
            : `RODADA ${currentRound} DE ${totalRounds}`;

    const content = document.getElementById("scoreboard-content");

    content.innerHTML = sorted.map((player, index) => `
        <div class="score-line ${index === 0 ? "winner" : ""}">
            <span>${index + 1}º ${escapeHtml(player.name)}</span>
            <strong>${player.score} PTS</strong>
        </div>
    `).join("");

    const lastRound = currentRound >= totalRounds;

    document.getElementById("btn-next-round").style.display =
        !final && !lastRound ? "block" : "none";

    document.getElementById("btn-finish-match").style.display =
        final || lastRound ? "block" : "none";

    irParaTela("screen-scoreboard");
}

function iniciarProximaRodada() {
    currentRound++;

    iniciarNovaRodada(false);
}

/* ENCERRAMENTO DO CAMPEONATO*/
async function salvarHistorico(winner) {
    if (!usuarioLogadoEmail || !winner) return;

    const { error } = await supabaseClient
        .from("historico_partidas")
        .insert([
            {
                usuario_email: usuarioLogadoEmail,
                vencedor: winner.name,
                pontuacao: winner.score
            }
        ]);

    if (error) {
        throw error;
    }
}

window.encerrarCampeonato = async function() {
    if (isSaving) return;
    if (!selectedPlayersList || selectedPlayersList.length === 0) return;

    const btnFinalizar = document.getElementById("btn-finish-match");
    if (btnFinalizar) {
        btnFinalizar.disabled = true;
        btnFinalizar.innerText = "SALVANDO...";
    }

    isSaving = true;

    const highestScore = Math.max(
        ...selectedPlayersList.map(player => player.score)
    );

    const winner = selectedPlayersList
        .filter(player => player.score === highestScore)
        .sort((a, b) => a.name.localeCompare(b.name))[0];

    try {
        await salvarHistorico(winner);
    } catch (error) {
        console.warn("Erro ao salvar histórico, prosseguindo para a tela de vencedor:", error);
    }

    const nameEl = document.getElementById("winner-name-display");
    const scoreEl = document.getElementById("winner-score-display");

    if (nameEl) nameEl.innerText = winner.name.toUpperCase();
    if (scoreEl) scoreEl.innerText = `${winner.score} PONTOS`;

    irParaTela("screen-winner");

    isSaving = false;
    if (btnFinalizar) {
        btnFinalizar.disabled = false;
        btnFinalizar.innerText = "FINALIZAR E SALVAR";
    }
};

/* OUTRAS FUNÇÕES E UTILITÁRIOS*/
function confirmarSaidaPartida() {
    if (confirm("Deseja sair? O campeonato atual será perdido.")) {
        irParaTela("screen-menu");
    }
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

/*EFEITO MATRIX*/
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("matrix-canvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/";

    const fontSize = 14;

    let width;
    let height;
    let drops = [];

    function resetCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        drops = Array(
            Math.floor(width / fontSize)
        ).fill(1);
    }

    function drawMatrix() {
        ctx.fillStyle = "rgba(13, 17, 23, 0.08)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#00ffcc";
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((drop, index) => {
            const character = characters.charAt(
                Math.floor(Math.random() * characters.length)
            );

            ctx.fillText(
                character,
                index * fontSize,
                drop * fontSize
            );

            if (
                drop * fontSize > height &&
                Math.random() > 0.975
            ) {
                drops[index] = 0;
            } else {
                drops[index]++;
            }
        });
    }

    resetCanvas();

    window.addEventListener("resize", resetCanvas);

    setInterval(drawMatrix, 90);
});

/* SOM DE CLIQUE GLOBAL*/
document.addEventListener("click", event => {
    if (event.target.closest("button")) {
        tocarClique();
    }
});
