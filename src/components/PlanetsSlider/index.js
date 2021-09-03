// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import {PlanetsAppContainer, Heading} from './styledComponents'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanetSlider
