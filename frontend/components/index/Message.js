import { Alert, AlertIcon } from '@chakra-ui/react';

export default function Message({ words }) {
  return (
    <Alert
      status='success'
      variant='left-accent'
      pos='absolute'
      top='7'
      opacity='90%'
      left='50%'
      transform='translate(-50%)'
      w='auto'>
      <AlertIcon />
      {words}
    </Alert>
  );
}
