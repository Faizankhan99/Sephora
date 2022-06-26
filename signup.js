
  document.querySelector("#sign").addEventListener("click", function(){
    document.querySelector("#cont").style.display = "none";
    document.querySelector("#container").style.display="block";

      
      })
    
    document.querySelector("#cli").addEventListener("click", function(){

    document.querySelector("#container").style.display="none";
    })
    
    document.querySelector("form").addEventListener("submit", sumbit)
    let login=JSON.parse(localStorage.getItem("signup"))||[]
    function sumbit(event){
        event.preventDefault();
        console.log("inner")
        let obj={
            name:document.querySelector("#name").value,
            last:document.querySelector("#last").value,
            email:document.querySelector("#email").value,
            password:document.querySelector("#pass").value,
            mbl:document.querySelector("#mbl").value,
            month:document.querySelector("#month").value,
            day:document.querySelector("#day").value,
            zip:document.querySelector("#zip").value
    
        }
        if(check(obj.email)==true){
         login.push(obj)
         localStorage.setItem("signup",JSON.stringify(login))
         alert("SignUp 😊succesfull")
         window.location.href="./homepage.html"
    
        }else{
            alert("Email already🥲ragister")
        }
    }
        // console.log(obj)
    
    
        function check(email){
          let filter=login.filter(function(elem){
          return email==elem.email
    
          })
          if(filter.length>0){
            return false
    
          }else{
            return true
          }  
        }