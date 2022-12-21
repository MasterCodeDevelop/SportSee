import React, { useState } from 'react';
import {
  getUser,
  getUserActivity,
  getUserPerformance,
  getUserSessions,
} from '../functions/get';
export default function Dashboard() {
  const userId = '12',
    [user, setUser] = useState(null),
    [userActivity, setUserActivity] = useState(null),
    [userPerformance, setUserPerformance] = useState(null),
    [userSessions, setUserSessions] = useState(null);

  React.useEffect(() => {
    if (user === null) getUser({ userId, setUser });
    if (userActivity === null) getUserActivity({ userId, setUserActivity });
    if (userPerformance === null)
      getUserPerformance({ userId, setUserPerformance });
    if (userSessions === null) getUserSessions({ userId, setUserSessions });
  }, [user, userSessions]);

  return <main>Dashboard</main>;
}
