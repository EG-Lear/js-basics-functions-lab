const hq = 42

function distanceFromHqInBlocks(start) {
    return (Math.abs(hq - start))
}

function distanceFromHqInFeet(start) {
     return (distanceFromHqInBlocks(start) * 264)
}

function distanceTravelledInFeet(start, stop) {
    return (Math.abs(start - stop) * 264)
}

function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start, destination)
    if (x < 400) {
        return 0
    } else if (x < 2000) {
        return ((x - 400) * 2 / 100)
    } else if (x < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}

