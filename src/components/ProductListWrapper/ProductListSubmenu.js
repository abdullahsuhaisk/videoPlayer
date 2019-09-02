import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import fav from './assets/fav.png';
import like from './assets/like.png';
import share from './assets/share.png';

const ProductListSubmenu = () => {
  const GET_WHICH_PRODUCTLIST_RENDER = gql`
    query getWhichProductListRender {
      template @client {
        whichProductListrender
      }
    }
  `;
  return (
    <Query query={GET_WHICH_PRODUCTLIST_RENDER}>
      {({ data, client }) => {
        const { template } = data;
        const { whichProductListrender } = template;
        return (
          <React.Fragment>
            <div className="sub-Menu">
              <div className="subMenu--linksWrapper">
                <button
                  className={
                    'subMenu--link' +
                    (whichProductListrender === 1
                      ? ' subMenu--link--active'
                      : '')
                  }
                  onClick={() => {
                    client.writeData({
                      data: {
                        template: {
                          __typename: 'Template',
                          whichProductListrender: 1
                        }
                      }
                    });
                  }}>
                  Products in this Scene
                </button>
                <button
                  className={
                    'subMenu--link' +
                    (whichProductListrender === 2
                      ? 'subMenu--link--active'
                      : '')
                  }
                  onClick={() => {
                    client.writeData({
                      data: {
                        template: {
                          __typename: 'Template',
                          whichProductListrender: 2
                        }
                      }
                    });
                  }}>
                  All Products
                </button>
                <button
                  className={
                    'subMenu--link' +
                    (whichProductListrender === 3
                      ? 'subMenu--link--active'
                      : '')
                  }
                  onClick={() => {
                    client.writeData({
                      data: {
                        template: {
                          __typename: 'Template',
                          whichProductListrender: 3
                        }
                      }
                    });
                  }}>
                  Suggested Products
                </button>
              </div>
              <div className="subMenu--statsWrapper">
                <div className="stats--content">
                  <img src={like} alt="imagelike" />
                  <p>123</p>
                </div>
                <div className="stats--content">
                  <img src={fav} alt="imagelike" />
                  <p>123</p>
                </div>
                <div className="stats--content">
                  <img src={share} alt="imagelike" />
                  <p>123</p>
                </div>
              </div>
            </div>
            <div className="subMenu--underline"></div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default ProductListSubmenu;
