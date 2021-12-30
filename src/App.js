import { Routes, Route, Link,Navigate } from "react-router-dom";
import {Admin,Login,Exams,Candidates,Repositore,ExamByID,RepositoreByID,CandidatesByID} from './pages/index.js'
import ProtectedRoute from './component/ProtectedRoute'
//CSS
import './App.css';

function App() {
  return (
    <>

      <Routes>
      <Route index element={<Navigate to="admin" replace={true}/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route element={<ProtectedRoute/>}>
        <Route path="Admin"  element={<Admin/>}>
          {/* Main Admin Pages*/}
          <Route path="exams" element={<Exams/>}></Route>
          <Route path="exams/:cid" element={<ExamByID/>}></Route>
          <Route path="Candidates" element={<Candidates/>}></Route>
          <Route path="Candidates/:cid" element={<CandidatesByID/>}></Route>
          <Route path="repositore" element={<Repositore/>}></Route>
          <Route path="repositore/:cid" element={<RepositoreByID/>}></Route>
        </Route>
      </Route>
      <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :(</h1>)()}></Route> 
       {/* this fun call iife */}
    </Routes>
    </>
  
  
  );
}

export default App;
