

export const validation = (name , email , password) => {

   const nameValidation =  /^[a-zA-Z]+$/.test(name);  
   const isemailValidate =  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   const ispasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) 


   if(!isemailValidate) return "Email is not valid"
   if(!ispasswordValidate) return "Password is not valid"
   if(!nameValidation) return "Name is not valid"

   return null;
} 