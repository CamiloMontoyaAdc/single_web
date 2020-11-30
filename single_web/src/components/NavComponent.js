import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{'float':'left', 'margin-top':'15px', 'margin-left':'90px'}}>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment> 
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
        </Segment>
        <Segment> 
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
        </Segment>
      </div>
    )
  }
}
