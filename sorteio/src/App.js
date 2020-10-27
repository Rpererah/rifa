import React,{useState,useEffect, Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './404';
import Admin from './Admin';
import Form from './Formulario';

function App() {
  const [admin, setAdmin] = useState("");
  const [estaLogado,setEstaLogado]=useState(false);
  return (
    <div className="App">
        <Fragment>
          <Switch>
            {estaLogado ? 
            <Route exact path="/" component={Admin}/>
            : 
            <Route exact path="/" component={Form}/>
            }
            <Route path="*" component={NotFound}/>
          </Switch>
        </Fragment>
    </div>
  );
}

export default App;
