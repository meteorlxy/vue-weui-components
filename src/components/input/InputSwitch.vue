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
        class="weui-switch"
        type="checkbox"
        :name="name"
      >
    </WeuiCellFooter>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'WeuiInputSwitch',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
  },
}
</script>