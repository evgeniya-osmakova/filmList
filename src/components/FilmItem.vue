<template>
  <div class="film-item">
      <div class="back-link" @click="onBackClick">
        <img :src="arrow" alt="arrow" class="back-link__img">
        <div class="back-link__text">Назад с списку</div>
      </div>
      <div v-if="loadingState === 'failed'" class="error">
        Ошибка загрузки данных
      </div>
      <div v-if="loadingState === 'requested'">
        <Loader />
      </div>
      <div v-if="loadingState === 'finished' && !film">
        <NotFound />
      </div>
      <div v-if="loadingState === 'finished' && film" class="selected-film">
        <Film
            :film_data="film"
        />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import arrow from '../assets/img/arrow.svg';
import Film from './elements/Film.vue';
import NotFound from './elements/NotFound.vue';
import Loader from './elements/Loader.vue';

export default {
  name: 'FilmItem',
  components: { Loader, NotFound, Film },
  props: {},
  data() {
    return {
      arrow,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters([
      'CURRENT_FILM',
      'LOADING_STATE',
    ]),
    film() {
      return this.CURRENT_FILM;
    },
    loadingState() {
      return this.LOADING_STATE;
    },
  },
  methods: {
    ...mapActions([
      'GET_FILM_ITEM',
      'CLEAR_DATA',
    ]),
    onBackClick() {
      this.CLEAR_DATA();
      this.$router.push({ name: 'FilmList' });
    },
  },
  mounted() {
    if (!this.film.id) {
      this.GET_FILM_ITEM(this.id);
    }
  },
};
</script>

<style scoped lang="scss">
  .film-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
  }

  .back-link {
    max-width: 1400px;
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 42px;
    padding-bottom: 22px;
    border-bottom: 1px solid $color-gray;
    text-decoration: none;
    cursor: pointer;

    &__text {
      color: $color-light-red;
      border-bottom: 1px solid $color-light-red;
      display: inline-block;
      line-height: 0.85;
      @include bodyText;
      font-size: 20px;
      margin-left: 20px;
    }
  }

  .selected-film {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 1400px;
    width: calc(100% - 40px);
    padding-top: 40px;
  }

  .error {
    color: $color-light-red;
    @include h3Text;
    text-align: center;
    margin-top: 50px;
  }
</style>
