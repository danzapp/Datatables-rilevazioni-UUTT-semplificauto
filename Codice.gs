function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}

function doGet() {

  return HtmlService
      .createTemplateFromFile('Index')
      .evaluate(); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// *****************  LEGGE I DATI DALLO SHEET E RESTITUISCE UN OBJECT  *************

function readData(){

var dataRilevazioni = sheet.getDataRange().getValues()

// rimuove riga 2 e 3
dataRilevazioni.splice(1,2)


var currentUser = Session.getActiveUser().getEmail()
// Logger.log(currentUser)

// modifica il formato della data di rilevazione
var dataObjectsArray = ObjApp.rangeToObjectsNoCamel(dataRilevazioni) //Object con un Array di Objects

var fotoObjectsArray = JSON.parse(loadFoto())

var planimetrieObjectsArray = JSON.parse(loadPlanimetrie())

//Logger.log('Foto spazi: ' + fotoSpaziObjectsArray.length)
//Logger.log('Planimetrie: ' + planimetrieObjectsArray.length)



//Logger.log(dataObjectsArray)

for (var i in dataObjectsArray){
  Logger.log(i + ' - ' + dataObjectsArray[i]['Regione'])
}



// ---------------------------------------------
// controllo ruolo utente: viewer, editor, owner  

dataObjectsArray.forEach(function(obj){ 

  if(currentUser == obj['email proprietario']){
    obj.Ruolo = "Editor" ; 
  }
  else
  {
    obj.Ruolo = "Viewer"; 
  }
  
  Logger.log(obj['Ufficio Territoriale'])
  
})

Logger.log(JSON.stringify(dataObjectsArray))

// ---------------------------------------------
  
var mainObject = {  // quando completa l'array di Object costruisce l'oggetto Contenitore
      user: currentUser,
      table: dataObjectsArray,
      foto: fotoObjectsArray,
      planimetrie: planimetrieObjectsArray
    };

 // Logger.log(mainObject);
 // return mainObject  // il risultato viene restituito come Object 
 return JSON.stringify(mainObject) // il risultato viene restituito come JSON e sarà necesario effettuare JSON.parse()
}


    
function loadFoto(UT){
   
Logger.log('UT:' + UT)
    var sheetFoto = SpreadsheetApp.openByUrl('https://docs.google.com/a/aci.it/spreadsheets/d/1tuWo0RFwlHGsmSSimH9QahtzWdplkgghnTHdNwjjwGc/edit?usp=drive_web').getSheetByName('Foto spazi')
    var foto =  sheetFoto.getDataRange().getValues()
    
    var fotoObjArray = ObjApp.rangeToObjectsNoCamel(foto)
   
    // filtra per UT se non nullo
    if (UT != null){
        fotoObjArray = fotoObjArray.filter(function(el){ 
            return el.UT == UT
        })
    }
    
 //Logger.log(fotoObjArray)
 //Logger.log(fotoObjArray.length)

    return JSON.stringify(fotoObjArray)

}


function loadPlanimetrie(UT){
   
    var sheetPlanimetrie = SpreadsheetApp.openByUrl('https://docs.google.com/a/aci.it/spreadsheets/d/1tuWo0RFwlHGsmSSimH9QahtzWdplkgghnTHdNwjjwGc/edit?usp=drive_web').getSheetByName('Planimetrie')
    var planimetrie =  sheetPlanimetrie.getDataRange().getValues()
    
    var planimetrieObjArray = ObjApp.rangeToObjectsNoCamel(planimetrie)
   
    // filtra per UT se non nullo
    if (UT != null){
        immaginiObjArray = immaginiObjArray.filter(function(el){ 
            return el.UT == UT
        })
    }
    
//    Logger.log(planimetrieObjArray)
//    Logger.log(planimetrieObjArray.length)
    
    return JSON.stringify(planimetrieObjArray)
    
}

