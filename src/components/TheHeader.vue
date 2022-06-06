<template>
  <header class="app-header">
    <img :src="logo" alt="" class="app-header__logo">

    <div class="app-header__menu">
      <BaseButton
      v-for="item in menuButtons"
      :key="item.key"
      type="transparent"
      :text="item.text"/>

      <BaseButton
      type="filled"
      :icon="favoriteIcon"
      text="Favourites"/>
    </div>

    <div class="app-header__icon-list">
      <BaseIcon
      v-for="item in this.icons"
      :key="item.key"
      :icon="item.icon"
      :badge="item.badge"
      :title="item.title"
      class="app-header__icon"
      :class="`app-header__icon--${item.key}`"/>
    </div>

    <BaseContextMenu
    ref="userProfile"
    @open="showUserProfile = true"
    @close="showUserProfile = false">
      <template #visible>
        <BaseAvatar
        :username="user.username"
        clickable
        class="app-header__avatar"
        @click="toggleUserProfile"/>
      </template>

      <template #hidden>
        <UserProfile :user="user"/>
      </template>
    </BaseContextMenu>

    <BaseIcon
    :icon="selectedFlag"
    clickable
    class="app-header__flag"
    @click="toggleFlag"/>
  </header>
</template>

<script>
import BaseIcon from '@/components/BaseIcon';
import BaseButton from '@/components/BaseButton';
import BaseAvatar from '@/components/BaseAvatar';
import BaseContextMenu from '@/components/BaseContextMenu';

import UserProfile from '@/components/UserProfile';

import logo from '@/assets/logo-trivio.svg';

import searchIcon from '@/assets/material-icons/search.svg?inline';
import errorIcon from '@/assets/material-icons/error-outline.svg?inline';
import updateIcon from '@/assets/material-icons/update.svg?inline';
import favoriteIcon from '@/assets/material-icons/favorite-border.svg?inline';
import mailIcon from '@/assets/material-icons/mail-outline.svg?inline';

import ruFlag from '@/assets/flags/ru.svg?inline';
import gbFlag from '@/assets/flags/gb.svg?inline';

export default {
  name: 'TheHeader',
  components: {
    BaseIcon,
    BaseButton,
    BaseAvatar,
    BaseContextMenu,
    UserProfile,
  },
  methods: {
    toggleUserProfile() {
      if (!this.showUserProfile) {
        this.$refs.userProfile.open();
      } else {
        this.$refs.userProfile.close();
      }
    },
    toggleFlag() {
      this.countryCode = this.countryCode === 'ru' ? 'gb' : 'ru';
    },
  },
  computed: {
    selectedFlag() {
      return this.countryCode === 'ru' ? this.ruFlag : this.gbFlag;
    },
  },
  data: () => ({
    showUserProfile: false,
    countryCode: 'ru', // 'ru', 'gb'

    ruFlag,
    gbFlag,
    logo,
    favoriteIcon,

    icons: [
      {
        key: 'search',
        icon: searchIcon,
        title: 'Search',
        badge: false,
      },
      {
        key: 'alarm',
        icon: errorIcon,
        title: 'Alarms',
        badge: false,
      },
      {
        key: 'update',
        icon: updateIcon,
        title: 'Update',
        badge: 3,
      },
      {
        key: 'like',
        icon: favoriteIcon,
        title: 'Likes',
        badge: false,
      },
      {
        key: 'mail',
        icon: mailIcon,
        title: 'Mail',
        badge: true,
      },
    ],

    menuButtons: [
      {
        key: 'first',
        text: '1st menu item',
      },
      {
        key: 'second',
        text: '2nd menu item',
      },
      {
        key: 'third',
        text: '3rd menu item',
      },
      {
        key: 'fourth',
        text: '4th menu item',
      },
    ],

    user: {
      username: 'John Doe',
      company: 'Trivio',
      balance: '-597 771,77 ₽',
      debt: '0 ₽',
    },
  }),
};

</script>

<style lang="scss">
  @use 'components/BaseIcon/mixins' as *;

  .app-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    width: 100%;
    height: 80px;
    padding: 16px 32px;

    border-bottom: 1px solid gray;
  }

  .app-header__logo {
    flex-grow: 1;
    width: auto;
    height: 40px;
  }

  .app-header__menu {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    flex-grow: 4;
  }

  .app-header__icon-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    flex-grow: 1;
  }

  .app-header__icon {
    @include base-icon-size(24px);

    &--search {
      @include base-icon-color(#6DA5FD);
    }
    &--alarm {
      @include base-icon-color(#A04345);
    }
    &--update {
      @include base-icon-color(#9E5FB8);
      @include base-icon-badge-color(#747987);
    }
    &--like {
      @include base-icon-color(#FE7BAD);
    }
    &--mail {
      @include base-icon-color(#747987);
      @include base-icon-badge-color(#2C7DFD);
    }
  }
  .app-header__avatar {
    flex-frow: 0;
  }

  .app-header__flag {
    flex-grow: 0;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
