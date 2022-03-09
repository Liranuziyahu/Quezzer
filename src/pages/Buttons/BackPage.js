import React from 'react'
import { useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const BackPage = () => {
    const navigate = useNavigate();

  return (
    <KeyboardBackspaceIcon onClick={()=>navigate(-1)}>

    </KeyboardBackspaceIcon>
  )
}

export default BackPage