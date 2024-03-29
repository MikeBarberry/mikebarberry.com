import { chakra, Breadcrumb, BreadcrumbSeparator } from '@chakra-ui/react';
import { useContext } from 'react';

import { MobileContext } from '#/components/context/MobileContext';

export function BreadcrumbWrapper({ children }) {
  const mobile = useContext(MobileContext);

  return (
    <chakra.div
      paddingTop='30px'
      fontSize={mobile ? '26px' : '30px'}
      fontWeight='bold'
      display={'flex'}
      flexDir={'row'}
      flexWrap={'wrap'}
      gap={'5px'}>
      {children}
    </chakra.div>
  );
}

export function BlogContainer({ children }) {
  const mobile = useContext(MobileContext);

  return (
    <chakra.div paddingBottom={'50px'}>
      <chakra.div
        display={'flex'}
        flexDir={'column'}
        gap={mobile ? '45px' : '50px'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}>
        {children}
      </chakra.div>
    </chakra.div>
  );
}

export function BlogPostsContainer({ children }) {
  const mobile = useContext(MobileContext);

  return (
    <chakra.div
      _hover={{
        cursor: 'pointer',
      }}
      padding={mobile ? '0px 15px' : '0px 30px'}
      display={'flex'}
      flexDirection={'column'}
      gap={mobile ? '40px' : '50px'}>
      {children}
    </chakra.div>
  );
}
