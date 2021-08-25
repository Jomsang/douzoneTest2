import { Switch, Route, Redirect } from "react-router-dom";
import Test2 from './views/Test2';
function AppRoute(props: any) {
   
    return(
        <>
            {
            <Switch>
                <Route path="/test2" component={Test2}/>
                <Redirect to="/test2"/>
            </Switch>
           
        }
        </>
        

    );
}

export default AppRoute;