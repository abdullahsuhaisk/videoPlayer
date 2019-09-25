import React from 'react';
// import { Query } from 'react-apollo';
// import { getProdLinkUniqueId } from '../../hooks/ProdLinkHook';
import withQuery from '../HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_HEADER_COMPANY_CAMPAING } from '../../Queries/ProdLink/ProdLinkQuery';
// import dp from './assets/dp.png';

const FETCHPOLICIY = 'cache-first';
const Header = (props) => {
  const {
    children,
    color,
    data: { prodLink },
    isCampaingName
  } = props;
  // const uniqueId = getProdLinkUniqueId();
  return (
    <React.Fragment>
      <div className="Header" style={{ color }}>
        <div className="mainMenu--brandInfo--inline">
          {isCampaingName === true ? (
            <img
              className="company--image"
              src={prodLink && prodLink.image && prodLink.image.thumbnailUrl}
              alt={prodLink && prodLink.company && prodLink.company.name}
            />
          ) : null}
          <h1 className="company--name">
            {prodLink && prodLink.company && prodLink.company.name}
          </h1>
          {isCampaingName === true ? (
            <h5 className="campaign--name">
              {prodLink && prodLink.campaign && prodLink.campaign.name}
            </h5>
          ) : null}
        </div>
      </div>
      {children}
    </React.Fragment>
  );
};

export default withQuery(Header, GET_HEADER_COMPANY_CAMPAING, FETCHPOLICIY);
