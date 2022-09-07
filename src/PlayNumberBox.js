import { Button } from '@chakra-ui/react';

export function PlayNumberBox(props) {
  const { isSelected, children } = props;

  return (
    <Button
      colorScheme="cyan"
      size="sm"
      variant={isSelected ? 'outline' : 'ghost'}
    >
      {children}
    </Button>
  );
}
