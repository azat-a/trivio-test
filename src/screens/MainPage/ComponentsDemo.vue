<template>
  <div>
    <section class="main-page-section">
      <h2>BaseIcon</h2>
      <pre>
Props:
:icon, String with SVG markup, required
:badge, Boolean || Number, default false
:clickable, Boolean, default false

Event:
@click — генерируется, если компонент кликабелен

SCSS customization:
@use 'components/BaseIcon/mixins' as *;
.customized-icon {
  @include base-icon-size(40px);
  @include base-icon-color(#818592);
  @include base-icon-badge-color(#818592);
}
Раскрашиваются только одноцветные иконки с fill на теге svg и без fill на фигурах внутри
      </pre>
    <div class="component-demo">
      <BaseIcon :icon="mailIcon"/>
      <BaseIcon :icon="mailIcon" badge/>
      <BaseIcon :icon="mailIcon" :badge="5"/>
      <BaseIcon :icon="mailIcon" class="customized-icon"/>
      <BaseIcon :icon="mailIcon" badge class="customized-icon"/>
      <BaseIcon :icon="mailIcon" :badge="5" class="customized-icon"/>
    </div>
    </section>

    <section class="main-page-section">
      <h2>BaseButton</h2>
      <pre>
Props:
:type, String 'transparent' | 'ounlined' | 'filled', default 'transparent'
:icon, String with SVG markup, default null
:text, String, default ''
:disabled, Boolean

SCSS customization:
@use 'components/BaseButton/mixins' as *;
.customized-button {
  @include base-button-color(black);
  @include base-button-text-color($color); // default: контрастное основному цвету значение
  @include base-button-icon-color($color); // default: цвет текста
  @include base-button-text-transform(uppercase);
}
      </pre>
      <div class="component-demo">
        <BaseButton type="transparent" :icon="mailIcon"/>
        <BaseButton type="transparent"  text="Button"/>
        <BaseButton type="transparent"  :icon="mailIcon" text="Send"/>

        <BaseButton type="outlined" :icon="mailIcon"/>
        <BaseButton type="outlined"  text="Button"/>
        <BaseButton type="outlined"  :icon="mailIcon" text="Send"/>

        <BaseButton type="filled" :icon="mailIcon"/>
        <BaseButton type="filled"  text="Button"/>
        <BaseButton type="filled"  :icon="mailIcon" text="Send"/>
      </div>
    </section>

        <section class="main-page-section">
      <h2>BaseContextMenu</h2>
      <pre>
Methods:
.open() — открыть меню (вызвав метод через $refs)
.close() — закрыть меню

Events:
@open — генерируется при открытии меню
@close — генерируется при закрытии меню

Slots:
#visible — видимая часть меню
#hidden — открывающася/закрывающаяся часть меню

SCSS customization:
@use 'components/BaseContextMenu/mixins' as *;
.customized-button {
  @include base-context-menu-position('bottom-left'); // 4 варианта расположения меню
  @include base-context-menu-margin(16px); // отступ меню
}
      </pre>
      <div class="component-demo">
        <BaseContextMenu ref="contextBottomLeft" class="customized-context-menu__bottom-left">
          <template #visible>
            <BaseButton type="outlined" text="bottom-left" @click="$refs.contextBottomLeft.open()"/>
          </template>
          <template #hidden>
            <div class="context-menu-placeholder"/>
          </template>
        </BaseContextMenu>

        <BaseContextMenu ref="contextBottomRight" class="customized-context-menu__bottom-right">
          <template #visible>
            <BaseButton
            type="outlined"
            text="bottom-right"
            @click="$refs.contextBottomRight.open()"/>
          </template>
          <template #hidden>
            <div class="context-menu-placeholder"/>
          </template>
        </BaseContextMenu>
      </div>
    </section>

    <section class="main-page-section">
      <h2>BaseAvatar</h2>
      <pre>
Props:
:src, String with URL or DataURL
:username, String — если нет аватарки, то показываются инициалы на цветном фоне
:clickable, Boolean

Event:
@click — генерируется только в случае, если компонент кликабелен
      </pre>
      <div class="component-demo">
        <BaseAvatar :src="gbFlag"/>
        <BaseAvatar username="John Doe"/>
        <BaseAvatar username="Admin Admin"/>
        <BaseAvatar username="WukapHo"/>
        <BaseAvatar username="Azat AN"/>
      </div>
    </section>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon';
import BaseButton from '@/components/BaseButton';
import BaseAvatar from '@/components/BaseAvatar';
import BaseContextMenu from '@/components/BaseContextMenu';

import mailIcon from '@/assets/material-icons/mail-outline.svg?inline';
import gbFlag from '@/assets/flags/gb.svg';

export default {
  name: 'ComponentsDemo',
  components: {
    BaseIcon,
    BaseButton,
    BaseAvatar,
    BaseContextMenu,
  },
  data: () => ({
    mailIcon,
    gbFlag,
  }),
};

</script>

<style lang="scss">
@use 'components/BaseIcon/mixins' as *;
@use 'components/BaseButton/mixins' as *;
@use 'components/BaseContextMenu/mixins' as *;

  .component-demo {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 16px;
  }

  .customized-icon {
    @include base-icon-size(24px);
    @include base-icon-color(blue);
    @include base-icon-badge-color(green);
  }

  .context-menu-placeholder {
    width: 100px;
    height: 100px;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  }

  .customized-context-menu__bottom-left {
    @include base-context-menu-position('bottom-left');
    @include base-context-menu-margin(0);
  }
  .customized-context-menu__bottom-right {
    @include base-context-menu-position('bottom-right');
    @include base-context-menu-margin(0);
  }
</style>
