import axios from 'axios';
import { formatDay } from './format';
const URL_API = 'http://localhost:3000/';
/**
 * Get general user information
 * @param { String } userId
 * @param { Function } setUser from the useState hook
 * @returns { ({id: number, userInfos: {firstName: string, lastName: string, age: number}, todayScore: number, keyData: {calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number}} | Error) }
 */
export function getUser({ userId, setUser }) {
  axios(URL_API + 'user/' + userId)
    .then((res) => setUser(res.data.data))
    .catch((err) => {
      console.log(err);
      setUser(false);
    });
}

/**
 * Get user activity
 * @param { Function } setUserActivity from the useState hook
 * @param { String } userId
 * @returns { (Array.<{day: string, kilogram: number, calories: number}> | Error) }
 */
export function getUserActivity({ userId, setUserActivity }) {
  axios(URL_API + 'user/' + userId + '/activity/')
    .then((res) => {
      const sessions = res.data.data.sessions;
      setUserActivity(
        sessions.map((e) => ({ ...e, day: new Date(e.day).getDate() }))
      );
    })
    .catch((err) => {
      console.log(err);
      setUserActivity(false);
    });
}

/**
 * Get user performance
 * @param { Function } setUserPerformance from the useState hook
 * @param { String } userId
 * @returns { (userId: number, kind {number: string },  Array.<{value: number, kind: number}> | Error) }
 */
export function getUserPerformance({ userId, setUserPerformance }) {
  axios(URL_API + 'user/' + userId + '/performance/')
    .then((res) => {
      const DATA = res.data.data;
      const data = DATA.data.map((e) => ({
        ...e,
        kind: DATA.kind[e.kind],
      }));
      setUserPerformance(data);
    })
    .catch((err) => {
      console.log(err);
      setUserPerformance(false);
    });
}
/**
 * Get user average sessions
 * @param { Function } setUserSessions from the useState hook
 * @param { String } userId
 * @returns { (Array.<{day: number, sessionLength: number}> | Error) }
 */
export function getUserSessions({ userId, setUserSessions }) {
  axios(URL_API + 'user/' + userId + '/average-sessions/')
    .then((res) => {
      const sessions = res.data.data.sessions;
      setUserSessions(sessions.map((e) => ({ ...e, day: formatDay(e.day) })));
    })
    .catch((err) => {
      console.log(err);
      setUserSessions(false);
    });
}
