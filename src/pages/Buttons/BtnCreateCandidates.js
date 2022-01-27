import React,{useState} from 'react'
import { Link , Outlet,Navigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TabelCandidates from '../Tamplates/TabelCandidates';
import { useNavigate } from "react-router-dom";

const BtnCreateCandidates = () => {
    const [toggleAddButton,settoggleAddButton] = useState(false)
    const navigate = useNavigate();

    return (
        <div>
            <Link  to="new" onClick ={(e) =>{
                if(toggleAddButton==true)
                    navigate(-1);
               return settoggleAddButton(!toggleAddButton)

                ;}}> 
              <Button  variant="outlined" size="small" >add</Button>
            </Link>
                {
                    toggleAddButton ? <Outlet></Outlet>:<TabelCandidates/>
                } 
        </div>
    )
}

export default BtnCreateCandidates
