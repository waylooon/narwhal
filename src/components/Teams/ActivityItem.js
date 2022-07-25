import React from 'react';

const ActivityItem = (props) => {

    const item = props.item;

    return (<>

        <div key={item.id} className="activityItem">
            <div style={{ display: "flex", columnGap: "0.4rem" }}>
                <img className="avatarImg" src={item.person.avatar} />
                <div>
                    <div className="font-content">{item.person.name} {item.action == "increased_quota" ? "increased " + item.target + "'s quota" :
                        (item.action == "archived_team" ? "archived the team " + item.target + "" : "added leads to " + item.target + "")}
                    </div>
                    <div className="font-desc">
                        {item.created_at}
                    </div>
                </div>
            </div>
        </div>


    </>
    )

}

export default ActivityItem;