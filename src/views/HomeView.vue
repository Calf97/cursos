<template>
  <div class="home">
    <div class="section-welcome">
      <div class="welcome">
        <img src="../assets/imgs/luz.png" alt="luz" />
        <h1 class="title">Olá, Dev!</h1>
      </div>
      <p class="description">
        Esta plataforma foi desenvolvida para auxiliar iniciantes no universo da
        programação, oferecendo orientação clara e prática sobre como avançar na
        área de front-end, desde os primeiros passos até o domínio das
        principais tecnologias. Tudo é 100% gratuito, com a intenção de
        fortalecer a comunidade, compartilhando conhecimento e ajudando mais
        pessoas a ingressarem e se destacarem nesse mercado.
      </p>
      <p class="description">
        Os cursos e materiais recomendados aqui incluem
        <mark> vídeos gratuitos do YouTube </mark> e
        <mark> documentações acessíveis na internet </mark>, garantindo que você
        tenha acesso a conteúdos de qualidade para acelerar seu aprendizado.
      </p>
      <h4 class="myself">
        Meu nome é <strong>Caique</strong>, sou desenvolvedor front-end com
        experiência na área e estou aqui para ajudá-lo em sua jornada de
        aprendizado.
      </h4>
    </div>
    <div class="section-details">
      <h4>Documentações</h4>
      <div class="document" v-for="(item, index) in tecs" :key="index">
        <div class="doc-header">
          <div class="logo-tech">
            <img :src="item.imgPath" alt="logo" />
          </div>
          <h5>{{ item.title }}</h5>
        </div>
        <p class="doc-description">{{ item.description }}</p>
        <p class="link-doc">
          {{ item.doc }}
          <a :href="item.link" target="_blank">{{ item.link_name }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { tecs } from "../mocks/mocks.js";
export default {
  name: "HomeView",
  data() {
    return {
      tecs,
    };
  },
};
</script>
<style scoped>
.home {
  height: 100%;
  display: flex;
  overflow: auto;
}
.section-welcome {
  flex: 1;
  padding: 10px;
  border-right: 1px solid #ffffff1f;
}
.section-details {
  padding: 10px;
  width: 500px;
  /* overflow: auto; */
}
.section-details > h4 {
  margin-bottom: 15px;
  font-size: 20px;
}
.welcome {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 20px;
}
.welcome > img {
  width: 80px;
}
.title {
  font-size: 50px;
}
.description {
  max-width: 700px;
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 200;
}
mark {
  border-radius: 5px;
  padding: 0px 5px 0px 10px;
  margin: 0px 5px;
  font-weight: 400;
}
.myself {
  max-width: 300px;
  font-weight: 300;
}
.document {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff1f;
  border-radius: 7px;
}
.doc-header > h5 {
  font-size: 25px;
  margin-bottom: 10px;
}
.doc-header {
  display: flex;
  align-items: end;
  gap: 10px;
  margin-bottom: 8px;
}
.logo-tech {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 3px 0px #ccc;
}
.logo-tech img {
  width: 100%;
  background-size: cover;
}
.link-doc {
  margin-top: 10px;
}
a {
  text-decoration: underline;
  color: rgb(54 129 255);
}
@media only screen and (max-width: 700px) {
  .home {
    height: auto;

    display: flex;
    flex-direction: column;
  }
  .description {
    width: 100%;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 200;
  }
  .welcome img {
    width: 56px;
  }
  .welcome h1 {
    font-size: 28px;
  }
  .section-details {
    width: 100%;
  }
  .doc-description,
  .link-doc {
    font-size: 14px;
    line-height: 1.4;
  }
  .doc-header > h5 {
    font-size: 18px;
  }
  .logo-tech {
    width: 40px;
    height: 40px;
  }
  .document {
    margin-bottom: 30px;
  }
  .section-details > h4 {
    font-size: 18px;
  }
}
</style>
