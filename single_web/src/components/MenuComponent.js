import React from 'react';
import 'antd/dist/antd.css';
import '../styles/MenuComponent.css';
import { Menu, Switch, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const MenuComponent = () => {
  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

  const changeMode = value => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
    <div style={{'margin-top':'15px'}} className="MenuContainer">
      <Switch onChange={changeMode} /> Cambiar Estilo
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Cambiar Tema
      <br />
      <br />
      <Menu
        style={{ width: 300 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
      >
        <Menu.Item key="1" icon={<MailOutlined />}>
          Elemento Uno
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          Elemento Dos
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Submenú Uno">
          <Menu.Item key="3">Opción 1</Menu.Item>
          <Menu.Item key="4">Opción 2</Menu.Item>
          <SubMenu key="sub1-2" title="Submenú Dos">
            <Menu.Item key="5">Opción 3</Menu.Item>
            <Menu.Item key="6">Opción 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Submenú Tres">
          <Menu.Item key="7">Opción 5</Menu.Item>
          <Menu.Item key="8">Opción 6</Menu.Item>
          <Menu.Item key="9">Opción 7</Menu.Item>
          <Menu.Item key="10">Opción 8</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    </>
  );
};

export default MenuComponent;