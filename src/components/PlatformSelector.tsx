import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from "react-icons/bs"
import usePlatforms, {Platform} from '../hooks/usePlatforms';

interface Props {
    selectedPlatform: Platform | null;
    onSelectedPlatform: (Platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {

const { data: parent_platforms, error } = usePlatforms();

if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem hidden={!selectedPlatform} color="red" onClick={() => onSelectedPlatform(null)}>
        clear
        </MenuItem>
        {parent_platforms?.map((platform) => (
            <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector