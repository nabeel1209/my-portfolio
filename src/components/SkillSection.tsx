import Image from "next/image"
type skillData ={
    src:string, 
    name:string,
    width:number, 
    height:number,
}
// function changePage(param:string){
//     const targetElement = document.getElementById(param) as any
//     targetElement.style.background = "white";
//     targetElement.style.webkitTextFillColor = "#0f0615";
//     const skillTypeElement = document.getElementById("skill-type") as any 
//     for(let i=0; i<skillTypeElement.children.length;i++){
//       let child = skillTypeElement.children.item(i)
//       if(child.id != param){
//         child.style.background = "#0f0615";
//         child.style.webkitTextFillColor = "white";
//       }
//     }
//     const skillGrid = document.getElementById("skill-grid") as any
//     if(param == 'languages'){
//       skillGrid.innerHTML = '<div class="skills"><img src="images/python.png" alt="" class="skills-img">Python</div>'+
//                             '<div class="skills"><img src="images/java.png" alt="" class="skills-img">Java</div>'+
//                             '<div class="skills"><img src="images/javascript.png" alt="" class="skills-img">Javascript</div>';
//     }else if(param == 'libraries'){
//       // skillGrid.innerHTML = '<div class="skills"><img src="images/pandas.png" alt="" class="skills-img">Pandas</div>'+
//       //                       '<div class="skills"><img src="images/matplotlib.png" alt="" class="skills-img">Matplotlib</div>';
//       skillGrid.innerHTML = '';
//     }else if(param == 'frameworks'){
//       // skillGrid.innerHTML = '<div class="skills"><img src="images/django.png" alt="" class="skills-img">Django</div>';
//       skillGrid.innerHTML = '';
//     }else if(param =='databases'){
//       // skillGrid.innerHTML = '<div class="skills"><img src="images/mysql.png" alt="" class="skills-img">MySQL</div>';
//       skillGrid.innerHTML = ''
//     }else if (param == 'other'){
//       skillGrid.innerHTML = '<div class="skills"><img src="images/figma.png" alt="" class="skills-img">Figma</div>'
//     }
//   }

function Skill(data:skillData){
    return(
        <div className="flex flex-col gap-2 w-28 p-1 justify-center items-center text-white font-sora font-semibold text-lg group-hover:hover:opacity-100 group-hover:hover:scale-100 group-hover:opacity-50 group-hover:scale-95  transition-all duration-500 ease-in-out">
            <Image src={data.src} alt="" className="w-16" width={data.width} height={data.height}/>{data.name}
        </div>
    )
}

export default function SkillSection(){
    return(
        <section className='relative w-full p-8 mt-16 flex flex-col gap-5'>
            <h1 className='font-sora font-bold text-white text-3xl text-center'>Skills</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 w-full flex-wrap justify-center text-lg font-inter text-white font-medium">
                    <div className="py-2 px-4 bg-white text-black rounded-xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Languages</div>
                    <div className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Libraries</div>
                    <div className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Frameworks</div>
                    <div className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Database</div>
                    <div className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Other</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#ffffff17] grid grid-cols-[repeat(auto-fill,7rem)] grid-rows-[repeat(auto-fill,7rem)] justify-around gap-y-8 group hover:scale-105 transition-all duration-500 ease-in-out">
                    <Skill src="/images/python.png" width={1869} height={1869} name="Python"></Skill>
                    <Skill src="/images/python.png" width={1869} height={1869} name="Python"></Skill>
                    <Skill src="/images/python.png" width={1869} height={1869} name="Python"></Skill>
                </div>
            </div>
        </section>
    )
}