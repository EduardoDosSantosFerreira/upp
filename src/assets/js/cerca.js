 // Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `<!-- Navbar -->
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
    <!-- Seção: Como Funciona -->
    <section class="about-section">
        <h2 class="section-title text-center mb-4">
            <i class="bi bi-lightning-fill icon"></i>Como Funciona?
        </h2>
        <p>
            A cerca elétrica é um sistema de segurança ideal para muros e grades acima de **2 metros**. 
            Ela proporciona uma **barreira física e psicológica**, inibindo tentativas de invasão.
        </p>
        <div class="list-item">
            <i class="bi bi-shield-fill-check icon"></i>
            <span><strong>Fios de aço inox:</strong> Resistentes, de alto brilho e sustentados por hastes de alumínio.</span>
        </div>
        <div class="list-item">
            <i class="bi bi-bell-fill icon"></i>
            <span><strong>Alarmes automáticos:</strong> Sirenes são disparadas ao toque ou rompimento dos fios.</span>
        </div>
        <div class="list-item">
            <i class="bi bi-lightbulb-fill icon"></i>
            <span><strong>Recursos opcionais:</strong> Pode acionar holofotes e discadoras telefônicas.</span>
        </div>
        <p>
            Em caso de contato, o invasor recebe um **pulso de alta tensão** (entre 8.000 e 11.000 volts) de forma pulsativa a cada 1,2 segundos, sem causar danos fatais. Isso torna a cerca elétrica um dos sistemas mais eficientes de proteção perimetral.
        </p>
    </section>

    <!-- Seção: Lembrete -->
    <section class="reminder-section">
        <h2 class="section-title text-center mb-4">
            <i class="bi bi-exclamation-circle-fill icon"></i>Lembrete
        </h2>
        <div class="list-item">
            <i class="bi bi-geo-alt-fill icon"></i>
            <span>
                A instalação deve ser feita em **muros ou alambrados** com mais de 2,5 metros de altura e **sem contato com vegetação**.
            </span>
        </div>
        <div class="list-item">
            <i class="bi bi-arrow-repeat icon"></i>
            <span>
                A cerca deve estar voltada para o interior da propriedade, respeitando os limites e evitando áreas públicas.
            </span>
        </div>
        <div class="list-item">
            <i class="bi bi-journal-text icon"></i>
            <span>
                Consulte as **regulamentações municipais** sobre o uso de cercas eletrificadas, pois algumas cidades podem possuir restrições específicas.
            </span>
        </div>
        <p class="text-center mt-4">
            Para garantir a segurança e eficiência, siga as orientações e consulte um profissional especializado na instalação do sistema.
        </p>
    </section>
</div>

<!-- Footer -->
<footer id="contato" class="bg-dark text-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">Sobre Nós</h5>
          <p>A UPP Alarmes é especializada em soluções de segurança e monitoramento de alta qualidade para residências e empresas.</p>
        </div>
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">Contato</h5>
          <p><i class="bi bi-telephone-fill"></i> (13) 3427-9491</p>
          <p><i class="bi bi-whatsapp"></i> (13) 99661-9441</p>
          <p><i class="bi bi-geo-alt-fill"></i> São Paulo/SP</p>
        </div>
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">Redes Sociais</h5>
          <a href="facebook.com/uppalarmesmonitoramento/" class="text-light me-3"><i class="bi bi-facebook fs-4"></i> Facebook</a><br>
          <a href="https://www.instagram.com/upp_alarmes/" class="text-light me-3"><i class="bi bi-instagram fs-4"></i> Instagram</a><br>
          <a href="#" class="text-light me-3"><i class="bi bi-linkedin fs-4"></i> LinkedIn</a><br>
          <a href="https://wa.me/5513996619491" class="text-light"><i class="bi bi-whatsapp fs-4"></i> WhatsApp</a>
        </div>
      </div>
      <hr class="my-4">
      <div class="row">
        <div class="col-12 text-center">
          <p>&copy; 2025 UPP Alarmes. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://github.com/EduardoDosSantosFerreira" target="_blank" class="text-warning">Eduardo Dos Santos Ferreira</a></p>
        </div>
      </div>
    </div>
  </footer>
    `;

    document.body.appendChild(div);
}

adicionarLoginAoDOM();