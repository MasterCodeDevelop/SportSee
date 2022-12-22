import React, { useState } from 'react';
import { getUser, getUserPerformance, getUserSessions } from '../functions/get';
import Activity from '../components/Activity';
import Loading from '../components/Loading';

export default function Dashboard() {
  const userId = '12',
    [user, setUser] = useState(null),
    [userPerformance, setUserPerformance] = useState(null),
    [userSessions, setUserSessions] = useState(null);

  React.useEffect(() => {
    if (user === null) getUser({ userId, setUser });
    if (userPerformance === null)
      getUserPerformance({ userId, setUserPerformance });
    if (userSessions === null) getUserSessions({ userId, setUserSessions });
  }, [user, userSessions]);

  return user == null ? (
    <Loading />
  ) : (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1>
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <Activity userId={userId} />
    </main>
  );
}
