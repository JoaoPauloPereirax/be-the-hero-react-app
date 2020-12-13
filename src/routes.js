import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component="Logon"/>
            </Switch>
        </BrowserRouter>
    );
}