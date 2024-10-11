<template>
  <div class="home">
    <div class="section-welcome">
      <h1>Todos os cursos</h1>
      <CardCurso :cursos="cursos" />
    </div>
  </div>
</template>

<script>
import CardCurso from "@/components/CardCurso.vue";
import { cursos } from "../mocks/mocks.js";

export default {
  name: "CourseView",
  components: {
    CardCurso,
  },
  data() {
    return {
      cursos,
    };
  },
};
</script>
<style scoped>
.home {
}
.section-welcome {
  padding: 10px;
}
.section-welcome > h1 {
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 20px;
}
</style>
