import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<p><i>Loading...</i></p>}>
            <Routes>
                {routeConfig.map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;