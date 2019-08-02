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
