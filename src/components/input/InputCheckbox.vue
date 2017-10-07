<template>
  <label class="weui-cell weui-check__label">
    <weui-cell-header>
      <input class="weui-check"
        type="checkbox"
        v-model="modelValue"
        :name="name"
        :value="value"
        :true-value="trueValue"
        :false-value="falseValue"
        :required="required"
        :pattern="pattern"
        :tips="tips">
      <weui-icon type="checked"></weui-icon>
    </weui-cell-header>
    <weui-cell-body>
      <p>
        <slot>
          <!--选项内容-->
        </slot>
      </p>
    </weui-cell-body>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-input-checkbox',
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