const WeatherIcon = ({ iconCode }) => {
  console.log(iconCode);
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt={`${iconCode}`}
    />
  );
};

export default WeatherIcon;
