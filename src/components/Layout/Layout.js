import React,{Fragment} from 'react';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
    return (
        <div>
            <header>
            <MainNavigation/>
            </header>
            <main>
              {props.children}
            </main>
        </div>
    );
};

export default Layout;