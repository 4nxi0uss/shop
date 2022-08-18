import * as React from 'react';

import style from './Header.module.scss'

import block from 'bem-css-modules'

import Logo from '../../img/logo.svg'
import Cart from '../../img/icon-cart.svg'
import avatar from '../../img/image-avatar.png'

const b = block(style)

const Header = () => {

    return (
        <header className={b()}>
            <div className={b('div')}>
                <img src={Logo} alt='logo' className={b('logo')} />

                <ul className={b('menu')}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={b('div')}>
                <img src={Cart} alt='cart' className={b('cart')} />
                <img src={avatar} alt='avatar' className={b('avatar')} />
            </div>

        </header>
    )
}

export default Header;