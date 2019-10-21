import React from 'react';
// import { Query } from 'react-apollo';
// import { getProdLinkUniqueId } from '../../hooks/ProdLinkHook';
import withQuery from '../HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_HEADER_COMPANY_CAMPAING } from '../../Queries/ProdLink/ProdLinkQuery';
import { httpToHttps } from '../../utils/httpTohttps';
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
  const image =
    prodLink &&
    prodLink.company &&
    prodLink.company.logo &&
    prodLink.company.logo.thumbnailUrl;
  return (
    <React.Fragment>
      <div className="Header" style={{ color }}>
        <div className="mainMenu--brandInfo--inline">
          <img
            className="company--image"
            src={httpToHttps(image)}
            alt={prodLink && prodLink.company && prodLink.company.name}
          />
          <h1 className="company--name">
            {prodLink && prodLink.company && prodLink.company.name}
          </h1>
          {isCampaingName !== false ? (
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
