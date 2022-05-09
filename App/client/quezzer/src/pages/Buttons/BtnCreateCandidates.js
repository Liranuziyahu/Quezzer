import React from 'react'
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import '../../CSS/Candidate.css'
import Button from '@mui/material/Button';

const BtnCreateCandidates = () => {
    return (
        <Link to="/new" > 
            <Button  variant="outlined" size="small" style={{float:'right',marginBottom:10}}>
                <AddIcon/>
            </Button>   
        </Link>  
    )}
export default BtnCreateCandidates
