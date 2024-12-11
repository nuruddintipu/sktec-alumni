import React from "react";
import {Container, Row} from "react-bootstrap";
import Sidebar from "./Sidebar";
import './styles.css';
import DashboardFooter from "./DashboardFooter";
import AnalyticsCard from "./AnalyticsCard";
import Charts from "./Charts";
import RecentActivities from "./RecentActivities";

const AdmindashBoard = () => {
    return (
        <Container style={{maxWidth: '100vw'}}>
            <Row>
                <Sidebar/>
                <div className={"dashboard-content"}>
                    {/*    <DashboardNavbar/> */}
                    <div className={"dashboard-main"}>
                        {/*<AnalyticsCard/>*/}
                        {/*<RecentActivities/>*/}
                    </div>
                    {/*<DashboardFooter/>*/}
                </div>
            </Row>
        </Container>
    );
};

export default AdmindashBoard;