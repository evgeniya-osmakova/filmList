<template>
  <div class="page404">
    <div class="page404__text">
      Страницы не существует
    </div>
    <router-link :to="{ name: 'FilmList' }" class="page404__link" >
      На главную
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Page404',
};
</script>

<style scoped lang="scss">

.page404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;

  &__text {
    @include h3Text;
    color: $color-white;
  }

  &__link {
    @include h3Text;
    text-decoration: underline;
    color: $color-dark-red;
  }
}
</style>
