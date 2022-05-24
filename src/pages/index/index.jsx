import { Component, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, Form, Toast, Field, Cell, Input, Popup, Picker } from "@taroify/core"
import "@taroify/core/button/style"
import './index.css'


export default function () {

  const onSubmit = () => {
    console.log(1111);
  }

  const [value, setValue] = useState("")
  const [openPicker, setOpenPicker] = useState(false)

  return (
    <View className='index'>
      <Form onSubmit={onSubmit}>
        {/* Popup */}
        <Popup open={openPicker} rounded placement="bottom" onClose={setOpenPicker}>
          <Popup.Backdrop />
          <Picker
            onCancel={() => setOpenPicker(false)}
            onConfirm={(values) => {
              setValue(values)
              setOpenPicker(false)
            }}
          >
            <Picker.Toolbar>
              <Picker.Button>取消</Picker.Button>
              <Picker.Title>请选择医院</Picker.Title>
              <Picker.Button>确认</Picker.Button>
            </Picker.Toolbar>
            <Picker.Column>
              <Picker.Option>绵阳市中心医院</Picker.Option>
              <Picker.Option>绵阳市第三医院</Picker.Option>
              <Picker.Option>绵阳市四〇四医院</Picker.Option>
            </Picker.Column>
          </Picker>
        </Popup>
        <Toast id="toast" />
        {/* 表单域 */}
        <Cell.Group inset>
          {/* 姓名 */}
          <Form.Item name="username" rules={[{ required: true, message: "请填写姓名" }]}>
            <Form.Label>姓名</Form.Label>
            <Form.Control>
              <Input placeholder="请填写姓名" />
            </Form.Control>
          </Form.Item>
          {/* 部门 */}
          <Form.Item name="dept" rules={[{ required: true, message: "请填写部门" }]}>
            <Form.Label>部门</Form.Label>
            <Form.Control>
              <Input placeholder="请填写部门" />
            </Form.Control>
          </Form.Item>
          {/* 工号 */}
          <Form.Item name="jobNumber" rules={[{ required: true, message: "请填写工号" }]}>
            <Form.Label>工号</Form.Label>
            <Form.Control>
              <Input placeholder="请填写工号" />
            </Form.Control>
          </Form.Item>
          {/* 身份证号 */}
          <Form.Item name="id" rules={[{ required: true, message: "请填写身份证" }]}>
            <Form.Label>身份证</Form.Label>
            <Form.Control>
              <Input placeholder="请填写身份证" />
            </Form.Control>
          </Form.Item>
          {/* 联系电话 */}
          <Form.Item name="tel" rules={[{ required: true, message: "请填写联系电话" }]}>
            <Form.Label>联系电话</Form.Label>
            <Form.Control>
              <Input placeholder="请填写联系电话" />
            </Form.Control>
          </Form.Item>
          {/* 选择医院 */}
          <Form.Item name="hosipital" rules={[{ required: true, message: "请选择医院" }]}>
            <Form.Label>医院</Form.Label>
            <Form.Control  onClick={() => setOpenPicker(true)}>
              <Input readonly placeholder="请选择医院" value={value} />
            </Form.Control>
          </Form.Item>
        </Cell.Group>

        <View style={{ margin: "16px" }}>
          <Button shape="round" block color="primary" formType="submit">
            提交
        </Button>
        </View>
      </Form>
    </View>
  )
}