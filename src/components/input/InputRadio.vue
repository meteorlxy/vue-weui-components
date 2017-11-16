<template>
  <label class="weui-cell weui-check__label">
    <WeuiCellBody>
      <p>
        <slot>
          <!--选项内容-->
        </slot>
      </p>
    </WeuiCellBody>
    
    <WeuiCellFooter>
      <input
        v-model="modelValue"
        class="weui-check"
        type="radio"
        :name="name"
        :value="value"
        :required="required"
        :tips="tips"
      >
      
      <WeuiIcon type="checked" />
    </WeuiCellFooter>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'WeuiInputRadio',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
    value: {
      required: true,
    },
    /**
     * Support weui.js
     */
    required: {
      required: false,
    },
    tips: {
      type: String,
      require: false,
    },
  },
}
</script>