// firebase kütüphanesinden her şeyi import
//ettik "firebase" objesi olarak
import * as firebase from "firebase"

//firebase projemize bağlanmamız için firebase'in
//verdiği config objesini yapıştırıyoruz.
var config = {
  
}

//Diğer class yani componentlerde kullanabilmek, import edebilmek
//için export etmemiz lazım
export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app())
