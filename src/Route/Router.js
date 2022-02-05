import React from 'react'
import { Routes, Route,Navigate } from "react-router-dom";
import {Admin,Login,Exams,Candidates,Repositore,ExamByID,RepositoreByID,CandidatesByID,CreateCandidates} from '../pages/index'
import User from '../pages/User';
import ProtectedRoute from '../Route/ProtectedRoute'


const Router = () => {
    
    return (
        <div>
            <Routes>

                {/* <Route index element={<Navigate to="admin" replace={true}/>}></Route> */}

                <Route  path="login"  element={<Login/>}>
                    <Route path="new" element={<CreateCandidates/>}></Route>
                </Route>

                <Route element={<ProtectedRoute/>}>
                    <Route path="Admin"  element={<Admin/>}>
                            {/* Main Admin Pages*/}
                        <Route path="exams" element={<Exams/>}></Route>
                        <Route path="exams/:cid" element={<ExamByID/>}></Route>


                        <Route path="candidates" element={<Candidates/>}>
                            <Route path="new" element={<CreateCandidates/>}></Route>
                        </Route>
                        <Route path="candidates/:cid" element={<CandidatesByID/>}></Route>

                        <Route path="repositore" element={<Repositore/>}></Route>
                        <Route path="repositore/:cid" element={<RepositoreByID/>}></Route>
                    </Route>

                    <Route path="User" element={<User/>}>
                         {/* Main Test Pages*/}
                         <Route path="exams" element={<Exams/>}></Route>

                    </Route>
                </Route>
                <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :(</h1>)()}></Route> 
                  {/* this fun call iife */}
            </Routes>
        </div>
    )
}

export default Router
