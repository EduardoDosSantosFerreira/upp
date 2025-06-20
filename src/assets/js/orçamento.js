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
            <a class="nav-link" href="../pages/contato.html">Contato</a>
          </li>
        </ul>
        <button class="btn-close btn-close-white position-absolute top-0 end-0 m-3" id="closeNavbar" aria-label="Close"></button>
      </div>
    </div>
</nav>
        <div class="container">
            <div class="contact-form">
                <div class="about-section">
                    <h3 class="text-center mb-3">Sobre Nós</h3>
                    <p class="text-center" style="font-size: 1.5rem;">
                        A UPP Alarmes é especializada em soluções de segurança e monitoramento de alta qualidade para residências e empresas.
                        Informe os seus dados para que entre em contato imediato com a equipe.
                    </p>
                </div>

                <h2 class="form-title">Entre em Contato</h2>
                <form action="#" method="POST">
                    <div class="mb-3">
                        <label for="nome" class="form-label">
                            <i class="fas fa-user"></i> Nome Completo
                        </label>
                        <input type="text" class="form-control" id="nome" name="nome" required>
                    </div>
                
                    <div class="mb-3">
                        <label for="email" class="form-label">
                            <i class="fas fa-envelope"></i> E-mail
                        </label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                
                    <div class="mb-3">
                        <label for="telefone" class="form-label">
                            <i class="fas fa-phone"></i> Telefone
                        </label>
                        <input type="tel" class="form-control" id="telefone" name="telefone" required>
                    </div>
                
                    <div class="mb-3">
                        <label for="endereco" class="form-label">
                            <i class="fas fa-map-marker-alt"></i> Endereço
                        </label>
                        <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Ex: Rua, Número" required>
                    </div>
                
                    <div class="mb-3">
                        <label for="bairro" class="form-label">
                            <i class="fas fa-building"></i> Bairro
                        </label>
                        <input type="text" class="form-control" id="bairro" name="bairro" required>
                    </div>
                
                    <div class="mb-3">
                        <label for="residencia" class="form-label">
                            <i class="fas fa-home"></i> Nome/Número da Residência
                        </label>
                        <input type="text" class="form-control" id="residencia" name="residencia" placeholder="Ex: Casa 1, Apto 202" required>
                    </div>
                
                    <div class="mb-3">
                        <label for="assunto" class="form-label">
                            <i class="fas fa-list-alt"></i> Assunto
                        </label>
                        <select class="form-select" id="assunto" name="assunto" required>
                            <option value="">Selecione um assunto</option>
                            <option value="Cerca Elétrica">Cerca Elétrica</option>
                            <option value="Monitoramento 24H">Monitoramento 24H</option>
                            <option value="Sistema de CFTV">Sistema de CFTV</option>
                            <option value="Motor para portão">Motor para portão</option>
                            <option value="Interfonia e fechaduras">Interfonia e fechaduras</option>
                            <option value="Ronda Noturna">Ronda Noturna</option>
                            <option value="Outros Serviços">Outros Serviços</option>
                            <option value="Manutenção">Manutenção</option>
                        </select>
                    </div>
                
                    <div class="mb-3">
                        <label for="mensagem" class="form-label">
                            <i class="fas fa-comment-dots"></i> Mensagem
                        </label>
                        <textarea class="form-control" id="mensagem" name="mensagem" rows="5" required></textarea>
                    </div>
                
                    <button type="submit" class="btn btn-primary w-100" style="background-color: #bb9f00; border-color: #bb9f00;">
                        <i class="fas fa-paper-plane"></i> Enviar Mensagem
                    </button>
                </form>
                
                <div class="contact-info">
                    <h3>Outras formas de contato</h3>
                    <p><i class="bi bi-telephone-fill contact-icon"></i>(13) 3427-9491</p>
                    <p><i class="bi bi-whatsapp contact-icon"></i>(13) 99661-9441</p>
                    <p><i class="bi bi-geo-alt-fill contact-icon"></i>São Paulo/SP</p>
                    
                    <div class="social-links">
                        <a href="facebook.com/uppalarmesmonitoramento/" target="_blank">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/upp_alarmes/" target="_blank">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://wa.me/5513996619491" target="_blank">
                            <i class="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  
    `;

    document.body.appendChild(div);
}

adicionarLoginAoDOM();