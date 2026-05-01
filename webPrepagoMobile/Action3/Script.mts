Browser("LoginTripleta").Page("LoginTripleta").WebNumber("CL_Web_Login_Personas_CW_wt6$b").Set "957004304"
Browser("LoginTripleta").Page("LoginTripleta").WebEdit("CL_Web_Login_Personas_CW_wt6$b").Set "154657959"
Browser("LoginTripleta").Page("LoginTripleta").WebEdit("CL_Web_Login_Personas_CW_wt6$b_2").SetSecure "5d964091d3dd369eef373f97fad1"
Browser("LoginTripleta").Page("LoginTripleta").WebButton("Ingresar").Click
Browser("LoginTripleta").Page("LoginTripleta").WebButton("Si, quiero").Click

Browser("LoginTripleta").Page("Dashboard").WebButton("Recargar").WaitProperty "name","Recargar",60000
validacion = Browser("LoginTripleta").Page("Dashboard").WebButton("Recargar").Exist
Browser("LoginTripleta").Page("Dashboard").CaptureBitmap "C:\Automation\webPrepagoMobile.png", true
If validacion Then
	Reporter.ReportEvent micPass,"Botón recargar encontrado","Se ha encontrado botón recargar", "C:\Automation\webPrepagoMobile.png"
Else
	Reporter.ReportEvent micFail,"Botón recargar no encontrado","No se ha encontrado botón recargar", "C:\Automation\webPrepagoMobile.png"
End If
