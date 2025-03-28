import React, { useState } from 'react'
import { Star, TriangleDown } from '@nutui/icons-react'
import Button from '@/packages/button'
import Toast from '@/packages/toast'
import Table from '@/packages/table'
import { useTranslate } from '@/sites/assets/locale/taro'
import { TableColumnProps } from './types'

interface T {
  basic: string
  borderedAndAlign: string
  summaryTitle: string
  summary: string
  striped: string
  noDataTitle: string
  customNoData: string
  customCell: string
  asynchronousRendering: string
  sorting: string
  sorterIcon: string
  hideHeader: string
  stickyHeader: string
  stickyLeftColumn: string
  stickyRightColumn: string
}

const TableDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      borderedAndAlign: '是否显示边框，文字对齐',
      summaryTitle: '显示总结栏',
      summary: '这是总结栏',
      striped: '条纹、明暗交替',
      hideHeader: '隐藏表头',
      noDataTitle: '无数据默认展示，支持自定义',
      customNoData: '这里是自定义展示',
      customCell: '自定义单元格',
      asynchronousRendering: '支持异步渲染(5s之后看效果)',
      sorting: '支持排序',
      sorterIcon: '支持排序更换图标',
      stickyHeader: '固定表头',
      stickyLeftColumn: '固定左列',
      stickyRightColumn: '固定右列',
    },
    'en-US': {
      basic: 'Basic usage',
      borderedAndAlign: 'Whether to display border and align text',
      summaryTitle: 'Show summary bar',
      summary: 'This is the summary column',
      striped: 'Stripes, alternating light and shade',
      hideHeader: 'Hide table header',
      noDataTitle:
        'No data is displayed by default, and customization is supported',
      customNoData: 'Here is the custom display',
      customCell: 'Custom cell',
      asynchronousRendering:
        'Support asynchronous rendering(See the effect after 5S)',
      sorting: 'Support sorting',
      sorterIcon: 'Supports sorting and changing ICONS',
      stickyHeader: 'sticky header',
      stickyLeftColumn: 'sticky left column',
      stickyRightColumn: 'sticky right column',
    },
  })

  const [columns1] = useState<Array<TableColumnProps>>([
    {
      title: 'ID',
      key: 'id',
      render: (record: any, index) => {
        return index + 1
      },
    },
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === '女' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])
  const [columns2] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [columns4] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '操作',
      key: 'render',
    },
  ])

  const [columns5] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '年龄',
      key: 'age',
      sorter: (row1: any, row2: any) => {
        return row1.age - row2.age
      },
    },
  ])

  const [columns6] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '生日',
      key: 'birthday',
    },
    {
      title: '年龄',
      key: 'age',
    },
  ])

  const [columnsStickRight] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      width: 100,
    },
    {
      title: '性别',
      key: 'sex',
      width: 60,
    },
    {
      title: '学历',
      key: 'record',
      width: 100,
    },
    {
      title: '生日',
      key: 'birthday',
      width: 100,
    },
    {
      title: '年龄',
      key: 'age',
      fixed: 'right',
      width: 60,
    },
  ])

  const [columnsStickLeft] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      fixed: 'left',
      width: 100,
    },
    {
      title: '性别',
      key: 'sex',
      width: 60,
    },
    {
      title: '学历',
      key: 'record',
      width: 100,
    },
    {
      title: '生日',
      key: 'birthday',
      width: 100,
    },
    {
      title: '年龄',
      key: 'age',
      width: 60,
    },
  ])

  const [data1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
    },
  ])

  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([] as any)
  const [data4, setData4] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      render: () => {
        return (
          <Button
            onClick={() => Toast.show('hello')}
            size="small"
            type="primary"
          >
            <div>Hello</div>
          </Button>
        )
      },
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      render: () => {
        return <Star height="14px" width="14px" />
      },
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      render: () => {
        return (
          <Button
            type="success"
            size="small"
            onClick={() => window.open('https://www.jd.com')}
          >
            <div>跳转到京东</div>
          </Button>
        )
      },
    },
  ])

  const [data5, setData5] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      age: 4,
    },
  ])

  const [data6, setData6] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      sex: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      sex: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
  ])

  setTimeout(() => {
    setData3(data1)
  }, 5000)

  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    Toast.show(`${JSON.stringify(item)}`)
    setData5([...data])
  }

  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Table columns={columns1} data={data1} style={{ background: '#fff' }} />
      <h2>{translated.borderedAndAlign}</h2>
      <Table
        columns={columns2}
        data={data1}
        bordered={false}
        style={{ background: '#fff' }}
      />
      <h2>{translated.summaryTitle}</h2>
      <Table
        columns={columns1}
        data={data1}
        summary={translated.summary}
        style={{ background: '#fff' }}
      />
      <h2>{translated.striped}</h2>
      <Table
        columns={columns1}
        data={data1}
        style={{ background: '#fff' }}
        striped
      />
      <h2>{translated.hideHeader}</h2>
      <Table
        columns={columns1}
        data={data1}
        style={{ background: '#fff' }}
        showHeader={false}
      />
      <h2>{translated.noDataTitle}</h2>
      <Table columns={columns1} data={data2} style={{ background: '#fff' }} />
      <Table
        columns={columns1}
        data={data2}
        style={{ background: '#fff' }}
        noData={translated.customNoData}
      />
      <h2>{translated.customCell}</h2>
      <Table columns={columns4} data={data4} style={{ background: '#fff' }} />
      <h2>{translated.asynchronousRendering}</h2>
      <Table columns={columns1} data={data3} style={{ background: '#fff' }} />
      <h2>{translated.sorting}</h2>
      <Table
        columns={columns5}
        data={data5}
        onSort={handleSorter}
        style={{ background: '#fff' }}
      />
      <h2>{translated.sorterIcon}</h2>
      <Table
        columns={columns5}
        data={data5}
        onSort={handleSorter}
        style={{ background: '#fff' }}
        sorterIcon={<TriangleDown width="12px" height="12px" />}
      />
      <h2>{translated.stickyHeader}</h2>
      <Table
        columns={columns6}
        data={data6}
        style={{ height: 150 }}
        summary={translated.summary}
      />
      <h2>{translated.stickyLeftColumn}</h2>
      <Table columns={columnsStickLeft} data={data6} />
      <h2>{translated.stickyRightColumn}</h2>
      <Table columns={columnsStickRight} data={data6} />
    </div>
  )
}

export default TableDemo
