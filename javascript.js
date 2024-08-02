let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let interval = null;
        let lapNumber = 1;

        document.querySelector('.start').addEventListener('click', start);
        document.querySelector('.stop').addEventListener('click', stop);
        document.querySelector('.reset').addEventListener('click', reset);
        document.querySelector('.lap').addEventListener('click', lap);

        function start() {
            interval = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes === 60) {
                        minutes = 0;
                        hours++;
                    }
                }
                document.querySelector('.time').innerText = ${pad(hours)}:${pad(minutes)}:${pad(seconds)};
            }, 1000);
        }
        function stop() {
            clearInterval(interval);
        }

        function reset() {
            clearInterval(interval);
            seconds = 0;
            minutes = 0;
            hours = 0;
            lapNumber = 1;
            document.querySelector('.time').innerText = '00:00:00';
            document.querySelector('.laps').innerHTML = '';
        }

//below code used from chat gpt-Divithkumar        
        function lap() {
            let lapTime = ${pad(hours)}:${pad(minutes)}:${pad(seconds)};
            let lapHTML = <li>Lap ${lapNumber}: ${lapTime}</li>;
            document.querySelector('.laps').innerHTML += lapHTML;
            lapNumber++;
        }

        function pad(time) {
            return time.toString().padStart(2, '0');
        }