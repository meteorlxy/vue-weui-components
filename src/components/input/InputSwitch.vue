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
      <input class="weui-switch"
        type="checkbox"
        v-model="modelValue"
        :name="name">
    </weui-cell-footer>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-input-switch',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
  },
}
</script>