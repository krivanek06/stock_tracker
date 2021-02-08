export const stSleep = (ms: number = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }