import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// import dp from './assets/dp.png';

const GET_HEADER_COMPANY_CAMPAING = gql`
  query get_header($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
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

const ProductListHeader = ({ profileImage, profileName, children }) => {
  return (
    <React.Fragment>
      <Query
        query={GET_HEADER_COMPANY_CAMPAING}
        variables={{ prodLinkId: 1 }}
        fetchPolicy="cache-first">
        {({ data, loading, error }) => {
          if (loading || error) return null;
          const { campaign, company } = data.prodLink;
          // console.log(data);
          return (
            <div className="Header">
              <div className="mainMenu--brandInfo">
                <h1 className="company--name">{company.name}</h1>
                <h5 className="campaign--name">{campaign.name}</h5>
              </div>
              <div className="mainMenu--profileInfo">
                <h6 className="profile--name">{profileName}</h6>
                <img
                  className="profile--image"
                  src={profileImage}
                  alt="profileImage"
                />
              </div>
            </div>
          );
        }}
      </Query>

      {children}
    </React.Fragment>
  );
};

ProductListHeader.defaultProps = {
  companyName: 'Zara',
  campaingName: 'Spring- Summer 2019 Best Creation',
  profileImage: '',
  profileName: 'Brandon Lee'
};

export default ProductListHeader;
