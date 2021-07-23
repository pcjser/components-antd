import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// base
export Button from './Base/Button';
export Icon from './Base/Icon';
export Typography from './Base/Typography';
export Divider from './Base/Divider';
export Row from './Base/Row';
export Col from './Base/Col';
export Layout from './Base/Layout';
export Space from './Base/Space';
export Affix from './Base/Affix';
export Breadcrumb from './Base/Breadcrumb';
export Dropdown from './Base/Dropdown';
export Menu from './Base/Menu';
export PageHeader from './Base/PageHeader';
export Pagination from './Base/Pagination';
export Steps from './Base/Steps';
export AutoComplete from './Base/AutoComplete';
export Cascader from './Base/Cascader';
export Checkbox from './Base/Checkbox';
export DatePicker from './Base/DatePicker';
export Form from './Base/Form';
export Input from './Base/Input';
export InputNumber from './Base/InputNumber';
export Mentions from './Base/Mentions';
export Radio from './Base/Radio';
export Rate from './Base/Rate';
export Select from './Base/Select';
export Slider from './Base/Slider';
export Switch from './Base/Switch';
export TimePicker from './Base/TimePicker';
export Transfer from './Base/Transfer';
export TreeSelect from './Base/TreeSelect';
export Upload from './Base/Upload';

// extension
export Foo from './Foo';
export Bar from './Bar';
export Demo from './Demo';


const fn = (sum => {
  const cb = num => {
    sum += num;
    console.log(sum);
    if (num === 3) return sum;
    return cb;
  }
  return cb;
})(0);