<template>
  <nav class="sidebar">
    <div class="side-header">
      <h1>DevCalf</h1>
      <!-- <svg width="26" height="26" style="cursor: pointer">
        <image
          xlink:href="../assets/icons/menu-icon.svg"
          width="26"
          height="26"
        />
      </svg> -->
      <div class="circle option-desktop-label"></div>
    </div>

    <div class="flex-content">
      <ul>
        <li
          :class="['option-desktop', { active: $route.path === '/' }]"
          @click="$router.push('/')"
        >
          <svg width="26" height="26" style="cursor: pointer">
            <image
              xlink:href="../assets/icons/home-icon.svg"
              width="26"
              height="26"
            />
          </svg>
          <router-link to="/" class="option-desktop-label">Home</router-link>
        </li>
        <li
          :class="['option-desktop', { active: $route.path === '/course' }]"
          @click="$router.push('/cursos')"
        >
          <svg width="26" height="26" style="cursor: pointer">
            <image
              xlink:href="../assets/icons/course-icon.svg"
              width="26"
              height="26"
            />
          </svg>
          <router-link to="/course" class="option-desktop-label"
            >Cursos</router-link
          >
        </li>
        <!-- <li
          :class="['option-desktop', { active: $route.path === '/support' }]"
          @click="$router.push('/suporte')"
        >
          <svg width="26" height="26" style="cursor: pointer">
            <image
              xlink:href="../assets/icons/support-icon.svg"
              width="26"
              height="26"
            />
          </svg>
          <router-link to="/suporte">Suporte</router-link>
        </li> -->
        <li
          :class="['option-desktop', { active: $route.path === '/contato' }]"
          @click="$router.push('/contato')"
        >
          <svg width="26" height="26" style="cursor: pointer">
            <image
              xlink:href="../assets/icons/contact-icon.svg"
              width="26"
              height="26"
            />
          </svg>
          <router-link to="/contact" class="option-desktop-label"
            >Contato</router-link
          >
        </li>
      </ul>
      <div class="side-footer">
        <div class="avatar">
          <img src="../assets/imgs/avatar.png" alt="avatar" />
        </div>
        <h4>
          Desenvolvedor:<br />
          Caique Rosa
        </h4>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
};
</script>
<style scoped>
h1 {
  color: #f5f5f5;
}
.sidebar {
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 180px;
  background: #1a1d1f;
  color: #fff;
  overflow: hidden;
  border-right: 1px solid #ffffff1f;
}

.side-header {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2px;
  padding: 10px;
  margin: 10px 0px 60px 0px;
}
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff9800;
}
.flex-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex-center {
  display: flex;
  justify-content: center;
  padding: 10px 25px 10px 10px;
}
.option-desktop {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px;
  cursor: pointer;
  transition: all 200ms;
  margin-bottom: 10px;
}
.option-desktop:hover {
  background: rgb(54 129 255);
  width: 90%;
  border-radius: 0px 14px 14px 0px;
}

.active {
  background: rgb(54 129 255);
  width: 90%;
  border-radius: 0px 14px 14px 0px;
}

a {
  font-weight: 500;
}
.side-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
}
.side-footer > h4 {
  font-weight: 400;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #ff9800;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.avatar img {
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .sidebar {
    width: 80px;
    min-width: 70px;
  }
  .option-desktop-label {
    display: none;
  }
  .side-header > h1 {
    font-size: 16px;
  }
  .option-desktop {
    justify-content: center;
  }
  .avatar {
    display: none;
  }
  .side-footer > h4 {
    font-size: 9px;
    font-weight: 300;
  }
}
</style>
