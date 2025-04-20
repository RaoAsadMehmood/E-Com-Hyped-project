'use client';
import React from 'react';
import AutomationSlider from '../components/AutomationSlider';

const About = () => {
  const automationSlides = [
    {
      id: 1,
      imageSrc: '/Images/AmazonFBAAutomation.png',
      fadedImageSrc: '/Images/AmazonFBAAutomation1.png',
      title: 'Amazon FBA Automation'
    },
    {
      id: 2,
      imageSrc: '/Images/WalmartAutomation.png',
      fadedImageSrc: '/Images/WalmartAutomation1.png',
      title: 'Walmart Automation'
    },
    {
      id: 3,
      imageSrc: '/Images/TiktokAutomation.png',
      fadedImageSrc: '/Images/TiktokAutomation1.png',
      title: 'TikTok Automation'
    },
    {
      id: 4,
      imageSrc: '/Images/ShopifyAutomation.png',
      fadedImageSrc: '/Images/ShopifyAutomation1.png',
      title: 'Shopify Automation'
    },
    {
      id: 5,
      imageSrc: '/Images/YoutubaAutomation.png',
      fadedImageSrc: '/Images/YoutubaAutomation1.png',
      title: 'YouTube Automation'
    },
    {
      id: 6,
      imageSrc: '/Images/TiktokAutomation.png',
      fadedImageSrc: '/Images/TiktokAutomation1.png',
      title: 'Etsy Automation'
    },
    {
      id: 7,
      imageSrc: '/Images/YoutubaAutomation.png',
      fadedImageSrc: '/Images/Rectangle 107 (15).png',
      title: 'Amazon Automation'
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Automation Solutions</h1>
      <AutomationSlider 
        slides={automationSlides}
        autoSlideInterval={3000} // 5 seconds per slide
      />
    </div>
  );
};

export default About;
