import React from 'react';
import { Link } from 'react-router-dom';
import './nav-styles.css';

class NavLink extends React.Component {
  render() {
    return (
      <Link className='link-container-style mx-2' to={this.props.toLink}>
        {this.props.children}
      </Link>
    )
  }
}

export default NavLink;