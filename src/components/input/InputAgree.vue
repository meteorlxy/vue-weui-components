<template>
  <label class="weui-agree">
    <input
      v-model="modelValue"
      class="weui-agree__checkbox"
      type="checkbox"
      :name="name"
    >
    
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
  name: 'WeuiInputAgree',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
  },
}
</script>