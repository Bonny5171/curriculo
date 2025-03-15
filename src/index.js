const express = require('express');
const app = express();
const port = 3000;

// Servindo arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('src'));

app.get('/', (req, res) => {
  
  res.send(`
    <html>
      <head>
        <title>iBonny RedTeam</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/7710/7710428.png">
        <link rel="stylesheet" href="/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
      </head>
      <body>
        <h1>Luis Fernando Araujo</h1>
        
        <!-- Navegação principal -->
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/luis-fernando-araujo-20532131/" target="_blank">
                    <i class="fab fa-linkedin"></i> <span>LinkedIn</span>
                </a></li>
                <li><a href="https://wa.me/5511988716005" target="_blank">
                    <i class="fab fa-whatsapp"></i> <span>98871-6005</span>
                </a></li>
                <li><a href="mailto:luis.city@gmail.com">
                    <i class="fas fa-envelope"></i> <span>E-mail</span>
                </a></li>
                <li><a href="https://seusite.com" target="_blank">
                    <i class="fas fa-globe"></i> <span>Meu Site</span>
                </a></li>
                <li><a href="https://github.com/Bonny5171" target="_blank">
                    <i class="fab fa-github"></i> <span>Github</span>
                </a></li>
            </ul>
        </nav>

        <!-- Seção de frutas -->
        <section class="skills-section">
            <h2>Skills</h2>
            <ul>
                <li>Sales Force</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>React-Native</li>
                <li>Expo</li>
                <li>Redux</li>
                <li>Electronjs</li>
                <li>Angular</li>
                <li>jQuery</li>
                <li>API Rest</li>
                <li>SQLite</li>
                <li>NoSql</li>
                <li>Postgresql</li>
                <li>Git</li>
                <li>Jest</li>
                <li>Appium</li>
                <li>Unit Testing</li>
                <li>OOP</li>
                <li>Cloud Computing</li>
                <li>Heroku</li>
                <li>Google Firebase</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>CodePush</li>

                <li>App Store</li>
                <li>Google Play</li>

                <li>HashiCorp Terraform</li>
                <li>HashiCorp Vault</li>

                <li>Datadog Monitoring</li>
                <li>Mezmo Logs</li>

                <li>Cloudflare</li>
                <li>Web Application Firewall (WAF)</li>
                <li>ASP</li>
                <li>ASP.NET</li>
                <li>ASP.NET MVC</li>
                <li>C#</li>
                <li>SQL</li>
                <li>IIS Server</li>
                <li>Microservices</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Full-Stack</li>
                <li>Português, English</li>
            </ul>
        </section>

        <section class="info-section">
          <h2>Experience</h2>

          <div class="trampos">
            <div class="info-line">
                <span class="left">Programador mobile & Programador backend</span>
                <a href="https://www.cogny.co/" target="_blank"><span class="center">CognyHub</span></a>
                <span class="right">01/2022 -  08/2024</span>
            </div>
            <ul>
                <!-- PRIMEIRA FAZE, COMO DEV MOBILE -->
               <li>(MOBILE) - Atuei na manutenção e evoluções de aplicativos móvel (<b>Android</b>, <b>iOS</b>) para publico B2C. Único aplicativo móvel em Esportes que é 100% alimentado pela plataforma <b>Salesforce</b>, atendendo alguns times e sports nacionais e internacionais.
               </li>
               <li>(MOBILE) - Realizava desenvolvimento e manutenção de aplicações móvel utilizando <b>React Native</b> com <b>Firebase</b>, focando em desempenho e interfaces nativas.</li>
               <li>(MOBILE) - Utilizei ativamente os produtos <b>Google GCP e Firebase</b> como: <b>Autenticação</b>, <b>Firestore</b> (<i>NoSQL</i>), <b>Cloud Storage</b>, <b>Cloud Messaging (FCM)</b> entre outros.</li>
              <li>(MOBILE) - Discutir requisitos de negócio com time de produto e se antecipar aos riscos.</li>
              <li>(MOBILE) - Implementei soluções completas, colaborando com equipes multidisciplinares para garantir a integridade e a eficiência do sistema.</li>
              <li>(MOBILE) - Publicação de novas verões do aplicativo nas respectivas lojas: <b>Google Play Store</b> e <b>Appstoreconnect</b></li>
              <li>(MOBILE) - Publicação de novas verões do aplicativo via bundler.js com <b>CodePush</b></li>

              <!-- SEGUNDA FAZE, COMO DEV BACKEND -->
              <li>(BACKEND) - Avaliar os pré-requisitos das atividades e executá-las adotando as melhores práticas de desenvolvimento.</li>
              <li>(BACKEND) - Sólidos conhecimentos em bancos de dados relacionais <b>PostgreSQL</b> </li>
              <li>(BACKEND) - Atuação em <b>Code Review</b> gerando orientações e compliance das entregas dos engenheiros mais juniores;</li>
              <li>(BACKEND) - Conhecimento em <b>Heroku</b> como plataforma de servicos de cloud <b>PaaS</b>. Utilizado como provedor de banco de dados <b>PostgreSQL</b>, serviços e hospedagem para API's no backend. </li>
              <li>(BACKEND) - Criação e manutenção de API's garantindo a segurança, escalabilidade.</li>
              <li>(BACKEND) - Realizei integrações de APIs e serviços, consumindo e integrando <b>APIs REST</b> de terceiros.</li>
              <li>(BACKEND) - Implementar soluções de software eficazes e inovadoras, atuando com autonomia em todas as etapas do ciclo de desenvolvimento, para atender às necessidades do negócio e contribuir para o sucesso do produto.</li>
               <li>(BACKEND) - Colaborar em decisões técnicas e de arquitetura, participando na definição de tecnologias, padrões e melhorias contínuas para evolução das aplicações.</li>
            </ul>
          </div>


          <div class="trampos">
            <div class="info-line">
                <span class="left">Programador Mobile</span>
                <a href="https://everymind.uol/en/home/" target="_blank"><span class="center">Everymind</span></a>
                <span class="right">08/2018 -  12/2021</span>
            </div>
            <ul>
                <li>Participei da criação e desenvolvimento de aplicativo B2B, <b>offline-first</b> multiplataforma (<b>Android</b>, <b>iOS</b>, <b>Desktop</b>), utilizado por grandes empresas do setor calçadista e alimentício. Substituindo antigos processos, entrando em operação critica sendo a principal interface para realização de novos pedidos.</li>
                <!-- li>Colaborei em todas as etapas do ciclo de desenvolvimento, desde a concepção até a entrega do produto.</li -->
                <li>Criava e mantia interfaces de usuário complexas a partir de protótipos no <b>Figma</b>, usando <b>React</b>, <b>React Native</b>, <b>Redux</b>, <b>SQLite</b> garantindo qualidade e desempenho.</li>
                <li>Realizava analise de requisitos de negócio e traduzia em soluções eficientes para o produto.</li>
                <li>Auxiliar na identificação e resolução de problemas técnicos e de infraestrutura.</li>
                <li>Realizava consumindo de <b>APIs REST</b>, com finalidade de manter o banco de dados <b>SQLite</b> atualizado</li>
                <li>Escrevia e otimizava queries SQLite, modelando e servindo dados frescos para o frontend.</li>
                <li>Criava e mantinha testes unitários, testes de integração e end-to-end usando <b>Jest</b>, <b>Appium</b>, <b>React Testing Library</b> ou frameworks similares.</li>
                <li>Efetuava a distribuição/atualização dos aplicativos em homolog/produção e realização de testes nas aplicações (manual e automatizado).</li>
                <li>Conhecimento em boas práticas de segurança de TI e desenvolvimento seguro.</li>
                <li>Conhecimento em metodologias ágeis e ferramentas como Jira, Trello ou Notion.</li>
                <li>Capacidade de trabalhar em equipe e de forma independente, lidar com prazos e metas desafiadoras, sempre comprometido com a qualidade e a entrega de resultados.</li>

                
                

                <!-- CODE REVIEW -->
                
 
                <!-- AGIL -->
                <!-- li>- Gerenciamento intermediário de metodologias ágeis.</li -->

                <!-- REVIEW ESTIMATIVA -->
                <!-- li>Identificar e resolver problemas técnicos de forma ágil e eficiente.Requisitos:</li -->
                
                <!-- DEV FRONT -->
                <!-- li>Integrar UI/UX e recursos de animação. </li -->
                
                <!-- DEV BACK -->
                <!-- li>Realizar integrações com APIs e bancos de dados;</li -->
                <!-- li>Depurar e corrigir bugs e erros em aplicações existentes.</li -->

                <!-- MOBILE -->
                <!-- li>Experiência com desenvolvimento mobile (iOS/Android).</li -->
                
      
                <!-- TESTES COM CI/CD -->
                <!-- li>Experiência em testes automatizados, dutos CI/CD.</li -->
                <!-- li>Forte experiência com testes unitários, testes de integração e cobertura de código.</li -->
                <!-- li>Realizar testes unitários, de integração e de sistema, garantindo a qualidade e a performance do código.</li -->
                <!-- li>Experiência com testes unitários e de integração.</li -->
                <!-- li>Criação e manutenção de testes automatizados usando Jest, React Testing Library e ferramentas similares.</li -->

                <!-- CLEAN CODE  & DOC & QUALITY -->
                <!-- li>Conhecimento de práticas de desenvolvimento ágil (Scrum, Kanban).</li -->
                <!-- li>Forte compreensão das melhores práticas, princípios SOLIDOS, Código CLEAN e soluções escaláveis.</li -->
                <!-- li>Documentar o código e os sistemas desenvolvidos de forma clara e concisa.</li -->
                <!-- li>Garantir a qualidade e desempenho do código, implementando boas práticas de desenvolvimento;</li -->
                <!-- li>Conhecimento em arquitetura de software, padrões de design e boas práticas de desenvolvimento.</li -->

                <!-- BANCO DE DADOS -->
                <!-- li>Sólidos conhecimentos em bancos de dados relacionais (ex: MySQL, PostgreSQL) e NoSQL.</li -->

                <!-- INFRA -->
                <!-- li>Conhecimento de infra-estrutura de TI.</li -->

                <!-- GIT -->
                <!-- li>Forte experiência com controle de versão.</li -->
                <!-- li>Domínio de ferramentas de versionamento de código (Git).</li -->
                <!-- li>Gerenciar versionamento de código: Utilizar Git/GitHub para controle de versão, revisão de código (pull requests) e colaboração com o time.</li -->
                <!-- li>Controle de versão usando Git/GitHub com experiência em revisão e integração de código.</li -->

                <!-- LANGUAGES -->
                <!-- li>Experiência com frameworks e bibliotecas relevantes para as linguagens de programação utilizadas.</li -->
                <!-- li>Conhecimento em linguagens de programação Typescript, Javascript com Node.</li -->
                <!-- li>Domínio de linguagens de programação como Python, JavaScript, Typescript, react.JS ou Java.</li -->
                <!-- li>Programação em JavaScript e TypeScript, com aplicação de tipagem estática e boas práticas de código.</li -->

                <!-- CLOUD -->
                <!-- li>Familiaridade com Docker, Kubernetes e ambientes de cloud computing (AWS, Azure, Google Cloud).</li -->

                <!-- PATTERNERS -->
                <!-- li>Conhecimento de Padrões de Design.</li -->
                <!-- li>Conhecimento em React.js.</li -->
                <!-- li>Conhecimento em Docker, e AWS.</li -->
                <!-- li>Conhecimento em arquitetura de software e design patterns.</li -->

                <!-- SEC -->
                <!-- li>- Garantir a segurança, escalabilidade e performance dos APPS</li -->
                
                
                <!-- COMPORTAMENTAIS -->
                <!-- li>Proatividade e capacidade de solucionar problemas de forma criativa.</li -->
                <!-- li>Boa comunicação e habilidades interpessoais.</li -->
                
                <!-- MISC -->
                <!-- li>Design practical solutions to solve problems.</li -->
                <!-- li>Participate in code reviews and testing.</li -->
                <!-- li>Provide the technology for a platform that facilitates monthly requests.</li -->
                <!-- li>Work with big data and predictive analytics on a distributed system.</li -->
                <!-- li>Collaborate with the developing team, product owners, and client services, to innovate and get the tasks done.Here's</li -->

                
               
                <!-- li>Manter-se atualizado sobre novas tecnologias: Estudar e aplicar novas tendências e ferramentas do ecossistema JavaScript, React e desenvolvimento mobile.</li -->
                <!-- li>Realização de manutenção evolutiva e corretiva dos aplicativos responsáveis. Documentar procedimentos técnicos.</li -->
                
                <!-- li>Desenvolvimento avançado de interfaces web e mobile usando React.js e React Native.</li -->
                <!-- li>Desenvolvimento de aplicações responsivas e performáticas com foco em experiência do usuário (UX).</li --> 
                <!-- li>planejar, programar, testar e manter a estrutura de códigos que faz a interface entre um site, o servidor e o banco de dados.Ter conhecimento em TypeScript/JavaScript (Node.js); Serverless (AWS); React + Next.js; HTML + CSS; Padrões de Projeto; Clean Architecture.</li -->
                <!-- li>O desenvolvedor será responsável por implementar soluções completas, colaborando com equipes multidisciplinares para garantir a integridade e a eficiência do sistema.</li -->
                <!-- li>Manter-se atualizado sobre as novas tecnologias e tendências em desenvolvimento de software e arquitetura de sistemas.Experiência sólida desenvolvimento e sustentação, com participação em projetos de desenvolvimento de software em todas as etapas do ciclo de vida.</li -->
                <!-- li>Desenvolver e manter aplicações web e mobile utilizando tecnologias modernas;</li -->
                <!-- li>Experiência no desenvolvimento de aplicações inteiras a partir do zero.</li -->
                <!-- li>Trabalhar em conjunto com designers e outros desenvolvedores para criar interfaces intuitivas e funcionais;</li -->
                <!-- li>Implementar soluções de software eficazes e inovadoras, atuando com autonomia em todas as etapas do ciclo de desenvolvimento, para atender às necessidades do negócio e contribuir para o sucesso da empresa.</li -->
                <!-- li>Implementar novas funcionalidades e sistemas, utilizando as melhores práticas de desenvolvimento.</li -->
                <!-- li>Colaborar com a equipe na definição de arquiteturas e soluções técnicas.</li -->
                <!-- li>Otimizar desempenho e acessibilidade: Garantir uma experiência de usuário rápida e acessível, seguindo padrões de performance e melhores práticas de desenvolvimento.</li -->
                <!-- li>Implementar designs a partir do Figma: Traduzir protótipos em interfaces funcionais e pixel#perfect, respeitando guidelines de design e boas práticas de UX.</li -->
                <!--li>Escrever código limpo e de alta qualidade: Garantir manutenibilidade e legibilidade do código, aplicando padrões de desenvolvimento e arquitetura de software.</li-->
                <!-- li>(REPEDITO)Desenvolvimento e manutenção de aplicativos mobile multiplataforma.</li -->
            </ul>
          </div>

          <div class="trampos">
            <div class="info-line">
                <span class="left">Programador</span>
                <span class="center">Everymind</span>
                <span class="right">07/2021 -  04/2022</span>
            </div>
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                <li>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li>
                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
                <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</li>
                <li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</li>
            </ul>
          </div>

        </section>
        

        <section class="info-section">
          <h2>Education</h2>
          
          <div class="trampos">
            <div class="info-line">
                <span class="left">Bachelor of Science</span>
                <span class="center">Camegi Mellon University</span>
                <span class="right">07/2021 -  04/2022</span>
            </div>
            <ul>
                <li>Major in Electricial and Computer Engineeig</li>
              </ul>
          </div>
        </section>

        <section class="info-section">
          <h2>Projects</h2>
          
          <div class="trampos">
            <ul>
                <li>App do Clube Giro Sou Clamper</li>
                <li>App do Palmeiras/Cruzeiro/OrlandoCity </li>
                <li>TeamUp: App B2B offline-first, com todo catalogo e estoque, utilizado por promotores de venda e solicitação de novos pedidos.</li>
                <li>PediGrendene: App B2B offline-first com todo catalogo de produtos Grendene utilizado pelos representantes para tirada e acompanhamento de novos pedidos.</li>
              </ul>
          </div>
        </section>

        <section class="info-section">
          <h2>Mertorship</h2>
          
          <div class="trampos">
            <ul>
                <li>Project 1: bla bla bla xpto...</li>
                <li>Project 2: mais bla bla bla xpto...</li>
              </ul>
          </div>
        </section>

        <section class="info-section">
          <h2>Others</h2>
          
          <div class="trampos">
            <ul>
                <li>Project 1: bla bla bla xpto...</li>
                <li>Project 2: mais bla bla bla xpto...</li>
              </ul>
          </div>
        </section>

      </body>
    </html>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
