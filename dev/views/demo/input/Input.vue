<template>
<div>
  <weui-cells-title>单选列表项 - 当前选择：{{ weui_radio }}</weui-cells-title>
  <weui-cells type="radio">
    <weui-input-radio name="radio1" value="1" v-model="weui_radio">cell standard. value: 1</weui-input-radio>
    <weui-input-radio name="radio1" value="2" v-model="weui_radio" checked>cell standard. value: 2</weui-input-radio>
    
    <weui-cell href="javascript:void(0);" :link="true" :access="false">
      <weui-cell-body>添加更多</weui-cell-body>
    </weui-cell>
  </weui-cells>

  <weui-cells-title>复选列表项 - 当前选择： {{ weui_checkbox }}</weui-cells-title>
  
  <weui-cells type="checkbox">
    <weui-input-checkbox name="checkbox1" value="vue" v-model="weui_checkbox">vue</weui-input-checkbox>
    <weui-input-checkbox name="checkbox1" value="weui" v-model="weui_checkbox">weui</weui-input-checkbox>
    <weui-input-checkbox name="checkbox1" value="components" v-model="weui_checkbox">components</weui-input-checkbox>
    <weui-input-checkbox name="checkbox1" value="vue-weui-components" v-model="weui_checkbox">vue-weui-components</weui-input-checkbox>
    
    <weui-cell href="javascript:void(0);" :link="true" :access="false">
      <weui-cell-body>添加更多</weui-cell-body>
    </weui-cell>
  </weui-cells>
  
  <weui-cells-title>表单</weui-cells-title>
  <weui-cells type="form">
    
    <weui-input type="number" pattern="[0-9]*" placeholder="请输入qq号" v-model="weui_form.qq">qq</weui-input>
    
    <weui-input type="tel" placeholder="请输入手机号" :vcode="true" v-model="weui_form.mobile">
      手机号
      <a slot="vcode" href="javascript:;" class="weui-vcode-btn">获取验证码</a>
    </weui-input>
    
    <weui-input type="date" v-model="weui_form.date">日期</weui-input>
    <weui-input type="datetime-local" placeholder="" v-model="weui_form.datetime">时间</weui-input>
    
    <weui-input type="number" placeholder="请输入验证码" :vcode="true" v-model="weui_form.vcode">
      验证码
      <img slot="vcode" class="weui-vcode-img" src="static/img/vcode.jpg" />
    </weui-input>
    
  </weui-cells>
  
  <weui-cells-tips>底部说明文字底部说明文字</weui-cells-tips>
  
  <weui-cells-title>表单报错</weui-cells-title>
  <weui-cells type="form">
    <weui-input type="number" pattern="[0-9]*" placeholder="请输入卡号" :warn="true" v-model="weui_form.cardno">卡号</weui-input>
  </weui-cells>

  <weui-cells-title>开关 - 当前选择：{{ weui_switch }}</weui-cells-title>
  <weui-cells type="form">
    <weui-input-switch v-model="weui_switch">标题文字</weui-input-switch>
  </weui-cells>

  <weui-cells-title>文本框</weui-cells-title>
  <weui-cells>
    <weui-input type="text" placeholder="请输入文本" v-model="weui_text" :label="false"></weui-input>
  </weui-cells>

  <weui-cells-title>文本域</weui-cells-title>
  <weui-cells type="form">
    <weui-textarea placeholder="请输入文本" rows="3" :limit="200" v-model="weui_textarea"></weui-textarea>
  </weui-cells>

  <weui-cells-title>选择 - 当前选择：{{ weui_select.country_code }} - 当前输入：{{ weui_select.mobile }}</weui-cells-title>
  <weui-cells>
    <weui-select v-model="weui_select.country_code" place="before">
      <option value="86">+86</option>
      <option value="80">+80</option>
      <option value="84">+84</option>
      <option value="87">+87</option>
      <input slot="after" class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码" v-model="weui_select.mobile">
    </weui-select>
  </weui-cells>

  <weui-cells-title>选择 - 当前选择1：{{ weui_select.account }} - 当前选择2：{{ weui_select.country }}</weui-cells-title>
  <weui-cells>
    
    <weui-select v-model="weui_select.account">
      <option value="wechat">微信号</option>
      <option value="qq">QQ号</option>
      <option value="email">Email</option>
    </weui-select>
    
    <weui-select v-model="weui_select.country" place="after">
      <label slot="before" class="weui-label">国家/地区</label>
      <option value="CN">中国</option>
      <option value="US">美国</option>
      <option value="UK">英国</option>
    </weui-select>
    
  </weui-cells>
  
  <weui-input-agree v-model="weui_agree">
    阅读并同意<a href="javascript:void(0);">《相关条款》</a> - {{ weui_agree }}
  </weui-input-agree>
    
  <weui-button-area>
    <weui-button type="primary">确定</weui-button>
  </weui-button-area>

</div>
</template>

<script>
export default {
  name: 'demo-input',
  data () {
    return {
      weui_radio: 2,
      weui_checkbox: ['vue-weui-components'],
      weui_switch: true,
      weui_form: {
        qq: null,
        mobile: null,
        date: null,
        datetime: null,
        vcode: null,
        cardno: null,
      },
      weui_text: null,
      weui_textarea: null,
      weui_select: {
        country_code: '86',
        mobile: null,
        account: 'wechat',
        country: 'CN',
      },
      weui_agree: false,
    }
  }
}
</script>