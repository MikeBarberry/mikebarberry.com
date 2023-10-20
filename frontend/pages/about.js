import {
  AboutPageContainer,
  CardsContainer,
} from '#/components/about/Containers';
import RecentProjects from '#/components/about/RecentProjects';
import Me from '#/components/about/Me';

import { Cards, Card } from '#/components/about/Cards';

import { cardData } from '#/data/data';

export default function About() {
  return (
    <AboutPageContainer>
      <Me />
      <RecentProjects />
      <CardsContainer>
        <Cards
          cards={cardData}
          renderCard={({
            color,
            tech,
            desc,
            pic,
            proj,
            company,
            isLast,
            initialMargin,
          }) => (
            <Card
              key={proj}
              color={color}
              tech={tech}
              company={company}
              desc={desc}
              pic={pic}
              proj={proj}
              initialMargin={initialMargin}
              isLast={isLast}
            />
          )}
        />
      </CardsContainer>
    </AboutPageContainer>
  );
}
