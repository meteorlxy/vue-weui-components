const mixinInputModel = {
  model: {
    prop: 'inputModel',
    event: 'input',
  },
  props: {
    inputModel: {
      required: false,
    }
  },
  computed: {
    modelValue: {
      get () {
        return this.inputModel
      },
      set (val) {
        this.$emit('input', val)
      },
    }
  },
}

export default mixinInputModel
