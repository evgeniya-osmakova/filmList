<template>
  <div class="film">
    <div class="film__img">
      <img class="poster" :src="film_data.poster" alt="poster" />
    </div>
    <div class="film__data">
      <div class="title-and-duration">
        <div v-if="!selectedFilm" @click="selectFilm(film_data, $event)"
             class="film-title film-title--linked">
          {{film_data.title}}
        </div>
        <div v-if="selectedFilm" class="film-title">
          {{film_data.title}}
        </div>
        <div v-if="film_data.collapse.duration" class="film-duration">
          <Duration :duration="film_data.collapse.duration[0]" />
        </div>
      </div>
      <div class="film-info">
        <div v-if="film_data.year || film_data.genres" class="film-info__type">
          {{film_data.year}}, {{film_data.genres.join(', ')}}
        </div>
        <div v-if="film_data.directors" class="film-info__producer">
          режиссёр: {{film_data.directors.join(', ')}}
        </div>
        <div v-if="film_data.actors" class="film-info__actors">
            актёры:
          <div class="actors">
            {{film_data.actors.join(', ')}}
          </div>
        </div>
        <div v-if="film_data.description" class="film-description">
          {{film_data.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Duration from './Duration.vue';

export default {
  name: 'Film',
  components: { Duration },
  props: {
    film_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters([
      'CURRENT_FILM',
    ]),
    selectedFilm() {
      return this.CURRENT_FILM.id;
    },
  },
  methods: {
    ...mapActions([
      'ADD_CURRENT_FILM',
    ]),
    selectFilm(film, event) {
      event.preventDefault();
      this.ADD_CURRENT_FILM(film);
      this.$router.push({ name: 'FilmItem', params: { id: film.id } });
    },
  },
};
</script>

<style scoped lang="scss">

  .film {
    display: grid;
    grid-template-columns: 168px auto;
    max-width: 1400px;
    width: 100%;
    min-height: 168px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    margin-bottom: 24px;

    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $color-gray;
    }

    &__data {
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: $color-deep-dark-gray;
    }

    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 175px auto;
    }
  }

  .poster {
    width: 112px;
  }

  .title-and-duration {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
      flex-direction: column;
      padding-bottom: 10px;
    }
  }

  .film-title {
    @include h2Text;
    color: $color-white;
    padding-bottom: 12px;

    &--linked {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  .film-info {
    @include h4Text;
    color: $color-dark-gray;

    &__type {
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    &__producer{
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    &__actors {
      text-transform: uppercase;
      display: flex;
      align-items: flex-start;
    }
  }

  .actors {
    @include mini;
    color: $color-light-gray;
    text-transform: none;
    margin-left: 8px;
  }

  .film-description {
    margin-top: 16px;
    text-wrap: normal;
    @include bodyText;
    color: $color-white;
  }
</style>
