import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import {Button} from 'reactstrap'

const Layout = () => {
    const [ state, setState ] = useState('');
    return (
        <div>
            <br/>
            <input value={state} onChange={(event) => setState(event.target.value)} type='text'/>
            <Button color="primary" onClick = {() => setState('')}>Delete text</Button>
            <label>
                {state}
            </label>
        </div>
    )
};

export default Layout;