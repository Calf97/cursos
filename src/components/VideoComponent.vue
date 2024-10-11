<template>
  <iframe
    :src="src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>
<script>
export default {
  name: "VideoComponent",
  props: ["idVideo"],
  data() {
    return {
      src: "",
    };
  },
  watch: {
    idVideo() {
      this.selectVideo();
    },
  },
  methods: {
    selectVideo() {
      switch (this.idVideo) {
        case "html":
          this.src = `https://www.youtube.com/embed/videoseries?si=-QGLOTfuJPLCYYzH&amp;list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o`;
          break;
        case "vue":
          this.src = `https://www.youtube.com/embed/videoseries?si=raIazQvaO5H3VDV0&amp;list=PLcoYAcR89n-qTYqfWTGxXMnAvCqY3JF8w`;
          break;
        case "logica":
          this.src = `https://www.youtube.com/embed/videoseries?si=0O_klvHAO1amDiSV&amp;list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV`;
          break;
        case "javascript":
          this.src = `https://www.youtube.com/embed/videoseries?si=3I0a25WGfF8fL2Bf&amp;list=PLeuwJul7tRBfsm7sxnR5_7wG3KvaQ6oOt`;
          break;
        case "htmlcss":
          this.src = `https://www.youtube.com/embed/videoseries?si=iegfvsBiLqNhb8HT&amp;list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n`;
          break;
        default:
          console.log("Curso não encontrado");
      }
    },
  },
};
</script>
<style scoped>
iframe {
  width: 60%;
  height: 60vh;
}
@media only screen and (max-width: 1700px) {
  iframe {
    width: 700px;
    height: 400px;
  }
}
@media only screen and (max-width: 1090px) {
  iframe {
    width: 500px;
    height: 300px;
  }
}
@media only screen and (max-width: 700px) {
  iframe {
    width: 100%;
    height: 140px;
  }
}
</style>
