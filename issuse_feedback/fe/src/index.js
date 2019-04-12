'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
//import { LocaleProvider, Form, Icon, Input, Button, Checkbox } from 'antd';
//import { LocaleProvider, DatePicker, message } from 'antd';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import axios from 'axios';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class FeedbackForm extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        teach_courses: {},
        teach_options: [],
        course_options: [],
        rid: 0
      }

      axios({
        method: 'get',
        url: '/courses'
      }).then(res => {
        let tcmap = {}
        let toarr = []

        res.data.forEach(c => {
          if( tcmap[c.tname] ) {
            tcmap[c.tname].append(c)
          } else {
            tcmap[c.tname] = [c]

            toarr.push(<Option key={c.rid} value={c.tname}>{c.tname}</Option>)
          }
        })

        this.setState({
          teach_courses: tcmap,
          teach_options: toarr
        })
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFieldsAndScroll((err, values) => {
      if ( !err ) {
        values.rid = this.state.rid

        axios({
          method: 'post',
          url: '/feedback',
          data: values
        })
      }
    })
  }

  handleTeacherChange = v => {
    let coarr = this.state.teach_courses[v].map(v => {
      return <Option key={v.rid} value={v.rid}>{v.rname}</Option>
    })

    this.setState({
      course_options: coarr
    })

    this.props.form.setFieldsValue({
      'course': ''
    })
  }

  handleCourseChange = v => {
    this.setState({
      rid: v
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form    

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label='尚德机构账号/昵称'>
          {getFieldDecorator('nick')(<Input />)}
        </FormItem>        
        <FormItem {...formItemLayout} label='讲师姓名'>
          <Select placeholder='选择讲师' onChange={this.handleTeacherChange}>
            {this.state.teach_options}
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label='课程名'>
          {getFieldDecorator('course', {
              rules: [{ required: true, message: '请选择课程!' }]
            })(
              <Select placeholder='选择课程' onChange={this.handleCourseChange}>
                {this.state.course_options}
              </Select>
            )
          }
        </FormItem>
        <FormItem {...formItemLayout} label='反馈原因'>
          {getFieldDecorator('reason', {
              rules: [{ required: true, message: '请选择反馈原因!' }]
            })(
              <Select placeholder='选择反馈原因'>
                <Option value='无法进入直播间'>无法进入直播间</Option>
                <Option value='视频严重卡顿'>视频严重卡顿</Option>
                <Option value='视频轻微卡顿'>视频轻微卡顿</Option>
                <Option value='课件区域经常白屏'>课件区域经常白屏</Option>
                <Option value='课件区域偶尔白屏'>课件区域偶尔白屏</Option>                
                <Option value='其他原因'>其他原因</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem {...formItemLayout} label='其他原因或建议'>
          {getFieldDecorator('suggestion')(<Input.TextArea autosize={{ minRows: 2 }} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedFeedbackForm = Form.create()(FeedbackForm); 

class RootCompoent extends React.Component {
  render() {
    return (
      <div style={{width: '600px', margin: '5% 0 0 30%'}}>
        <h1 align='center'>尚直播问题反馈收集</h1>
        <WrappedFeedbackForm />        
      </div>
    )
  }

}

const WrappedRootCompoent = Form.create({ name: 'normal_login' })(RootCompoent);

ReactDOM.render(<RootCompoent />, document.getElementById('root'));
