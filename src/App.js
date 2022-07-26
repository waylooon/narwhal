import './App.css';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "./assets/sw-logo-white.svg";
import { ReactComponent as CampaignIcon } from "./assets/icon-campaign.svg";
import { ReactComponent as ReportsIcon } from "./assets/icon-reports.svg";
import { ReactComponent as TeamsIcon } from "./assets/icon-teams.svg";
import { ReactComponent as LeadsIcon } from "./assets/icon-leads.svg";
import { ReactComponent as NotificationIcon } from "./assets/icon-notification.svg";
import { ReactComponent as HelpIcon } from "./assets/icon-help.svg";
import TeamLayout from "./components/Teams/TeamLayout.js";


function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const Home = () => <h1></h1>;
  const Campaigns = () => <h1></h1>;
  const Leads = () => <div><h1></h1></div>;
  const Reports = () => <h1></h1>;


  const data = {
    "teams": [
      {
        "id": 1,
        "name": "Axa",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
        "description": "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
        "campaigns_count": 20,
        "leads_count": 1500,
        "is_favorited": true,
        "is_archived": false,
        "created_at": "28 July 2018"
      },
      {
        "id": 2,
        "name": "Indeed - US",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
        "description": "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
        "campaigns_count": 15,
        "leads_count": 7130,
        "is_favorited": false,
        "is_archived": false,
        "created_at": "15 October 2018"
      },
      {
        "id": 3,
        "name": "Indeed - EU",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
        "description": "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
        "campaigns_count": 18,
        "leads_count": 3500,
        "is_favorited": false,
        "is_archived": false,
        "created_at": "1 October 2018"
      },
      {
        "id": 4,
        "name": "Workday - US",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
        "description": "Workday Inc is an on demand financial management and human capital management something とかなんとか",
        "campaigns_count": 16,
        "leads_count": 2000,
        "is_favorited": false,
        "is_archived": false
      },
      {
        "id": 5,
        "name": "Workday - AU",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
        "description": "Workday Inc is an on demand financial management and human capital management something とかなんとか",
        "campaigns_count": 12,
        "leads_count": 1500,
        "is_favorited": false,
        "is_archived": false
      },
      {
        "id": 6,
        "name": "Time",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143",
        "description": "Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff",
        "campaigns_count": 13,
        "leads_count": 10000,
        "is_favorited": true,
        "is_archived": false
      },
      {
        "id": 7,
        "name": "Zendesk",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352",
        "description": "Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess",
        "campaigns_count": 17,
        "leads_count": 1200,
        "is_favorited": true,
        "is_archived": false
      },
      {
        "id": 8,
        "name": "Uber",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240",
        "description": "Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess",
        "campaigns_count": 10,
        "leads_count": 3200,
        "is_favorited": false,
        "is_archived": true
      },
      {
        "id": 9,
        "name": "Grab",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655",
        "description": "GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people",
        "campaigns_count": 23,
        "leads_count": 2000,
        "is_favorited": false,
        "is_archived": true
      }
    ],
    "activities": [
      {
        "id": 1,
        "person": {
          "id": 1,
          "name": "Julie",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
        },
        "action": "increased_quota",
        "target": "Indeed - US",
        "created_at": "2 hours ago"
      },
      {
        "id": 2,
        "person": {
          "id": 2,
          "name": "Emily",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
        },
        "action": "added_leads",
        "target": "Linkedin",
        "created_at": "4 hours ago"
      },
      {
        "id": 3,
        "person": {
          "id": 2,
          "name": "Emily",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
        },
        "action": "archived_team",
        "target": "Uber"
      },
      {
        "id": 4,
        "person": {
          "id": 1,
          "name": "Julie",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
        },
        "action": "archived_team",
        "target": "Grab",
        "created_at": "6 hours ago"
      },
      {
        "id": 5,
        "person": {
          "id": 1,
          "name": "Julie",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
        },
        "action": "added_leads",
        "target": "Workday - AU",
        "created_at": "2 hours ago"
      }
    ],
    "current_user": {
      "id": 4,
      "name": "John",
      "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040",
      "notifications_count": 5
    }
  }

  const routes = [
    {
      path: "/",
      main: () => <Home />,
      header: "Home",
      icon: () => (<HomeIcon fill="white" />)
    },
    {
      path: "/campaigns",
      main: () => <Campaigns />,
      header: "Campaigns",
      icon: () => (<CampaignIcon fill="white" />)
    },
    {
      path: "/teams",
      main: () => <TeamLayout data={data} />,
      header: "Teams",
      icon: () => (<TeamsIcon fill="white" />)
    },
    {
      path: "/leads",
      main: () => <Leads />,
      header: "Leads",
      icon: () => (<LeadsIcon fill="white" />)
    },
    {
      path: "/reports",
      main: () => <Reports />,
      header: "Reports",
      icon: () => (<ReportsIcon fill="white" />)
    },
  ];

  const SideBarItem = (props) => {
    return (
      <div className={currentRoute == props.path ? "sidebar-item-selected" : "sidebar-item"}>
        <Link to={props.path}>{props.icon}</Link>
      </div>)
  };

  return (<>
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebarTop">
          {routes.map(({ path, header, icon }) => (<SideBarItem path={path} header={header} icon={icon()} />))}
        </div>
        <div className="sidebar-item"><HelpIcon /></div>
      </div>
      <div className="body">
        <div className="headerbar">
          <div className="mainheader font-header">NARWHAL</div>
          <div className="pageheader  font-header"> <Routes> {routes.map(({ path, header }) => (<Route key={path} path={path} element={header} />))} </Routes> </div>
          <div className="loginheader">
            <div className="notificationIcon">
              <NotificationIcon />
              <div className="notificationCount font-content">{data.current_user.notifications_count}</div>
            </div>
            <div className="userAccount">
              <div className="font-content">Hello, {data.current_user.name}</div>
              <img className="userImg" src={data.current_user.avatar}></img>
            </div>
          </div>
        </div>
        <div className="container"><Routes> {routes.map(({ path, main }) => (<Route key={path} path={path} element={main()} />))} </Routes> </div>
      </div>
    </div>
  </>

  );
}

export default App;