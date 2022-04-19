import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Badge, Card, Row, ListGroup } from "react-bootstrap";


const RecipeCardDiv = styled(Card)`
display: flex;
align-items: center;
justify-content: center;
`;

const RecipeTitle = styled(Card.Title)`
  text-transform: capitalize;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #303030;
  :hover {
    text-decoration: none;
    color: #303030;
  }
`

const Recipe = (props) => {
  const [recipe, setRecipe] = useState()
  const [loaded] = useState(false)

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
    <div key={recipe.data.attributes.id.toString()} className="col-6">
      <RecipeCardDiv className="border">
        <CardLink href={"/#/recipe/" + 1}>
          <Card.Img className="border" variant="bottom" width="50%" height="50%" src={recipe.data.attributes.image_url} />
          <Card.Body>
            <RecipeTitle>
            {recipe.data.attributes.title}
            </RecipeTitle>
            <ListGroup as="ul">
              {recipe.data.attributes.ingredients.map((ingredient, index) => {
                return(
                  <ListGroup.Item as="li">
                    {ingredient.ingredient}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Card.Body>
        </CardLink>
      </RecipeCardDiv>
    </div>
  );
}
export default Recipe