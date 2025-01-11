import React from 'react';
import team1 from '../../assets/Team1.png';
import team2 from '../../assets/Team2.png';
import team3 from '../../assets/Team3.png';

const TeamMember = ({ image, name, designation, description }) => (
  <div className="bg-[#E8F4FD] rounded-lg p-6 mb-4">
    <div className="flex flex-col sm:flex-row gap-4">
      <img 
        src={image} 
        alt={name} 
        className="w-30 h-30 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">{designation}</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      image: team1,
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
      image: team2,
      name: "Elina Williams",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
      image: team3,
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit 
        egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team; 