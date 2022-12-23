import axios from 'axios';
import { formatDay } from './format';
/**
 * Get general user information
 * @param { String } userId
 * @param { Function } setUser from the useState hook
 * @returns { ({id: number, userInfos: {firstName: string, lastName: string, age: number}, todayScore: number, keyData: {calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number}} | Error) }
 */
export function getUser({ userId, setUser }) {
  axios(`/api/${userId}`)
    .then((res) => setUser(res.data.data))
    .catch((err) => {
      console.log(err);
      setUser(undefined);
    });
}

/**
 * Get user activity
 * @param { Function } setUserActivity from the useState hook
 * @param { String } userId
 * @returns { (Array.<{day: string, kilogram: number, calories: number}> | Error) }
 */
export function getUserActivity({ userId, setUserActivity }) {
  axios(`/api/${userId}/activity/`)
    .then((res) => {
      const sessions = res.data.data.sessions;
      setUserActivity(
        sessions.map((e) => ({ ...e, day: new Date(e.day).getDate() }))
      );
    })
    .catch((err) => {
      console.log(err);
      setUserActivity(undefined);
    });
}

/**
 * Get user performance
 * @param { Function } setUserPerformance from the useState hook
 * @param { String } userId
 * @returns { (userId: number, kind {number: string },  Array.<{value: number, kind: number}> | Error) }
 */
export function getUserPerformance({ userId, setUserPerformance }) {
  axios(`/api/${userId}/performance/`)
    .then((res) => setUserPerformance(res.data.data))
    .catch((err) => {
      console.log(err);
      setUserPerformance(undefined);
    });
}
/**
 * Get user average sessions
 * @param { Function } setUserSessions from the useState hook
 * @param { String } userId
 * @returns { (Array.<{day: number, sessionLength: number}> | Error) }
 */
export function getUserSessions({ userId, setUserSessions }) {
  axios(`/api/${userId}/average-sessions/`)
    .then((res) => {
      const sessions = res.data.data.sessions;
      setUserSessions(sessions.map((e) => ({ ...e, day: formatDay(e.day) })));
    })
    .catch((err) => {
      console.log(err);
      setUserSessions(undefined);
    });
}
