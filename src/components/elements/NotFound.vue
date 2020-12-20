<template>
  <div class="not-found">К сожалению, по вашему запросу ничего не найдено...</div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped lang="scss">

  .not-found {
    margin-top: 48px;
    @include h3Text;
    color: $color-white;
  }
</style>
