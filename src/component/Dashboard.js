import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../App.css';




import MyRequest from './MyRequest';
import Restaurants from './Restaurants';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
          tabIndex : 0
        }
      }

    render(){
        return(
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    {/* <Tab>Dashboard</Tab> */}
                    <Tab>MyRequest</Tab>
                    <Tab>Restaurants</Tab>
                </TabList>
                {/* <TabPanel style={{ textAlign: "center" }}>Empty... No Data Found</TabPanel> */}
                <TabPanel style={{ textAlign: "center" }}><MyRequest /></TabPanel>
                <TabPanel style={{ textAlign: "center" }}><Restaurants /></TabPanel>
            </Tabs>
        )
    }
}

export default Dashboard;