import { useEffect, useState, useContext } from 'react';
import { chakra, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

import { MobileContext } from '#/components/context/MobileContext';
import { lambdaURL } from '#/utils';

export default function Post() {
  const [html, setHTML] = useState(null);
  const [year, setYear] = useState(null);

  const router = useRouter();
  const mobile = useContext(MobileContext);

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      const pathname = window.location.pathname;
      const pathpost = pathname.slice(pathname.lastIndexOf('/') + 1);
      const pathyear = pathname.slice(6, 10);

      fetch(`${lambdaURL}/blog/post`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          post: pathpost,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setHTML(json.html);
          setYear(pathyear);
        });
    }
    return () => {
      subscribed = false;
    };
  }, []);

  const skeleton = (
    <Box
      boxShadow='lg'
      padding='30px 60px'
      bg='white'>
      <SkeletonCircle size='10' />
      <chakra.div
        display='flex'
        flexDir='column'
        gap='40px'>
        <SkeletonText
          mt='4'
          noOfLines={6}
          spacing='8'
          skeletonHeight='1'
        />
        <SkeletonText
          mt='4'
          noOfLines={6}
          spacing='8'
          skeletonHeight='1'
        />
        <SkeletonText
          mt='4'
          noOfLines={6}
          spacing='8'
          skeletonHeight='1'
        />
      </chakra.div>
    </Box>
  );

  return (
    <chakra.div
      padding={mobile ? '20px' : '50px 240px'}
      display='flex'
      height='100%'
      width='100%'
      flexDir='column'
      gap={mobile ? '20px' : '50px'}>
      <chakra.div
        onClick={() => router.push(`/blog/${year}`)}
        _hover={{ cursor: 'pointer' }}
        width='40px'
        height='40px'
        display='flex'
        justifyContent={'center'}
        alignItems={'center'}
        border='solid'
        borderRadius={'30px'}>
        <ArrowLeftIcon />
      </chakra.div>
      {html ? (
        <chakra.div dangerouslySetInnerHTML={{ __html: html }}></chakra.div>
      ) : (
        skeleton
      )}
    </chakra.div>
  );
}
