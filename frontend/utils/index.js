export const lambdaURL = 'https://api.mikebarberry.com/';

export const getRects = (container) => {
  return {
    width: container.getClientRects()[0].width,
    height: container.getClientRects()[0].height,
  };
};

export const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

export { default as triggerFireworks } from './triggerFireworks';
