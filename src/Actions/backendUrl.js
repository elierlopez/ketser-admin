export const KetserSiteUrl = 'http://localhost:58949' //'http://ketser.azurewebsites.net'
export const RestUrl = `${KetserSiteUrl}/api`

//Project 
export const SaveProject = `${RestUrl}/Project/Save`
export const GetAllProjects = `${RestUrl}/Project/GetAll`
export const SaveProjectAttachments = `${RestUrl}/Project/Saveattachments`
export const GetProjectQuotesByPersonId = `${RestUrl}/Project/GetProjectQuotes`

//Person
export const GetPersonByDeviceId = `${RestUrl}/Person/GetByDeviceCode`
export const SavePerson = `${RestUrl}/Person/Save`
export const SavePersonProfileImage = `${RestUrl}/Person/SavePersonProfileImage`
export const PersonImagePath = `${KetserSiteUrl}/Images/Persons`

//Services
export const GetCategorizedServices = `${RestUrl}/Service/GetCategorizedServices`
export const GetAllServices = `${RestUrl}/Service/GetAll`
export const Save_Service = `${RestUrl}/Service/Save`
export const ServiceImagePath = `${KetserSiteUrl}/Images/Services` 