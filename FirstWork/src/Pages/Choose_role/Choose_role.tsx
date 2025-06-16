import { useRole } from "@/Contex/roleContex";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




interface RoleType {
  title: "Employee" | "Employer";
  icon: string;
}

const Choose_role = () => {
  const [userRole, setUserRole] = useState<"Employee" | "Employer">("Employee");

  const {setRole} = useRole();
  const Navigate = useNavigate();

  const roles:RoleType[] = [
    {
      title: "Employee",
      icon: "🤵",
    },
    {
      title: "Employer",
      icon: "🏢",
    },
  ];

  const handleRoleSelect = ()=>{
    console.log("sumbit handler is working ")
    setRole(userRole)
    localStorage.setItem("user-role",userRole);
    Navigate('/')

  }

  console.log(userRole);

  return (
    <div>
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
           style={{ backgroundImage: `url('/src/assets/img.jpg')` }} 
      >
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Choose Your Role to Proceed
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="h-44 w-44 sm:h-56 sm:w-56 flex flex-col justify-center items-center bg-[#371987] rounded-md 
                           hover:border-2 hover:border-[#6062adfb] cursor-pointer hover:scale-95 transition-transform duration-300"
               onClick={()=>setUserRole(role.title)}
              >
                <p className="text-4xl sm:text-5xl">{role.icon}</p>
                <p className="text-lg sm:text-2xl font-semibold text-white mt-3">{role.title}</p>
              </div>
            ))}
          </div>

          <button
            className="text-white bg-[#371987] rounded-md px-8 py-3 mt-8 font-semibold hover:bg-[#4a27a4] transition"
            onClick={ handleRoleSelect }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choose_role;
