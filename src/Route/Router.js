import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Admin,Login,Exams,ExamsTable,Candidates,Repositore,ExamByID,RepositoreByID,CandidatesByID,CreateCandidates} from '../pages/index'
import User from '../pages/User';
import ProtectedRoute from '../Route/ProtectedRoute'
import ProtectedUserRoute from './ProtectedUserRoute';


const Router = () => {
    
    return (
    <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route  path="login/new" element={<CreateCandidates/>}></Route>
        <Route element={<ProtectedRoute/>}>
            <Route path="Admin" element={<Admin/>}>
                <Route path="exams" element={<ExamsTable/>}> 
                    <Route path="exams/:cid" element={<ExamByID/>}/>
                </Route>
                <Route path="candidates" element={<Candidates/>}>
                    <Route path="candidates/:cid" element={<CandidatesByID/>}/>
                    <Route path="new" element={<CreateCandidates/>}/>
                </Route>
                <Route path="repositore" element={<Repositore/>}>
                    <Route path="repositore/:cid" element={<RepositoreByID/>}/>
                </Route>
            </Route>
        </Route>
        <Route path="User" element={<ProtectedUserRoute/>}>
            <Route index element={<User/>}>
            </Route> 
            <Route path="test" element={<Exams/>}/><Route/>
        </Route> 
        <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
    </Routes>
    )
}

export default Router









