import React from 'react';
// import cn from 'classnames';

import s from './layout.module.scss';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={s.root}>{children}</div>
);

export default Layout;