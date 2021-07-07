const updateTime = () => {
    const time = Date()
    const timeElement = document.getElementById("time")
    timeElement.innerHTML = `The current time is ${time}`
}

setInterval(updateTime, 1000)
