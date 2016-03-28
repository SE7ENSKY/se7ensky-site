/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <h1>
          <Link className={s.brand} to="/">
            <img src={require('./se7ensky-logo.svg')} width="101.6" height="61.6" alt="SE7ENSKY" />
          </Link>
        </h1>
        <div className={s.banner}>
          <h2 className={s.bannerTitle}>We are frontend</h2>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Header, s);
