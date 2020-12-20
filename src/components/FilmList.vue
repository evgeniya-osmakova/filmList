<template>
  <section class="film-list">
    <div class="film-list__header">
      <div class="title">
        Фильмы
      </div>
      <div class="film-sort">
        <Sorting :type="'nameSort'" text="Отсортировать по названию" class="film-sort__name"/>
        <Sorting :type="'yearSort'" text="Отсортировать по году"/>
      </div>
    </div>
    <div v-if="loadingState === 'failed'" class="error">
      Ошибка загрузки данных
    </div>
    <div v-if="loadingState === 'requested'">
      <Loader />
    </div>
    <div v-if="loadingState !== 'requested'" class="film-list__catalog">
      <Film
          v-for="film in films"
          :key="film.id"
          :film_data="film"
          class="film-item"
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Film from './elements/Film.vue';
import Loader from './elements/Loader.vue';
import Sorting from './elements/Sorting.vue';

export default {
  name: 'FilmList',
  components: { Sorting, Loader, Film },
  computed: {
    ...mapGetters([
      'FILMS',
      'CURRENT_FILM',
      'LOADING_STATE',
      'SORT_TYPE',
    ]),
    films() {
      const films = this.FILMS;
      const sorting = this.SORT_TYPE;
      if (sorting === 'nameSort') {
        return [...films].sort((a, b) => (a.title > b.title ? 1 : -1));
      }
      if (sorting === 'yearSort') {
        return [...films].sort((a, b) => (a.year > b.year ? 1 : -1));
      }
      return films;
    },
    loadingState() {
      return this.LOADING_STATE;
    },
  },
  methods: {
    ...mapActions([
      'GET_FILMS',
    ]),
  },
  mounted() {
    this.GET_FILMS();
  },
};
</script>

<style scoped lang="scss">

  .film-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;

    &__header {
      max-width: 1400px;
      width: calc(100% - 40px);
      padding-bottom: 18px;
      border-bottom: 1px solid $color-gray;
    }

    &__catalog {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      max-width: 1400px;
      width: calc(100% - 40px);
      margin: 40px 0;
    }
  }

  .title {
    @include h3Text;
    margin: 40px 0 18px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .film-sort {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__name {
      margin-right: 35px;
    }

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .film-item {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
      transition: box-shadow 0.5s ease-out,
                  transform 0.5s ease-out;
    }
  }

  .error {
    color: $color-light-red;
    @include h3Text;
    text-align: center;
    margin-top: 50px;
  }
</style>
