import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Admin,Login,Exams,Candidates,Repositore,ExamByID,RepositoreByID,CandidatesByID,CreateCandidates} from '../pages/index'
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
                    <Route path="exams" element={<Exams/>}></Route>  
                    <Route path="exams/:cid" element={<ExamByID/>}></Route>
                     <Route path="candidates" element={<Candidates/>}>
                         <Route path="new" element={<CreateCandidates/>}></Route>
                     </Route>
                     <Route path="candidates/:cid" element={<CandidatesByID/>}></Route>
                     <Route path="repositore" element={<Repositore/>}></Route>
                     <Route path="repositore/:cid" element={<RepositoreByID/>}></Route>
                     <Route path="exams" element={<Exams/>}></Route>
                </Route> 
                <Route  path="user" element={<User/>}></Route>

                <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
            </Routes>
    )
}

export default Router






