import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Tips, Close, Eye, Marshalling } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Input, Button, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const InputDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      uncontrolled: '非受控',
      controlled: '受控',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示清除图标',
      title5: '插入按钮',
      title6: '格式化输入内容',
      title7: '显示字数统计',
      title8: '对齐方式',
      title9: '无边框',
      title10: '事件',
      title11: '布局',
      text: '请输入文本',
      password: '请输入密码',
      number: '请输入整数',
      digit: '请输入数字',
      readOnly: '输入框只读',
      disabled: '输入框禁用',
      clear: '显示清除图标',
      clearControlled: '受控下的清除',
      clearButton: '点我清除',
      codeplaceholder: '请输入短信验证码',
      sendCode: '获取验证码',
      border: '边框',
      formatter: '在输入时移除数字',
      formatter2: '在失焦时移除数字',
      align: '文本内容对齐',
      placeholder5: '输入框内容对齐',
      withForm: '配合表单使用',
      text1: '文本',
      password1: '带密码可见',
      wordCount: '字数统计',
    },
    'en-US': {
      basic: 'Basic usage',
      uncontrolled: 'uncontrolled',
      controlled: 'Controlled',
      title1: 'Custom Type',
      title2: 'Disabled and read-only',
      title3: 'Show clear icon',
      title5: 'Insert button',
      title6: 'Format input content',
      title7: 'Display word count',
      title8: 'Alignment',
      title9: 'No Border',
      title10: 'event',
      title11: 'Layout',
      text: 'Please enter text',
      password: 'Please enter a password',
      number: 'Please enter an integer',
      digit: 'Please enter a number',
      readOnly: 'Input box is read-only',
      disabled: 'Input box disabled',
      clear: 'Show clear icon',
      clearControlled: 'Clearing in Controlled Mode',
      clearButton: 'Click to Clear',
      codeplaceholder: 'Please enter the SMS verification code',
      sendCode: 'Get code',
      border: 'border',
      formatter: 'Remove numbers on input',
      formatter2: 'Remove numbers when out of focus',
      align: 'text content alignment',
      placeholder5: 'Input box content alignment',
      withForm: 'With Form',
      text1: 'Text',
      password1: 'Visible with password',
      wordCount: 'Word count',
    },
  })
  const formatter = (value: string) => value.replace(/\d/g, '')
  const [val, setVal] = useState('NutUI React')
  const [inputType, setInputType] = useState('password')
  const [currentLength, setCurrentLength] = useState(0)
  const [keyword, setKeyword] = useState('')
  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '20px' }}
      >
        <h2>{translated.basic}</h2>
        <Input
          placeholder={translated.text}
          onChange={(v) => {
            console.log('onChange', v)
          }}
        />
        <h2>{translated.uncontrolled}</h2>
        <Input defaultValue="NutUI React" placeholder={translated.text} />
        <h2>{translated.controlled}</h2>
        <Input
          value={val}
          onChange={(val) => setVal(val)}
          placeholder={translated.text}
        />
        <h2>{translated.title1}</h2>
        <Input type="text" placeholder={translated.text} />
        <Input type="password" placeholder={translated.password} />
        <Input type="digit" placeholder={translated.digit} />
        <Input type="number" placeholder={translated.number} />
        <h2>{translated.title2}</h2>
        <Input readOnly placeholder={translated.readOnly} />
        <Input disabled placeholder={translated.disabled} />
        <h2>{translated.title3}</h2>
        <Input type="text" clearable placeholder={translated.clear} />
        <Input
          type="text"
          clearable
          clearIcon={<Close size={14} />}
          placeholder={translated.clear}
        />
        <h2>{translated.clearControlled}</h2>
        <Cell
          title={
            <Input
              placeholder={translated.clearControlled}
              value={keyword}
              onChange={setKeyword}
            />
          }
          extra={
            <Button
              onClick={() => {
                setKeyword('')
              }}
            >
              {translated.clearButton}
            </Button>
          }
        />

        <h2>{translated.wordCount}</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '0 10px',
          }}
        >
          <Input
            type="text"
            maxLength={20}
            onChange={(val) => setCurrentLength(val.length)}
          />
          <div className="right" style={{ fontSize: '12px' }}>
            {currentLength} / 20
          </div>
        </div>
        <h2>{translated.password1}</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '0 10px',
          }}
        >
          <Input type={inputType} placeholder={translated.password} />
          <div
            className="right"
            onClick={() =>
              setInputType(inputType === 'text' ? 'password' : 'text')
            }
          >
            {inputType === 'text' ? (
              <Eye color="var(--nutui-gray-7)" />
            ) : (
              <Marshalling color="var(--nutui-gray-7)" />
            )}
          </div>
        </div>
        <h2>{translated.title6}</h2>
        <Input formatter={formatter} placeholder={translated.formatter} />
        <Input
          formatter={formatter}
          formatTrigger="onBlur"
          placeholder={translated.formatter2}
        />
        <h2>{translated.title8}</h2>
        <Input align="left" placeholder={translated.align} />
        <Input align="right" placeholder={translated.align} />
        <h2>{translated.title10}</h2>
        <Input
          placeholder={translated.title10}
          onClick={() => Taro.showToast({ title: 'onClick' })}
        />
        <h2>{translated.title11}</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '0 10px',
          }}
        >
          <Tips color="var(--nutui-gray-7)" />
          <Input
            placeholder={translated.codeplaceholder}
            style={{ '--nutui-input-padding': '10px' }}
          />
          <div
            className="right"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Button type="primary" size="small">
              {translated.sendCode}
            </Button>
          </div>
        </div>
        <h2>{translated.border}</h2>
        <Input
          style={{ '--nutui-input-border-bottom-width': '1px' }}
          placeholder={translated.border}
        />
      </div>
    </>
  )
}

export default InputDemo
