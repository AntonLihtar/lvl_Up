import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import React, {Suspense} from "react";
import './styles/index.scss';
import {UseTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>theme</button>

            <div className={'wrBtn'}>
                <Link to={'/'} className={'btn'}>главная</Link>
                <Link to={'/about'} className={'btn'}>эбоут</Link>

            </div>

            <Suspense fallback={<p><i>Loading...</i></p>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>


        </div>
    );
};

export default App;