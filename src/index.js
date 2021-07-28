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
export Avatar from './Base/Avatar';
export Badge from './Base/Badge';
export Calendar from './Base/Calendar';
export Card from './Base/Card';
export Carousel from './Base/Carousel';
export Collapse from './Base/Collapse';
export Comment from './Base/Comment';
export Descriptions from './Base/Descriptions';
export Empty from './Base/Empty';
export Image from './Base/Image';
export List from './Base/List';
export Popover from './Base/Popover';
export Statistic from './Base/Statistic';
export Table from './Base/Table';
export Tabs from './Base/Tabs';
export Timeline from './Base/Timeline';
export Tooltip from './Base/Tooltip';
export Tree from './Base/Tree';
export Alert from './Base/Alert';
export Drawer from './Base/Drawer';
export message from './Base/Message';
export Modal from './Base/Modal';
export notification from './Base/notification';
export Popconfirm from './Base/Popconfirm';
export Progress from './Base/Progress';
export Result from './Base/Result';
export Skeleton from './Base/Skeleton';
export Spin from './Base/Spin';
export Anchor from './Base/Anchor';
export BackTop from './Base/BackTop';
export ConfigProvider from './Base/ConfigProvider';

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