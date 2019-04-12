'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
//import { LocaleProvider, Form, Icon, Input, Button, Checkbox } from 'antd';
//import { LocaleProvider, DatePicker, message } from 'antd';
// import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { Upload, message, Button, Icon } from 'antd'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

class FileUploader extends React.Component {
  render() {
    const props = {
      name: 'file',
      action: '/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }

        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }

    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    )
  }
}

function RootWrap() {
  return (<div style={{width: '600px', margin: '5% 0 0 30%'}}>
            <FileUploader />
        </div>);
}

ReactDOM.render(<RootWrap />, document.getElementById('root'))
