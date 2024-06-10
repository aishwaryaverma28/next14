
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
   {
     title: 'Discover Your sport with Us: A Personal Journey in Game Mastery',
     description:
       'Embark on a sports journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our sports school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
   },
   {
      title: 'Discover Your Playstyle with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a athletical journey that’s uniquely yours. Our personalized instruction adapts to your individual skills, setting the stage for unparalleled growth and creativity. At our sports school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest sports education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your athletic skills are always advancing.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs