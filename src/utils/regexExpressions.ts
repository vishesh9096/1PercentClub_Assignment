export default {
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  FULL_NAME_REGEX: /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,
  PASSWORD_REGEX:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  USERNAME_REGEX: /^[a-zA-Z0-9_-]{3,16}$/,
};
