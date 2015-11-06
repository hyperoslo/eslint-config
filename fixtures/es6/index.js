export default function(flag) {
  const config = { enabled: true };

  switch (flag) {
    case 0:
      config.enabled = false;
      break;
    default:
  }

  return config;
}
