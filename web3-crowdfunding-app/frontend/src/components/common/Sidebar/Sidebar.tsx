import { Box, Card, CardBody, Flex, IconButton } from '@chakra-ui/react'
import { LayoutGrid, LogOut, PlusCircle, User2 } from 'lucide-react'

const ICON_SIZE = 28;

const SIDEBAR_LINKS = [
  {
    name: "Dashboard",
    icon: <LayoutGrid size={ICON_SIZE}  />
  },
  {
    name: "Create Campaign",
    icon: <PlusCircle size={ICON_SIZE} />
  },
  {
    name: "Profile",
    icon: <User2 size={ICON_SIZE} />
  }
]

export default function Sidebar() {
  return (
    <Box w={20} h={'full'}>
      <Card h={'full'}>
        <CardBody>
          <Flex h={'full'} flexDirection={'column'} justifyContent={'space-between'}>
            <Box>
              <Flex flexDirection={'column'} gap={'16px'} alignItems={'center'} justifyContent={'center'}>
                {
                  SIDEBAR_LINKS.map((item, index) => {
                    return (
                      <IconButton color={'green.300'} bg={'none'} size={'lg'} key={index} aria-label={`${item.name}-icon`}>
                        {item.icon}
                      </IconButton>
                    )
                  })
                }
              </Flex>
            </Box>
            <Box>
              <IconButton color={'green.300'} aria-label='logout-icon'>
                <LogOut size={ICON_SIZE} />
              </IconButton>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}