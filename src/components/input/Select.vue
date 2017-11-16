<template>
  <div class="weui-cell weui-cell_select" :class="selectClass">
    <WeuiCellHeader v-if="place === 'after'">
      <slot name="before">
        <!--before-->
      </slot>
    </WeuiCellHeader>
    
    <component :is="place === 'before' ? 'WeuiCellHeader' : 'WeuiCellBody'">
      <select
        v-model="modelValue"
        class="weui-select"
        :name="name"
      >
        <slot>
          <!--<option value="val">text</option>-->
        </slot>
      </select>
    </component>
    
    <WeuiCellBody v-if="place === 'before'">
      <slot name="after">
        <!--after-->
      </slot>
    </WeuiCellBody>
    
    <WeuiCellFooter v-if="warn">
      <WeuiIcon type="warn" />
    </WeuiCellFooter>
  </div>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'WeuiSelect',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
    warn: {
      type: Boolean,
      default: false,
    },
    place: {
      validator: val => ['default', 'before', 'after'].includes(val),
      required: false,
      default: 'default',
    },
    /**
     * Support weui.js
     */
    required: {
      required: false,
    },
    pattern: {
      type: String,
      require: false,
    },
    tips: {
      type: String,
      require: false,
    },
  },
  computed: {
    selectClass () {
      return {
        'weui-cell_select-before': this.place === 'before',
        'weui-cell_select-after': this.place === 'after',
        'weui-cell_warn': this.warn,
      }
    },
  },
}
</script>