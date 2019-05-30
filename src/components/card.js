import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CardImg = styled.div`
  overflow: hidden;
  width: 75px;
  height: 103px;
`

const Card = ({ suit, number }) => {
  if (typeof suit !== 'number' || typeof number !== 'number') return null;
  // calculate the margin numbers needed to display the correct card from the sprite sheet
  const y = -1 * (98 * suit) - 6 * suit
  const x = -1 * (73 * number) - 4 * number

  return (
    <CardImg>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "cards.png" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            style={{
              width: "1000px",
              marginTop: y,
              marginLeft: x,
            }}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        )}
      />
    </CardImg>
  )
}

export default Card
