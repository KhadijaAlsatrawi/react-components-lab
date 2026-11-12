
function WeatherData({ day, conditions, time }) {
    return (
        <>
            <h2>Day of the Week {day}</h2>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </>
    )
}

export default WeatherData