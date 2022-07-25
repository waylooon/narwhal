import React from "react";
import {BrowserRouter as Router,Route, Redirect, Routes} from "react-router-dom";
import Navbar from "../components/Navigation/Navbar.js";

const AppRouter = (props) => { 

// useEffect((async ()=>{
//     props.isValidToken();
// }), []);

    return (
      <>
     
    {/* <Router basename={"/eoccui"}>
      <Routes>
        <Route path="/Login" component={Navbar}/>
        <PrivateRoute exact path="/UnAuthorizedAccessScreen" component={UnAuthorizedAccessScreen}/>
        <PrivateRoute exact path="/StaffReadOnly" component={StaffAssignmentScreen}/>
        <PrivateRoute exact path="/error" component={UnAuthorizedAccessScreen}/>
        <PrivateRoute exact path="/TaskParameter" component={TaskParameter}/>
        <PrivateRoute exact path="/Contract" component={ContractScreen}/>
        <PrivateRoute exact path="/Master" component={MasterLibraryScreenRedux}/> 
        <PrivateRoute exact path="/Team" component={TaskScreen}/>
        <PrivateRoute exact path="/Personal" component={ContactScreen}/>
        <PrivateRoute exact path="/Shift" component={ShiftScreen}/>
        <PrivateRoute exact path="/Staff" component={StaffAssignmentScreen}/>   
        <PrivateRoute exact path="/User" component={UserManagementScreen}/>             
        <Redirect to="/Login"/>
      </Routes>
     </Router> */}

     <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/navbar" element={<Navbar/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      {/* </Layout> */}
    </Router>


     </>
  );
}


export default AppRouter