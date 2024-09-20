import React, { useState, useEffect } from 'react';
import './Breadcrumbs.css';
import { NavLink } from 'react-router-dom';
import feintIcon from '/icons/breadcrumb-feint.svg';
import fullIcon from '/icons/breadcrumb.svg';

const Breadcrumbs = ({ isShop }) => {
  const [isFeint, setIsFeint] = useState(false);

  useEffect(() => {
    setIsFeint(isShop);
  }, [isShop]);

  const linkClass = isShop ? 'nothing' : 'noDeco capitalize h6Text feint';

  return (
    <div className='breadcrumbs'>
      <section className='breadcrumbs-inner auto'>
        <section className='breadcrumbs-main flex'>
          <NavLink
            to='/'
            className='noDeco capitalize h6Text blue'
          >
            home
          </NavLink>
          <img
            src={isFeint ? feintIcon : fullIcon}
            alt=''
          />
          <NavLink
            to='/'
            className={isFeint ? 'noDeco capitalize h6Text feint' : 'noDeco capitalize h6Text blue'}
          >
            shop
          </NavLink>
          <img
            src={feintIcon}
            className={linkClass}
            alt=''
          />
          <NavLink
            to='/cart'
            className={linkClass}
          >
            cart
          </NavLink>
        </section>
      </section>
    </div>
  );
};

export default Breadcrumbs;