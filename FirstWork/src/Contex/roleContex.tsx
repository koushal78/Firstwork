import { createContext, useContext, useState, ReactNode } from "react";

type Role = 'Employer' | 'Employee' | null;

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>(null);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};

// import { createContext, useContext, useState, ReactNode } from "react";



// type Role = 'Employer' | 'Employee' | null;

// interface RoleContextType {
//   role: Role;
//   setRole: (role: Role) => void;
// } 


// const RoleContex =  createContext<RoleContextType | undefined >(undefined);

// export const roleProvider = ({children}: { children: ReactNode })=>{
//     const [role,setRole] = useState<Role>(null);
//     return(
//         <RoleContex.Provider value={{role,setRole}}>
//             {children}
//         </RoleContex.Provider>
//     )

// }

// export const useRole = () => useContext<RoleContextType | undefined>(RoleContex);