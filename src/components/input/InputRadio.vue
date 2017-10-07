<template>
  <label class="weui-cell weui-check__label">
    <weui-cell-body>
      <p>
        <slot>
          <!--选项内容-->
        </slot>
      </p>
    </weui-cell-body>
    <weui-cell-footer>
      <input class="weui-check"
        type="radio"
        v-model="modelValue"
        :name="name"
        :value="value"
        :required="required"
        :tips="tips">
      <weui-icon type="checked"></weui-icon>
    </weui-cell-footer>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-input-radio',
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