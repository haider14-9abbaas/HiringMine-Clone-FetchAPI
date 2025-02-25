const card = document.querySelector("#card-section")
const container = document.querySelector(".container-1")
const img = "https://i.pinimg.com/1200x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg"

const dark = document.querySelector("#Dark");

dark.addEventListener("click", () => {
    if (document.body.style.background === "black") {
        document.body.style.background = "white";
        dark.innerHTML = "Dark";
    } else {
        document.body.style.background = "black";
        dark.innerHTML = "Light";
    }
});
async function jobsDetail(){
    try{
        const jobs = await fetch("https://hiringmine-railway-production.up.railway.app/api/jobAds/all?limit=9&pageNo=1&keyWord=&category=&isPending=false")
        const jobsJson = await jobs.json()
        console.log(jobsJson);
        
        const jobDetail = jobsJson.data.map((job) =>{
            return  `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
          <h5 class="card-title">${job.designation}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${job.companyName}</h6>
          <h6>${job.jobFeseability
          }</h6>
          <p class="card-text">${job.payRangeEnd === 0 ?`No Salary Mentioned `: ` Salary: ${job.payRangeStart} - ${job.payRangeEnd}`}</p>
          <a  class="btn btn-primary">${job.city || job.country}</a>
        </div>
        </div>
            `
        })
        card.innerHTML = jobDetail.join("")
    }catch(error){
        console.log(error);
        
    }

}
jobsDetail()

async function mostViewed(){
    try{
        const view = await fetch("https://hiringmine-railway-production.up.railway.app/api/users/home?sortBy=mostViewed")
        
        
        const access = await view.json()
        console.log(access);
        const details = access.data
        .slice(0,9)
        .map((category) =>{
            return `
            <div class="card"style="width: 18rem;" id="cards">
  <img src="${category.profilePic || './download.jpg'}" class="card-img-top picture" alt="...">
  <div class="card-body">
    <h5 class="card-title">${category.firstName} ${category.lastName}</h5>
    <h5 class="card-text">${category.jobTitle.length > 20 ? category.jobTitle.slice(0, 18) + "..." : category.jobTitle}</h5>
    <a class="btn btn-primary">Profile View</a>
  </div>
</div>
            
            `
        })
    
    
    
    container.innerHTML = details.join('')
    }catch(error){
        console.log(error);
        
    }
}
mostViewed()