<template>
  <label class="weui-agree">
    <input class="weui-agree__checkbox"
      type="checkbox"
      v-model="modelValue"
      :name="name">
    <span class="weui-agree__text">
      <slot>
        <!--阅读并同意<a href="javascript:void(0);">《相关条款》</a>-->
      </slot>
    </span>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-input-agree',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
  },
}
</script>