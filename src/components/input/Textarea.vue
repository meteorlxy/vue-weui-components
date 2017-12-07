<template>
  <label
    class="weui-cell"
    :class="textareaClass"
  >
    <WeuiCellBody>
      <textarea
        v-model="modelValue"
        class="weui-textarea"
        :name="name"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        :required="required"
        :pattern="pattern"
        :tips="tips"
        :emptyTips="emptyTips"
        :notMatchTips="notMatchTips"
      ></textarea>
      
      <div
        v-if="limit"
        class="weui-textarea-counter"
      >
        <span>{{ textLength }}</span>/{{ limit }}
      </div>
    </WeuiCellBody>
    
    <WeuiCellFooter v-if="hasWarn">
      <WeuiIcon type="warn" />
    </WeuiCellFooter>
  </label>
</template>

<script>
import mixinInputModel from './mixins/mixinInputModel'
export default {
  name: 'WeuiTextarea',
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
    emptyTips: {
      type: String,
      require: false,
    },
    notMatchTips: {
      type: String,
      require: false,
    }
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