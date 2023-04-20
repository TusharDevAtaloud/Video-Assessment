import { Routes, Route } from "react-router-dom"
import Dashboard from "pages/Dashboard";


const SwitchRoutes = () => {
    return ( 
        <>
        <Routes>
            <Route exact path="/" Component={Dashboard}>
            </Route>
        </Routes>
        </>
    )
}


export default SwitchRoutes