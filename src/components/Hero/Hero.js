import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My name is hritik, I stand out with my creativity and innovative ideas in the field of development. Over here I've mentioned some of my projects through which I can demonstarate my skills. (Checkout My linkedin Below) 
        </SectionText>
        <Button onClick={()=> window.location = 'https://linkedin.com/in/hritikbatra'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;