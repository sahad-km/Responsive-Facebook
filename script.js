$(document).ready(function(){
    $("#signup_form").validate({
        errorClass: 'errors',
        validClass: 'valid',
        rules:{
            fname:{
                required:true,
            },
            sname:{
                required:true,
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },

        }
        
    })


    $("#contact_form").validate({
        errorClass: 'errors',
        validClass: 'valid',
        rules:{
            email1:{
                required:true,
                email:true
            },
            password1:{
                required:true
            }
        }
    })
})