<template>
  <div class="user-profile">
    <div class="user-profile__username">
      {{ user.username }}
    </div>
    <div class="user-profile__about">
      {{ user.company }}
    </div>
    <div class="user-profile__about">
      Balance: {{ user.balance }}
    </div>
    <div class="user-profile__about">
      Debt: {{ user.debt }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};

</script>

<style lang="scss">
  .user-profile {
    width: 160px;
    height: 100px;
    padding: 12px;

    background-color: white;
    border: 1px solid lightgray;

    font-size: 14px;
  }

  .user-profile__about {
    color: gray;
    font-size: 12px;
  }
</style>
