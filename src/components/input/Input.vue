<template>
  <label class="weui-cell" :class="inputClass">
    <weui-cell-header v-if="label">
      <span class="weui-label">
        <slot>
          <!--label-->
        </slot>
      </span>
    </weui-cell-header>
    <weui-cell-body>
      <input class="weui-input"
        ref="input"
        v-model="modelValue"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :pattern="pattern"
        :tips="tips">
    </weui-cell-body>
    <weui-cell-footer v-if="vcode">
      <slot name="vcode">
        <!--<a href="javascript:;" class="weui-vcode-btn">获取验证码</a>-->
      </slot>
    </weui-cell-footer>
    <weui-cell-footer v-if="warn">
      <weui-icon type="warn"></weui-icon>
    </weui-cell-footer>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-input',
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
  mounted () {
    this.$refs.input.type = this.type
  },
}
</script>