/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import tabTemplate from '../../templates/productsTabTemplate.json';
import 'react-tabs/style/react-tabs.css';
import './tabs.scss';
import SliderComponent from '../Slider/Slider';

const TabSection = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const style = {
    position: 'absolute',
    width: `${tabTemplate.settings.width}`,
    height: `${tabTemplate.settings.height}`,
    top: `${tabTemplate.settings.top}`,
    left: `${tabTemplate.settings.left}`,
    pointerEvents: 'auto'
  };

  const selected = {
    backgroundColor: '#0000',
    borderWidth: '0px 0px 2px 0px',
    borderColor: '#00acd8',
    borderStyle: 'solid',
    color: '#fff'
  };

  const unselected = {
    backgroundColor: '#0000',
    borderWidth: '0px 0px 2px 0px'
  };

  const handleSelectedTab = useCallback((index) => {
    setSelectedTabIndex(index);
  }, []);

  return (
    <div style={style}>
      <Tabs onSelect={(index) => handleSelectedTab(index)}>
        <TabList>
          {tabTemplate.tabs.map((item, index) => {
            return (
              <Tab
                key={item.id}
                style={
                  selectedTabIndex === index
                    ? { ...unselected, ...selected }
                    : unselected
                }>
                {item.name}
              </Tab>
            );
          })}
        </TabList>

        {tabTemplate.tabs.map((item) => {
          return (
            <TabPanel key={`panel-${item.id}`}>
              <SliderComponent />
              {/* <WidgetsRenderer data={item.tabPanel} /> */}
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabSection;
