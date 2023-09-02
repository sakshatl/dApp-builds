import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';

type CampaignCardPropsType = {
  title: string;
  description: string;
  createdBy: string;
  imageUrl: string;
}

export default function CampaignCard(props: CampaignCardPropsType) {
  const { title, description, createdBy, imageUrl } = props; 

  return (
    <Card borderRadius={'lg'}>
      <CardBody>
        <Image
          src={imageUrl}
          alt={title}
          borderRadius='lg'
          h={40}
          w={'full'}
          objectFit={'cover'}
        />
        <Box mt={4}>
          <Text fontSize={'xl'} fontWeight={'medium'}>{title}</Text>
          <Text fontSize={'sm'} mt={2} color={'gray.300'}>
            {description.length > 120 ? description.slice(0, 120) + "..." : description}
          </Text>
        </Box>
        <Box mt={2}>
          PROGRESS BAR COMES HERE
        </Box>
        <Box mt={2}>
          <Text fontSize={'sm'}>
            Created By: {createdBy}
          </Text>
        </Box>
      </CardBody>
    </Card>
  )
}