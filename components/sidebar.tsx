import NextImage from 'next/image';
import NextLink from 'next/link';

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout';

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md';
import { usePlaylist } from '../lib/hooks';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
];

const Sidebar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.png" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((el) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={el.name}>
                  <LinkBox>
                    <NextLink href={el.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={el.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {el.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {musicMenu.map((el) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={el.name}>
                  <LinkBox>
                    <NextLink href={el.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={el.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {el.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Divider color="gray.800" paddingY="20px" />
        <Box height="65%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((el) => {
              return (
                <ListItem paddingX="20px" key={el.id}>
                  <LinkBox>
                    <NextLink
                      href={{
                        pathname: '/playlist/[id]',
                        query: { id: el.id },
                      }}
                      passHref
                    >
                      <LinkOverlay>{el.name}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
