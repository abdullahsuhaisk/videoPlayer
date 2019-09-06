import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { getProdLinkUniqueId } from '../../hooks/ProdLinkHook';

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
const Header = ({ children, color }) => {
  const uniqueId = getProdLinkUniqueId();
  return (
    <React.Fragment>
      <Query
        query={GET_HEADER_COMPANY_CAMPAING}
        variables={{ prodLinkUniqueId: uniqueId }}
        fetchPolicy="cache-first">
        {({ data, loading, error }) => {
          if (loading || error) return null;
          const { campaign, company } = data.prodLink;
          // console.log(data);
          return (
            <div className="Header" style={{ color }}>
              <div className="mainMenu--brandInfo--inline">
                <h1 className="company--name">{company.name}</h1>
                <h5 className="campaign--name">{campaign.name}</h5>
              </div>
            </div>
          );
        }}
      </Query>
      {children}
    </React.Fragment>
  );
};

export default Header;
