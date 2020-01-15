export const getURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  if (window.location.hostname === 'universitatiiasi.000webhostapp.com') {
    return 'https://universitatiiasi.000webhostapp.com';
  }
  return 'https://razvansimon.com';
};