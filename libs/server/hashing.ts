const bcrypt = require('bcrypt');

const hashBySort = async (str: string, saltRound: number) => {
  const res = await bcrypt.hash(str, saltRound);

  return res;
};

export default hashBySort;
