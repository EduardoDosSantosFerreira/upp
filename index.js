
// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="src/assets/img/logo-removebg-preview.png" alt="Logo" class="me-2" style="height: 50px;">
      <span>UPP Alarmes</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse fullscreen-navbar" id="navbarNav">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Serviços
          </a>
          <ul class="dropdown-menu" style="font-size: 1.5rem;">
            <li><a class="dropdown-item" href="src/pages/cerca.html">Cerca Elétrica</a></li>
            <li><a class="dropdown-item" href="src/pages/monitoramento.html">Monitoramento 24H</a></li>
            <li><a class="dropdown-item" href="src/pages/cftv.html">Sistema de CFTV</a></li>
            <li><a class="dropdown-item" href="src/pages/portao.html">Motor para portão</a></li>
            <li><a class="dropdown-item" href="src/pages/interfonia.html">Interfonia e fechaduras</a></li>
            <li><a class="dropdown-item" href="src/pages/ronda.html">Ronda Noturna</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="src/pages/orçamento.html">Orçamento</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="src/pages/segurança.html">Dicas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contato">Contato</a>
        </li>
      </ul>
      <form class="d-flex" role="search" onsubmit="return pesquisar(event)">
        <input class="form-control me-2" type="search" id="termoPesquisa" placeholder="Pesquisar" aria-label="Pesquisar">
        <button class="btn btn-outline-light" type="submit">Pesquisar</button>
      </form>
      <button class="btn-close btn-close-white position-absolute top-0 end-0 m-3" id="closeNavbar" aria-label="Close"></button>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<div class="hero">
  <div class="hero-overlay"></div>
  <div class="container text-center hero-content">
    <h1 class="hero-title">UPP</h1>
    <p class="hero-subtitle">Especialistas em segurança patrimonial e monitoramento 24/7.</p>
    <a href="#servicos" class="hero-button">Nossos Serviços</a>
  </div>
</div>

