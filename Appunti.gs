//ho scritto lo script per la produzione dell'indice delle immagini e planimetrie degli UUTT
//questo l'indice con i vari fogli (Foto spazi e Planimetrie)

//https://docs.google.com/spreadsheets/d/1tuWo0RFwlHGsmSSimH9QahtzWdplkgghnTHdNwjjwGc/edit#gid=0

//e questo lo script
//
//https://script.google.com/a/aci.it/d/1k5O8HqmLfXF7IpwzleXGBC6i3RYKYRTq6yjlM9A2mcbhqps6z2R0lM_W/edit?usp=drive_web
//
//
//che però ho anche incorporato nel file delle rilevazioni 
//
//https://docs.google.com/spreadsheets/d/1De9nXti77aQc-IAfIP2PqpoVgcQuXDoG7u6PwCQDQ7s/edit#gid=1824153623
//
//in modo che venga aggiornato ad ogni nuovo inserimento 
//
//in più dal menù Rilevazioni UUTT di questo stesso file si può forzare l'aggiornamento dell'indice nel caso in cui ad esempio si siano modificati dei nomi dei file direttamente dalla cartella
//
//vedete se vi convincono le informazioni che ho estratto dal nome
//
//ovviamente è assolutamente necessario che in fase di upload il nome rispetti il formato concordato
//
//<provincia> - <nome spazio> - <funzionario>
//
//compresi gli spazi prima e dopo il trattino divisorio 
//
//es.  BOLOGNA - NUOVI SPORTELLI multifunzione - Adriano Musto.jpg





// funzione per pubblicazione documenti PDF da Google Drive su Sites
// origine: http://www.benschersten.com/blog/2014/04/embedding-a-pdf-from-drive-into-a-blog/
// Shortcode: pdf-iframe
function embed_pdf( $atts ) {
      extract( shortcode_atts(
        array(
          url = '',
          width = '100%',
          height = 768
          ), 
        $atts )
      );
        $output = ''

      return $output;
    }
//  add_shortcode( 'pdf-iframe', 'embed_pdf' );

// And a bit of css:

//  div.pdf-iframe-holder {
//        display: block;
//        width: 100%;
//        height: 100%;
//        margin-top: 1.2308em;
//        position: relative;
//        top: 0;
//        bottom: 0;
//        }
//  iframe.pdf-iframe{
//        width: 100%;
//        position: absolute;
//        top: 0;
//        bottom: 0;
//        }

//  Which can then be used in post-editing as such: [pdf-iframe url=”some pdf-preview url from Google docs” width=”100%” height=”768″]. 
//  It made it much easier to have a page to show documents from my Google docs in my WordPress blog.

// ----------- metodo tradizionale HTML ------------------

// <iframe src="https://docs.google.com/viewer?srcid=[put your file id here]&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="580px" height="480px"></iframe>