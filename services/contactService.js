var infusionsoftSDK = require('infusionsoft-sdk'),
	apiInstance = new infusionsoftSDK.ContactApi(),
	contactService = {};

let opts = { 
  'limit': 100, 
  'offset': 0
};	

contactService.listContacts = ()=>{
  apiInstance.listContactsUsingGET(opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  });	
};

module.exports = contactService;