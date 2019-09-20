import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import ProfileScreen from '../../../features/Profile/ProfileScreen';
import ShoppingCartScreen from '../../../features/ShoppingCart/ShoppingCartScreen';
import WishlistScreen from '../../../features/Wishlist/WishlistScreen';
import WatchListScreen from '../../../features/Watchlist/WatchListScreen';

const NavigationTabs = () => {
  const styles = {
    width: '100%',
    height: '100%',
    pointerEvents: 'auto',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Source Sans Pro',
    '.vb--tabs': {
      display: 'flex',
      flexDirection: 'column'
    },
    '.vb--tab-list': {
      backdropFilter: 'blur(30px)',
      boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.15)',
      backgroundColor: '#f5f9fc',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '19px',
      fontFamily: 'Source Sans Pro',
      /* font-size: 31px; */
      fontWeight: '600',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: '1.26',
      letterSpacing: '0.95px',
      textAlign: 'left',
      color: '#0b2443',
      borderBottom: 'none',
      paddingLeft: '25px'
    },
    '.vb--tab-selected': {
      backgroundColor: '#0000',
      borderWidth: '0px 0px 2px 0px',
      borderColor: '#00acd8',
      borderStyle: 'solid',
      color: '#83329c',
      marginBottom: '20px'
    },
    '.vb--tab-panel': {},
    '.vb--tab': {
      paddingTop: '15px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderWidth: '0px 0px 2px 0px'
    }
  };

  return (
    <Tabs
      styles={styles}
      tabs={[
        'Profile',
        'Favorites',
        'Watch List',
        'Wish List',
        'Shopping Cart'
      ]}
      tabPanels={[
        <ProfileScreen />,
        <WatchListScreen />,
        <WishlistScreen />,
        <ShoppingCartScreen />
      ]}
    />
  );
};

export default NavigationTabs;
