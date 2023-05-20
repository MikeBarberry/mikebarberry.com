import { useState } from 'react';
import { chakra, useMediaQuery } from '@chakra-ui/react';

import cardData from '#/data/cardData';

function DotBackground() {
  return (
    <chakra.div
      bg={`url('/dots.svg') repeat-x center top`}
      color='rgba(35, 33, 41, 0.8)'
      border='3px #5992b9'
      overflow='hidden'
      borderStyle='solid hidden hidden solid'>
      <chakra.div
        _after={{
          content: '""',
          display: 'block',
          h: '195px',
          w: '1px',
          pos: 'relative',
          top: '15px',
          left: 'calc(50% - 2px)',
        }}
        mb='10px'></chakra.div>
    </chakra.div>
  );
}

function RecentProjects({ mobile }) {
  const getAfterStyles = () => {
    if (mobile) return {};
    return {
      content: '""',
      bg: 'white',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '95%',
      height: '100%',
      zIndex: '2',
      borderRadius: '8px',
    };
  };
  return (
    <chakra.div
      _after={{ ...getAfterStyles() }}
      _before={{
        content: '""',
        bg: 'linear-gradient(130deg, #5992b9, #afe1f8 41.07%,#f5c4a1 76.05%)',
        opacity: '0.6',
        position: 'absolute',
        top: mobile ? '40px' : '-5px',
        left: '-5px',
        width: '100%',
        height: mobile ? '100px' : 'calc(100% + 10px)',
        zIndex: '1',
        borderRadius: '12px',
        maxWidth: '100%',
      }}
      alignItems={mobile ? 'center' : undefined}
      display='flex'
      flex='0 0 200px'
      flexDir='column'
      justifyContent={mobile ? 'center' : 'flex-end'}
      mt='1rem'
      mr={mobile ? undefined : '.5rem'}
      p='1.5rem'
      transform={mobile ? 'translateY(-40px)' : 'translateY(-10px)'}>
      <chakra.h2
        zIndex='3'
        color={'black.500'}
        fontWeight='lighter'>
        Recent
        <br />
        Projects
      </chakra.h2>
    </chakra.div>
  );
}

function Card({ color, desc, isLast, mobile, initialMargin, pic, proj }) {
  const [margin, setMargin] = useState(initialMargin);

  const handleMouseEnter = () => {
    if (mobile) return;
    setMargin(5);
  };
  const handleMouseLeave = () => {
    if (mobile || isLast) return;
    setMargin(margin - 135);
  };
  return (
    <chakra.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      maxW={mobile ? '450px' : undefined}>
      <chakra.article
        _hover={{ transform: mobile ? 'scale(1.05)' : 'rotate(0.01turn)' }}
        sx={{ transition: mobile ? undefined : 'margin 0.2s' }}
        p='1.5rem'
        borderRadius='16px'
        background='linear-gradient(85deg, #ffffff, #d6d6d6)'
        display='flex'
        flexDir='column'
        mr={mobile ? 0 : margin}
        minW='300px'
        minH='350px'
        shadow='-2rem 0 3rem -2rem #000'>
        <chakra.img
          src={pic}
          display='block'
          w='400px'
          h='225px'
          maxH='400px'
          maxW='400px'
        />
        <chakra.p
          pt='20px'
          fontFamily='Poppins'>
          {proj}
        </chakra.p>
        <chakra.p
          color={color}
          pt='20px'
          fontSize='0.66rem'
          textTransform='uppercase'>
          {desc}
        </chakra.p>
      </chakra.article>
    </chakra.div>
  );
}

function Cards({ mobile }) {
  return (
    <chakra.div
      alignItems={mobile ? 'center' : undefined}
      flexDir={mobile ? 'column' : undefined}
      justifyContent={mobile ? 'center' : undefined}
      p={mobile ? undefined : '1rem 0 1rem 2rem'}
      overflowX={mobile ? 'hidden' : 'scroll'}
      display={'flex'}
      gap='1rem'>
      {cardData.map((ele, idx) => {
        const { proj, color, desc, pic } = ele;
        const isLast = idx === cardData.length - 1;
        return (
          <Card
            mobile={mobile}
            initialMargin={mobile || isLast ? 0 : -130}
            key={proj}
            color={color}
            desc={desc}
            pic={pic}
            proj={proj}
            isLast={isLast}
          />
        );
      })}
    </chakra.div>
  );
}

export default function About() {
  const [mobile] = useMediaQuery('(max-width: 750px)');
  return (
    <chakra.div
      display='flex'
      flexDir='column'
      m='0 0 1rem'
      pl={mobile ? undefined : '30px'}>
      {!mobile && <DotBackground />}
      <chakra.div
        display='flex'
        flexDir={mobile ? 'column' : undefined}
        maxWidth={'100%'}>
        <RecentProjects mobile={mobile} />
        <Cards mobile={mobile} />
      </chakra.div>
    </chakra.div>
  );
}
