import gql from 'graphql-tag';

export const GET_PERSON = gql`
  query getPerson {
    consumer {
      id
      name
      email
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
