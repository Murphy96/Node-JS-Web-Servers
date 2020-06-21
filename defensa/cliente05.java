import java.awt.Desktop;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Scanner;


public class cliente05 {

   public static void main(String[] args) throws IOException {

      
      // Scanner libreria a utilizar para leer la url por teclado
      Scanner sc = new Scanner(System.in);
      /** :: DESCARGA :: */ 

      // se utilizara la clase URL para realizar la descarga 
      String name = sc.next();
      URL url = new URL(name); //lectura de la url por teclado
      InputStream in = url.openStream();
      String arr[] = name.split("\\.");
      // separamos la extension
      String ext = arr[arr.length - 1];
      System.out.println(ext);
      
      Files.copy(in, Paths.get("documentoDescargado." + ext), StandardCopyOption.REPLACE_EXISTING);
      in.close();

      // Abriendo el archivo si esta disponible
      try {
    	 // el documento se llamara documento descargado y con la extension respectiva
         File path = new File ("documentoDescargado."+ext);
         Desktop.getDesktop().open(path);
         System.out.println("exito!");
      }catch (IOException ex) {
         System.out.println("no se pudo encontrar el archivo...");
         ex.printStackTrace();
      }
   }
}

// ejemplos de descargas

//http://localhost:8080/doc/json.json
//http://localhost:8080/pub/pdf.pdf