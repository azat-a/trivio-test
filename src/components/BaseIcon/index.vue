<template>
  <div
  class="base-icon"
  :class="{
    'base-icon--clickable': clickable,
  }"
  @click="clickHandler">
    <div class="base-icon__icon" v-html="icon"/>

    <div v-if="badge" class="base-icon__badge-wrapper">
      <div class="base-icon__badge">
        <div v-if="isBadgeBoolean" class="base-icon__badge__boolean"/>
        <div v-else class="base-icon__badge__number"> {{ badge }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    badge: {
      type: [Boolean, Number],
      default: false,
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
    isBadgeBoolean() {
      return typeof this.badge === 'boolean';
    },
  },
};

</script>

<style lang="scss">
  @use './mixins' as *;

  .base-icon {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    padding: 16px;

    @include base-icon-size(40px);
    @include base-icon-color(#818592);
    @include base-icon-badge-color(#818592);
  }

  .base-icon--clickable {
    cursor: pointer;
  }

  .base-icon__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .base-icon__badge-wrapper {
    position: absolute;
    bottom: 90%;
    left: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    width: 20%;
    height: 100%;
  }

  .base-icon__badge {
    width: 100%;
    height: 20%;
  }

  .base-icon__badge__boolean {
    width: 8px;
    height: 8px;
    border-radius: 50%
  }

  .base-icon__badge__number {
    width: 100%;
    height: 100%;
    font-weight: 500;
    line-height: 60%;
    user-select: none;
    font-size: 10px;
  }
</style>
