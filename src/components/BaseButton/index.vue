<template>
  <div class="base-button">
    <button
    class="base-button__button"
    :class="{
      'base-button__button--transparent': type === 'transparent',
      'base-button__button--outlined': type === 'outlined',
      'base-button__button--filled': type === 'filled',
      'base-button__button--disabled': disabled,
    }">
      <BaseIcon
      v-if="icon"
      :icon="icon"
      class="base-button__icon"/>

      <div>
        {{ text }}
      </div>
    </button>
  </div>
</template>

<script>
import BaseIcon from 'components/BaseIcon';

export default {
  name: 'BaseButton',
  components: {
    BaseIcon,
  },
  props: {
    type: { // 'transparent', 'outlined', 'filled'
      type: String,
      default: 'transparent',
    },
    icon: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({

  }),
};

</script>

<style lang="scss">
  @use './mixins' as *;
  @use 'components/BaseIcon/mixins' as *;

  .base-button {
    height: 32px;
    @include base-button-color(black);
    @include base-button-text-transform(uppercase);
  }

  .base-button__button {
    appearance: none;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    height: 100%;
    padding: 0 8px;
    border: 1px solid transparent;
    border-radius: 8px;

    font-weight: 500;

    cursor: pointer;

    .base-button__icon {
      @include base-icon-size(24px);
    }
  }

  .base-button__button--disabled {
    filter: brightness(50%);
    cursor: default;
  }
</style>
