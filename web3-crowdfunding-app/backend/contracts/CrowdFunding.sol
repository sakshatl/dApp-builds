// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
  constructor() {
    
  }

  struct Campaign {
    address createdBy;
    string title;
    string description;
    uint256 amount;
    uint256 amountCollected;
    uint256 deadline;
    string imageUrl;
    address[] donators;
    uint256[] donations;
  }

  mapping(uint256 => Campaign) public campaigns;

  uint256 totalCampaigns = 0;

  function createCampaign(
    address _createdBy, 
    string memory _title, 
    string memory _description, 
    uint256 _amount, 
    uint256 _deadline,
    string memory _imageUrl
  ) public returns (uint256) {
    Campaign storage campaign = campaigns[totalCampaigns];

    // check if everything is okay?
    require(campaign.deadline < block.timestamp, "The deadline should be a date in the future");

    campaign.createdBy = _createdBy;
    campaign.title = _title;
    campaign.description = _description;
    campaign.amount = _amount;
    campaign.amountCollected = 0;
    campaign.imageUrl = _imageUrl;
    campaign.deadline = _deadline;

    totalCampaigns = totalCampaigns + 1;

    return totalCampaigns - 1; // returns the index for recently created campaign
  }

  function donateToCampaign(uint256 _id) public payable {
    uint256 amount = msg.value;

    Campaign storage campaign = campaigns[_id];

    campaign.donators.push(msg.sender);
    campaign.donations.push(amount);

    // make the transaction
    (bool sent, ) = payable(address(campaign.createdBy)).call{value: msg.value}("");

    if(sent) {
      campaign.amountCollected = campaign.amountCollected + amount;
    }
  }

  function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
    return (campaigns[_id].donators, campaigns[_id].donations);
  }

  function getCampaigns() public view returns (Campaign[] memory) {
    Campaign[] memory allCampaigns = new Campaign[](totalCampaigns);

    for(uint i = 0; i < totalCampaigns; i++) {
      Campaign storage item = campaigns[i];
      allCampaigns[i] = item;
    }

    return allCampaigns;
  }
}