import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Admin,Login,DisassembleByCateegoriy,TabelCandidates,Repositore,ExamByID,RepositoreByID, CreateCandidates , User , ProtectedRoute , ProtectedUserRoute , UserPage} from '../pages/index'


const Router = () => {
    
    return (
    <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route  path="/new" element={<CreateCandidates/>}></Route>
        <Route element={<ProtectedRoute/>}>
            <Route path="Admin" element={<Admin/>}>
                <Route path="Users" element={<UserPage/>}> 
                    <Route path="Users/:cid" element={<ExamByID/>}/>
                </Route>
                <Route path="Candidates" element={<TabelCandidates/>}>
                    {/* <Route path="new" element={<CreateCandidates/>}/> */}
                </Route>
                <Route path="Repositories" element={<Repositore/>}>
                    <Route path="repositore/:cid" element={<RepositoreByID/>}/>
                </Route>
                <Route path="Questionnaire" element={<DisassembleByCateegoriy/>}/><Route/>
            </Route>
        </Route>
        <Route path="User" element={<ProtectedUserRoute/>}>
            <Route index element={<User/>}>
            </Route> 
            <Route path="Questionnaire" element={<DisassembleByCateegoriy/>}/><Route/>
        </Route> 
        <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
    </Routes>
    )
}

export default Router









