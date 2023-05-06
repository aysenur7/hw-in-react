

//CMD'den npm i axios kütüphanesi indirildi.
import axios from "axios"; // axios kütüphanesi import edildi

const getUsers = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios(
            "https://jsonplaceholder.typicode.com/users/1" + number
        );
        resolve(user);
    });
};

const getPosts = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data: post } = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId=1" + number

        );
        resolve(post);
    });
};


async function getData(Number) { // Number parametresi bulunan GetData isimli fonksiyon asenkron olarak tanımlandı
    try {
        const users = await getUsers(userId); //Asenkron fonksiyonlar await olarak tanımlandı.
        const posts = await getPosts(userId);

        const array = [users, posts]
        return array;

    } catch (e) {  // Hata dönerse bu satır çalışacak
        console.log(e);
    }
}

export default getData; //getData export edildi