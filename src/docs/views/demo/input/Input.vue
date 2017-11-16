<template>
<div>
  <DemoTitle />
  
  <WeuiCellsTitle>单选列表项 - 当前选择：{{ weui_radio }}</WeuiCellsTitle>
  <WeuiCells type="radio">
    <WeuiInputRadio name="radio1" value="1" v-model="weui_radio">cell standard. value: 1</WeuiInputRadio>
    <WeuiInputRadio name="radio1" value="2" v-model="weui_radio" checked>cell standard. value: 2</WeuiInputRadio>
    
    <WeuiCell href="javascript:void(0);" :link="true" :access="false">
      <WeuiCellBody>添加更多</WeuiCellBody>
    </WeuiCell>
  </WeuiCells>

  <WeuiCellsTitle>复选列表项 - 当前选择： {{ weui_checkbox }}</WeuiCellsTitle>
  
  <WeuiCells type="checkbox">
    <WeuiInputCheckbox name="checkbox1" value="vue" v-model="weui_checkbox">vue</WeuiInputCheckbox>
    <WeuiInputCheckbox name="checkbox1" value="weui" v-model="weui_checkbox">weui</WeuiInputCheckbox>
    <WeuiInputCheckbox name="checkbox1" value="components" v-model="weui_checkbox">components</WeuiInputCheckbox>
    <WeuiInputCheckbox name="checkbox1" value="vue-weui-components" v-model="weui_checkbox">vue-weui-components</WeuiInputCheckbox>
    
    <WeuiCell href="javascript:void(0);" :link="true" :access="false">
      <WeuiCellBody>添加更多</WeuiCellBody>
    </WeuiCell>
  </WeuiCells>
  
  <WeuiCellsTitle>表单</WeuiCellsTitle>
  <WeuiCells type="form">
    
    <WeuiInput type="number" pattern="[0-9]*" placeholder="请输入qq号" v-model="weui_form.qq">qq</WeuiInput>
    
    <WeuiInput type="tel" placeholder="请输入手机号" :vcode="true" v-model="weui_form.mobile">
      手机号
      <a slot="vcode" href="javascript:;" class="weui-vcode-btn">获取验证码</a>
    </WeuiInput>
    
    <WeuiInput type="date" v-model="weui_form.date">日期</WeuiInput>
    <WeuiInput type="datetime-local" placeholder="" v-model="weui_form.datetime">时间</WeuiInput>
    
    <WeuiInput type="number" placeholder="请输入验证码" :vcode="true" v-model="weui_form.vcode">
      验证码
      <img slot="vcode" class="weui-vcode-img" src="static/img/vcode.jpg" />
    </WeuiInput>
    
  </WeuiCells>
  
  <WeuiCells-tips>底部说明文字底部说明文字</WeuiCells-tips>
  
  <WeuiCellsTitle>表单报错</WeuiCellsTitle>
  <WeuiCells type="form">
    <WeuiInput type="number" pattern="[0-9]*" placeholder="请输入卡号" :warn="true" v-model="weui_form.cardno">卡号</WeuiInput>
  </WeuiCells>

  <WeuiCellsTitle>开关 - 当前选择：{{ weui_switch }}</WeuiCellsTitle>
  <WeuiCells type="form">
    <WeuiInputSwitch v-model="weui_switch">标题文字</WeuiInputSwitch>
  </WeuiCells>

  <WeuiCellsTitle>文本框</WeuiCellsTitle>
  <WeuiCells>
    <WeuiInput type="text" placeholder="请输入文本" v-model="weui_text" :label="false"></WeuiInput>
  </WeuiCells>

  <WeuiCellsTitle>文本域</WeuiCellsTitle>
  <WeuiCells type="form">
    <weui-textarea placeholder="请输入文本" rows="3" :limit="200" v-model="weui_textarea"></weui-textarea>
  </WeuiCells>

  <WeuiCellsTitle>选择 - 当前选择：{{ weui_select.country_code }} - 当前输入：{{ weui_select.mobile }}</WeuiCellsTitle>
  <WeuiCells>
    <WeuiSelect v-model="weui_select.country_code" place="before">
      <option value="86">+86</option>
      <option value="80">+80</option>
      <option value="84">+84</option>
      <option value="87">+87</option>
      <input slot="after" class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码" v-model="weui_select.mobile">
    </WeuiSelect>
  </WeuiCells>

  <WeuiCellsTitle>选择 - 当前选择1：{{ weui_select.account }} - 当前选择2：{{ weui_select.country }}</WeuiCellsTitle>
  <WeuiCells>
    
    <WeuiSelect v-model="weui_select.account">
      <option value="wechat">微信号</option>
      <option value="qq">QQ号</option>
      <option value="email">Email</option>
    </WeuiSelect>
    
    <WeuiSelect v-model="weui_select.country" place="after">
      <label slot="before" class="weui-label">国家/地区</label>
      <option value="CN">中国</option>
      <option value="US">美国</option>
      <option value="UK">英国</option>
    </WeuiSelect>
    
  </WeuiCells>
  
  <WeuiInputAgree v-model="weui_agree">
    阅读并同意<a href="javascript:void(0);">《相关条款》</a> - {{ weui_agree }}
  </WeuiInputAgree>
    
  <WeuiButtonArea>
    <WeuiButton type="primary">确定</WeuiButton>
  </WeuiButtonArea>

</div>
</template>

<script>
export default {
  name: 'DemoInput',
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