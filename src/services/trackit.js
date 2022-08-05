import axios from "axios";

function signUpAPI(data) {
  const promise = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    data
  );
  return promise;
}

function SignInAPI(data) {
  const promise = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    data
  );
  return promise;
}

function GetHabitsAPI(config) {
  const promise = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    config
  );
  return promise;
}

function createHabit(body, config) {
  const promise = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    body,
    config
  );
  return promise;
}

function deleteHabitAPI(id, config) {
  const promise = axios.delete(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
    config
  );
  return promise;
}

function gettodayHabits(config) {
  const promise = axios.get(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
    config
  );
  return promise;
}

function checkHabitAPI(id, config) {
  const promise = axios.post(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
    config
  );
  return promise;
}

function uncheckHabitAPI(id, config) {
  const promise = axios.post(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
    config
  );
  return promise;
}

export {
  signUpAPI,
  gettodayHabits,
  SignInAPI,
  GetHabitsAPI,
  createHabit,
  deleteHabitAPI,
  checkHabitAPI,
  uncheckHabitAPI,
};
