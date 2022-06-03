import {
    gql
  } from "@apollo/client";


  export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int){
    characters(page: $page, filter: {}) {
      info{
        count,
        pages,
        next,
        prev
      }
      results{
        id,
        name,
        gender,
        type,
        image
  
      }
    }
  }
  `;
