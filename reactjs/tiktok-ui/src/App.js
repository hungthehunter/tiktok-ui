import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "~/Routes";
import { DefaultLayout } from "~/components/Layouts";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                {publicRoutes.map((route,index)=>{
                  let Layout=DefaultLayout;
                  if(route.layout){
                    Layout=route.layout;
                  }else if(route.layout===null){
                    Layout=Fragment;
                  }
                    const Page=route.component
                    return <Route path={route.path} key={index} element={<Layout><Page/></Layout>}/>
                })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
