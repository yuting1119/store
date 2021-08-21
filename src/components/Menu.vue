<template>
  <div id="menu">
    <div class="member justify-content-end"><i class="far fa-user"></i></div>
    <h1 class="text-center">拾光角落</h1>
    <div class="menu-group">
      <label for="burger" class="burger"><i class="fas fa-bars fa-2x"></i></label>
      <input type="checkbox" id="burger" class="check-burger">
      <div class="router-menu">
        <router-link class="r-link mx-3" to="/">關於這裡</router-link> |
        <router-link class="r-link mx-3" to="/space">空間租借</router-link> |
        <router-link class="r-link mx-3" to="/book">精選雜誌</router-link> |
        <router-link class="r-link mx-3" to="/map">書店地圖</router-link>
      </div>
    </div>
  </div>
</template>
