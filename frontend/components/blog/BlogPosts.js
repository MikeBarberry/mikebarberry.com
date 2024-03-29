import {
  chakra,
  Box,
  SkeletonCircle,
  SkeletonText,
  Divider,
} from '@chakra-ui/react';
import { useContext } from 'react';
import Image from 'next/image';

import { MobileContext } from '#/components/context/MobileContext';

export function YearBreadcrumbs({
  years,
  selectedYear,
  selectBreadcrumb,
  renderBreadcrumb,
}) {
  return years.map((year) => {
    const handleClick = () => {
      if (year !== selectedYear) {
        selectBreadcrumb(year);
      }
    };
    const isSelectedYear = year === selectedYear;
    return renderBreadcrumb({ year, isSelectedYear, handleClick });
  });
}

export function YearBreadcrumb({ year, isSelectedYear, handleClick }) {
  return (
    <chakra.div
      display='flex'
      flexDir='row'
      gap='5px'>
      <chakra.div>
        <chakra.span
          onClick={handleClick}
          _hover={{
            cursor: 'pointer',
          }}
          textDecoration={isSelectedYear ? 'underline' : 'none'}>
          {year}
        </chakra.span>
      </chakra.div>
      <chakra.span>/</chakra.span>
    </chakra.div>
  );
}

export function BlogPostsWrapper({ isLoaded, render }) {
  return render(isLoaded);
}

export function XSkeletons({ x }) {
  const mobile = useContext(MobileContext);

  return (
    <chakra.div
      display='flex'
      flexDir={'column'}
      gap={'50px'}
      width={mobile ? '350px' : '350px'}>
      {Array.from({ length: x }).map((_, idx) => {
        return (
          <Box
            key={`skeleton-${idx}`}
            boxShadow='lg'
            bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText
              speed={0.5}
              mt='4'
              noOfLines={7}
              spacing='6'
              skeletonHeight='1'
            />
          </Box>
        );
      })}
    </chakra.div>
  );
}

export function BlogPosts({ posts, renderBlogPost }) {
  const mobile = useContext(MobileContext);

  return posts.map((element, idx) => {
    const { name, chip, min, date, preview, title } = element;
    const aboveDivider =
      idx === 0 ? <Divider orientation='horizontal' /> : null;
    const belowDivider =
      idx !== posts.length - 1 ? <Divider orientation='horizontal' /> : null;
    const renderedPreview = !mobile ? (
      <chakra.p width={mobile ? '175px' : '350px'}>{preview}</chakra.p>
    ) : null;
    return renderBlogPost({
      name,
      chip,
      min,
      date,
      renderedPreview,
      aboveDivider,
      belowDivider,
      title,
    });
  });
}

export function BlogPost({
  name,
  chip,
  min,
  handleClick,
  date,
  renderedPreview,
  aboveDivider,
  belowDivider,
  title,
}) {
  const mobile = useContext(MobileContext);

  return (
    <chakra.div
      key={name}
      display={'flex'}
      flexDirection={'column'}
      gap={mobile ? '30px' : '50px'}>
      {aboveDivider}
      <chakra.div
        onClick={handleClick}
        display={'flex'}
        paddingLeft={mobile ? '50px' : undefined}
        gap={'20px'}
        width={mobile ? '80%' : '100%'}
        justifyContent={'center'}
        alignItems={'center'}>
        <chakra.div
          display={'flex'}
          flexDirection={'column'}
          gap='20px'>
          <chakra.p
            fontSize='12px'
            fontWeight='light'>
            {date}
          </chakra.p>
          <chakra.h1
            fontSize={mobile ? '16px' : '20px'}
            fontWeight={mobile ? 'normal' : 'bold'}
            width={mobile ? '175px' : '350px'}>
            {title}
          </chakra.h1>
          {renderedPreview}
        </chakra.div>
        <Image
          width={mobile ? 120 : 200}
          height={mobile ? 120 : 200}
          style={{
            width: mobile ? '120px' : '200px',
            height: mobile ? '120px' : '200px',
            objectFit: 'fill',
          }}
          src={`/blog/${name}/thumbnail.png`}
          alt={`${name} blog thumbnail`}
        />
      </chakra.div>
      <chakra.div
        display='flex'
        flexDirection='row'
        flexWrap={'wrap'}
        fontSize='12px'
        alignItems={'center'}
        gap='15px'>
        <chakra.p
          border={'1px solid rgb(192, 192, 192)'}
          borderRadius={'100px'}
          fontWeight={400}
          lineHeight='20px'
          padding={'8px 16px'}>
          {chip}
        </chakra.p>
        <chakra.p>{`${min} min read`}</chakra.p>
      </chakra.div>
      {belowDivider}
    </chakra.div>
  );
}
