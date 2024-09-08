import { initializeApp } from "firebase/app"
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore"
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { API_KAY, APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from "./constants";

function firebaseDB () {
    const firebaseConfig = {
        apiKey: API_KAY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
    };

    const initializeDB = initializeApp(firebaseConfig);
    const db =  getFirestore(initializeDB);
    const auth = getAuth(initializeDB);

    async function addData (userName, userEmail, date) {
        await addDoc(collection(db, 'apiario'), {
            name: userName,
            email: userEmail,
            date: date
        })
    }

    async function getData (email) {
        const collectionRef = collection(db, 'apiario');
        const q = query(collectionRef, where('email', '==', email));

        try {
            const querySnapshot = await getDocs(q);
            const queryData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            return (queryData)
        }
        catch (error) {
            alert(error)
        }
    }

    async function updateData (id, updateDate) {
        const documentRef = doc(db, 'apiario', id);
        var message = ''

        try {
            await updateDoc(documentRef, {
                date: updateDate,
            });
            message = 'Data atualizada com sucesso';
            alert('Data atualizada com sucesso')
        }
        catch (error) {
            message = 'No momento, não foi possível atualizar a data';
            alert('No momento, não foi possível atualizar a data')
        }

    }

    async function signupApp (userName, date, userEmail, password) {
        await addData(userName, userEmail, date);

        console.log(password)

        var message = '';

        try {
            await createUserWithEmailAndPassword(auth, userEmail, password);

            message = 'Usuário cadastrado com sucesso'
            alert('Usuário cadastrado com sucesso')
        }
        catch (error) {
            message = 'Falha ao cadastra usuário';
            alert('Falha ao cadastra usuário', error)
            
        }

        return (message)     
    }

    async function loginApp (userEmail, password) {
        var message = '';
        var userData;

        try {
            await signInWithEmailAndPassword(auth, userEmail, password);
            userData = getData(userEmail);
            message = 'Sucesso';
            //alert('Login realizado com sucesso');
            return true;
        }
        catch (error) {
            message = 'Falha'
            console.log('alha no login', error)
            alert('Falha no login', error);
            return false
        }

        return ({userData, message})
    }

    async function passwordRecovery (userEmail) {
        var message = '';

        try {
            await sendPasswordResetEmail(auth, userEmail);
            message = 'Email de recuperação enviado com sucesso';
        }
        catch (error) {
            message = 'Erro ao enviar e-mail de recuperação de senha:';
        }
    }

    return { addData, getData, updateData, signupApp, loginApp, passwordRecovery }
}

export default firebaseDB