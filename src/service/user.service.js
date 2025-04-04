import headerToken from "../../src/app/api/headerToken";

export const getUser = async () => {
  const header = await headerToken();
  try {
    const userList = await fetch(`${process.env.NEXTAUTH_URL}/user`, {
      headers: header,
    });
    const userData = await userList.json();
    return userData;
  } catch (e) {
    console.log(e);
  }
};
