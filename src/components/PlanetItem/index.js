import {ItemContainer, Image, Title, Para} from './styledComponents'

// Write your code here

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <ItemContainer>
      <Image src={imageUrl} alt={`planet ${name}`} />
      <Title> {name} </Title>
      <Para> {description}</Para>
    </ItemContainer>
  )
}

export default PlanetItem
