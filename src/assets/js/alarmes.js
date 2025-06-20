// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
<main>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
<div class="container">
<a class="navbar-brand d-flex align-items-center" href="#">
<img src="../assets/img/logo-removebg-preview.png" alt="Logo" class="me-2" style="height: 50px;">
<span>UPP Alarmes</span>
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse fullscreen-navbar" id="navbarNav">
<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
<li class="nav-item">
    <a class="nav-link" href="../../index.html">Home</a>
  </li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Serviços
</a>
<ul class="dropdown-menu" style="font-size: 1.5rem;">
  <li><a class="dropdown-item" href="../pages/cerca.html">Cerca Elétrica</a></li>
  <li><a class="dropdown-item" href="../pages/monitoramento.html">Monitoramento 24H</a></li>
  <li><a class="dropdown-item" href="../pages/cftv.html">Sistema de CFTV</a></li>
  <li><a class="dropdown-item" href="../pages/portao.html">Motor para portão</a></li>
  <li><a class="dropdown-item" href="../pages/interfonia.html">Interfonia e fechaduras</a></li>
  <li><a class="dropdown-item" href="../pages/ronda.html">Ronda Noturna</a></li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="../pages/orçamento.html">Orçamento</a>
</li>
<li class="nav-item">
<a class="nav-link" href="../pages/segurança.html">Dicas</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#contato">Contato</a>
</li>
</ul>
<button class="btn-close btn-close-white position-absolute top-0 end-0 m-3" id="closeNavbar" aria-label="Close"></button>
</div>
</div>
</nav>
<div class="container">
<div class="about-section">
<h1>Sistema de Câmeras e Alarmes - UPP</h1>
<p>Soluções completas em segurança para sua tranquilidade</p>
</div>

<h2><i class="bi bi-question-circle icon"></i>Como Funciona?</h2>
<p>
Com os sistemas de Alarme da UPP, você e sua família podem aproveitar a vida com segurança e confiabilidade. Nossos sistemas incluem opções com ou sem fio, funcionando em redes de 110V ou 220V e equipados com baterias de emergência para operação mesmo sem energia elétrica.
</p>
<p>
Quando um evento é detectado, o sistema emite um alarme sonoro no local e um alerta silencioso para nossa Central de Monitoramento 24 horas. Isso garante uma resposta rápida e eficiente, incluindo o contato com o cliente e autoridades competentes.
</p>

<h2><i class="bi bi-check-circle icon"></i>Principais Benefícios</h2>
<div class="features">
<div class="feature-item">
    <i class="bi bi-gear icon"></i>
    <p>Sistema totalmente programável</p>
</div>
<div class="feature-item">
    <i class="bi bi-bell icon"></i>
    <p>Tempo de sirene programável</p>
</div>
<div class="feature-item">
    <i class="bi bi-exclamation-circle icon"></i>
    <p>Pânico imediato silencioso ou não</p>
</div>
<div class="feature-item">
    <i class="bi bi-toggle-off icon"></i>
    <p>Desativação temporária de sensores</p>
</div>
<div class="feature-item">
    <i class="bi bi-battery-charging icon"></i>
    <p>Carregador de baterias automático</p>
</div>
<div class="feature-item">
    <i class="bi bi-telephone icon"></i>
    <p>Discador telefônico incorporado</p>
</div>
<div class="feature-item">
    <i class="bi bi-clock icon"></i>
    <p>Programação 24h para qualquer setor</p>
</div>
</div>
</main>
    `;

    document.body.appendChild(div);
}

adicionarLoginAoDOM();