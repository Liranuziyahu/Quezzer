import React ,{useContext} from 'react'
import { Link , Outlet } from "react-router-dom";
import {myContextData} from '../context/ContextDataFromServer'
//CSS
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Admin() {
    const {reqTableAdmin} = useContext(myContextData)

    return (
        <div>
            <nav>
            <Stack spacing={1} direction="row">
            <Button onClick={()=>{ reqTableAdmin('Candidates')}} variant="outlined"  >  <Link to="candidates">Candidates</Link></Button>
            <Button onClick={()=>{ reqTableAdmin('Exams')}} variant="outlined"><Link to='exams'>Exams</Link></Button>
            <Button variant="outlined" ><Link to='repositore'>Repositories</Link></Button>
            </Stack>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Admin
// reqTableAdmin={reqTableAdmin}
// onClick={()=>{reqTableAdmin('Candidates')}}