<template>
  <div style="display: flex; flex-wrap: wrap; gap: 10px">
    <div class="card-curso" v-for="(item, index) in cursos" :key="index">
      <div class="card-curso-header">
        <div class="card-img-curso">
          <img :src="item.logo" alt="logo" />
        </div>
        <h4 class="card-title">{{ item.title }}</h4>
      </div>
      <div class="container-description">
        <p class="description-curso">
          {{ item.description }}
        </p>
        <button @click="$router.push(`/curso/${item.id}`)">Acessar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardCurso",
  props: ["cursos"],
};
</script>
<style scoped>
.card-curso {
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid #ffffff1f;
  border-radius: 6px;
  overflow: hidden;
}
.card-curso-header {
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid #36383a;
  margin-bottom: 10px;
  padding: 0px 10px;
  height: 80px;
  overflow: none;
}
.description-curso {
  padding: 10px;
  font-weight: 300;
  line-height: 1.3;
}
.card-img-curso {
  width: 60px;
  height: 60px;
}
.card-img-curso > img {
  width: 100%;
}
button {
  width: 100%;
  padding: 5px 15px;
  border-radius: 8px;
  background: rgb(54 129 255);
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  border-radius: 0px 0px 6px 6px;
}
.container-description {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media only screen and (max-width: 700px) {
  .description-curso {
    font-size: 12px;
    line-height: 1.4;
  }
  .card-img-curso {
    width: 40px;
    height: 40px;
  }
  .card-img-curso > img {
    width: 100%;
  }
  .card-title {
    font-size: 14px;
  }
  h1 {
    font-size: 14px;
  }
  button {
    font-size: 12px;
  }
}
</style>
