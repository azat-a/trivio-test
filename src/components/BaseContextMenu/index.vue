<template>
  <div ref="contextMenu" class="base-context-menu">
    <slot name="visible"/>

    <transition name="base-context-menu">
      <div v-show="showContextMenu" class="base-context-menu__hidden">
        <slot name="hidden"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseContextMenu',
  props: {
    closeOnBgClick: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['open', 'close'],
  mounted() {
    this.boundBgClickCloseHandler = this.bgClickCloseHandler.bind(this);
    document.addEventListener('click', this.boundBgClickCloseHandler);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.boundBgClickCloseHandler);
  },
  methods: {
    open() {
      this.showContextMenu = true;
      this.$emit('open');
    },
    close() {
      this.showContextMenu = false;
      this.$emit('close');
    },
    bgClickCloseHandler(event) {
      if (!this.closeOnBgClick) {
        return;
      }
      if (!this.showContextMenu) {
        return;
      }

      const isClickInside = event.composedPath()
        .find((element) => element === this.$refs.contextMenu);

      if (!isClickInside) {
        this.close();
      }
    },
  },
  data: () => ({
    showContextMenu: false,
    boundBgClickCloseHandler: null,
  }),
};

</script>

<style lang="scss">
  @use './mixins' as *;

  .base-context-menu {
    position: relative;
    @include base-context-menu-position('bottom-left');
    @include base-context-menu-margin(16px);
  }

  .base-context-menu {
    &-enter-active,
    &-leave-active {
      transition: all .2s;
    }

    &-enter-from {
      opacity: 0;
    }
    &-enter-to {
      opacity: 1;
    }

    &-leave-from {
      opacity: 1;
    }
    &-leave-to {
      opacity: 0;
    }

  }

  .base-context-menu__hidden {
    position: absolute;
    min-width: 100px;
    min-height: 100px;
  }
</style>
