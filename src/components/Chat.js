// import React, { useState } from 'react';
// import { MessageSquareMore, AudioLines, Mail, User, ChevronRight } from 'lucide-react';
// import ChatTab from './ChatTab'; // Import tab components
// import ProfileTab from './ProfileTab';
// import MailTab from './MailTab';
// import AITab from './AiTab';

// function TabContent({ activeTab }) {
//   switch (activeTab) {
//     case 'Chat':
//       return <ChatTab />;
//     case 'AI':
//       return <AITab />;
//     case 'Mail':
//       return <MailTab />;
//     case 'Profile':
//       return <ProfileTab />;
//     default:
//       return null;
//   }
// }

// function NavigationBar({ activeTab, setActiveTab, tabs, isCollapsed, toggleCollapse }) {
//   return (
//     <div
//       className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[25%] transition-all duration-300 ${
//         isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
//       }`}
//     >
//       {/* Navigation Bar Background */}
//       <div className="bg-white rounded-xl shadow-md p-2">
//         <div className="flex justify-around">
//           {/* ChevronRight Icon */}
//           <button
//             onClick={toggleCollapse}
//             className="flex items-center justify-center p-2 transition-colors duration-200 bg-gray-200 rounded-full"
//           >
//             <ChevronRight className={`h-6 w-6 ${isCollapsed ? 'rotate-180' : ''}`} />
//           </button>

//           {/* Other Tab Buttons */}
//           {!isCollapsed &&
//             tabs.map((tab) => (
//               <button
//                 key={tab.label}
//                 onClick={() => setActiveTab(tab.label)}
//                 className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${
//                   activeTab === tab.label ? 'text-black' : 'text-gray-400'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="text-xs mt-1">{tab.label}</span>
//               </button>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function BottomNavigation() {
//   const [activeTab, setActiveTab] = useState('Chat');
//   const [isCollapsed, setIsCollapsed] = useState(false); // Track if icons are collapsed

//   const TABS = [
//     { label: 'Chat', icon: <MessageSquareMore className="h-6 w-6" /> },
//     { label: 'AI', icon: <AudioLines className="h-6 w-6" /> },
//     { label: 'Mail', icon: <Mail className="h-6 w-6" /> },
//     { label: 'Profile', icon: <User className="h-6 w-6" /> },
//   ];

//   const toggleCollapse = () => setIsCollapsed(!isCollapsed); // Toggle visibility of icons and navbar

//   return (
//     <div className="relative h-screen w-screen flex flex-col">
//       {/* Display the active tab component */}
//       <div className="flex-grow">
//         <TabContent activeTab={activeTab} />
//       </div>

//       {/* Navigation Bar */}
//       <NavigationBar
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         tabs={TABS}
//         isCollapsed={isCollapsed}
//         toggleCollapse={toggleCollapse}
//       />
//     </div>
//   );
// }




















import React, { useState } from 'react';
import { MessageSquareMore, AudioLines, Mail, User } from 'lucide-react';
import ChatTab from './ChatTab'; // Import tab components
import ProfileTab from './ProfileTab';
import MailTab from './MailTab';
import AITab from './AiTab';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'Chat':
      return <ChatTab />;
    case 'AI':
      return <AITab />;
    case 'Mail':
      return <MailTab />;
    case 'Profile':
      return <ProfileTab />;
    default:
      return null;
  }
}

function NavigationBar({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] bg-white rounded-xl shadow-md md:w-[25%]">
      <div className="flex justify-around p-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 \
              ${activeTab === tab.label ? 'text-black' : 'text-gray-400'}`}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Chat');

  const TABS = [
    { label: 'Chat', icon: <MessageSquareMore className="h-6 w-6" /> },
    { label: 'AI', icon: <AudioLines className="h-6 w-6" /> },
    { label: 'Mail', icon: <Mail className="h-6 w-6" /> },
    { label: 'Profile', icon: <User className="h-6 w-6" /> },
  ];

  return (
    <div className="relative h-screen w-screen flex flex-col">
      {/* Display the active tab component */}
      <div className="flex-grow">
        <TabContent activeTab={activeTab} />
      </div>

      {/* Navigation Bar */}
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
    </div>
  );
}

