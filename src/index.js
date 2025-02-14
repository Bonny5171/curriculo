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
        <h1>iBonny RedTeam</h1>
        
        <!-- Navegação principal -->
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/seu-perfil" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a></li>
                <li><a href="mailto:seuemail@example.com">
                    <i class="fas fa-envelope"></i> E-mail
                </a></li>
                <li><a href="https://seusite.com" target="_blank">
                    <i class="fas fa-globe"></i> Meu Site
                </a></li>
            </ul>
        </nav>

        <!-- Seção de frutas -->
        <section class="skills-section">
            <h2>Skills</h2>
            <ul class="fruit-list">
                <li>Apple</li>
                <li>Banana</li>
                <li>Grape</li>
                <li>Orange</li>
                <li>Pineapple</li>
            </ul>
        </section>

        <section class="info-section">
          <h2>Experience</h2>

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
                <li>Project 1: bla bla bla xpto...</li>
                <li>Project 2: mais bla bla bla xpto...</li>
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
