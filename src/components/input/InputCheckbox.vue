<template>
  <label class="weui-cell weui-check__label">
    <WeuiCellHeader>
      <input
        v-model="modelValue"
        class="weui-check"
        type="checkbox"
        :name="name"
        :value="value"
        :true-value="trueValue"
        :false-value="falseValue"
        :required="required"
        :pattern="pattern"
        :tips="tips"
      >
      
      <WeuiIcon type="checked" />
    </WeuiCellHeader>
    
    <WeuiCellBody>
      <p>
        <slot>
          <!--选项内容-->
        </slot>
      </p>
    </WeuiCellBody>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'InputCheckbox',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
    value: {
      required: false,
    },
    trueValue: {
      required: false,
    },
    falseValue: {
      required: false,
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
}
</script>