function clock_form()
         {
	 day=new Date()
	 clock_f=day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()
	 document.form.f_clock.value=clock_f
         id=setTimeout("clock_form()",100)
	 }