const mapChooser = name => {
  if (!name) return 'default.jpg';
  return `${name}.jpg`;
};

export default mapChooser;
