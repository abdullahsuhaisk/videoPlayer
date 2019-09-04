import gql from 'graphql-tag';

export const GET_PERSON = gql`
  query getPerson {
    consumer {
      id
      name
      email
      countryId
      profileImageUrl
      birthDate
      coverImageUrl
      gender
      uid
      phone
      addresses {
        id
        name
        text
        countryId
        country {
          id
          name
          nativeName
        }
        city
        phoneGsm
        phoneLandLine
        fax
        type
        creationTime
      }
    }
  }
`;

export const ADD_CONSUMER_ADDRESS = gql`
  mutation addConsumerAddress($input: ConsumerAddressInput!) {
    addConsumerAddress(input: $input) {
      name
      text
      countryId
      city
    }
  }
`;
export const UPDATE_CONSUMER_ADDRESS = gql`
  mutation updateConsumerAddress(
    $addressId: Int!
    $input: ConsumerAddressInput!
  ) {
    updateConsumerAddress(addressId: $addressId, input: $input) {
      id
      name
      text
      country {
        id
        name
        nativeName
      }
      countryId
      city
      phoneGsm
      phoneLandLine
      fax
      type
    }
  }
`;

export const UPDATE_CONSUMER_PROFILE = gql`
  mutation updateConsumerProfile($input: ConsumerInput!) {
    updateConsumer(input: $input) {
      id
      name
      email
      countryId
      profileImageUrl
      birthDate
      coverImageUrl
      gender
      uid
      phone
      addresses {
        id
        name
        text
        countryId
        country {
          id
          name
          nativeName
        }
        city
        phoneGsm
        phoneLandLine
        fax
        type
        creationTime
      }
    }
  }
`;
export const GET_PROFILE_SCREEN_IS_OPEN = gql`
  {
    isProfileOpen @client
  }
`;

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      name
    }
  }
`;
