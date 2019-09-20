import React from 'react';
// import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import { getProdLinkUniqueId } from '../../hooks/ProdLinkHook';
import withQuery from '../HOCS/Grapqhl/ProdLinkQueryHoc';
// import dp from './assets/dp.png';

const GET_HEADER_COMPANY_CAMPAING = gql`
  query get_header($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      header
      company {
        name
        header
      }
      campaign {
        id
        header
        name
      }
    }
  }
`;
const FETCHPOLICIY = 'cache-first';
const Header = (props) => {
  const {
    children,
    color,
    data: { prodLink }
  } = props;
  // const uniqueId = getProdLinkUniqueId();
  return (
    <React.Fragment>
      <div className="Header" style={{ color }}>
        <div className="mainMenu--brandInfo--inline">
          <h1 className="company--name">
            {prodLink && prodLink.company && prodLink.company.name}
          </h1>
          <h5 className="campaign--name">
            {prodLink && prodLink.campaign && prodLink.campaign.name}
          </h5>
        </div>
      </div>
      );
      {children}
    </React.Fragment>
  );
};

export default withQuery(Header, GET_HEADER_COMPANY_CAMPAING, FETCHPOLICIY);
