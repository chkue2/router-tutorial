import React from 'react';

const profileData = {
    velopert: {
        name: '최한규',
        description: 'Frontend Engineer',
    },
    homer: {
        name: '호머 심슨',
        description: '애니메이션 심슨에 등장하는 캐릭터 중 내가 제일 좋아하는 캐릭터',
    }
};

function Profile({match}) {
    const {username} = match.params;
    const profile = profileData[username];

    if(!profile) return <div>존재하지 않는 사용자입니다.</div>;
    return(
        <div>
           <h3>{username} ({profile.name})</h3>
           <p>
               {profile.description}
           </p>
        </div>
    )
}

export default Profile;