import Store from "../redux/Store";
import { userLogin, userRegister } from "../redux/features/auth/authAction";

export const handleLogin = (e, email, Password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !Password) {
      return alert("please provide required field");
    }
    Store.dispatch(userLogin({ email, Password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  Password,
  organisationName,
  hospitalName,
  address,
  phoneNumber,
  website
) => {
  e.preventDefault();
  try {
    Store.dispatch(
      userRegister({
        name,
        role,
        email,
        Password,
        organisationName,
        hospitalName,
        address,
        phoneNumber,
        website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
