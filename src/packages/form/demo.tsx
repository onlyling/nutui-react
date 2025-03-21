import React from 'react'
import { ArrowRight } from '@nutui/icons-react'
import Form, { FormInstance } from './index'
import { Input } from '../input/input'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'
import TextArea from '../textarea'
import Switch from '../switch'
import Checkbox from '../checkbox'
import Radio from '../radio'
import Rate from '../rate'
import Range from '../range'
import Toast from '@/packages/toast'
import { FormItemRuleWithoutValidator } from './types'
import Button from '@/packages/button'
import InputNumber from '@/packages/inputnumber'
import Picker from '@/packages/picker'
import Uploader from '@/packages/uploader'

const FormDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '动态表单',
      title10: '顶部对齐',
      title2: '表单校验',
      title3: '带有初始值表单校验',
      relatedDisplay: '关联展示',
      title4: 'Form.useForm 对表单数据域进行交互。',
      title5: '表单类型',
      name: '字段A',
      nameTip: '请输入字段A',
      nameTip1: '请输入字段A',
      nameErr: '字段A不能超过5个字',
      age: '字段B',
      ageTip: '请输入字段B',
      ageTip1: '请输入字段B，必须数字且0-200区间',
      ageTip2: '必须输入数字',
      ageTip3: '必须输入0-200区间',
      tel: '字段C',
      telTip: '请输入字段C',
      telTip1: '异步校验字段C格式',
      telTip2: '字段C格式不正确',
      address: '字段D',
      addressTip: '请输入字段D',
      addressTip1: '请选择字段D',
      addressTip2: '请选择所在地区',
      addressErr: '字段D不能超过15个字',
      remarks: '备注',
      remarksTip: '请输入备注',
      add: '添加',
      remove: '删除',
      submit: '提交',
      reset: '重置',
      switch: '开关',
      checkbox: '复选框',
      gender: '字段E',
      rate: '评分',
      inputnumber: '步进器',
      range: '滑块',
      uploader: '文件上传',
      success: '上传成功',
      uploading: '上传中...',
      asyncValidator: '模拟异步验证中',
      number: '数量',
      tag: '标注',
      tagTip: '请输入标注',
      male: 'A',
      female: 'B',
      input: '输入框',
      checkboxGroup: '复选按钮分组',
      option: '选项',
      radio: '单选按钮',
      radioGroup: '单选按钮分组',
      radioOption: '选项',
      picker: '选择器',
      select: '请选择',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Dynamic Form',
      title10: 'Top Align',
      title2: 'Validate Form',
      title3: 'InitialValue Validate Type',
      relatedDisplay: 'Related Display',
      title4: 'Interact with form data fields via Form.useForm',
      title5: 'Form Type',
      name: 'Filed A',
      nameTip: 'Please enter Filed A',
      nameTip1: 'Please enter Filed A',
      nameErr: 'Filed A cannot exceed 5 characters',
      age: 'Filed B',
      ageTip: 'Please enter Filed B',
      ageTip1:
        'Please enter Filed B, which must be numeric and in the range of 0-200',
      ageTip2: 'You must enter a number',
      ageTip3: 'The range 0-200 must be entered',
      tel: 'Filed C',
      telTip: 'Please enter Filed C',
      telTip1: 'Async check Filed C format',
      telTip2: 'Filed C format is incorrect',
      address: 'Filed D',
      addressTip: 'Please enter Filed D',
      addressTip1: 'Please select an Filed D',
      addressTip2: 'Please select your Filed D',
      addressErr: 'Filed D should not exceed 15 characters',
      remarks: 'Remarks',
      remarksTip: 'Please enter remarks',
      add: 'Add',
      remove: 'Remove',
      submit: 'Submit',
      reset: 'Reset',
      switch: 'Switch',
      checkbox: 'Checkbox',
      gender: 'Field E',
      rate: 'Rate',
      inputnumber: 'Inputnumber',
      range: 'Range',
      uploader: 'Upload file',
      success: 'Upload successful',
      uploading: 'Uploading',
      asyncValidator: 'Simulating asynchronous verification',
      number: 'Number',
      tag: 'Tag',
      tagTip: 'Please enter tag',
      male: 'A',
      female: 'B',
      input: 'Input',
      checkboxGroup: 'Checkbox.Group',
      option: 'Option',
      radio: 'Radio',
      radioGroup: 'Radio.Group',
      radioOption: 'radio',
      picker: 'Picker',
      select: 'Please select',
    },
  })

  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }

  const [form] = Form.useForm()

  const onMenuChange = (value: string | number | boolean) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: '👨' })
        break
      case 'female':
        form.setFieldsValue({ note: '👩' })
        break
      default:
    }
  }

  // 函数校验
  const customValidator = (
    rule: FormItemRuleWithoutValidator,
    value: string
  ) => {
    return /^\d+$/.test(value)
  }

  const valueRangeValidator = (
    rule: FormItemRuleWithoutValidator,
    value: string
  ) => {
    return /^(\d{1,2}|1\d{2}|200)$/.test(value)
  }

  const pickerOptions = [
    { value: 4, text: 'BeiJing' },
    { value: 1, text: 'NanJing' },
    { value: 2, text: 'WuXi' },
    { value: 8, text: 'DaQing' },
    { value: 9, text: 'SuiHua' },
    { value: 10, text: 'WeiFang' },
    { value: 12, text: 'ShiJiaZhuang' },
  ]
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Form
          divider
          labelPosition="right"
          onFinish={(values) => submitSucceed(values)}
          footer={
            <>
              <Button nativeType="submit" block type="primary">
                {translated.submit}
              </Button>
            </>
          }
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[
              { max: 5, message: translated.nameErr },
              { required: true, message: translated.nameTip1 },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder={translated.nameTip}
              type="text"
            />
          </Form.Item>
          <Form.Item
            label={translated.address}
            name="address"
            rules={[
              { max: 15, message: translated.addressErr },
              { required: true, message: translated.addressTip },
            ]}
          >
            <TextArea placeholder={translated.addressTip} maxLength={100} />
          </Form.Item>
          <Form.Item
            label={translated.number}
            name="num"
            getValueFromEvent={(...args) => args[0]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
        <Form
          divider
          labelPosition="top"
          onFinish={(values) => submitSucceed(values)}
          footer={
            <>
              <Button block type="primary">
                {translated.submit}
              </Button>
            </>
          }
        >
          <Form.Item
            label={translated.name}
            name="username"
            rules={[
              { max: 5, message: translated.nameErr },
              { required: true, message: translated.nameTip1 },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder={translated.nameTip}
              type="text"
            />
          </Form.Item>
          <Form.Item
            label={translated.address}
            name="address"
            rules={[
              { max: 15, message: translated.addressErr },
              { required: true, message: translated.addressTip },
            ]}
          >
            <TextArea placeholder={translated.addressTip} maxLength={100} />
          </Form.Item>
          <Form.Item
            label={translated.number}
            name="num"
            getValueFromEvent={(...args) => args[0]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
        <h2>{translated.title2}</h2>
        <Form
          divider
          labelPosition="left"
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button nativeType="submit" type="primary">
                {translated.submit}
              </Button>
              <Button nativeType="reset" style={{ marginInlineStart: '20px' }}>
                {translated.reset}
              </Button>
            </div>
          }
        >
          <Form.Item
            label={translated.name}
            name="username"
            required
            rules={[{ required: true, message: translated.nameTip }]}
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item
            label={translated.age}
            name="age"
            required
            rules={[
              { required: true, message: translated.ageTip },
              { validator: customValidator, message: translated.ageTip2 },
              { validator: valueRangeValidator, message: translated.ageTip3 },
            ]}
          >
            <Input placeholder={translated.ageTip1} type="text" />
          </Form.Item>
          <Form.Item
            label={translated.tel}
            name="tel"
            rules={[{ max: 13, message: translated.telTip }]}
          >
            <Input placeholder={translated.telTip} type="number" />
          </Form.Item>
          <Form.Item
            label={translated.address}
            name="address"
            required
            rules={[{ required: true, message: translated.addressTip }]}
          >
            <Input placeholder={translated.addressTip} type="text" />
          </Form.Item>
        </Form>

        <h2>{translated.relatedDisplay}</h2>
        <Form divider labelPosition="right">
          <Form.Item
            label={translated.name}
            name="username"
            rules={[
              { max: 5, message: translated.nameErr },
              { required: true, message: translated.nameTip1 },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder={translated.nameTip}
              type="text"
            />
          </Form.Item>
          <Form.Item
            label={translated.address}
            name="address"
            shouldUpdate
            noStyle
            rules={[
              { max: 15, message: translated.addressErr },
              { required: true, message: translated.addressTip },
            ]}
          >
            {({ getFieldValue }: FormInstance) => {
              const value = getFieldValue('username')
              if (!value) return null
              return (
                <TextArea placeholder={translated.addressTip} maxLength={100} />
              )
            }}
          </Form.Item>
        </Form>

        <h2>{translated.title3}</h2>
        <Form
          initialValues={{ username: 'LiSi', age: 20 }}
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button nativeType="submit" type="primary">
                {translated.submit}
              </Button>
              <Button nativeType="reset" style={{ marginInlineStart: '20px' }}>
                {translated.reset}
              </Button>
            </div>
          }
        >
          <Form.Item
            label={translated.name}
            name="username"
            required
            rules={[{ required: true, message: translated.nameTip }]}
            initialValue="ZhangSan"
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item label={translated.age} name="age" initialValue={18}>
            <Input placeholder={translated.ageTip1} type="number" />
          </Form.Item>
        </Form>

        <h2>{translated.title4}</h2>
        <Form
          form={form}
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
        >
          <Form.Item
            label={translated.name}
            name="username"
            required
            rules={[{ required: true, message: translated.nameTip }]}
          >
            <Input placeholder={translated.nameTip1} type="text" />
          </Form.Item>
          <Form.Item label={translated.tag} name="note">
            <Input placeholder={translated.tagTip} type="string" />
          </Form.Item>
          <Form.Item label={translated.gender} name="gender">
            <Radio.Group onChange={onMenuChange}>
              <Radio value="male">{translated.male}</Radio>
              <Radio value="female">{translated.female}</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>

        <h2>{translated.title5}</h2>
        <Form
          style={{ '--nutui-form-item-label-width': '120px' }}
          initialValues={{
            files: [
              {
                name: 'file1.png',
                url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
                status: 'success',
                message: 'success',
                type: 'image',
                uid: '122',
              },
            ],
          }}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button nativeType="submit" type="primary">
                {translated.submit}
              </Button>
              <Button nativeType="reset" style={{ marginInlineStart: '20px' }}>
                {translated.reset}
              </Button>
            </div>
          }
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
        >
          <Form.Item label={translated.input} name="form_input">
            <Input placeholder={translated.nameTip1} />
          </Form.Item>
          <Form.Item label={translated.switch} name="switch">
            <Switch />
          </Form.Item>
          <Form.Item label={translated.checkbox} name="checkbox">
            <Checkbox labelPosition="right" label={`${translated.option} 1`} />
          </Form.Item>
          <Form.Item label={translated.checkboxGroup} name="checkbox_group">
            <Checkbox.Group>
              <Checkbox
                labelPosition="right"
                label={`${translated.option} 1`}
                value={1}
              />
              <Checkbox
                labelPosition="right"
                label={`${translated.option} 2`}
                value={2}
              />
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label={translated.radio} name="radio">
            <Radio value="1">{translated.radioOption} 1</Radio>
          </Form.Item>
          <Form.Item label={translated.radioGroup} name="radio_group">
            <Radio.Group>
              <Radio value="1">{translated.radioOption} 1</Radio>
              <Radio value="2">{translated.radioOption} 2</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={translated.rate} name="rate">
            <Rate />
          </Form.Item>
          <Form.Item label={translated.range} name="range">
            <Range max={10} min={-10} />
          </Form.Item>
          <Form.Item
            label={translated.picker}
            name="picker"
            trigger="onConfirm"
            getValueFromEvent={(...args) => args[1]}
            onClick={(event, ref: any) => {
              ref.open()
            }}
          >
            <Picker options={[pickerOptions]}>
              {(value: any) => {
                return (
                  <Cell
                    style={{
                      padding: 0,
                      '--nutui-cell-divider-border-bottom': '0',
                    }}
                    className="nutui-cell--clickable"
                    title={
                      value.length
                        ? pickerOptions.filter((po) => po.value === value[0])[0]
                            ?.text
                        : translated.select
                    }
                    extra={<ArrowRight />}
                    align="center"
                  />
                )
              }}
            </Picker>
          </Form.Item>
          <Form.Item label={translated.uploader} name="files">
            <Uploader url="https://my-json-server.typicode.com/linrufeng/demo/posts" />
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default FormDemo
