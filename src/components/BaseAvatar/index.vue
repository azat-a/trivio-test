<template>
  <div
  class="base-avatar"
  :class="{
    'base-avatar--clickable': clickable,
  }"
  @click="clickHandler">
    <img
    v-if="src"
    :src="src"
    alt=""
    class="base-avatar__img"/>

    <div
    v-else
    class="base-avatar__placeholder"
    :style="{
      'background-color': backgroundColor,
    }">
      <div class="base-avatar__initials">
        {{ initials }}
      </div>
    </div>
  </div>
</template>

<script>
import palette from './palette.js';

export default {
  name: 'BaseAvatar',
  props: {
    src: {
      type: Object,
      default: null,
    },
    username: {
      type: String,
      default: null,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    clickHandler() {
      if (this.clickable) {
        this.$emit('click');
      }
    },
  },
  computed: {
    initials() {
      if (!this.username) {
        return '';
      }
      return this.username
        .split(' ')
        .map((word) => word[0])
        .join('');
    },
    backgroundColor() {
      const hash = this.username
        .split('')
        .reduce((prev, char) => prev + char.charCodeAt(), 0);

      return palette[hash % palette.length];
    },
  },
};

</script>

<style lang="scss">
  .base-avatar {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    overflow: hidden;
  }

  .base-avatar--clickable {
    cursor: pointer;
  }

  .base-avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .base-avatar__placeholder {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .base-avatar__initials {
    font-weight: 500;
    user-select: none;
  }
</style>
