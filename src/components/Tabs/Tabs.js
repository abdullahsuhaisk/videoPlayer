/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.scss';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const TabSection = (props) => {
  const { styles, tabs } = props;

  return (
    <StyledWrapper className="vibuy--tabs-widget" styles={styles}>
      <Tabs className="vibuy--tabs react-tabs">
        <TabList className="vibuy--tab-list react-tabs__tab-list">
          {tabs.map((tab) => {
            return (
              <Tab
                className="vibuy--tab react-tabs__tab"
                selectedClassName="vibuy--tab-selected"
                key={tab.id}>
                {tab.title}
              </Tab>
            );
          })}
        </TabList>

        {tabs.map((tab) => {
          return (
            <TabPanel
              className="vibuy--tab-panel react-tabs__tab-panel"
              key={`panel-${tab.id}`}>
              {tab.children && <WidgetsRenderer widgets={tab.children} />}
            </TabPanel>
          );
        })}
      </Tabs>
    </StyledWrapper>
  );
};

export default TabSection;
