$(function(){function a(a){a=a||"Sorry "+firstName+", it seems that my mail server is not responding. Please try again later!",$("#quote-success").html("<div class='alert alert-danger'>"),$("#quote-success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#quote-success > .alert-danger").append($("<strong>").text(a)),$("#quote-success > .alert-danger").append("</div>"),$("#quoteForm").trigger("reset")}$("#quoteForm input").jqBootstrapValidation({preventSubmit:!0,submitError:function(){},submitSuccess:function(e,t){t.preventDefault();var i=($("#recaptcha-1"),grecaptcha.getResponse(window.clientId1)),n=$("input#quote-name").val(),s=$("input#quote-email").val(),o=$("input#quote-phone").val(),r=$("input#quote-company").val(),l=n;l.indexOf(" ")>=0&&(l=n.split(" ").slice(0,-1).join(" ")),$this=$("#sendQuoteButton"),$this.prop("disabled",!0),$.ajax({url:"././mail/quote_me.php",type:"POST",data:{name:n,phone:o,email:s,company:r,captcha:i},cache:!1,success:function(e){"false"===e?a("reCAPTCHA is mandatory"):($("#quote-success").html("<div class='alert alert-success'>"),$("#quote-success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#quote-success > .alert-success").append("<strong>Your message has been sent. Someone will be contacting you shortly.</strong>"),$("#quote-success > .alert-success").append("</div>"),$("#quoteForm").trigger("reset"))},error:a,complete:function(){setTimeout(function(){$this.prop("disabled",!1)},1e3)}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(a){a.preventDefault(),$(this).tab("show")})}),$("#quote-name").focus(function(){$("#quote-success").html("")});