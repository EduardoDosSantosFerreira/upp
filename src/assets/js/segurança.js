
// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
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
            <a class="nav-link" href="../pages/orçamento.html">Contato</a>
          </li>
        </ul>
        <button class="btn-close btn-close-white position-absolute top-0 end-0 m-3" id="closeNavbar" aria-label="Close"></button>
      </div>
    </div>
</nav>
<main><div class="container">
  <h1><i class="fas fa-shield-alt"></i> Dicas de Segurança - UPP Alarmes</h1>

  <div class="dica">
      <i class="fas fa-door-closed"></i>
      <h3>Portas e Janelas</h3>
      <p>Certifique-se de que todas as portas e janelas estejam trancadas antes de sair ou dormir. Considere instalar fechaduras adicionais.</p>
  </div>

  <div class="dica">
      <i class="fas fa-lightbulb"></i>
      <h3>Iluminação</h3>
      <p>Mantenha áreas externas bem iluminadas, usando sensores de movimento e temporizadores para maior segurança.</p>
  </div>

  <div class="dica">
      <i class="fas fa-camera"></i>
      <h3>Sistema de Alarme</h3>
      <p>Mantenha o sistema de alarme sempre ativado, mesmo durante ausências curtas, e faça manutenções regulares.</p>
  </div>

  <div class="dica">
      <i class="fas fa-key"></i>
      <h3>Controle de Acesso</h3>
      <p>Evite esconder chaves em locais óbvios. Certifique-se de que apenas pessoas confiáveis tenham acesso às chaves.</p>
  </div>

  <div class="dica">
      <i class="fas fa-users"></i>
      <h3>Vizinhança Vigilante</h3>
      <p>Fortaleça laços com vizinhos. Uma comunidade vigilante pode prevenir crimes.</p>
  </div>

  <div class="dica">
      <i class="fas fa-mobile-alt"></i>
      <h3>Contatos de Emergência</h3>
      <p>Tenha uma lista de contatos importantes, incluindo polícia, bombeiros e o suporte da UPP Alarmes.</p>
  </div>
</div></main>
    `;

    document.body.appendChild(div);
}

adicionarLoginAoDOM();