import React, { useState } from 'react';
import {
  getUser,
  getUserPerformance,
  getUserSessions,
  getUserActivity,
} from '../functions/get';
import Activity from '../components/Activity';
import Loading from '../components/Loading';
import Sessions from '../components/Sessions';
import Performance from '../components/Performance';
import Score from '../components/Score';

export default function Dashboard() {
  const userId = '12',
    [user, setUser] = useState(null),
    [userPerformance, setUserPerformance] = useState(null),
    [userSessions, setUserSessions] = useState(null),
    [userActivity, setUserActivity] = useState(null);

  React.useEffect(() => {
    if (user === null) getUser({ userId, setUser });
    if (userPerformance === null)
      getUserPerformance({ userId, setUserPerformance });
    if (userSessions === null) getUserSessions({ userId, setUserSessions });
    if (userActivity === null) getUserActivity({ userId, setUserActivity });
  }, [user, userPerformance, userSessions, userActivity]);

  return user == null ||
    userPerformance == null ||
    userSessions == null ||
    userActivity == null ? (
    <Loading />
  ) : (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1>
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <Activity userActivity={userActivity} />
      <Sessions userSessions={userSessions} />
      <Performance userPerformance={userPerformance} />
      <Score score={user.todayScore || user.score} />
    </main>
  );
}
