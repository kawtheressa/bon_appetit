import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card, ListGroup } from "react-bootstrap";

const center = {
  width: '100%',
  display: 'flex'
};

const RecipeImageCardDiv = styled(Card)`
width: 35%;
margin: auto;
margin-top: 15%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 4px;
`;


const RecipeSectionCardDiv = styled(Card)`
width: 50%;
float: left;
margin-left: 5%;
margin-right: 5%;
margin-top: 5%;

`;


const Recipe = (props) => {
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/recipes/${id}`)
    .then( resp => setRecipe(resp.data))
    .catch( data => console.log('error', data))
  }, [])

  if(!recipe) {
    return (
      <h1> Loading </h1>
      )
    }

  return (
    <div style={center} key={recipe.data.attributes.id.toString()} className="col-6">
      
      <RecipeSectionCardDiv >
      <h1>{recipe.data.attributes.title} </h1>
        <Card.Body>
          <h1> Ingredients </h1>
          <ListGroup as="ul">
            {recipe.data.attributes.ingredients.map((ingredient) => {
              return(
                <ListGroup.Item as="li" >
                  {ingredient.ingredient}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
          <h1> Preperation </h1>
          <p>{recipe.data.attributes.description}</p>
        </Card.Body>
      </RecipeSectionCardDiv>
  
      <RecipeImageCardDiv>
        <Card.Body>
          <Card.Img variant="bottom" width="100%" height="100%" src={recipe.data.attributes.image_url} />
        </Card.Body>
      </RecipeImageCardDiv>
    </div>
  );
}
export default Recipe