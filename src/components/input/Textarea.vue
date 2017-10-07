<template>
  <label class="weui-cell" :class="textareaClass">
    <weui-cell-body>
      <textarea class="weui-textarea"
        v-model="modelValue"
        :name="name"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        :required="required"
        :pattern="pattern"
        :tips="tips">
      </textarea>
      <div class="weui-textarea-counter" v-if="limit"><span>{{ textLength }}</span>/{{ limit }}</div>
    </weui-cell-body>
    <weui-cell-footer v-if="hasWarn">
      <weui-icon type="warn"></weui-icon>
    </weui-cell-footer>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'weui-textarea',
  mixins: [mixinInputModel],
  props: {
    name: {
      type: String,
      required: false,
    },
    cols: {
      type: [Number, String],
      require: false,
    },
    rows: {
      type: [Number, String],
      require: false,
      default: 3,
    },
    placeholder: {
      type: String,
      require: false,
    },
    limit: {
      type: [Number, String],
      require: false,
      default: null,
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
    textareaClass () {
      return {
        'weui-cell_warn': this.hasWarn,
      }
    },
    textLength () {
      return typeof this.modelValue === 'string' ? this.modelValue.length : 0
    },
    hasWarn () {
      return this.warn || (this.limit && this.textLength > this.limit)
    },
  },
}
</script>