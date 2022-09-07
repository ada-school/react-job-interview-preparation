import { IconButton } from '@chakra-ui/react';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

const ICON_SIZE = 30;

export function TicTacBox(props) {
  const { state } = props;

  const icon =
    state === 'o' ? (
      <RiCheckboxBlankCircleLine size={ICON_SIZE} />
    ) : state === 'x' ? (
      <CgClose size={ICON_SIZE} />
    ) : null;

  return (
    <IconButton
      colorScheme={state === 'o' ? 'blue' : state === 'x' ? 'red' : 'gray'}
      color={state === 'o' ? 'blue.400' : state === 'x' ? 'red.400' : 'gray'}
      size="lg"
      icon={icon}
      variant={state ? 'ghost' : 'outline'}
    />
  );
}
