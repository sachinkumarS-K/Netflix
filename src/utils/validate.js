export default function validate(email, password, name, type) {
     //console.log([...arguments])
     if (type == "signin") {
          const isEmailVaid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
          const isPasswordValid =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{6,15}$/.test(
              password
            );
          if (!isEmailVaid) return "Email Id is not valid"
          if (!isPasswordValid) return "Password is not valid"
          
          return null
     }
     else if (type == "signup") {
       const isEmailVaid =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
         const isPasswordValid =
           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{6,15}$/.test(
             password
           );
          const isNameValid = /^[a-zA-Z ]+$/.test(name);
          if(!isNameValid) return "Name is not valid"
          if (!isEmailVaid) return "Email Id is not valid";
          if (!isPasswordValid) return "Password is not valid";

       return null;
     }
}