<!-- Services Section -->
<div id="servicos" class="services py-5">
  <div class="container">
    <h2 class="text-center mb-5">O Que Oferecemos?</h2>
    <br>
    <br>
    <br>
    <div class="row text-center">

      <!-- Card 1 -->
      <div class="col-md-4 col-sm-6" data-aos="fade-down">
        <div class="card border-0">
          <i class="fas fa-thumbs-up fa-3x text-primary mb-3"></i>
          <div class="card-body">
            <h5 class="card-title">Maior Índice de Aprovação</h5>
            <p class="card-text">Temos um índice muito grande de aprovação de clientes satisfeitos com nossos serviços.</p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4 col-sm-6" data-aos="fade-down">
        <div class="card border-0">
          <i class="fas fa-shield-alt fa-3x text-success mb-3"></i>
          <div class="card-body">
            <h5 class="card-title">Seriedade e Segurança</h5>
            <p class="card-text">Cumprimos nossa missão de proteger você com equipamentos de alta tecnologia.</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4 col-sm-6" data-aos="fade-down">
        <div class="card border-0">
          <i class="fas fa-laptop-code fa-3x text-warning mb-3"></i>
          <div class="card-body">
            <h5 class="card-title">Tecnologia e Eficiência</h5>
            <p class="card-text">Trabalhamos com tecnologia de ponta para garantir a melhor experiência ao cliente.</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-5">
    <div class="container py-5">
      <div class="row align-items-center">
        <!-- Botão esquerdo -->
        <div class="col-1 text-center">
          <span class="arrow-btn fs-3" id="prevBtn">❮</span>
        </div>
        <!-- Conteúdo principal -->
        <div class="col-10">
          <div class="carousel-main text-center">
            <img id="mainImage" src="src/assets/img/carrosel/1.jpg" alt="Imagem Principal">
            <div class="carousel-info mt-4">
              <h3 id="mainTitle">Com Áreas Externas</h3>
              <p id="mainDescription">Segurança completa para residências com grandes áreas externas.</p>
            </div>
          </div>
        </div>
        <!-- Botão direito -->
        <div class="col-1 text-center">
          <span class="arrow-btn fs-3" id="nextBtn">❯</span>
        </div>
      </div>
  
      <!-- Navegação inferior -->
      <div class="carousel-nav d-flex justify-content-center mt-4">
        <img src="src/assets/img/carrosel/1.jpg" alt="Com Áreas Externas" data-index="0" class="active mx-2">
        <img src="src/assets/img/carrosel/2.webp" alt="Apartamentos" data-index="1" class="mx-2">
        <img src="src/assets/img/carrosel/3.jpg" alt="Segunda Casa" data-index="2" class="mx-2">
        <img src="src/assets/img/carrosel/4.jpg" alt="Aluguel" data-index="3" class="mx-2">
        <img src="src/assets/img/carrosel/5.webp" alt="Animais Domésticos" data-index="4" class="mx-2">
        <img src="src/assets/img/carrosel/6.jpg" alt="Crianças Pequenas" data-index="5" class="mx-2">
        <img src="src/assets/img/carrosel/7.webp" alt="Crianças Adolescentes" data-index="6" class="mx-2">
      </div>
    </div>
  
    <script>
      // Dados do carrossel
      const carouselData = [
        {
          image: "src/assets/img/carrosel/1.jpg",
          title: "Com Áreas Externas",
          description: "Segurança completa para residências com grandes áreas externas."
        },
        {
          image: "src/assets/img/carrosel/2.webp",
          title: "Apartamentos",
          description: "Proteção reforçada na porta da frente. Detectores avançados para janelas."
        },
        {
          image: "src/assets/img/carrosel/3.jpg",
          title: "Segunda Casa",
          description: "Monitoramento remoto para maior tranquilidade em sua segunda residência."
        },
        {
          image: "src/assets/img/carrosel/4.jpg",
          title: "Aluguel",
          description: "Segurança eficiente para imóveis alugados, sem complicações."
        },
        {
          image: "src/assets/img/carrosel/5.webp",
          title: "Animais Domésticos",
          description: "Soluções para proteger seu lar sem comprometer o conforto dos pets."
        },
        {
          image: "src/assets/img/carrosel/6.jpg",
          title: "Crianças Pequenas",
          description: "Tecnologia para proteger os mais pequenos em ambientes domésticos."
        },
        {
          image: "src/assets/img/carrosel/7.webp",
          title: "Crianças Adolescentes",
          description: "Proteção adaptada para o dia a dia de adolescentes."
        }
      ];
  
      const mainImage = document.getElementById("mainImage");
      const mainTitle = document.getElementById("mainTitle");
      const mainDescription = document.getElementById("mainDescription");
      const thumbnails = document.querySelectorAll(".carousel-nav img");
  
      let currentIndex = 0;
  
      // Função para atualizar o carrossel
      function updateCarousel(index) {
        const data = carouselData[index];
        mainImage.src = data.image;
        mainTitle.textContent = data.title;
        mainDescription.textContent = data.description;
  
        thumbnails.forEach((thumb, i) => {
          thumb.classList.toggle("active", i === index);
        });
      }
  
      // Navegação pelos botões
      document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
        updateCarousel(currentIndex);
      });
  
      document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carouselData.length;
        updateCarousel(currentIndex);
      });
  
      // Navegação pelas miniaturas
      thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
          currentIndex = index;
          updateCarousel(currentIndex);
        });
      });
    </script>

    <br>
    <br>
    <br>
    <div class="row align-items-center">
      <!-- Text Content -->
      <div class="col-md-6" data-aos="fade-down">
        <h4>Produtos de Qualidade</h4>
        <p>Trabalhamos com centrais nacionais de alta qualidade, garantindo segurança e eficiência.</p>
      </div>
      
      <!-- Image Content -->
      <div class="col-md-6 text-center">
        <img src="src/assets/img/intelbras.png" alt="Imagem de Central de Alarmes" class="img-fluid" style="width: 65%;">
      </div>
    </div>

    <hr class="my-5">
    <br>
    <br>
    <br>
    <div class="row align-items-center" id="cameras">
      <!-- Image Content -->
      <div class="col-md-6 text-center">
        <img src="src/assets/img/camera01.jpg" alt="Ícone Alarme" class="img-fluid" style="width: 100%;">
      </div>
      <!-- Text Content -->
      <div class="col-md-6" data-aos="fade-down">
        <h4>Sistema de Câmeras Eficiênte</h4>
        <p>Monitore seu imóvel 24h com nossa equipe altamente treinada. Consulte nossos vendedores!</p>
        <div>
          <a href="src/pages/alarmes.html" class="btn btn-primary me-2">Sobre os Alarmes</a>
          <a href="src/pages/orçamento.html" class="btn btn-outline-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </div>

    <hr class="my-5">
    <br>
    <br>
    <br>
    <div class="row align-items-center" id="monitoramento">
      <!-- Text Content -->
      <div class="col-md-6" data-aos="fade-down">
        <h4>Segurança com Monitoramento Remoto</h4>
        <p data-aos="fade-down">Oferecemos soluções completas para monitoramento remoto de segurança com tecnologia de ponta.</p>
        <div>
          <a href="src/pages/monitoramento.html" class="btn btn-primary me-2">Mais sobre Monitoramento</a>
          <a href="src/pages/orçamento.html" class="btn btn-outline-primary">Solicitar Orçamento</a>
        </div>
      </div>
      
      <!-- Image Content -->
      <div class="col-md-6 text-center">
        <img src="src/assets/img/drone.jpg" alt="Monitoramento Remoto" class="img-fluid" style="width: 100%;">
      </div>
    </div>

    <hr class="my-5">
    <br>
    <br>
    <br>
    <div class="row align-items-center" id="cerca">
      <!-- Image Content -->
      <div class="col-md-6 text-center">
        <img src="src/assets/img/eletric.jpg" alt="Cerca Elétrica" class="img-fluid" style="width: 100%;">
      </div>
      <!-- Text Content -->
      <div class="col-md-6" data-aos="fade-down">
        <h4>Cerca Elétrica de Alta Voltagem</h4>
        <p>Cercas elétricas de alta qualidade com voltagem controlada, garantindo máxima segurança e proteção para seu imóvel.</p>
        <div>
          <a href="src/pages/cerca.html" class="btn btn-primary me-2">Mais sobre Cercas Elétricas</a>
          <a href="src/pages/orçamento.html" class="btn btn-outline-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </div>

    <hr class="my-5">
    <br>
    <br>

    <div class="comparison-section">
      <h2>Alarmes com gravação de imagens é melhor do que apenas uma câmera</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Recursos</th>
              <th>UPP</th>
              <th>Câmeras</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monitoramento 24h por profissionais especializados</td>
              <td class="check">✔️</td>
              <td class="cross">❌</td>
            </tr>
            <tr>
              <td>Atuação imediata (resposta em menos de 60s)</td>
              <td class="check">✔️</td>
              <td class="cross">❌</td>
            </tr>
            <tr>
              <td>Detecção antecipada</td>
              <td class="check">✔️</td>
              <td class="cross">❌</td>
            </tr>
            <tr>
              <td>Acesso a imagens em tempo real (controle)</td>
              <td class="check">✔️</td>
              <td class="check">✔️</td>
            </tr>
            <tr>
              <td>Inibição</td>
              <td class="check">✔️</td>
              <td class="cross">❌</td>
            </tr>
            <tr>
              <td>Fala/Escuta diretamente do local</td>
              <td class="check">✔️</td>
              <td class="info">ℹ️</td>
            </tr>
            <tr>
              <td>Proteção contra corte de energia elétrica</td>
              <td class="check">✔️</td>
              <td class="cross">❌</td>
            </tr>
            <tr>
              <td>Sirene independente sem fio</td>
              <td class="check">✔️</td>
              <td class="cross">❌</td>
            </tr>
          </tbody>
        </table>
        <a href="src/pages/orçamento.html">
        <button class="calculate-btn">Calcule Agora</button></a>
      </div>
    </div>
  
    <hr class="my-5">
    <br>
    <br>
    <br>
    <div class="row align-items-center" id="monitoramento">
      <!-- Text Content -->
      <div class="col-md-6" data-aos="fade-down">
        <h4>Fechaduras Digitais e Interfones</h4>
        <p>Oferecemos soluções modernas em fechaduras digitais com biometria e interfones com vídeo para maior segurança e praticidade no seu dia a dia. Instalação profissional e garantia de qualidade.</p>
        <div>
          <a href="src/pages/interfonia.html" class="btn btn-primary me-2">Mais sobre Fechaduras</a>
          <a href="src/pages/orçamento.html" class="btn btn-outline-primary">Solicitar Orçamento</a>
        </div>
      </div>
      
      <!-- Image Content -->
      <div class="col-md-6 text-center">
        <img src="src/assets/img/interfone.jpg" alt="Fechadura Digital e Interfone" class="img-fluid" style="width: 100%;">
      </div>
    </div>

    <hr class="my-5">
    <br>
    <br>
    <br>
    <div class="row align-items-center" id="portao">
      <!-- Image Content -->
      <div class="col-md-6 text-center">
        <img src="src/assets/img/portao.jpg" alt="Portão Automático" class="img-fluid" style="width: 100%;">
      </div>
      <!-- Text Content -->
      <div class="col-md-6" data-aos="fade-down">
        <h4>Automação de Portões</h4>
        <p>Oferecemos soluções completas em automação de portões, controles remotos e sistemas de segurança integrados.</p>
        <div>
          <a href="src/pages/portao.html" class="btn btn-primary me-2">Mais sobre Automação</a>
          <a href="src/pages/orçamento.html" class="btn btn-outline-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="container my-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="src/assets/img/cam1.webp" alt="Alarme" class="img-fluid rounded" style="width: 100%;">
      </div>
      <div class="col-md-6" data-aos="fade-down">
        <h4>Sistemas de alarme</h4>
        <p>Segurança profissional para sua casa ou empresa com a UPP Alarmes. Soluções modernas e monitoramento 24h.</p>
        <div>
          <a href="src/pages/cftv.html" class="btn btn-primary me-2">Fale com a UPP</a>
          <a href="src/pages/orçamento.html" class="btn btn-outline-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </div>
  </div>

  <div class="monitoring-services">
    <h2>Serviços de Monitoramento 24H</h2>
    <div class="service-cards">
      <div class="card">
        <i class="icon fas fa-user-shield"></i>
        <h3>Monitoramento profissional</h3>
        <p>
          Com o serviço de monitoramento profissional 24h da UPP, sua proteção contra invasões é reforçada por uma equipe de profissionais que recebem o disparo, analisam o caso e acionam a polícia em caso de invasão.
        </p>
      </div>
      <div class="card">
        <i class="icon fas fa-mobile-alt"></i>
        <h3>Sua segurança em qualquer lugar</h3>
        <p>
          Gerencie o seu sistema de alarme da UPP de qualquer lugar do mundo através do aplicativo, acessível pelo seu smartphone ou tablet, e solicite fotos em tempo real.
        </p>
      </div>
      <div class="card">
        <i class="icon fas fa-bell"></i>
        <h3>Botão SOS</h3>
        <p>
          Ao acionar o botão SOS, enviamos a ajuda necessária rapidamente: polícia, bombeiros ou ambulância.
        </p>
      </div>
      <div class="card">
        <i class="icon fas fa-stopwatch"></i>
        <h3>Resposta em Poucos Segundos</h3>
        <p>
          O monitoramento da UPP é capaz de atuar em menos de 60 segundos, dependendo da ocorrência.
        </p>
      </div>
      <div class="card">
        <i class="icon fas fa-infinity"></i>
        <h3>Garantia Vitalícia do Produto</h3>
        <p>
          Os dispositivos UPP possuem garantia vitalícia, incluindo atualizações de software para novos serviços.
        </p>
      </div>
      <div class="card">
        <i class="icon fas fa-tools"></i>
        <h3>Serviço Técnico</h3>
        <p>
          Clientes UPP têm acesso a atendimento técnico 24 horas por dia, garantindo total suporte.
        </p>
      </div>
    </div>
  </div>

  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Nossos clientes recomendam a UPP</h2>
      <div class="row g-4">
        <!-- Card 1 -->
        <div class="col-md-4">
          <div class="testimonial-card p-4 shadow-sm">
            <p class="card-text">O sistema funciona muito bem, é moderno e fácil de usar. Recomendo para todos que buscam segurança eficiente.</p>
            <div class="d-flex align-items-center mt-3">
              <img src="https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ana Clara" class="rounded-circle me-3">
              <div>
                <h6 class="mb-0">Roberto Armando</h6>
                <small>32 anos</small>
              </div>
            </div>
            <div class="mt-2">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="col-md-4">
          <div class="testimonial-card p-4 shadow-sm">
            <p class="card-text">Tive uma tentativa de invasão, mas o sistema agiu rápido e chamou a polícia. Excelente serviço.</p>
            <div class="d-flex align-items-center mt-3">
              <img src="https://images.pexels.com/photos/788567/pexels-photo-788567.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Marisa" class="rounded-circle me-3">
              <div>
                <h6 class="mb-0">Marisa Silva</h6>
                <small>61 anos</small>
              </div>
            </div>
            <div class="mt-2">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="col-md-4">
          <div class="testimonial-card p-4 shadow-sm">
            <p class="card-text">Estou muito satisfeito com o atendimento e a qualidade do produto. Recomendo de olhos fechados.</p>
            <div class="d-flex align-items-center mt-3">
              <img src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pedro" class="rounded-circle me-3">
              <div>
                <h6 class="mb-0">Pedro Antônio</h6>
                <small>65 anos</small>
              </div>
            </div>
            <div class="mt-2">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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