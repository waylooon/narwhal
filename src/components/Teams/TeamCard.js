import React from 'react';
import { ReactComponent as CampaignIcon } from "../../assets/icon-campaign.svg";
import { ReactComponent as LeadsIcon } from "../../assets/icon-leads.svg";
import { ReactComponent as StarIcon } from "../../assets/star-active.svg";

const TeamCard = (props) => {

    const item = props.item;

    return (<>

        <div className={item.is_archived === false ? "teamCard" : "teamCardArchived"} key={item.id}>
            <div className="cardHeader font-subheader">
                <img className="teamImg" src={item.image} />
                <div className="cardHeaderText">
                    <div className="font-subheader">{item.name}</div>
                    {item.is_archived === true ? <div className="font-desc">Archived on N/A</div> :
                        <div className="font-desc">Created on {item.created_at ? item.created_at : "N/A"}</div>}
                </div>
                {item.is_favorited ? <StarIcon fill="#F8CE43" width="1rem" height="1rem" /> : <StarIcon width="1rem" height="1rem" stroke="#ccc" />}
            </div>
            <div className="cardBody">
                <div className="cardDescription font-content">{item.description}</div>
                <div className="cardDetails font-desc">
                    <CampaignIcon fill="#999" width="0.76rem" height="0.76rem" /> {item.campaigns_count} Campaigns
                    <LeadsIcon fill="#999" width="0.76rem" height="0.76rem" />{item.leads_count} Leads
                </div>
            </div>
        </div>


    </>
    )

}

export default TeamCard;