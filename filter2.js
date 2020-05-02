const videoResolutions = [
    ['QVGA', '320x240', '4:3'],
    ['VGA', '640x480', '4:3'],
    ['VGA', '720x480', '4:3'],
    ['SVGA', '800x600', '4:3'],
    ['XGA', '1024x768', '16:9'],
    ['WXGA - HD¹/720p', '1280x720', '16:9'],
    ['WXGA¹', '1366x768', '16:9'],
    ['WXGA +', '1440x900', '16:10(8:5)'],
    ['UXGA', '1600x900', '16:9'],
    ['UXGA++', '1680x1050', '16:10(8:5)'],
    ['Full HD / 1080p', '1920x1080', '16:9'],
    ['Full HD Ultra Wide[1]', '2560x1080', '21:9'],
    ['WQHD', '2560x1440', '16:9'],
    ['4K Ultra HD / 2160p', '3840x2160', '16:9'],
    ['8K UHDTV / 4320p', '7680x4320', '16:9'],
    ['10K UHDTV', '10240×4320', '21:9'],
    ['10K UHDTV', '10328×7760', '4:3'],
]

const resolution16_9 = videoResolutions.filter((value) => {
    if (value[2] == '16:9') return value
})

console.log(resolution16_9)