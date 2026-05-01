'Browser("(1) WhatsApp").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl").Set DataTable("telefono",dtLocalSheet)
'Browser("(1) WhatsApp").Page("Login").WebElement("WebElement").Click
'Browser("(1) WhatsApp").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl_2").Set DataTable("rut",dtLocalSheet)
'Browser("(1) WhatsApp").Page("Login").WebEdit("CL_Web_Personas_Layouts_wt8$bl_3").SetSecure DataTable("clave", dtLocalSheet)
'Browser("(1) WhatsApp").Page("Login").WebElement("TeléfonoRUTClaveIngresar").Swipe moveUp,195
'Browser("(1) WhatsApp").Page("Login").Link("Ingresar aquí").Click
'
'validarBoton()

SET carpeta = CREATEOBJECT("Scripting.FileSystemObject")
If Not carpeta.FolderExists("C:\Automation") Then
	carpeta.CreateFolder "C:\Automation"
	If Not carpeta.FolderExists("C:\Automation\webPrepagoMobile") Then
 		carpeta.CreateFolder "C:\Automation\webPrepagoMobile"
 	End If
End If
