<template>
  <div class="weui-cell weui-cell_select" :class="selectClass">
    <weui-cell-header v-if="place === 'after'">
      <slot name="before">
        <!--before-->
      </slot>
    </weui-cell-header>
    
    <component :is="place === 'before' ? 'weui-cell-header' : 'weui-cell-body'">
      <select class="weui-select"
        v-model="modelValue"
        :name="name">
        <slot>
          <!--<option value="val">text</option>-->
        </slot>
      </select>
    </component>
    
    <weui-cell-body v-if="place === 'before'">
      <slot name="after">
        <!--after-->
      </slot>
    </weui-cell-body>
    
    <weui-cell-footer v-if="warn">
      <weui-icon type="warn"></weui-icon>
    </weui-cell-footer>
  </div>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-select',
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