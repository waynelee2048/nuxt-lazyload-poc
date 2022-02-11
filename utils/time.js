// import momentTimezone from "moment-timezone";

export const getMomentTime = async () => {
  const momentTimezone = await import(
    /* webpackChunkName: "moment-timezone" */ "moment-timezone"
  );
  return momentTimezone.tz(new Date(), "Asia/Tokyo");
};
