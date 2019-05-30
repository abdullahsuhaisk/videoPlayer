import React from 'react';
import Card from '../../components/Card/Card';

const HotspotCard = (props) => {
  const { title } = props;
  return <Card title={title} />;
};

export default HotspotCard;
