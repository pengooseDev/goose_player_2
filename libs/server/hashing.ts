const bcrypt = require('bcrypt');

export const encrypt = async (pw: string, saltRound: number) => {
  const res = await bcrypt.hash(pw, saltRound);

  return res;
};

export const decrypt = async (pw: string, encryptedPw: string) => {
  const res = await bcrypt.compareSync(pw, encryptedPw);

  return res;
};
