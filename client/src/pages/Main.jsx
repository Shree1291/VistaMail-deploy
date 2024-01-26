
import { useState ,Suspense} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import SuspenseLoader from '../components/common/SuspenseLoader';


const Wrapper = styled(Box)`
    display: flex;
`;


const Main = () =>{
    const [ openDrawer,setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    return (
        <>
        <Header toggleDrawer={toggleDrawer} />
        <Wrapper>
            <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
            <Suspense fallback={<SuspenseLoader />} >
                <Outlet context={{ openDrawer }} />
            </Suspense>
        </Wrapper>
    </>
    );
}

export default Main;