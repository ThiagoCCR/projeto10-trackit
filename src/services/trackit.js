import axios from "axios";

function signUpAPI(data) {
  const promise = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    data
  );
  return promise;
}

function SignInAPI(data){
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data)
    return promise
}

export { signUpAPI, SignInAPI };
