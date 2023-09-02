import { Box, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import CampaignCard from '../CampaignCard/CampaignCard';
import { useCampaigns } from '../../../hooks/useCampaigns';

export default function CampaignList() {
  const { data: campaignList, isLoading } = useCampaigns();
  

  const showSkeletons = (
    <>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, index: number) => (
          <GridItem key={index}>
            <Skeleton
              id={`${item}`}
              height={'300px'} 
              width={'full'}
              minWidth={'400px'} 
              borderRadius={'lg'} 
            />
          </GridItem>
        ))
      }
    </>
  );

  return (
    <Box>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
        {/* SHOW LOADING SKELETONS */}
        {isLoading && showSkeletons}
        
        {/* SHOW CAMPAIGN LIST */}
        {!isLoading &&
          campaignList.length > 0 &&
          campaignList.map((campaign: any, index: number) => (
            <GridItem key={index} w={"100%"}>
              {!isLoading && (
                <CampaignCard
                  key={index}
                  title={(campaign as { title: string })?.title}
                  description={
                    (campaign as { description: string })?.description
                  }
                  createdBy={(campaign as { createdBy: string })?.createdBy}
                  imageUrl={(campaign as { imageUrl: string })?.imageUrl}
                />
              )}
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
}