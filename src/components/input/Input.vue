<template>
  <label
    class="weui-cell"
    :class="inputClass"
  >
    <WeuiCellHeader v-if="label">
      <span class="weui-label">
        <slot>
          <!--label-->
        </slot>
      </span>
    </WeuiCellHeader>
    
    <WeuiCellBody>
      <input
        ref="input"
        v-model="modelValue"
        class="weui-input"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :pattern="pattern"
        :tips="tips"
      >
    </WeuiCellBody>
    
    <WeuiCellFooter v-if="vcode">
      <slot name="vcode">
        <!--<a href="javascript:;" class="weui-vcode-btn">获取验证码</a>-->
      </slot>
    </WeuiCellFooter>
    
    <WeuiCellFooter v-if="warn">
      <WeuiIcon type="warn" />
    </WeuiCellFooter>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'WeuiInput',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      require: false,
    },
    label: {
      type: Boolean,
      default: true,
    },
    vcode: {
      type: Boolean,
      default: false,
    },
    warn: {
      type: Boolean,
      default: false,
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
    inputClass () {
      return {
        'weui-cell_vcode': this.vcode,
        'weui-cell_warn': this.warn,
      }
    },
  },
}
</script>