const checkMac = (macAddress) => {
  const pattern = /^([0-9abcdefABCDEF]{2}:){5}[0-9abcdefABCDEF]{2}$/;
  return macAddress.match(pattern) ? true : false;
};

export default checkMac;