let percent = 0
let length = 0
function percentage() {
	percent++;
	length++ ;

	if(percent === 100){
		clearTimeout(interval)

		if(length === 100){
			clearTimeout(interval)
		}
	}

	document.getElementById('process').innerHTML = percent + "%"
	document.getElementById('process').style.width = length + "%"

}


let startBtn = document.getElementById('start')
let status = "restart"


function start () {
    if (status === 'restart'){
        interval = window.setInterval(percentage, 100)
        startBtn.innerHTML = 'Restart'
        status = "Start"
    } else {
        window.clearInterval(interval)
        startBtn.innerHTML = "Start";
        location.reload()
        document.getElementById('process').style.width = '0rem'
        status = "restart"
    }
}

startBtn.addEventListener('click', start)