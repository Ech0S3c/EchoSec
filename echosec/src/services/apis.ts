import axios from 'axios';

export const gitHubFollowers = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const githubFollowings = axios.create({
  baseURL: 'https://api.github.com/users/EchoS3c/following',
});

export const gitHubUser = axios.create({
  baseURL: 'https://api.github.com/users/EchoS3c',
});