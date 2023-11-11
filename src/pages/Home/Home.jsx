import React from 'react';
import FoodTruckImg from '../../assets/noun-food-truck.svg'
import { Container, ContentContainer, FirstScreen, FoodTruckImage, HomeContainer, LeftContainer, MainText, Paragraph, RightContainer, Section, Title } from './Home.styles';

const Home = () => {
    return (
        <HomeContainer>

            <FirstScreen>
                <MainText>
                    Compre no E-commerce conosco
                </MainText>

                <ContentContainer>
                    <LeftContainer>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </LeftContainer>

                    <RightContainer>
                        <FoodTruckImage src={FoodTruckImg} />
                    </RightContainer>
                </ContentContainer>
            </FirstScreen>


            <Section>
                <Title>Nossa História</Title>
                <Container>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec felis eu mauris consectetur convallis. Nulla facilisi. In hac habitasse platea dictumst. Fusce varius scelerisque ante, a aliquam nunc fermentum nec. Nunc vitae dictum velit, ac ullamcorper neque. Maecenas bibendum justo quis ex lacinia suscipit.
                    </Paragraph>
                    <Paragraph>
                        Curabitur bibendum justo a magna feugiat, id pellentesque odio laoreet. Nullam dictum tincidunt justo eu consectetur. Nullam quis nunc semper, vestibulum neque ut, fringilla odio. Vivamus ullamcorper, ex eget accumsan dapibus, metus nisl tempor tortor, eu consequat nunc orci eu quam. Ut placerat, urna eget mattis dignissim, lorem leo hendrerit justo, in posuere libero risus at arcu.
                    </Paragraph>
                    <Paragraph>
                        Phasellus tincidunt, justo a volutpat aliquam, purus augue tincidunt ligula, eu eleifend odio odio ac justo. Duis a libero vel dui venenatis vehicula. In fringilla massa a lectus pellentesque, ut tincidunt elit suscipit. Fusce aliquam ullamcorper purus, eu sagittis leo consectetur eu. Suspendisse potenti. Praesent feugiat tellus ut metus tincidunt, eu facilisis purus laoreet. Nulla facilisi.
                    </Paragraph>
                    <Paragraph>
                        Donec sed dolor libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam euismod id quam vel euismod. Vestibulum efficitur arcu vitae vehicula. Sed pharetra justo sit amet arcu tempus aliquam. Morbi nec nisl a erat vehicula tristique. Suspendisse euismod sapien a ex tincidunt bibendum.
                    </Paragraph>
                </Container>
            </Section>
        </HomeContainer>
    )
}

export default Home;
