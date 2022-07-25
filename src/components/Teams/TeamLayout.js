import React, { useState } from 'react';
import './TeamLayout.css';
import TeamCard from './TeamCard.js';
import ActivityItem from './ActivityItem';
import { ReactComponent as TeamsIcon } from "../../assets/icon-teams.svg";
import { ReactComponent as PlusShape } from "../../assets/plus-shape.svg";

const TeamLayout = props => {

    const [name, setName] = useState('');
    const [teamFilter, setTeamFilter] = useState ('All')

    if (teamFilter =="All") {
        var filteredTeams = props.data.teams
        var totalTeams = props.data.teams.length
    } else if (teamFilter == "Favorites") {
        var filteredTeams = props.data.teams.filter((obj) => { return obj.is_favorited})
        var totalTeams = props.data.teams.filter((obj) => { return obj.is_favorited}).length
    } else if (teamFilter == "Archived") {
        var filteredTeams = props.data.teams.filter((obj) => { return obj.is_archived})
        var totalTeams = props.data.teams.filter((obj) => { return obj.is_archived}).length
    }

    if (name !=='') {
        var filteredTeams = filteredTeams.filter ((obj => {
            return obj.name.toLowerCase().startsWith(name.toLowerCase())
        }))
    }

    return (<>
        <div className="teamsBanner">
            <div className="teamsBannerHeader">
                <div className="teamsHeading font-heading"><TeamsIcon fill="#999" /> Teams</div>
                <button className="actionButton"><PlusShape />Create New Team</button>
            </div>
            <div className="teamsBannerBody">
                <div className="tabsComponent">
                    <button className={teamFilter !=="All" ? "teamTab":"teamTabSelected"} onClick={()=>setTeamFilter('All')}>All</button>
                    <button className={teamFilter !=="Favorites" ? "teamTab":"teamTabSelected"} onClick={()=>setTeamFilter("Favorites")}>Favorites</button>
                    <button className={teamFilter !=="Archived" ? "teamTab":"teamTabSelected"} onClick={()=>setTeamFilter("Archived")}>Archived</button>
                </div>
                <div className="searchBar">
                <input className= "font-content" type="search" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Search team name..." />
                </div>
            </div>
        </div>

        <div className="teamsContainer">
            <div className="teamsBody">
                <div className="teamsBodyHeader">
                    <div className="font-header">{teamFilter}</div>
                    <div className="font-content">Showing {filteredTeams.length} out of {totalTeams} teams</div>
                </div>
                <div className="teamsBodyContent">
                    {filteredTeams.map((item) => {
                        return <>
                        <TeamCard item={item} />
                        </>
                    })}
                </div>
            </div>

            <div className="teamsActivity">
                <div className="teamsBodyHeader font-header">Activity</div>
                <div className="activityBodyContent">
                    {props.data.activities.map((item) => {
                        return <>
                            <ActivityItem item={item}/>
                        </>
                    })}
                </div>
            </div>
        </div>
    </>)
};

export default TeamLayout;