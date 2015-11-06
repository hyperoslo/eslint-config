module.exports = function(flag) {
  var config = { enabled: true };

  switch (flag) {
    case 0:
      config.enabled = false;
      break;
    default:
  }

  return config;
};
