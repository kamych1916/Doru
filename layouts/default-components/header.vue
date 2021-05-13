<template>
  <header class="header py-20 px-0">
    <div class=" card-wrap align-items-center  d-flex justify-content-between">
      <nuxt-link to="/">
        <h2>Doru</h2>
      </nuxt-link>
      <!-- <div class="events d-flex">
        <a href="javascript:void(0);" class="header-btn mx-10 py-12">
          <i class="bi bi-plus-circle"></i>
          <span class="events-text ml-10">Добавить лекарство</span>
        </a>
        <a href="javascript:void(0);" class="header-btn mx-10 py-12">
          <i class="bi bi-person-circle"></i>
          <span class="events-text ml-10">Войти</span>
        </a>
      </div> -->
    </div>
  </header>
</template>

<script></script>

<style lang="scss">
.header {
  // background: white;
  // box-shadow: 0 2px 3px #dcdcdc;
  .header-btn {
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    border-radius: 35px;
    transition: 0.2s;
    background-color: #3a8ee6;
    &:hover {
      background-color: #66b1ff;
    }
  }
  .events-text {
    display: inline;
  }
  @media (max-width: 767px) {
    .events-text {
      display: none;
    }
  }
}
</style>
