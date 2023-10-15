import { useEffect, useState, useContext } from 'react';
import { chakra, Box, Skeleton } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

import { MobileContext } from '#/components/context/MobileContext';
import { lambdaURL } from '#/utils';

export default function Post() {
  const [html, setHTML] = useState(null);

  const router = useRouter();
  const mobile = useContext(MobileContext);

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      const pathname = window.location.pathname;
      const post = pathname.slice(pathname.lastIndexOf('/') + 1);

      fetch(`${lambdaURL}/blog/post`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          post,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setHTML(json.html);
        });
    }
    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <chakra.div
      padding={mobile ? '20px' : '50px 240px'}
      display='flex'
      height='100%'
      width='100%'
      flexDir='column'
      gap={mobile ? '20px' : '50px'}>
      <chakra.div
        onClick={() => router.push(`/blog`)}
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
      <Skeleton
        isLoaded={html !== null}
        fadeDuration={0.7}>
        <Box
          sx={{
            '& div': {
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            },
            '.title': {
              fontSize: mobile ? '32px' : '42px',
              lineHeight: '52px',
              letterSpacing: '-0.0011em',
              fontWeight: 700,
            },
            '& p': {
              fontSize: mobile ? '18px' : '20px',
              lineHeight: '32px',
              letterSpacing: '-0.003em',
            },
            '& h1': {
              fontSize: mobile ? '20px' : '24px',
              lineHeight: '30px',
              letterSpacing: '-0.0016em',
              fontWeight: 600,
            },
            '.image': {
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            },
            '#caption': {
              color: 'rgb(107, 107, 107)',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.003em',
            },
            '#chips': {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '15px',
            },
            '.chip': {
              fontSize: mobile ? '16px' : 'inherit',
              border: '1px solid rgb(192, 192, 192)',
              borderRadius: '100px',
              fontWeight: 400,
              lineHeight: '20px',
              padding: '8px 16px',
              color: 'rgb(36, 36, 36)',
            },
          }}
          dangerouslySetInnerHTML={{ __html: html }}></Box>
      </Skeleton>
    </chakra.div>
  );
}
