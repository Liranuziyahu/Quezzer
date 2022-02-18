import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Admin,Login,Exams,ExamsTable,Candidates,Repositore,ExamByID,RepositoreByID,CandidatesByID,CreateCandidates} from '../pages/index'
import User from '../pages/User';
import ProtectedRoute from '../Route/ProtectedRoute'


const Router = () => {
    
    return (
            <Routes>
                <Route  path="/login" element={<Login/>}>
                </Route>
                <Route  path="login/new" element={<CreateCandidates/>}></Route>
                <Route path="/" element={<ProtectedRoute/>}>
                            {/*Admin Pages*/}
                        <Route path="exams" element={<ExamsTable/>} /> 
                        <Route path="exams/:cid" element={<ExamByID/>}/>

                        <Route path="candidates" element={<Candidates/>}>
                            <Route path="candidates/:cid" element={<CandidatesByID/>}/>
                            <Route path="new" element={<CreateCandidates/>}/>
                        </Route>
                        <Route path="repositore" element={<Repositore/>}>
                            <Route path="repositore/:cid" element={<RepositoreByID/>}/>
                        </Route>
                   
                    
                            {/*User Pages*/}

                     <Route path="test" element={<Exams/>}></Route>
                </Route> 

                <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
            </Routes>
    )
}

export default Router






