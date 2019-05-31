/* eslint-disable import/no-cycle */
import React from 'react';
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.scss';
import { Wrapper } from './Tabs.style';

const Tabs = (props) => {
  const { styles, tabs, tabPanels } = props;

  return (
    <Wrapper className="vibuy--tabs-widget" styles={styles}>
      <ReactTabs className="vibuy--tabs react-tabs">
        <TabList className="vibuy--tab-list react-tabs__tab-list">
          {tabs.map((tab, index) => {
            return (
              <Tab
                className="vibuy--tab react-tabs__tab"
                selectedClassName="vibuy--tab-selected"
                key={index}>
                {tab}
              </Tab>
            );
          })}
        </TabList>

        {tabPanels.map((tabPanel, index) => {
          return (
            <TabPanel
              className="vibuy--tab-panel react-tabs__tab-panel"
              key={`panel-${index}`}>
              {tabPanel}
            </TabPanel>
          );
        })}
      </ReactTabs>
    </Wrapper>
  );
};

export default Tabs;
