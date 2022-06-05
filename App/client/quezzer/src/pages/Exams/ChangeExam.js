import React , {useEffect , useRef} from 'react'
import Button from '@mui/material/Button';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ChangeExam = ({props}) => {

  const refLoader = useRef();
  const refTitleDone = useRef();

  let nameExam = props?.storageQuestions?.[props.theExmControl+1]?.name
  const styleCenter ={
    width:700,
    position:'absolute',
    top:'35%',left:'calc(50% - 350px)'
  }
  const reload = {
    position: 'absolute',
    top:'calc(50% - 32px)',
    left:'calc(50% - 32px)'
   }

   useEffect(() =>{ if(props.storageQuestions.length != 0) props.finishedExam()},[])

   setTimeout(() =>{
    refLoader.current.style.display='none'
    refTitleDone.current.style.display=''
   },1000)

  return (
  <>

    {

      (props.storageQuestions.length != props.theExmControl + 1 && props.storageQuestions.length != 0)
      ? 
        <div style = {styleCenter}>
          <h1 style={{textAlign: 'center'}}>You are Ready for <span style={{color:'#1663be',fontWeight:'700'}}>{nameExam} </span>  Exam?</h1>
          <Button style={{width:'100%'}} onClick={() => props.changeExam()} variant="contained" endIcon={<AlarmOnIcon />}>
              I'm ready for that
          </Button>
        </div>
      :
      <>
      <Box style={reload} sx={{ display: 'flex' }} ref={refLoader}>
         <CircularProgress size="4rem"/>
       </Box>
       <h1 ref={refTitleDone} style={{display:'none',textAlign:'center',transform:'translateY(250%)'}}>Thank you very much for participating</h1>  
      </>
        
 
 
    } 
  </>
)}
export default ChangeExam