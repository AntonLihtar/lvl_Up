import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface IProps {
    className?: string;
}

export const Navbar = ({className}: IProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>эбоут</AppLink>
            </div>


        </div>
    );
};
