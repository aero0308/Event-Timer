// const endDate = new Date("23 Oct,2024 22:46:59").getTime();
// const endDate = new Date(window.prompt("Enter Event Time(Format- 31 Oct,2024 00:00:00):")).getTime();
let userDate;
let endDate;
let timerInterval;

document.getElementById("mySubmit").onclick = function() {
    userDate = document.getElementById("user_input").value;
    endDate = new Date(userDate).getTime();
    const startDate = new Date().getTime();

    // Clear the previous interval if it exists
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    function updateTimer() {
        const now = new Date().getTime();

        const distanceCovered = now - startDate;
        const distancePending = endDate - now;

        const dayinMilliseconds = 24 * 60 * 60 * 1000;
        const hourinMilliseconds = 60 * 60 * 1000;
        const minuteinMilliseconds = 60 * 1000;
        const secondinMilliseconds = 1000;

        const days = Math.floor(distancePending / dayinMilliseconds);
        const hours = Math.floor((distancePending % dayinMilliseconds) / hourinMilliseconds);
        const minutes = Math.floor((distancePending % hourinMilliseconds) / minuteinMilliseconds);
        const seconds = Math.floor((distancePending % minuteinMilliseconds) / secondinMilliseconds);

        document.querySelector(".days").innerHTML = days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;

        // Progress bar
        const totalDistance = endDate - startDate;
        const percentageDistance = (distanceCovered / totalDistance) * 100;

        document.querySelector("#progress_bar").style.width = percentageDistance + "%";

        if (distancePending < 0) {
            clearInterval(timerInterval); // Stop the timer
            document.getElementById("timer_content").innerHTML = "EVENT IS LIVE";
            document.getElementById("progress_bar").style.width = "100%";

            // Play the audio when the timer ends
            const audio = document.getElementById("endSound");
            audio.play();
        }
    }

    timerInterval = setInterval(updateTimer, 1000);
}

// const endDate = new Date("23 Oct,2024 01:00:00").getTime();
// const startDate = new Date().getTime();



// let x = setInterval(function updateTimer(){
//     const now = new Date().getTime();

//     const distanceCovered = now - startDate;
//     const distancePending = endDate - now;

//     const dayinMiliseconds = 24*60*60*1000;
//     const hourinMiliseconds = 60*60*1000;
//     const minuteinMiliseconds = 60*1000;
//     const secondinMiliseconds = 1000;

//     const days = Math.floor(distancePending/dayinMiliseconds);
//     const hours = Math.floor((distancePending%dayinMiliseconds)/hourinMiliseconds);
//     const minutes = Math.floor((distancePending%hourinMiliseconds)/minuteinMiliseconds);
//     const seconds = Math.floor((distancePending%minuteinMiliseconds)/secondinMiliseconds);

//     document.querySelector(".days").innerHTML=days;
//     document.querySelector(".hours").innerHTML=hours;
//     document.querySelector(".minutes").innerHTML=minutes;
//     document.querySelector(".seconds").innerHTML=seconds;

//     //progress bar
//     const totalDistance = endDate - startDate;
//     const percentageDistance = (distanceCovered/totalDistance)*100;

//     document.querySelector("#progress_bar").style.width = percentageDistance + "%";

//     if(distancePending<0)
//     {
//         clearInterval(x);
//         document.getElementsById("timer_content").innerHTML="EXPIRED";
//         document.getElementsId("progress_bar").style.width="100%";
//     }
// },1000);
