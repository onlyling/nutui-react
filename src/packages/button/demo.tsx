import React, { useState } from 'react'
import { Star, Plus } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Button } from './button'
import Cell from '../cell'

interface T {
  ce5c5446: string
  ce5c5447: string
  c38a08ef: string
  b840c88f: string
  b840c881: string
  b840c882: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  a52bef0c: string
  d04fcbda: string
  '0aaad622': string
  '0aaad620': string
  '60a53514': string
  b8a453e3: string
  '248be9e1': string
  ea3d02f2: string
  ea379d01: string
  c9e6df49: string
  '781b07fd': string
  '1076d771': string
  '6ab47cd2': string
}

const ButtonDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '按钮类型',
      ce5c5447: '按钮形状',
      c38a08ef: '主要按钮',
      b840c88f: '信息按钮',
      b840c881: '方形按钮',
      b840c882: '圆形按钮',
      a74a1fd4: '默认按钮',
      '8dab2f66': '危险按钮',
      cfbdc781: '警告按钮',
      c3a3a1d2: '成功按钮',
      e51e4582: '填充模式',
      '7db1a8b2': '禁用状态',
      a52bef0c: '加载状态',
      d04fcbda: '加载中',
      '0aaad622': '图标按钮',
      '0aaad620': '按钮尺寸',
      '60a53514': '操作按钮',
      b8a453e3: '大号按钮',
      '248be9e1': '普通按钮',
      ea3d02f2: '小型按钮',
      ea379d01: '迷你按钮',
      c9e6df49: '块级元素',
      '781b07fd': '自定义颜色',
      '1076d771': '单色按钮',
      '6ab47cd2': '渐变按钮',
    },
    'zh-TW': {
      ce5c5446: '按鈕類型',
      ce5c5447: '按鈕形狀',
      c38a08ef: '主要按鈕',
      b840c88f: '資訊按鈕',
      a74a1fd4: '默認按鈕',
      b840c881: '方形按钮',
      b840c882: '圆形按钮',
      '8dab2f66': '危險按鈕',
      cfbdc781: '警告按鈕',
      c3a3a1d2: '成功按鈕',
      e51e4582: '填充模式',
      '7db1a8b2': '禁用狀態',
      a52bef0c: '載入狀態',
      d04fcbda: '載入中',
      '0aaad622': '图标按钮',
      '0aaad620': '按鈕尺寸',
      '60a53514': '操作按鈕',
      b8a453e3: '大號按鈕',
      '248be9e1': '普通按鈕',
      ea3d02f2: '小型按鈕',
      ea379d01: '迷你按鈕',
      c9e6df49: '塊級元素',
      '781b07fd': '自定義顏色',
      '1076d771': '單色按鈕',
      '6ab47cd2': '漸變按鈕',
    },
    'en-US': {
      ce5c5446: 'Button Type',
      ce5c5447: 'Button Shape',
      c38a08ef: 'Main button',
      b840c88f: 'Info Button',
      b840c881: 'square',
      b840c882: 'round',
      a74a1fd4: 'Default Button',
      '8dab2f66': 'Danger Button',
      cfbdc781: 'Warning button',
      c3a3a1d2: 'Success Button',
      e51e4582: 'Fill Button',
      '7db1a8b2': 'Disabled State',
      a52bef0c: 'Load State',
      d04fcbda: 'Loading',
      '0aaad622': 'Icon Button',
      '0aaad620': 'Button size',
      '60a53514': 'Operation Button',
      b8a453e3: 'Large button',
      '248be9e1': 'Normal Button',
      ea3d02f2: 'Small Button',
      ea379d01: 'Mini Button',
      c9e6df49: 'Block-level elements',
      '781b07fd': 'Custom Colors',
      '1076d771': 'Monochrome button',
      '6ab47cd2': 'Gradient button',
    },
  })

  const marginStyle = { margin: 8 }
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button style={marginStyle} type="primary">
            {translated.c38a08ef}
          </Button>
          <Button style={marginStyle} type="info">
            {translated.b840c88f}
          </Button>
          <Button style={marginStyle}>{translated.a74a1fd4}</Button>
          <Button type="danger" style={marginStyle}>
            {translated['8dab2f66']}
          </Button>
          <Button type="warning" style={marginStyle}>
            {translated.cfbdc781}
          </Button>
          <Button type="success" style={marginStyle}>
            {translated.c3a3a1d2}
          </Button>
        </Cell>

        <h2>{translated.e51e4582}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button fill="solid" style={marginStyle}>
            Solid
          </Button>
          <Button type="primary" fill="outline" style={marginStyle}>
            Outline
          </Button>
          <Button type="primary" fill="dashed" style={marginStyle}>
            Dashed
          </Button>
          <Button fill="none" style={marginStyle}>
            None
          </Button>
        </Cell>

        <h2>{translated['0aaad622']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            type="primary"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['60a53514']}
          </Button>
          <Button
            type="primary"
            fill="outline"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['60a53514']}
          </Button>
          <Button
            type="primary"
            fill="dashed"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['60a53514']}
          </Button>
          <Button
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-color-primary-light)`,
              borderColor: `var(--nutui-color-primary)`,
              color: `var(--nutui-color-primary)`,
            }}
          >
            {translated['60a53514']}
          </Button>
          <Button
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-3)`,
              color: `var(--nutui-gray-7)`,
            }}
          >
            {translated['60a53514']}
          </Button>
          <Button
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-1)`,
              color: `var(--nutui-gray-7)`,
            }}
          >
            {translated['60a53514']}
          </Button>
          <Button
            type="default"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['60a53514']}
          </Button>
          <Button
            shape="square"
            fill="outline"
            type="primary"
            icon={<Plus width="20" />}
            style={marginStyle}
          />
          <Button
            fill="outline"
            type="primary"
            icon={<Plus width="20" />}
            style={marginStyle}
          />
          <Button
            type="primary"
            fill="dashed"
            icon={<Plus width="20" />}
            style={marginStyle}
          />
          <Button
            type="primary"
            size="large"
            icon={<Star width={20} height={20} />}
            rightIcon={<Star width={20} height={20} />}
            style={marginStyle}
          >
            {translated['60a53514']}
          </Button>
        </Cell>

        <h2>{translated['7db1a8b2']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            disabled
            type="primary"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['7db1a8b2']}
          </Button>
          <Button
            disabled
            type="primary"
            fill="outline"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['7db1a8b2']}
          </Button>
          <Button
            disabled
            type="primary"
            fill="dashed"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['60a53514']}
          </Button>
          <Button
            disabled
            fill="solid"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['7db1a8b2']}
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-3)`,
              color: `var(--nutui-gray-5)`,
            }}
          >
            {translated['7db1a8b2']}
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-1)`,
              color: `var(--nutui-gray-5)`,
            }}
          >
            {translated['7db1a8b2']}
          </Button>
          <Button
            disabled
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            {translated['7db1a8b2']}
          </Button>
          <Button
            disabled
            shape="square"
            fill="outline"
            type="primary"
            icon={<Plus width="20" />}
            style={marginStyle}
          />
          <Button
            disabled
            type="primary"
            icon={<Plus width="20" />}
            style={marginStyle}
          />
          <Button
            disabled
            type="primary"
            fill="dashed"
            icon={<Plus width="20" />}
            style={marginStyle}
          />
          <Button
            disabled
            type="primary"
            size="large"
            icon={<Star width={20} height={20} />}
            rightIcon={<Star width={20} height={20} />}
            style={marginStyle}
          >
            {translated['7db1a8b2']}
          </Button>
        </Cell>
        <h2>{translated.ce5c5447}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button style={marginStyle} type="primary" shape="square">
            {translated.b840c881}
          </Button>
          <Button style={marginStyle} type="primary">
            {translated.b840c882}
          </Button>
        </Cell>
        <h2>{translated.a52bef0c}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button loading type="warning" style={marginStyle}>
            {translated.d04fcbda}
          </Button>
          <Button
            loading={loading}
            type="success"
            onClick={() => {
              setTimeout(() => {
                setLoading(false)
              }, 1500)
              setLoading(!loading)
            }}
            style={marginStyle}
          >
            Click me!
          </Button>
        </Cell>

        <h2>{translated['0aaad620']}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button size="large" type="primary">
            {translated.b8a453e3}
          </Button>
          <Button type="primary" style={marginStyle}>
            {translated['248be9e1']}
          </Button>
          <Button style={marginStyle}>{translated['248be9e1']}</Button>
          <Button size="small" style={marginStyle} type="primary">
            {translated.ea3d02f2}
          </Button>
          <Button size="mini" style={marginStyle} type="primary">
            {translated.ea379d01}
          </Button>
        </Cell>
        <h2>{translated.c9e6df49}</h2>
        <Cell>
          <Button block type="primary">
            {translated.c9e6df49}
          </Button>
        </Cell>

        <h2>{translated['781b07fd']}</h2>

        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            style={{
              margin: 8,
              '--nutui-button-default-border-color': 'blue',
              '--nutui-button-default-color': '#fff',
              '--nutui-button-default-background-color': 'blue',
            }}
          >
            {translated['1076d771']}
          </Button>
          <Button
            fill="outline"
            style={{
              margin: 8,
              '--nutui-button-default-border-color': '#7232dd',
              '--nutui-button-default-color': '#7232dd',
            }}
          >
            {translated['1076d771']}
          </Button>
          <Button
            style={{
              margin: 8,
              '--nutui-button-default-border-color': 'transparent',
              '--nutui-button-default-color': '#fff',
              '--nutui-button-default-background-color':
                'rgba(10,101,208,0.75)',
            }}
          >
            {translated['1076d771']}
          </Button>
          <Button
            type="primary"
            style={{
              margin: 8,
              '--nutui-button-default-border-color': 'transparent',
              '--nutui-button-default-color': '#fff',
              '--nutui-button-default-background-color':
                'linear-gradient(to right, #ff6034, #ee0a24)',
            }}
          >
            {translated['6ab47cd2']}
          </Button>
        </Cell>
      </div>
    </>
  )
}

export default ButtonDemo
