<template>
  <div>
    <div class="back" @click="$router.push('/cursos')">
      <svg width="26" height="26" style="cursor: pointer">
        <image
          xlink:href="../assets/icons/back-icon.svg"
          width="26"
          height="26"
        />
      </svg>
      <span>Retornar lista de cursos</span>
    </div>
    <div class="container-video">
      <VideoComponent :idVideo="idContent" />
    </div>
    <div>
      <div class="c-info">
        <h4>
          Atenção! No canto superior direito do vídeo, clicando na opção
          destacada abaixo, você terá acesso à playlist completa do curso.
        </h4>
        <img src="../assets/imgs/info.png" alt="info" />
      </div>
    </div>
  </div>
</template>
<script>
import VideoComponent from "@/components/VideoComponent.vue";
export default {
  name: "CourseByIdView",
  components: {
    VideoComponent,
  },
  data() {
    return {
      idContent: "",
    };
  },
  mounted() {
    this.idContent = this.$route.fullPath.split("/")[2];
  },
};
</script>
<style scoped>
.container-video {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-bottom: 1px solid #ffffff1f;
}
.c-info {
  padding: 10px;
}
.c-info > h4 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}
.back {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .c-info > h4 {
    font-size: 12px;
    font-weight: 300;
    line-height: 1.4;
  }
  .c-info > img {
    max-width: 100%;
  }
}
</style>
