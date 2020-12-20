<template>
  <div class="duration">
    <div class="duration__info">{{ duration }}</div>
    <img class="duration__icon" :src="film" alt="icon">
  </div>
</template>

<script>
import film from '../../assets/img/film.svg';

export default {
  name: 'Duration',
  props: {
    duration: {
      type: String,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      film,
    };
  },
};
</script>

<style scoped lang="scss">

  .duration {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 30px;
    width: 184px;
    box-sizing: border-box;
    background: linear-gradient(-77deg,  $color-gray 95%, rgba(0, 0, 0, 0) 95%);

    &__info {
      text-align: right;
      text-transform: uppercase;
      @include h4Text;
      color: $color-black;
    }

    &__icon {
      margin-left: 12px;
    }
  }

</style>
