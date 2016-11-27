export const repeat = (str, times) => new Array(times + 1).join(str);

export const pad = (str, maxLength) =>
  repeat('0', maxLength - str.toString().length) + str;

export const formatTime = (time = new Date()) => {
  const [h, m, s, ms] = [time.getHours(), time.getMinutes(),
    time.getSeconds(), time.getMilliseconds()];

  return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}.${pad(ms, 3)}`;
};
