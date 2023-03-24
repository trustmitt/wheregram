import React, { useEffect } from 'react';
import Link from 'next/link';
import { Tabs, TabList, Tab, Center, Icon } from '@chakra-ui/react';
import { HiHome, HiHashtag, HiPlusCircle, HiSearch, HiIdentification } from 'react-icons/hi';
import { Footer } from '@/styles/@common/footer';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states';

export default function FooterNav() {
  const [userState, setUserState] = useRecoilState(userInfoState);

  const TabsInfo = [
    {
      id: 0,
      name: '/',
      icon: HiHome,
    },
    {
      id: 1,
      name: '/explore',
      icon: HiHashtag,
    },
    {
      id: 2,
      name: '/write',
      icon: HiPlusCircle,
    },
    {
      id: 3,
      name: '/search',
      icon: HiSearch,
    },
    {
      id: 4,
      name: '/feed',
      icon: HiIdentification,
    },
  ];

  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Footer>
          <Center w="100%" h="52px">
            {TabsInfo.map((tab) => (
              <Link href={userState.uid ? tab.name : '/auth/login'} key={tab.id}>
                <Tab w={10} h={10} ml={4} mr={4} _selected={{ color: 'white', bg: 'green.400' }}>
                  <Icon as={tab.icon} w={6} h={6} />
                </Tab>
              </Link>
            ))}
          </Center>
        </Footer>
      </TabList>
    </Tabs>
  );
}
