import React,{useState} from 'react'
import { Link , Outlet,Navigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TabelCandidates from '../Tamplates/TabelCandidates';
import { useNavigate } from "react-router-dom";

const BtnCreateCandidates = () => {
    // const [toggleAddButton,settoggleAddButton] = useState(false)
    const navigate = useNavigate();

    return (
            <Link  to="new"> 
              <Button  variant="outlined" size="small" >add</Button>
            </Link>
    )
}

export default BtnCreateCandidates
