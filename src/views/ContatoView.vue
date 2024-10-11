<template>
  <div class="container-contato">
    <h1>Prazer, eu sou o Caique!</h1>
    <p>
      Sou desenvolvedor front-end e criei esta plataforma com o objetivo de
      reunir os melhores conteúdos gratuitos de programação em um só lugar.
      Espero que esses materiais sejam úteis para você em sua jornada de
      aprendizado. Se tiver alguma dúvida ou precisar de assistência, não hesite
      em entrar em contato comigo. Desejo a você uma ótima jornada no
      desenvolvimento! 🚀
    </p>

    <div class="midia-social">
      <a
        href="https://br.linkedin.com/in/caique-rosa-245564208"
        target="_blank"
      >
        <img src="../assets/imgs/linkedin-icon.png" alt="linkedin" />
        <span>Caique Rosa</span>
      </a>
      <a href="https://wa.me/15996870891" target="_blank">
        <img src="../assets/imgs/whatsapp.png" alt="whatsapp" />
        <span>Caique Rosa</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContatoView",
};
</script>
<style scoped>
.container-contato {
  padding: 10px;
}
h1 {
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 38px;
}
p {
  max-width: 600px;
  line-height: 1.3;
}
.midia-social {
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 50px;
}
.midia-social a {
  display: flex;
  gap: 10px;
  align-items: center;
}
.midia-social a > img {
  width: 30px;
}
@media only screen and (max-width: 700px) {
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
  }
  .midia-social {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
