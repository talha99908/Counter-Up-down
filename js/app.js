
const counterUp =(className, time = 1000)=>{
    const counters = Array.from(document.querySelectorAll(className))

    counters.map((counter) => {
        const finalValue = counter.dataset.number
        let initialValue = 0
        const duration = time / finalValue
    
        let counting =setInterval(() =>{
            initialValue +=1
            if(initialValue >=finalValue){
                clearInterval(counting)
            }
            counter.innerHTML = initialValue
        }, duration)
    })
}


counterUp(`.counter`)




const sec = 1000
const min =  sec *60
const hour = min *60
const day = hour *24




setInterval(()=>{
const futureDate = new Date(`2024/09/3`)
const currentDate = new Date()
const diff = futureDate - currentDate

document.querySelector(".day").innerHTML = Math.floor(diff / day)
document.querySelector(".hour").innerHTML = Math.floor((diff % day) / hour)
document.querySelector(".min").innerHTML = Math.floor((diff % hour) / min)
document.querySelector(".sec").innerHTML = Math.floor((diff % min) / sec)
}, 1000)