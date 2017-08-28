import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Menu, Dropdown, Icon} from 'antd';
const menu = (
  <Menu>
    <Menu.Item>
    <Link to='/'>退出登录</Link>
    </Menu.Item>
  </Menu>
);

class Logout extends Component {
  constructor(props){
    super(props);
    this.state={
      username:this.props.user
    }
  }
  render(){
    return(
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#" >
          {this.state.username}<Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}

export default Logout;
