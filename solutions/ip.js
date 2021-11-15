const checkIP = (ipAddress) => {
  const pattern = /^((1?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(1?\d{1,2}|2[0-4]\d|25[0-5])$/;
  return ipAddress.match(pattern) ? true : false;
};

export default checkIP;