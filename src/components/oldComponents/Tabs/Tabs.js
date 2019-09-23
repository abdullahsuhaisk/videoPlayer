/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.scss';
import { Wrapper } from './Tabs.style';

const Tabs = ({ styles, tabs, tabPanels }) => {
  return (
    <Wrapper className="vb--tabs" styles={styles}>
      <ReactTabs className="vb--tabs react-tabs">
        <TabList className="vb--tab-list react-tabs__tab-list">
          {tabs.map((tab, index) => {
            return (
              <Tab
                className="vb--tab react-tabs__tab"
                selectedClassName="vb--tab-selected"
                key={index}>
                {tab}
              </Tab>
            );
          })}
        </TabList>

        {tabPanels.map((tabPanel, index) => {
          return (
            <TabPanel
              className="vb--tab-panel react-tabs__tab-panel"
              key={`panel-${index}`}>
              {tabPanel}
            </TabPanel>
          );
        })}
      </ReactTabs>
    </Wrapper>
  );
};

Tabs.propTypes = {
  styles: PropTypes.object,
  tabs: PropTypes.array.isRequired,
  tabPanels: PropTypes.array.isRequired
};

Tabs.defaultProps = {
  styles: {}
};

export default Tabs;
