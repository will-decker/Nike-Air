import {
  Container,
  TopLeft,
  BottomLeft,
  BottomRight,
  Hamburger,
  FadeIn,
} from './styles';
import { NikeAir } from './NikeAir';

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          FEATURED
          <br />
          SHOES
        </h1>
        <p>
          <a href="#">
            Shop Air Jordan 1 <br />& Air Force 1 Shoes -
          </a>
        </p>
      </TopLeft>
      <BottomLeft>
        A runtime deconstruction of{' '}
        <a href="https://playful.software">playful.software</a>
      </BottomLeft>
      <BottomRight>
        <a href="#">All Shoes -</a>
        <br />
        <a href="#">Jordan Shoes -</a>
        <br />
        <a href="#">Running Shoes -</a>
        <br />
        <a href="#">Basketball Shoes -</a>
        <br />
        <a href="#">Tennis Shoes -</a>
        <br />
        <a href="#">Training Shoes -</a>
        <br />
        <a href="#">Custom Shoes -</a>
        <br />
        <a href="#">Sale Shoes -</a>
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <NikeAir />
      <FadeIn />
    </Container>
  );
}
