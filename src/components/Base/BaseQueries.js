import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      name
      alpha2Code
      alpha3Code
      region
      subregion
      timezone
      nativeName
      numericCode
    }
  }
`;
